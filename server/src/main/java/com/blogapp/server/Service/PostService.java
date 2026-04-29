package com.blogapp.server.Service;

import com.blogapp.server.DTO.PostRequest;
import com.blogapp.server.DTO.PostResponse;

import java.util.List;

public interface PostService {
    List<PostResponse> getAllPosts();
    PostResponse createPost(PostRequest request);
}
