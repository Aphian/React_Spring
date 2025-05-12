package org.zerock.mallapi.domain;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity
@Getter
@Table(name = "tbl_product")
@Builder
@AllArgsConstructor
@NoArgsConstructor
// 연관 관계
@ToString(exclude = "")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long pno;

    private String name;

    private int price;

    private String pdesc;

    @ElementCollection
    @Builder.Default
    private List<ProductImage> imageList = new ArrayList<>();

}
