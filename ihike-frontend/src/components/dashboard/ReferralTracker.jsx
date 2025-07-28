import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Gift, Users, Copy, Check } from 'lucide-react';

const ReferralTracker = ({ referralData }) => {
  const [copied, setCopied] = useState(false);

  // Fallback if no data is provided
  if (!referralData) {
    return null;
  }

  const handleCopy = () => {
    // A robust way to copy text to the clipboard
    const textArea = document.createElement('textarea');
    textArea.value = referralData.code;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);

    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }} // Delayed to appear after other components
      className="bg-white p-6 rounded-xl shadow-lg"
    >
      <div className="flex items-center mb-4">
        <Gift size={24} className="text-green-500 mr-3" />
        <h2 className="text-2xl font-bold text-gray-800">Refer & Earn</h2>
      </div>
      
      <p className="text-sm text-gray-600 mb-4">
        Share your love for adventure! You and your friend both get <span className="font-bold text-green-600">₹1000 off</span> your next trek when they sign up with your code.
      </p>

      <div className="bg-gray-100 p-3 rounded-lg flex items-center justify-between gap-2 mb-4">
        <p className="font-mono text-sm text-gray-700 truncate">
          {referralData.code}
        </p>
        <button 
          onClick={handleCopy}
          className={`px-3 py-1.5 text-xs font-semibold rounded-md flex items-center gap-1.5 transition-all ${
            copied 
            ? 'bg-green-600 text-white' 
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          {copied ? <Check size={14} /> : <Copy size={14} />}
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>

      <div className="grid grid-cols-2 gap-4 text-center">
        <div className="bg-green-50 p-3 rounded-lg">
          <p className="text-2xl font-bold text-green-800">{referralData.friendsJoined}</p>
          <p className="text-xs font-semibold text-green-700 flex items-center justify-center gap-1">
            <Users size={12} /> Friends Joined
          </p>
        </div>
        <div className="bg-yellow-50 p-3 rounded-lg">
          <p className="text-2xl font-bold text-yellow-800">₹{referralData.rewardsEarned}</p>
          <p className="text-xs font-semibold text-yellow-700">Rewards Earned</p>
        </div>
      </div>
    </motion.div>
  );
};

export default ReferralTracker;
