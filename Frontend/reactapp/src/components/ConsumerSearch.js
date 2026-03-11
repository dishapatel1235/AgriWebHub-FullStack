import React, { useState } from 'react';
import axios from 'axios';

const ConsumerSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    try {
      const { data } = await axios.get('http://127.0.0.1:8000/api/consumer/search/', {
        params: { search: searchTerm }
      });
      console.log(data); // Log the response data
      setResults(data);

      // Show alert if no results are found
      if (data.length === 0) {
        alert('No results found for your search. Please try different keywords.');
      }
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="bg-gradient-to-br min-h-screen flex items-center justify-center backdrop-blur-sm">
      <div className="bg-white shadow-lg rounded-lg p-8 mb-40 max-w-6xl w-full">
        <h1 className="text-2xl font-semibold text-gray-700 mb-6 text-center">Find Consumers</h1>
        <div className="flex items-center space-x-4 mb-6">
          <input
            type="text"
            value={searchTerm}
            onChange={handleChange}
            placeholder="Search by name, crop, age..."
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 shadow-sm transition duration-300 ease-in-out"
          />
          <button
            onClick={handleSearch}
            className="bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-lg shadow-md transition duration-300 ease-in-out"
          >
            Search
          </button>
        </div>

        {/* Profile Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {results.length > 0 ? (
            results.map((consumer) => (
              <div key={consumer.id} className="bg-customYellowGreen shadow-md rounded-lg p-6 flex flex-col items-center">
                <h2 className="text-lg font-semibold text-gray-800">{consumer.name}</h2>
                <hr className="my-2 w-full border-gray-300" />
                <p className="text-sm text-gray-600">Age: {consumer.age}</p>
                <hr className="my-2 w-full border-gray-300" />
                <p className="text-sm text-gray-500">Address: {consumer.address}</p>
                <hr className="my-2 w-full border-gray-300" />
                <p className="text-sm text-gray-500">Phone: {consumer.phone}</p>
                <hr className="my-2 w-full border-gray-300" />
                <p className="text-sm text-gray-500">Crop Needed: {consumer.crop_name}</p>
                <hr className="my-2 w-full border-gray-300" />
                <p className="text-sm text-gray-500">Quantity Needed: {consumer.quantity_needs} quintals</p>
                <hr className="my-2 w-full border-gray-300" />
                <p className="text-sm text-gray-500">Expected Price: {consumer.expected_price} ₹</p>
                <hr className="my-2 w-full border-gray-300" />
                <p className="text-sm text-gray-500">Buying Till: {new Date(consumer.buying_till).toLocaleDateString()}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-left w-full">No results found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ConsumerSearch;
