import { useEffect, useState } from 'react';
import { Trophy } from 'lucide-react';
import type { User } from '../types';
import { mockUsers } from '../mockData';

export default function TopUsers() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTopUsers = async () => {
      try {
        // Simulate API call with mock data
        await new Promise(resolve => setTimeout(resolve, 1000));
        setUsers(mockUsers);
      } catch (error) {
        console.error('Error fetching top users:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTopUsers();
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
      <h2 className="text-2xl font-bold text-gray-900 mb-8">Top Contributors</h2>
      <div className="space-y-4">
        {users.map((user, index) => (
          <div
            key={user.id}
            className="bg-white rounded-lg shadow-md p-6 flex items-center justify-between"
          >
            <div className="flex items-center space-x-4">
              <div className="relative">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="h-16 w-16 rounded-full object-cover"
                />
                {index < 3 && (
                  <div className="absolute -top-2 -right-2">
                    <Trophy
                      className={`h-6 w-6 ${
                        index === 0
                          ? 'text-yellow-400'
                          : index === 1
                          ? 'text-gray-400'
                          : 'text-orange-400'
                      }`}
                    />
                  </div>
                )}
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900">{user.name}</h3>
                <p className="text-sm text-gray-500">{user.postCount} posts</p>
              </div>
            </div>
            <div className="text-2xl font-bold text-indigo-600">#{index + 1}</div>
          </div>
        ))}
      </div>
    </div>
  );
}