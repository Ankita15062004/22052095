import { useEffect, useState } from 'react';
import { formatDistanceToNow } from 'date-fns';
import { MessageCircle, Heart } from 'lucide-react';
import type { Post } from '../types';
import { mockPosts } from '../mockData';

export default function Feed() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // Simulate API call with mock data
        await new Promise(resolve => setTimeout(resolve, 1000));
        setPosts(mockPosts);
      } catch (error) {
        console.error('Error fetching posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();

    // Set up real-time updates
    const interval = setInterval(fetchPosts, 30000); // Poll every 30 seconds

    return () => clearInterval(interval);
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
      <div className="space-y-8">
        {posts.map((post) => (
          <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-4">
              <div className="flex items-center">
                <img
                  className="h-10 w-10 rounded-full"
                  src={post.userAvatar}
                  alt={post.userName}
                />
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">{post.userName}</p>
                  <p className="text-sm text-gray-500">
                    {formatDistanceToNow(new Date(post.createdAt), { addSuffix: true })}
                  </p>
                </div>
              </div>
              <p className="mt-4 text-gray-800">{post.content}</p>
              {post.image && (
                <img
                  src={post.image}
                  alt="Post content"
                  className="mt-4 rounded-lg w-full object-cover"
                  style={{ maxHeight: '400px' }}
                />
              )}
              <div className="mt-4 flex items-center space-x-4 text-gray-500">
                <button className="flex items-center space-x-2 hover:text-red-500">
                  <Heart className="h-5 w-5" />
                  <span>Like</span>
                </button>
                <button className="flex items-center space-x-2 hover:text-blue-500">
                  <MessageCircle className="h-5 w-5" />
                  <span>{post.commentCount} Comments</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}