import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

const FarmerProfileCard = ({ farmerData }) => {
  const navigate = useNavigate(); // Initialize navigate hook

  const handleHomeClick = () => {
    navigate('/'); // Navigate to the home route
  };

  return (
    <div className="w-1/3 bg-white shadow-lg rounded-lg overflow-hidden border backdrop-blur-sm border-gray-300 ">
      {/* Success Message */}
      <div className="bg-green-100 text-green-700 text-center py-4 font-bold">
        Farmer added successfully
      </div>

      <div className="flex items-center justify-center p-6 bg-gray-100">
        <div className="w-32 h-32 rounded-full overflow-hidden">
          {farmerData.profile_photo ? (
            <img
              src={URL.createObjectURL(farmerData.profile_photo)}
              alt="Farmer Profile"
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-500">
              No Photo
            </div>
          )}
        </div>
      </div>

      <div className="p-8">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">{farmerData.name}</h2>
        
        <div className="flex justify-between gap-8">
          {/* First column with first four fields */}
          <div className="w-1/2">
            <div className="text-gray-600">
              <p className="mb-2"><strong>Age:</strong> {farmerData.age}</p>
              <hr className="my-4" />
              <p className="mb-2"><strong>Address:</strong> {farmerData.address}</p>
              <hr className="my-4" />
              <p className="mb-2"><strong>Phone:</strong> {farmerData.phone}</p>
              <hr className="my-4" />
              <p className="mb-2"><strong>Major Crop:</strong> {farmerData.major_crop}</p>
            </div>
          </div>

          {/* Second column with next four fields */}
          <div className="w-1/2">
            <div className="text-gray-600">
              <p className="mb-2"><strong>Farm Area:</strong> {farmerData.area_of_farm} acres</p>
              <hr className="my-4" />
              <p className="mb-2"><strong>Selling Till:</strong> {farmerData.selling_period}</p>
              <hr className="my-4" />
              <p className="mb-2"><strong>Quantity of Crop:</strong> {farmerData.quantity_of_crop} kg</p>
              <hr className="my-4" />
              <p className="mb-2"><strong>Price Expectations:</strong> Rs. {farmerData.price_expectations}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Home Button */}
      <div className="p-4">
        <button
          onClick={handleHomeClick}
          className="w-full py-3 bg-green-500 text-white rounded-md hover:bg-green-900"
        >
          Home
        </button>
      </div>
    </div>
  );
};

export default FarmerProfileCard;
