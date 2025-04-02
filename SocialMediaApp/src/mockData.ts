import type { Post, User } from './types';

export const mockUsers: User[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    postCount: 156
  },
  {
    id: '2',
    name: 'Michael Chen',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
    postCount: 143
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
    postCount: 128
  },
  {
    id: '4',
    name: 'David Kim',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
    postCount: 112
  },
  {
    id: '5',
    name: 'Lisa Thompson',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb',
    postCount: 98
  }
];

export const mockPosts: Post[] = [
  {
    id: '1',
    userId: '1',
    userName: 'Sarah Johnson',
    userAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    content: 'Just launched our new analytics dashboard! Check out the improved visualization features. #DataAnalytics #Innovation',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
    commentCount: 42,
    createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString()
  },
  {
    id: '2',
    userId: '2',
    userName: 'Michael Chen',
    userAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
    content: 'Excited to share our Q1 results! Revenue up 25% YoY. Great work team! 📈 #BusinessGrowth #Success',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
    commentCount: 35,
    createdAt: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString()
  },
  {
    id: '3',
    userId: '3',
    userName: 'Emily Rodriguez',
    userAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
    content: 'New market research findings: Mobile usage up 40% among Gen Z users. Interesting implications for product strategy.',
    image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a',
    commentCount: 28,
    createdAt: new Date(Date.now() - 8 * 60 * 60 * 1000).toISOString()
  }
];