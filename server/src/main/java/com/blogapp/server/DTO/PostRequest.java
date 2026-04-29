package com.blogapp.server.DTO;

import lombok.Data;
import jakarta.validation.constraints.NotBlank;

public class PostRequest {
    @NotBlank
    private String title;
    @NotBlank
    private String content;
    private String author = "Anonymous";
}
