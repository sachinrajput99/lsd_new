import React from "react";

const Component1 = () => {
  return (
    <div>
      {" "}
      <h1 className="text-2xl font-bold mb-4">Welcome Back!</h1>
      <p className="text-gray-400 mb-6">
        Welcome back. Enter your credentials to access your account.
      </p>
      {/* Social Login Buttons */}
      <button className="w-full bg-gray-700 hover:bg-gray-600 text-sm font-medium py-2 px-4 rounded flex items-center justify-center mb-4">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Google__G__Logo.svg"
          alt="Google"
          className="w-5 h-5 mr-2"
        />
        Login with Google
      </button>
      <button className="w-full bg-gray-700 hover:bg-gray-600 text-sm font-medium py-2 px-4 rounded flex items-center justify-center mb-4">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
          alt="Facebook"
          className="w-5 h-5 mr-2"
        />
        Login with Facebook
      </button>
      <div className="text-center text-gray-400 my-4">Or</div>
      {/* Email and Password Inputs */}
      <input
        type="email"
        placeholder="Email"
        className="w-full bg-gray-700 text-sm text-gray-200 placeholder-gray-400 py-2 px-4 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="password"
        placeholder="Password"
        className="w-full bg-gray-700 text-sm text-gray-200 placeholder-gray-400 py-2 px-4 rounded mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {/* Login Button */}
      <button className="w-full bg-blue-600 hover:bg-blue-500 text-sm font-medium py-2 px-4 rounded">
        Login
      </button>
    </div>
  );
};

export default Component1;
