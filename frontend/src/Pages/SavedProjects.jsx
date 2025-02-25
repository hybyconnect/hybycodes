import React from "react";
import { FaTrash } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import DashboardNav from "../Components/DashboardNav";
import Sidebar from "../Components/Sidebar";
import assets from "../assets/assets";
import { Link } from "react-router-dom";

const SavedProjects = () => {
  const items = [1, 2, 3]; // Simulated saved items

  return (
    <>
      <div className="sticky top-0 z-10">
        <DashboardNav />
      </div>
      <div className="flex md:h-screen bg-gradient-to-r from-gray-100 via-yellow-200 to-gray-100">
        <Sidebar />
        <div className="flex-1 p-4 md:p-8 max-w-4xl mx-auto">
          <h2 className="font-bold text-lg mb-4">📌 Saved Items</h2>
          {items.map((_, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-md flex items-center mb-4 transition-shadow duration-300 hover:shadow-lg" // Added hover effect
            >
              <img
                src={assets.port}
                alt="Freelance Developer"
                className="rounded-lg mr-4"
              />
              <div className="flex-1 p-2">
                <h3 className="font-semibold text-blue-700">Freelance Developer</h3>
                <div className="flex space-x-2 my-2">
                  <span className="bg-blue-500 text-white px-2 py-1 rounded text-xs">HTML</span>
                  <span className="bg-red-500 text-white px-2 py-1 rounded text-xs">CSS</span>
                  <span className="bg-yellow-500 text-white px-2 py-1 rounded text-xs">Javascript</span>
                  <span className="bg-purple-500 text-white px-2 py-1 rounded text-xs">Bootstrap</span>
                </div>
                <p className="font-bold text-lg">399<sup>Rs</sup></p>
                <div className="flex space-x-2 mt-2">
                  <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg text-sm transition-colors duration-300 hover:bg-yellow-600">Preview</button>
                  <Link to="/checkout" className="bg-green-500 text-white cursor-pointer px-4 py-2 rounded-lg text-sm transition-colors duration-300 hover:bg-green-600">Checkout</Link>
                </div>
              </div>
              <button className="bg-red-100 cursor-pointer text-red-500 p-3 rounded-lg transition-colors duration-300 hover:bg-red-200">
                <FaTrash size={20} />
              </button>
            </div>
          ))}
          <div className="bg-yellow-300 p-4 rounded-lg flex justify-between items-center mt-6">
            <p className="font-bold">{items.length} Saved Items</p>
            <div className="flex items-center space-x-4">
              <div className="bg-white p-2 rounded-lg flex items-center space-x-1 font-bold">
                <FaShoppingCart size={18} />
                <span>1999/-</span>
              </div>
              <button className="bg-red-500 cursor-pointer text-white px-4 py-2 rounded-lg transition-colors duration-300 hover:bg-red-600">Remove All</button>
              <button className="bg-green-500 cursor-pointer text-white px-4 py-2 rounded-lg transition-colors duration-300 hover:bg-green-600">Checkout All</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SavedProjects;