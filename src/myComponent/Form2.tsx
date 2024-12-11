import React, { useState } from "react";

const Form2 = () => {
  const [fieldA, setFieldA] = useState(""); // State for Field A
  const [fieldB, setFieldB] = useState(""); // State for Field B
  const [error, setError] = useState(""); // State for error messages

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission

    // Basic validation
    if (!fieldA || !fieldB) {
      setError("Both fields are required.");
      return;
    }

    // Clear error state
    setError("");

    // Mock API call or form submission logic
    console.log("Form 2 Submitted Data:", { fieldA, fieldB });

    // Example: Alert the user
    alert("Form 2 submitted successfully!");
    // Additional actions (e.g., API calls, navigation) can be performed here
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1 className="text-2xl font-bold mb-4">Form 2</h1>
      <p className="text-gray-400 mb-6">Please fill in the details below.</p>
      {/* Error Message */}
      {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
      {/* Input Fields */}
      <input
        type="text"
        placeholder="Field A"
        value={fieldA}
        onChange={(e) => setFieldA(e.target.value)}
        className="w-full bg-gray-700 text-sm text-gray-200 placeholder-gray-400 py-2 px-4 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="text"
        placeholder="Field B"
        value={fieldB}
        onChange={(e) => setFieldB(e.target.value)}
        className="w-full bg-gray-700 text-sm text-gray-200 placeholder-gray-400 py-2 px-4 rounded mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-gradient-to-r from-[#0066FF] to-[#00CCFF] hover:from-[#0059b3] hover:to-[#00b3e6] text-white font-semibold py-3 px-6 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
      >
        Submit Form 2
      </button>




         
    </form>
  );
};

export default Form2;
