package org.zerock.mallapi.domain;

import jakarta.persistence.Embeddable;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Embeddable
@Getter
@ToString
@Builder
@AllArgsConstructor
@NoArgsConstructor
// Element Collection
public class ProductImage {

    private String fileName;

    // 대표 이미지를 출력하게끔 부여
    private int ord;

    public void setOrd(int ord) {
        this.ord = ord;
    }

}
