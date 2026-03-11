import React from 'react';
import { Link } from 'react-router-dom';
import Dropdowns from './Dropdowns';

const Navbar = () => {
  return (
    <nav className="text-black sticky top-0 z-50 shadow-md backdrop-blur-sm">
      <div className="container mx-auto flex justify-between items-center p-5">
        <div className="flex items-center">
          <h2 className="text-3xl text-green-900 font-bold">AgriWebHub</h2>
        </div>
        <ul className="flex space-x-12">
          <li>
            <Link to="/" className="hover:text-black text-base text-green-900 font-medium">Home</Link>
          </li>
          <li>
            <Link to="/calculate-msp" className="hover:text-black text-base font-medium text-green-900">Calculate MSP</Link>
          </li>
          <li>
            <Link to="/find-farmer" className="hover:text-black text-base font-medium text-green-900">Find Farmer</Link>
          </li>
          <li>
            <Link to="/find-consumer" className="hover:text-black text-base font-medium text-green-900">Find Consumer</Link>
          </li>
          <li className="relative">
            <Dropdowns />
          </li>
          {/* <li>
            <a href="#about-us" className="hover:text-black font-medium text-base text-green-900">Contact Us</a>
          </li> */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
