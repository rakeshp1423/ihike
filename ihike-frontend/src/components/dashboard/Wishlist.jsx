import React from 'react';
import { motion } from 'framer-motion';
import { Heart, MapPin, ArrowRight } from 'lucide-react';

const Wishlist = ({ hikes }) => {
  // Fallback for when there are no wishlist items or data is unavailable
  if (!hikes || hikes.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Your Wishlist</h2>
        <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <Heart className="mx-auto text-gray-300 mb-4" size={32} />
            <p className="font-semibold text-gray-700">Your wishlist is empty.</p>
            <p className="text-sm text-gray-500 mt-1">Save your dream hikes here to plan your next adventure.</p>
            <button className="mt-4 text-sm font-semibold text-green-600 hover:underline">
                Explore Hikes
            </button>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Your Wishlist</h2>
      <div className="space-y-4">
        {hikes.map((hike) => (
          <div
            key={hike.id}
            className="bg-white p-3 rounded-xl shadow-lg flex items-center gap-4 group transition-all hover:shadow-xl hover:bg-green-50"
          >
            <img 
                src={hike.image} 
                alt={hike.name}
                className="w-20 h-20 rounded-lg object-cover"
            />
            <div className="flex-grow">
              <p className="font-bold text-gray-800">{hike.name}</p>
              <p className="text-sm text-gray-500 flex items-center gap-1.5">
                <MapPin size={12} /> {hike.location}
              </p>
            </div>
            <a
              href="#"
              className="p-2 rounded-full bg-gray-100 group-hover:bg-green-600 text-gray-500 group-hover:text-white transition-colors"
              aria-label={`View details for ${hike.name}`}
            >
              <ArrowRight size={18} />
            </a>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Wishlist;
