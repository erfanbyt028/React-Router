import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const DetailPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock blog data - replace with your actual data fetching logic
  const blogPost = {
    title: "The Art of Writing Clean React Components",
    author: "Jane Developer",
    date: "May 15, 2023",
    content: [
      "Writing clean React components is essential for maintainable code. Start by keeping components small and focused on a single responsibility.",
      "Use descriptive prop names and consider TypeScript for better type safety. Remember to separate concerns between presentation and logic components.",
      "Always think about reusability when creating new components. A well-structured component library can save countless hours in future projects."
    ],
    tags: ["React", "Best Practices", "Frontend"]
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Back button */}
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center text-blue-600 hover:text-blue-800 mb-6 transition-colors duration-200"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Back to all posts
        </button>

        {/* Blog post card */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          {/* Header section */}
          <div className="p-6 sm:p-8 border-b border-gray-200">
            <div className="flex items-center space-x-2 mb-2">
              <span className="text-sm font-medium text-gray-500">Blog ID: {id}</span>
              <span className="text-gray-300">•</span>
              <span className="text-sm text-gray-500">{blogPost.date}</span>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{blogPost.title}</h1>
            <div className="flex items-center">
              <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                <span className="text-blue-600 font-medium">JD</span>
              </div>
              <span className="text-gray-700">{blogPost.author}</span>
            </div>
          </div>

          {/* Content section */}
          <div className="p-6 sm:p-8">
            {blogPost.content.map((paragraph, index) => (
              <p key={index} className="text-gray-700 mb-4 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Tags section */}
          <div className="px-6 sm:px-8 pb-6">
            <div className="flex flex-wrap gap-2">
              {blogPost.tags.map(tag => (
                <span 
                  key={tag} 
                  className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Comments section placeholder */}
        <div className="mt-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">Comments (3)</h2>
          <div className="space-y-4">
            {/* Comment placeholder - replace with actual comments */}
            <div className="bg-white p-4 rounded-lg shadow">
              <div className="flex items-center mb-2">
                <div className="h-8 w-8 rounded-full bg-gray-200 mr-3"></div>
                <span className="font-medium">Commenter Name</span>
              </div>
              <p className="text-gray-600">This is a great post! Very informative.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPost;