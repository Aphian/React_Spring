package org.zerock.mallapi.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.zerock.mallapi.domain.Product;
import org.zerock.mallapi.domain.ProductImage;
import org.zerock.mallapi.dto.PageRequestDTO;
import org.zerock.mallapi.dto.PageResponseDTO;
import org.zerock.mallapi.dto.ProductDTO;
import org.zerock.mallapi.repository.ProductRepository;

import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;

@Service
@Log4j2
@RequiredArgsConstructor
public class ProductServiceImpl implements ProductService {

    private final ProductRepository productRepository;

    @Override
    public PageResponseDTO<ProductDTO> getList(PageRequestDTO pageRequestDTO) {

        Pageable pageable = PageRequest.of(pageRequestDTO.getPage() - 1, pageRequestDTO.getSize(),
                Sort.by("pno").descending());

        Page<Object[]> result = productRepository.selectList(pageable);

        // Object[] => 0 product 1 productIamge --> 쌓여 있음.

        List<ProductDTO> dtoList = result.get().map(arr -> {

            ProductDTO productDTO = null;

            Product product = (Product) arr[0];
            ProductImage productImage = (ProductImage) arr[1];

            productDTO = ProductDTO.builder().pno(product.getPno()).pname(product.getPname()).pdesc(product.getPdesc())
                    .price(product.getPrice()).build();

            String imageStr = productImage.getFileName();
            productDTO.setUploadFileNames(List.of(imageStr));

            return productDTO;

        }).collect(Collectors.toList());

        long totalCount = result.getTotalElements();

        return PageResponseDTO.<ProductDTO>withAll().dtoList(dtoList).totalCount(totalCount)
                .pageRequestDTO(pageRequestDTO).build();

    }

    // DTO를 Entity 로 변환
    private Product dtoToEntity(ProductDTO productDTO) {

        Product product = Product.builder().pno(productDTO.getPno()).pname(productDTO.getPname())
                .pdesc(productDTO.getPdesc()).price(productDTO.getPrice()).build();

        // 업로드 처리가 끝난 파일들의 이르 리스트.
        List<String> uploadFileName = productDTO.getUploadFileNames();

        if (uploadFileName == null || uploadFileName.size() == 0) {
            return product;
        }

        uploadFileName.forEach(fileName -> {
            product.addImageString(fileName);
        });

        return product;

    }

    @Override
    public Long register(ProductDTO productDTO) {

        Product product = dtoToEntity(productDTO);

        log.info("-----------------------");
        log.info(product);
        log.info(product.getImageList());

        Long pno = productRepository.save(product).getPno();

        return pno;
    }

    @Override
    public ProductDTO get(Long pno) {

        Optional<Product> result = productRepository.findById(pno);

        Product product = result.orElseThrow();

        ProductDTO productDTO = entityToDTO(product);

        return productDTO;

    }

    // entity 를 DTO 변환
    private ProductDTO entityToDTO(Product product) {

        ProductDTO productDTO = ProductDTO.builder().pno(product.getPno()).pname(product.getPname())
                .pdesc(product.getPdesc()).price(product.getPrice()).delFalg(product.isDelFlag()).build();

        List<ProductImage> imageList = product.getImageList();

        if (imageList == null || imageList.isEmpty()) {
            return productDTO;
        }

        List<String> fileNameList = imageList.stream().map(productImage -> productImage.getFileName()).toList();

        productDTO.setUploadFileNames(fileNameList);

        return productDTO;
    }

}
