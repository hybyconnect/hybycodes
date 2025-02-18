import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const LoginPage = () => {
  return (
    <>
      <div className="min-h-screen p-2 flex items-center justify-center bg-yellow-300 relative overflow-hidden">
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="w-[90%] max-w-md bg-yellow-100 p-6 rounded-lg shadow-xl">
            <h2 className="text-xl font-bold text-center mb-4">Sign In to Your Account</h2>

            <input
              type="email"
              placeholder="Email"

              className="w-full p-2 border rounded-md mt-2"
            />
            <input
              type="password"
              placeholder="Password"
              
              className="w-full p-2 border rounded-md mt-2"
            />

            <button className="w-full bg-black text-white py-2 mt-4 rounded-md font-semibold hover:opacity-80">
              Continue
            </button>

            <div className="text-center text-sm mt-4">
              <Link to="/" className="text-black">
                Back To Home
              </Link>
              <span className="mx-2">|</span>
              <Link to="/register" className="text-black">
                Don't Have an Account? Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;