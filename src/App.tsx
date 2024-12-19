import { useState } from "react";

const App = () => {
  const [amount, setAmount] = useState("");
  const [withdrawAmount, setWithdrawAmount] = useState("");

  const handleSubmit = () => {
    alert(`First Value: ${amount}, Second Value: ${withdrawAmount}`);
  };
  const handleGetToken = () => {
    alert(`First Value: ${amount}, Second Value: ${withdrawAmount}`);
  };


  return (
    <div className=" h-screen flex items-center justify-center  bg-gray-900">
      <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-8 rounded-2xl shadow-xl w w-auto text-white">
        <h2 className="text-xl mb-6 text-center font-bold uppercase border  border-dashed bg-[#104467]  ">
          Liquid Staking
        </h2>
        <div className="space-y-4">
          <div >
            <p className="text-center mb-3 font-semibold  text-xl">Stake XFI - Your Balance: 0 STK</p>
            <input
              type="text"
              placeholder="Enter amount "
              className="w-full bg-gray-700 text-white placeholder-gray-400 p-3 rounded-lg shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
            <div className="flex justify-center items-center">
              
            <button
              onClick={handleSubmit}
              className="w-[30%] py-3  mt-5 bg-[#0d79c1] text-white-900 font-semibold rounded-lg hover:bg-[#0d79c1e0] focus:outline-none focus:ring-2 focus:ring-yellow-400"
            >
            Stake
            </button>
            </div>

          </div>
          <div>
            <p className="text-center mb-3 font-semibold  text-xl text-nowrap">Withdraw XFI - Amount Staked: 0 STK</p>
            <input
              type="text"
              placeholder="Enter withdraw amount "
              className="w-full bg-gray-700 text-white placeholder-gray-400 p-3 rounded-lg shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={withdrawAmount}
              onChange={(e) => setWithdrawAmount(e.target.value)}
            />
            <p className="text-sm  mt-3 mb-5 font-semibold">If you withdraw token before 2 days of staking, you will get 10% penalty

</p>
          </div>
          <div className="mt-6 flex justify-center items-center">
            <button
              onClick={handleSubmit}
              className="w-[30%] py-3  bg-[#0d79c1] text-white font-semibold rounded-lg hover:bg-[#0d79c1e0] focus:outline-none focus:ring-2 focus:ring-yellow-400"
            >
              Withdraw
            </button>
          </div>
          <div className="flex justify-center items-center">
          <button
            onClick={handleGetToken}
            className="w-[50%] py-3  bg-[#0676c0] text-white-900 font-semibold rounded-lg hover:bg-gray-400 hover:bg-[#0d79c1e0]  focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Get Token
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default App;
