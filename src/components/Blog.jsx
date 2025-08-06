import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Blog = () => {
  const posts = [
    { id: 1, title: 'React Basics', excerpt: 'Learn the fundamentals of React including components, state, and props.' },
    { id: 2, title: 'React Router', excerpt: 'Master client-side routing with React Router in your applications.' },
    { id: 3, title: 'Protected Routes', excerpt: 'Implement authentication and protected routes in React apps.' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar with blog posts list */}
          <div className="md:w-1/3 lg:w-1/4">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-200">
                Blog Articles
              </h2>
              
              <ul className="space-y-4">
                {posts.map(post => (
                  <li key={post.id}>
                    <Link 
                      to={`/blog/${post.id}`}
                      className="group block p-3 rounded-lg hover:bg-blue-50 transition-colors duration-200"
                    >
                      <h3 className="font-semibold text-lg text-blue-600 group-hover:text-blue-800">
                        {post.title}
                      </h3>
                      <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                        {post.excerpt}
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="mt-6 pt-4 border-t border-gray-200 space-y-3">
                <Link 
                  to="/new-blog" 
                  className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800 font-medium"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                  Create New Post
                </Link>
                <div>
                  <Link 
                    to="/" 
                    className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Back to Home
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Main content area for nested routes */}
          <div className="md:w-2/3 lg:w-3/4">
            <div className="bg-white rounded-lg shadow-md p-6 min-h-[400px]">
              <Outlet />
              
              {/* Default content when no post is selected */}
              {!window.location.pathname.includes('/blog/') && (
                <div className="flex flex-col items-center justify-center h-64 text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <h3 className="text-xl font-medium text-gray-700 mb-2">Select a Blog Post</h3>
                  <p className="text-gray-500 max-w-md">
                    Choose an article from the sidebar to read about React concepts and best practices.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;