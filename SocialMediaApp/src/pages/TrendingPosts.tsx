import { useEffect, useState } from 'react';
import { formatDistanceToNow } from 'date-fns';
import { MessageCircle, TrendingUp } from 'lucide-react';
import type { Post } from '../types';
import { mockPosts } from '../mockData';

export default function TrendingPosts() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTrendingPosts = async () => {
      try {
        // Simulate API call with mock data
        await new Promise(resolve => setTimeout(resolve, 1000));
        // Sort posts by comment count to simulate trending
        const sortedPosts = [...mockPosts].sort((a, b) => b.commentCount - a.commentCount);
        setPosts(sortedPosts);
      } catch (error) {
        console.error('Error fetching trending posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTrendingPosts();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-500"></div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto pt-20 px-4 sm:px-6 lg:px-8">
      <div className="flex items-center mb-8">
        <TrendingUp className="h-8 w-8 text-indigo-600 mr-3" />
        <h2 className="text-2xl font-bold text-gray-900">Trending Posts</h2>
      </div>
      <div className="space-y-8">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-lg shadow-md overflow-hidden border-2 border-indigo-100"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <img
                    className="h-12 w-12 rounded-full"
                    src={post.userAvatar}
                    alt={post.userName}
                  />
                  <div className="ml-4">
                    <p className="text-lg font-medium text-gray-900">{post.userName}</p>
                    <p className="text-sm text-gray-500">
                      {formatDistanceToNow(new Date(post.createdAt), { addSuffix: true })}
                    </p>
                  </div>
                </div>
                <div className="flex items-center bg-indigo-100 px-4 py-2 rounded-full">
                  <MessageCircle className="h-5 w-5 text-indigo-600 mr-2" />
                  <span className="font-medium text-indigo-600">
                    {post.commentCount} Comments
                  </span>
                </div>
              </div>
              <p className="text-gray-800 text-lg">{post.content}</p>
              {post.image && (
                <img
                  src={post.image}
                  alt="Post content"
                  className="mt-4 rounded-lg w-full object-cover"
                  style={{ maxHeight: '400px' }}
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}