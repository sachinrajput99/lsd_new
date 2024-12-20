import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useState } from "react";
import { useAccount, useReadContract } from "wagmi";
import { waitForTransactionReceipt, readContract, writeContract } from 'wagmi/actions';
import toast from "react-hot-toast";
import { config } from "./utils/config";
import { STAKE_TOKEN_ABI, STAKING_ABI, REWARD_TOKEN_ABI, STAKE_TOKEN_ADDRESS, STAKING_ADDRESS, REWARD_TOKEN_ADDRESS } from "./abi/constants";
import { parseUnits } from "viem";

const App = () => {
  const [amount, setAmount] = useState("");
  const [withdrawAmount, setWithdrawAmount] = useState("");
  const [reward, setReward] = useState(0);

  const { address, isDisconnected } = useAccount();

  const fetchReward = async () => {
    try {
      console.log("Fetching reward");
      const rewardValue = await readContract(config, {
        address: STAKING_ADDRESS,
        abi: STAKING_ABI,
        functionName: "calculateReward", // Replace with your contract's actual function name
        args: [], // If it takes the user's address as an argument
      });
      console.log("Reward fetched:", rewardValue);
      setReward(Number(rewardValue)); // Convert reward to a number if needed
    } catch (error) {
      console.error("Error fetching reward:", error);
    }
  };

  const claimReward = async () => {
    try {
      console.log("Claiming Reward");
      
      await toast.promise((async () => {
        const hash = await writeContract(config, {
          address: STAKING_ADDRESS,
          abi: STAKING_ABI,
          functionName: 'getReward',
          args: [],
        });
        await waitForTransactionReceipt(config, { hash, pollingInterval: 1000, confirmations: 2 });
        console.log('Claimed token successfully:', hash);
      })(), {
        loading: "Claiming Reward token...",
        success: "Claimed Reward token successfully!",
        error: "Claim token error:",
      })
    } catch (error) {
      
    }
  }
  

  const stakeToken = async () => {
    try {
      console.log("STaking token");
      
      await toast.promise((async () => {
        const hash = await writeContract(config, {
          address: STAKING_ADDRESS,
          abi: STAKING_ABI,
          functionName: 'stake',
          args: [],
          value: parseUnits(amount.toString(), 18),
        });
        await waitForTransactionReceipt(config, { hash, pollingInterval: 1000, confirmations: 2 });
        console.log('Staked token successfully:', hash);
      })(), {
        loading: "Staking token...",
        success: "Staked token successfully!",
        error: "Staking token error:",
      })
      setAmount("");
    } catch (error) {
      
    }
  }

  const handleApprove = async () => {
    try {
      console.log("Approving token");
      
      await toast.promise((async () => {
        const hash = await writeContract(config, {
          address: STAKE_TOKEN_ADDRESS,
          abi: STAKE_TOKEN_ABI,
          functionName: 'approve',
          args: [STAKING_ADDRESS, parseUnits(withdrawAmount.toString(), 18)],
        });
        await waitForTransactionReceipt(config, { hash, pollingInterval: 1000, confirmations: 2 });
        console.log('Approve token successfully:', hash);
      })(), {
        loading: "Approve token...",
        success: "Approved token successfully!",
        error: "Approve token error:",
      })
    } catch (error) {
      
    }
  }

  const withdrawToken = async () => {
    console.log("Withdrawing token");
    
    try {
      await handleApprove();
      await toast.promise((async () => {
        const hash = await writeContract(config, {
          address: STAKING_ADDRESS,
          abi: STAKING_ABI,
          functionName: 'withdrawStakedTokens',
          args: [parseUnits(withdrawAmount.toString(), 18)],
        });
        await waitForTransactionReceipt(config, { hash, pollingInterval: 1000, confirmations: 2 });
        console.log('Withdraw token successfully:', hash);
      })(), {
        loading: "Withdrawing token...",
        success: "Withdraw token successfully!",
        error: "Withraw token error:",
      })
      setWithdrawAmount("");
    } catch (error) {
      
    }
  }


  return (
    <div>
       <div className="text-black font-semibold py-3 rounded-lg w-auto">
            <ConnectButton />
        </div>
    <div className=" h-screen flex items-center justify-center  bg-gray-900">
      <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-8 rounded-2xl shadow-xl w w-auto text-white">
        <h2 className="text-xl mb-6 text-center font-bold uppercase border  border-dashed bg-[#104467]  ">
          Liquid Staking
        </h2>
        <div className="space-y-4">
          <div >
            <p className="text-center mb-3 font-semibold  text-xl">Stake XFI</p>
            <input
              type="text"
              placeholder="Enter amount "
              className="w-full bg-gray-700 text-white placeholder-gray-400 p-3 rounded-lg shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
            <div className="flex justify-center items-center">
              
            <button
              onClick={stakeToken}
              className="w-[30%] py-3  mt-5 bg-[#0d79c1] text-white-900 font-semibold rounded-lg hover:bg-[#0d79c1e0] focus:outline-none focus:ring-2 focus:ring-yellow-400"
            >
            Stake
            </button>
            </div>

          </div>
          
          {/* ------------ */}
          <div >
          <p className="text-center mb-2 font-semibold text-xl">Reward XFI - Claim Your Reward</p>
            <div className="flex justify-center items-center">
            <button
              onClick={claimReward}
              className="w-[30%] py-3  mt-5 bg-[#0d79c1] text-white-900 font-semibold rounded-lg hover:bg-[#0d79c1e0] focus:outline-none focus:ring-2 focus:ring-yellow-400"
            >
            Claim Reward
            </button>
            </div>

          </div>
          <div>
            <p className="text-center mb-3 font-semibold  text-xl text-nowrap">Withdraw XFI</p>
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
              onClick={withdrawToken}
              className="w-[30%] py-3  bg-[#0d79c1] text-white font-semibold rounded-lg hover:bg-[#0d79c1e0] focus:outline-none focus:ring-2 focus:ring-yellow-400"
            >
              Withdraw
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};
export default App;
