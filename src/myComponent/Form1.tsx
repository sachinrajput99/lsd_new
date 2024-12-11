import React, { useState } from "react";

const Form1 = () => {
  const [field1, setField1] = useState(""); // State for Field 1
  const [field2, setField2] = useState(""); // State for Field 2
  const [error, setError] = useState(""); // State for error messages

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission

    // Basic validation
    if (!field1 || !field2) {
      setError("Both fields are required.");
      return;
    }

    // Clear error state
    setError("");

    // Mock API call or form submission logic
    console.log("Form 1 Submitted Data:", { field1, field2 });

    // Example: Alert the user
    alert("Form 1 submitted successfully!");
    // Additional actions (e.g., API calls, navigation) can be performed here
  };
  return (
    <form onSubmit={handleSubmit}>
      <h1 className="text-2xl font-bold mb-4">Form 1</h1>
      <p className="text-gray-400 mb-6">Please fill in the details below.</p>
      {/* Error Message */}
      {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
      {/* Input Fields */}
      <input
        type="text"
        placeholder="Field 1"
        value={field1}
        onChange={(e) => setField1(e.target.value)}
        className="w-full bg-gray-700 text-sm text-gray-200 placeholder-gray-400 py-2 px-4 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="text"
        placeholder="Field 2"
        value={field2}
        onChange={(e) => setField2(e.target.value)}
        className="w-full bg-gray-700 text-sm text-gray-200 placeholder-gray-400 py-2 px-4 rounded mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-gradient-to-r from-[#0066FF] to-[#00CCFF] hover:from-[#0059b3] hover:to-[#00b3e6] text-white font-semibold py-3 px-6 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
      >
        Submit Form 1
      </button>
    </form>
  );
};

export default Form1;
