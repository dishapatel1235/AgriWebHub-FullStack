import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for routing
import ConsumerProfileCard from './ConsumerProfileCard'; // Import the profile card

const ConsumerForm = () => {
  const [formData, setFormData] = useState({
    profile_photo: null,
    name: '',
    age: '',
    address: '',
    phone: '',
    crop_name: '',
    quantity_needs: '',
    expected_price: '',
    buying_till: ''
  });
  const [isProfileCreated, setIsProfileCreated] = useState(false);

  const navigate = useNavigate(); // Initialize navigation

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    Object.keys(formData).forEach(key => {
      data.append(key, formData[key]);
    });

    try {
      await axios.post('http://127.0.0.1:8000/api/consumer/create/', data, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      alert('Consumer data submitted successfully');
      setIsProfileCreated(true);
    } catch (error) {
      console.error('Error submitting data:', error.response);
      alert('Failed to submit: ' + JSON.stringify(error.response.data));
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center backdrop-blur-sm bg-gradient-to-br p-4">
      {!isProfileCreated ? (
        <div className="container mx-auto p-6 w-1/2 mt-6 rounded-lg shadow-2xl bg-white border-l-4 border-green-800">
          <h1 className="text-2xl font-bold text-center mb-6">Consumer's Corner</h1>
          <hr className="w-full border-black mb-2" />

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col items-center gap-4 w-full">
              <div className="relative">
                <input
                  type="file"
                  id="profile-photo"
                  className="hidden"
                  onChange={handleChange}
                  name="profile_photo"
                />
                <label htmlFor="profile-photo" className="cursor-pointer">
                  <div className="w-24 h-24 bg-gray-200 rounded-full overflow-hidden flex items-center justify-center">
                    {formData.profile_photo ? (
                      <img
                        id="profile-photo-img"
                        src={URL.createObjectURL(formData.profile_photo)}
                        alt="Profile"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <span className="text-sm text-gray-500">Choose Photo</span>
                    )}
                  </div>
                </label>
              </div>

              <div className="flex flex-col items-center gap-4 w-full">
                <div className="flex gap-4 w-full">
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-green-900">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-2 py-1 border rounded-md"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-green-900">Age</label>
                    <input
                      type="number"
                      name="age"
                      value={formData.age}
                      onChange={handleChange}
                      className="w-full px-2 py-1 border rounded-md"
                    />
                  </div>
                </div>

                <div className="flex gap-4 w-full">
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-green-900">Address</label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      className="w-full px-2 py-1 border rounded-md"
                    />
                  </div>
                </div>

                <div className="flex gap-4 w-full">
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-green-900">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-2 py-1 border rounded-md"
                    />
                  </div>
                </div>

                <div className="flex gap-4 w-full">
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-green-900">Crop Name</label>
                    <input
                      type="text"
                      name="crop_name"
                      value={formData.crop_name}
                      onChange={handleChange}
                      className="w-full px-2 py-1 border rounded-md"
                    />
                  </div>
                </div>

                <div className="flex gap-4 w-full">
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-green-900">Quantity Needs (in quintiles):</label>
                    <input
                      type="number"
                      name="quantity_needs"
                      value={formData.quantity_needs}
                      onChange={handleChange}
                      className="w-full px-2 py-1 border rounded-md"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-green-900">Expected Price (Rs.):</label>
                    <input
                      type="number"
                      name="expected_price"
                      value={formData.expected_price}
                      onChange={handleChange}
                      className="w-full px-2 py-1 border rounded-md"
                    />
                  </div>
                </div>

                <div className="flex gap-4 w-full">
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-green-900">Buying Till (YYYY-MM-DD)</label>
                    <input
                      type="date"
                      name="buying_till"
                      value={formData.buying_till}
                      onChange={handleChange}
                      className="w-full px-2 py-1 border rounded-md"
                    />
                  </div>
                </div>
              </div>
            </div>

            <button type="submit" className="w-full py-2 bg-green-500 text-white rounded-md hover:bg-green-900">
              Add Profile
            </button>
          </form>
        </div>
      ) : (
        <ConsumerProfileCard consumerData={formData} />
      )}
    </div>
  );
};

export default ConsumerForm;
