import React from 'react';
import type { Post } from '../types';
import PostItem from './PostItem';

interface Props {
  posts: Post[];
}

const PostList: React.FC<Props> = ({ posts }) => {
  return (
    <div className="space-y-6">
      {posts.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-lg shadow-sm">
          <p className="text-gray-500 text-lg">No posts yet. Write the first one! ✍️</p>
        </div>
      ) : (
        posts.map((post) => (
          <PostItem key={post.id} post={post} />
        ))
      )}
    </div>
  );
};

export default PostList;