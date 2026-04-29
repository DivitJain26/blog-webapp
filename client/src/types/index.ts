export interface Post {
  id: number;
  title: string;
  content: string;
  author: string;
  createdAt: string; // ISO string from backend
}

export interface PostRequest {
  title: string;
  content: string;
  author?: string;
}