import axios from 'axios';
import type { Post, PostRequest } from '../types';

const API_BASE = import.meta.env.VITE_API_BASE ?? 'http://localhost:8080';

export const getPosts = async (): Promise<Post[]> => {
  const response = await axios.get<Post[]>(`${API_BASE}/api/posts`);
  return response.data;
};

export const createPost = async (data: PostRequest): Promise<Post> => {
  const response = await axios.post<Post>(`${API_BASE}/api/posts`, data);
  return response.data;
};