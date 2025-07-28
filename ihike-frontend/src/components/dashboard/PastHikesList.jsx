import React from 'react';
import { motion } from 'framer-motion';

const PastHikesList = ({ hikes }) => {
  // Fallback for when there are no past hikes or data is unavailable
  if (!hikes || hikes.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Past Hikes</h2>
        <div className="bg-white p-4 rounded-xl shadow-lg text-center">
            <p className="text-sm text-gray-500">Your completed adventures will appear here.</p>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Past Hikes</h2>
      <div className="space-y-4">
        {hikes.map((hike) => (
          <div
            key={hike.id}
            className="bg-white p-4 rounded-xl shadow-lg flex justify-between items-center transition-transform hover:scale-105"
          >
            <div>
              <p className="font-semibold text-gray-800">{hike.name}</p>
              <p className="text-sm text-gray-500">
                Completed: {hike.completedDate}
              </p>
            </div>
            <a
              href="#"
              className="text-sm font-semibold text-green-600 hover:underline"
            >
              View Memories
            </a>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default PastHikesList;
