package org.zerock.mallapi.dto;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ProductDTO {

    // 상품 등록 / 조회 기능
    // DB에 파일을 저장하면 저장공간이 많이 필요함 --> 보안상 중요하면 가능함.
    // 조회시 파일 이름만 다룸
    private Long pno;

    private String pname;

    private int price;

    private String pdesc;

    private boolean delFalg;

    @Builder.Default
    private List<MultipartFile> files = new ArrayList<>();

    @Builder.Default
    private List<String> uploadedFileNames = new ArrayList<>();

}
