import { BarChart2, Users, Activity } from 'lucide-react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <BarChart2 className="h-8 w-8 text-indigo-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">Analytics Hub</span>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `inline-flex items-center px-1 pt-1 text-sm font-medium ${
                    isActive
                      ? 'border-b-2 border-indigo-500 text-gray-900'
                      : 'text-gray-500 hover:border-gray-300 hover:text-gray-700'
                  }`
                }
              >
                <Activity className="h-4 w-4 mr-2" />
                Feed
              </NavLink>
              <NavLink
                to="/top-users"
                className={({ isActive }) =>
                  `inline-flex items-center px-1 pt-1 text-sm font-medium ${
                    isActive
                      ? 'border-b-2 border-indigo-500 text-gray-900'
                      : 'text-gray-500 hover:border-gray-300 hover:text-gray-700'
                  }`
                }
              >
                <Users className="h-4 w-4 mr-2" />
                Top Users
              </NavLink>
              <NavLink
                to="/trending"
                className={({ isActive }) =>
                  `inline-flex items-center px-1 pt-1 text-sm font-medium ${
                    isActive
                      ? 'border-b-2 border-indigo-500 text-gray-900'
                      : 'text-gray-500 hover:border-gray-300 hover:text-gray-700'
                  }`
                }
              >
                <BarChart2 className="h-4 w-4 mr-2" />
                Trending Posts
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}