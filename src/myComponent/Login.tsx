import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState(""); // State to track email
  const [password, setPassword] = useState(""); // State to track password
  const [error, setError] = useState(""); // State to track errors

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Basic validation
    if (!email || !password) {
      setError("Email and password are required.");
      return;
    }

    // Reset error state
    setError("");

    // Mock API call or login logic
    console.log("Submitted data:", { email, password });

    // Example: Redirecting user on successful login
    alert("Login successful! Redirecting...");
    // Perform actions like redirecting to another page, calling API, etc.
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1 className="text-2xl font-bold mb-4">Welcome Back!</h1>
      <p className="text-gray-400 mb-6">
        Welcome back. Enter your credentials to access your account.
      </p>
      {/* Social Login Buttons */}
      <button
        type="button"
        className="w-full bg-gray-700 hover:bg-gray-600 text-sm font-medium py-2 px-4 rounded flex items-center justify-center mb-4"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Google__G__Logo.svg"
          alt="Google"
          className="w-5 h-5 mr-2"
        />
        Login with Google
      </button>
      <button
        type="button"
        className="w-full bg-gray-700 hover:bg-gray-600 text-sm font-medium py-2 px-4 rounded flex items-center justify-center mb-4"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
          alt="Facebook"
          className="w-5 h-5 mr-2"
        />
        Login with Facebook
      </button>
      <div className="text-center text-gray-400 my-4">Or</div>
      {/* Error Message */}
      {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
      {/* Email and Password Inputs */}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full bg-gray-700 text-sm text-gray-200 placeholder-gray-400 py-2 px-4 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full bg-gray-700 text-sm text-gray-200 placeholder-gray-400 py-2 px-4 rounded mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {/* Login Button */}
      <button
        type="submit"
        className="w-full bg-gradient-to-r from-[#0066FF] to-[#00CCFF] hover:from-[#0059b3] hover:to-[#00b3e6] text-white font-semibold py-3 px-6 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
      >
        Login
      </button>
    </form>
  );
};

export default Login;
