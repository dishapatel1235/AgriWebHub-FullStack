import React from 'react';
import { useNavigate } from 'react-router-dom';
import farmer from './farmer.webp';
import consumer from './consumer.jpg'; // Add consumer image

const HomePage = () => {
  const navigate = useNavigate();

  const handleFindFarmerClick = () => {
    navigate('/find-farmer');
  };

  const handleFindConsumerClick = () => {
    navigate('/find-consumer');
  };

  const handleCalculateMSPClick = () => {
    navigate('/calculate-msp');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-between p-4">
      <header className="text-left mr-96 mt-10">
        <h1 className="text-5xl mt-8 font-bold text-green-800">Welcome to AgriWebHub</h1>
        <p className="mt-2 font-bold text-xl text-green-800">
          A Platform that can help you to find your Destiny
        </p>
      </header>

      {/* Farmer Section */}
      <main className="w-full mt-96">
        <div className="flex items-center border-lime-600 border-4 bg-customYellowGreen rounded-lg mt-24 justify-between p-40">
          <hr className="border-t border-gray-400 mt-40" />
          <div className="text-left">
            <p className="text-6xl font-bold mb-10 text-green-900">Are you a Farmer?</p>
            <p className="text-xl text-left mt-2 text-green-900">Here is the tool that can help you to find consumers, </p>
            <p className="text-xl text-left mt-2 text-green-900">  create profiles to show off your crops, calculate msp. </p>

            <div className="flex gap-4 mt-8">
              <button
                onClick={handleFindConsumerClick}
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
              >
                Find Consumer
              </button>

              <button
                onClick={handleCalculateMSPClick}
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
              >
                Calculate MSP
              </button>
            </div>
          </div>

          <div className="flex justify-end">
            <img src={farmer} alt="farmer" height="500" width="500" className="rounded-md shadow-lg" />
          </div>
        </div>

        {/* Horizontal Line */}
        <hr className="border-t border-lime-600 my-12" />

        {/* Consumer Section */}
        <div className="flex items-center bg-customYellowGreen border-lime-600 border-4 rounded-lg justify-between p-40">
          <div className="flex justify-start">
            <img src={consumer} alt="consumer" height="500" width="500" className="rounded-md shadow-lg" />
          </div>

          <div className="ml-16 text-left">
            <p className="text-6xl font-bold text-green-900 mb-10">Are you a Consumer?</p>
            <p className="text-xl text-left mt-2 text-green-900">Here is the tool that can help you to find farmers </p>
            <p className="text-xl text-left mt-2 text-green-900"> and create profiles to show off your crop needs. </p>

            <button
              onClick={handleFindFarmerClick}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-8"
            >
              Find Farmer
            </button>
          </div>
        </div>
      </main>

      <footer className=" text-gray-200 py-4 text-left">
          <p>© 2024 AgriWebHub. All rights reserved.</p>

        </footer>
    </div>
  );
};

export default HomePage;
