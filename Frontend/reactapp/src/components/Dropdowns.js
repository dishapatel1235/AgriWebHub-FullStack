import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Dropdowns() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    // Add event listener for clicks outside the dropdown
    document.addEventListener('mousedown', handleClickOutside);

    // Cleanup the event listener when component unmounts
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      <button 
        onClick={toggleDropdown} 
        className="text-green-900 text-base font-medium hover:text-black"
      >
        Add Your Profile
      </button>
      <button 
        onClick={toggleDropdown} 
        className="text-green-900 text-xs ml-2 hover:text-black"
      >
        ▼
      </button>
      {isOpen && (
        <ul className="absolute left-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg">
          <li>
            {/* Navigate to Farmer Page */}
            <Link 
              to="/farmer" 
              className="block w-full text-left px-4 py-2 text-green-900 text-xs font-semibold hover:bg-green-500"
            >
              Add Farmer
            </Link>
          </li>

          {/* Add horizontal line */}
          <hr className="border-t border-gray-300 my-2" />

          <li>
            {/* Navigate to Consumer Page */}
            <Link 
              to="/consumer" 
              className="block w-full text-left px-4 py-2 text-green-900 text-xs font-semibold hover:bg-green-500"
            >
              Add Consumer
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
}

export default Dropdowns;
