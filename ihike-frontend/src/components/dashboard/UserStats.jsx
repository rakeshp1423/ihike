import React from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar, Mountain } from 'lucide-react';

const UserStats = ({ stats }) => {
  // Fallback for when stats data might not be available
  if (!stats) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Your Stats</h2>
      <div className="grid grid-cols-3 gap-4 text-center bg-white p-4 rounded-xl shadow-lg">
        <div>
          <Mountain className="mx-auto text-green-500 mb-1" size={24} />
          <p className="text-2xl font-bold text-gray-800">{stats.completed}</p>
          <p className="text-xs text-gray-500">Hikes Done</p>
        </div>
        <div>
          <Calendar className="mx-auto text-green-500 mb-1" size={24} />
          <p className="text-2xl font-bold text-gray-800">{stats.daysTrekked}</p>
          <p className="text-xs text-gray-500">Days Trekked</p>
        </div>
        <div>
          <Award className="mx-auto text-green-500 mb-1" size={24} />
          <p className="text-2xl font-bold text-gray-800">{stats.badges}</p>
          <p className="text-xs text-gray-500">Badges Earned</p>
        </div>
      </div>
    </motion.div>
  );
};

export default UserStats;
