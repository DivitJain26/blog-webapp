package com.blogapp.server.DTO;

import jakarta.validation.constraints.NotBlank;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class PostRequest {
    @NotBlank
    private String title;
    @NotBlank
    private String content;
    private String author = "Anonymous";
}
