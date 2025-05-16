package org.zerock.mallapi.service;

import java.util.UUID;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.zerock.mallapi.dto.PageRequestDTO;
import org.zerock.mallapi.dto.PageResponseDTO;
import org.zerock.mallapi.dto.ProductDTO;

import lombok.extern.log4j.Log4j2;

@SpringBootTest
@Log4j2
public class ProductServiceTests {

    @Autowired
    private ProductService productService;

    @Test
    public void testList() {

        PageRequestDTO pageRequestDTO = PageRequestDTO.builder().build();

        PageResponseDTO<ProductDTO> responseDTO = productService.getList(pageRequestDTO);

        log.info(responseDTO.getDtoList());

    }

    @Test
    public void testRegister() {

        ProductDTO productDTO = ProductDTO.builder().pname("새로운 상품").pdesc("신규 추가 상품").price(1000).build();

        // UUID 있어야함.
        productDTO.setUploadFileNames(
                java.util.List.of(UUID.randomUUID() + "_" + "Test1.jpb", UUID.randomUUID() + "_" + "Test2.jpg"));

        productService.register(productDTO);

    }

}
