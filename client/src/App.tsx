import { useEffect, useState } from 'react';
import type { Post, PostRequest } from './types';
import { getPosts, createPost } from './services/api';
import PostList from './components/PostList';
import PostForm from './components/PostForm';

function App() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const data = await getPosts();
        setPosts(data);
        setError('');
      } catch {
        setError('Failed to fetch posts');
      } finally {
        setLoading(false);
      }
    };

    loadPosts();
  }, []);

  const handleNewPost = async (postData: PostRequest) => {
    try {
      const newPost = await createPost(postData);
      setPosts([newPost, ...posts]);
    } catch {
      setError('Failed to create post.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
          Blog App
        </h1>
        <PostForm onSubmit={handleNewPost} />
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6">
            {error}
          </div>
        )}
        {loading ? (
          <div className="text-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
          </div>
        ) : (
          <PostList posts={posts} />
        )}
      </div>
    </div>
  );
}

export default App;