import React from 'react';
import type { Post } from '../types';

interface Props {
  post: Post;
}

const PostItem: React.FC<Props> = ({ post }) => {
  return (
    <article className="bg-white shadow-sm rounded-lg p-6 hover:shadow-md transition-shadow">
      <h3 className="text-2xl font-bold text-gray-900 mb-2">
        {post.title}
      </h3>
      
      <div className="flex items-center text-sm text-gray-500 mb-4">
        <span className="font-medium text-gray-700">{post.author}</span>
        <span className="mx-2">·</span>
        <time>
          {new Date(post.createdAt).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </time>
      </div>
      
      <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
        {post.content}
      </p>
    </article>
  );
};

export default PostItem;