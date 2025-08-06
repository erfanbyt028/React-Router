import React from "react";
import { useSearchParams } from "react-router-dom";

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const showActiveUsers = searchParams.get("filter") === "active";
  
  // Mock user data - replace with your actual data
  const users = [
    { id: 1, name: "John Doe", active: true },
    { id: 2, name: "Jane Smith", active: false },
    { id: 3, name: "Mike Johnson", active: true },
    { id: 4, name: "Sarah Williams", active: false },
    { id: 5, name: "David Brown", active: true },
  ];

  const filteredUsers = showActiveUsers 
    ? users.filter(user => user.active) 
    : users;

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">User Search</h1>
        
        <div className="flex flex-wrap gap-3 mb-8">
          <button 
            onClick={() => setSearchParams({ filter: "active" })}
            className={`px-4 py-2 rounded-md transition-colors duration-200 ${
              showActiveUsers 
                ? 'bg-blue-600 text-white shadow-md' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Active Users
          </button>
          
          <button 
            onClick={() => setSearchParams({})}
            className={`px-4 py-2 rounded-md transition-colors duration-200 ${
              !showActiveUsers 
                ? 'bg-blue-600 text-white shadow-md' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            All Users
          </button>
        </div>

        <div className="mb-4">
          <h2 className="text-lg font-medium text-gray-700 mb-2">
            {showActiveUsers ? 'Active Users' : 'All Users'} 
            <span className="text-sm text-gray-500 ml-2">
              ({filteredUsers.length} users)
            </span>
          </h2>
          <div className="h-1 w-20 bg-blue-500 rounded-full"></div>
        </div>

        <div className="space-y-3">
          {filteredUsers.length > 0 ? (
            filteredUsers.map(user => (
              <div 
                key={user.id} 
                className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200"
              >
                <div className="flex items-center">
                  <div className={`h-3 w-3 rounded-full mr-3 ${
                    user.active ? 'bg-green-500' : 'bg-gray-300'
                  }`}></div>
                  <span className="font-medium">{user.name}</span>
                  <span className="ml-auto text-sm text-gray-500">
                    {user.active ? 'Active' : 'Inactive'}
                  </span>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-8 text-gray-500">
              No users found matching your criteria
            </div>
          )}
        </div>

        <div className="mt-8 pt-4 border-t border-gray-200 text-sm text-gray-500">
          <p>Use the buttons above to filter between active and all users.</p>
        </div>
      </div>
    </div>
  );
};

export default Search;