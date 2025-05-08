package org.zerock.mallapi.controller;

import java.util.List;
import java.util.Map;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.zerock.mallapi.dto.ProductDTO;
import org.zerock.mallapi.util.CustomFileUtil;

import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;

@RestController
@Log4j2
@RequiredArgsConstructor
@RequestMapping("/api/products")
public class ProductController {

    private final CustomFileUtil fileUtil;

    @PostMapping("/")
    public Map<String, String> register(ProductDTO productDTO) {

        log.info("regiter: " + productDTO);

        List<MultipartFile> files = productDTO.getFiles();

        List<String> uploadFiledNames = fileUtil.saveFiles(files);

        productDTO.setUploadedFileNames(uploadFiledNames);

        log.info(uploadFiledNames);

        return Map.of("RESULT", "SUCCESS");

    }

}
