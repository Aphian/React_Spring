package org.zerock.mallapi.repository;

import java.util.Optional;
import java.util.UUID;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.zerock.mallapi.domain.Product;

import lombok.extern.log4j.Log4j2;

@SpringBootTest
@Log4j2
public class ProductRepositoryTests {

    @Autowired
    private ProductRepository productRepository;

    @Test
    public void testInsert() {

        Product product = Product.builder().pname("Test").pdesc("Test Desc").price(1000).build();

        product.addImageString(UUID.randomUUID() + "_" + "IMAGE1.jpg");

        product.addImageString(UUID.randomUUID() + "_" + "IMAGE2.jpg");

        productRepository.save(product);

    }

    @Test
    public void testRead() {

        Long pno = 1L;

        Optional<Product> result = productRepository.findById(pno);

        Product product = result.orElseThrow();

        log.info(product);

        log.info(product.getImageList());

    }

    @Test
    public void testRead2() {

        Long pno = 1L;

        Optional<Product> result = productRepository.seletOne(pno);

        Product product = result.orElseThrow();

        log.info(product);

        log.info(product.getImageList());

    }

}
