import axios from 'axios';
import type { Post, PostRequest } from '../types';

const API_BASE = 'http://localhost:8080/api/posts';

export const getPosts = async (): Promise<Post[]> => {
  const response = await axios.get<Post[]>(API_BASE);
  return response.data;
};

export const createPost = async (data: PostRequest): Promise<Post> => {
  const response = await axios.post<Post>(API_BASE, data);
  return response.data;
};