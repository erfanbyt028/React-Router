import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const NewBlog = () => {
  const navigate = useNavigate();
  const [blogData, setBlogData] = useState({
    title: '',
    content: '',
    category: '',
    tags: ''
  });

  const handleInputChange = (e) => {
    setBlogData({
      ...blogData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the blog data to your backend
    console.log('Blog post created:', blogData);
    alert('Blog post created successfully!');
    navigate('/blog');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-cyan-100 flex flex-col items-center justify-center p-4">
      <div className="max-w-4xl w-full bg-white rounded-xl shadow-lg p-8">
        <div className="text-center mb-8">
          <div className="mx-auto w-16 h-16 bg-gradient-to-br from-teal-400 to-cyan-400 rounded-full flex items-center justify-center mb-4">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Create New Blog Post</h1>
          <p className="text-gray-600">Share your thoughts and ideas with the community</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
              Blog Title *
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={blogData.title}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors duration-200"
              placeholder="Enter your blog title"
            />
          </div>

          <div>
            <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
              Category
            </label>
            <select
              id="category"
              name="category"
              value={blogData.category}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors duration-200"
            >
              <option value="">Select a category</option>
              <option value="technology">Technology</option>
              <option value="lifestyle">Lifestyle</option>
              <option value="travel">Travel</option>
              <option value="food">Food</option>
              <option value="health">Health & Wellness</option>
              <option value="business">Business</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-2">
              Blog Content *
            </label>
            <textarea
              id="content"
              name="content"
              value={blogData.content}
              onChange={handleInputChange}
              required
              rows="8"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors duration-200"
              placeholder="Write your blog content here..."
            />
          </div>

          <div>
            <label htmlFor="tags" className="block text-sm font-medium text-gray-700 mb-2">
              Tags (comma separated)
            </label>
            <input
              type="text"
              id="tags"
              name="tags"
              value={blogData.tags}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors duration-200"
              placeholder="e.g., react, javascript, web development"
            />
          </div>

          {/* Preview Section */}
          {blogData.title && (
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Preview</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium text-gray-700">Title:</h4>
                  <p className="text-gray-800">{blogData.title}</p>
                </div>
                {blogData.category && (
                  <div>
                    <h4 className="font-medium text-gray-700">Category:</h4>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-teal-100 text-teal-800">
                      {blogData.category}
                    </span>
                  </div>
                )}
                {blogData.content && (
                  <div>
                    <h4 className="font-medium text-gray-700">Content Preview:</h4>
                    <p className="text-gray-800 text-sm line-clamp-3">
                      {blogData.content.substring(0, 150)}...
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}

          <div className="flex space-x-4">
            <button
              type="button"
              onClick={() => navigate('/blog')}
              className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-3 px-4 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white font-medium py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 shadow-md"
            >
              Publish Post
            </button>
          </div>
        </form>

        <div className="mt-6 pt-6 border-t border-gray-200 text-center">
          <p className="text-sm text-gray-500">
            Need help writing? <a href="#" className="text-teal-600 hover:text-teal-800">Check our writing guidelines</a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default NewBlog
