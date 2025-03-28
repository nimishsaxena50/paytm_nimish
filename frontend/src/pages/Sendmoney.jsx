import React from "react";
import { UserIcon, DollarSignIcon, SendIcon } from "lucide-react";

export const Sendmoney = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 p-4 overflow-hidden">
      <div className="relative w-full max-w-md p-8 bg-white shadow-2xl rounded-3xl z-10">
        <div className="flex items-center justify-center mb-8">
          <SendIcon className="w-8 h-8 text-blue-600 mr-2" />
          <h1 className="text-4xl font-extrabold text-blue-600">Send Money</h1>
        </div>
        <div className="flex items-center space-x-4 mb-8">
          <div className="p-4 bg-blue-100 rounded-full">
            <UserIcon className="text-blue-600 w-10 h-10" />
          </div>
          <span className="text-xl font-semibold text-gray-800">Person Name</span>
        </div>
        <div className="flex items-center mb-8">
          <DollarSignIcon className="text-blue-600 w-6 h-6 mr-2" />
          <input
            type="number"
            placeholder="Enter Amount"
            className="w-full p-4 border-2 border-blue-600 rounded-md"
          />
        </div>
        <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-bold">
          <SendIcon className="w-6 h-6" />
          <span>Initiate Payment</span>
        </button>
      </div>
    </div>
  );
};
