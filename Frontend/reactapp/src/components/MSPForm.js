import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const MSPForm = () => {
  const [cropDetails, setCropDetails] = useState({
    cropName: '',
    area: '',
    yieldPerAcre: '',
    costPerAcre: '',
  });
  const [msp, setMsp] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCropDetails({
      ...cropDetails,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { area, yieldPerAcre, costPerAcre } = cropDetails;
    const areaNumber = parseFloat(area);
    const yieldNumber = parseFloat(yieldPerAcre);
    const costNumber = parseFloat(costPerAcre);

    if (isNaN(areaNumber) || isNaN(yieldNumber) || isNaN(costNumber)) {
      alert('Please enter valid numbers.');
      return;
    }

    // Example MSP calculation logic
    const calculatedMSP = costNumber + yieldNumber * 0.5;

    setMsp(calculatedMSP);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br  backdrop-blur-sm p-4">
      <div className="bg-white border-l-4 border-green-700 rounded-lg shadow-2xl p-6 max-w-md w-full mb-20">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
          MSP Calculator
        </h2> 
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700">Crop Name:</label>
            <input
              type="text"
              name="cropName"
              value={cropDetails.cropName}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700">Area (in acres):</label>
            <input
              type="number"
              name="area"
              value={cropDetails.area}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700">Yield per Acre:</label>
            <input
              type="number"
              name="yieldPerAcre"
              value={cropDetails.yieldPerAcre}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700">Cost per Acre:</label>
            <input
              type="number"
              name="costPerAcre"
              value={cropDetails.costPerAcre}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-900 transition duration-200"
          >
            Calculate MSP
          </button>
        </form>

        {msp !== null && (
          <div className="mt-6 p-4 bg-green-100 border border-green-300 rounded-lg text-green-800 text-center">
            <h3 className="text-xl font-semibold">Calculated MSP: ₹{msp.toFixed(2)}</h3>
          </div>
        )}

        <div className="mt-6 text-center">
          <Link to="/" className="text-green-600 hover:underline">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MSPForm;
