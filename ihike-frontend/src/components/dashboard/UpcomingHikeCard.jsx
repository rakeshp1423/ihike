import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, CreditCard, Download } from 'lucide-react';

const UpcomingHikeCard = ({ hike, onDetailsClick }) => {
  // Fallback in case no hike data is passed
  if (!hike) {
    return null;
  }

  return (
    <motion.div 
        className="bg-white rounded-xl shadow-lg overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
    >
      <img src={hike.image} alt={hike.name} className="w-full h-56 object-cover" />
      <div className="p-6">
        <div className="flex justify-between items-start">
            <div>
                <h3 className="text-2xl font-bold text-gray-800">{hike.name}</h3>
                <p className="text-gray-500 flex items-center gap-2 mt-1"><MapPin size={14} /> {hike.location}</p>
                <p className="text-gray-500 flex items-center gap-2 mt-1"><Calendar size={14} /> Starts: {hike.startDate}</p>
            </div>
            <div className="text-right flex-shrink-0 ml-4">
                <p className="font-semibold text-yellow-500">{hike.payment.status}</p>
                <p className="text-sm text-gray-500">Due: ₹{hike.payment.due}</p>
            </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 mt-6">
            <button 
              onClick={() => onDetailsClick(hike)} 
              className="flex-1 text-center bg-green-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              View Details
            </button>
            <button className="flex-1 text-center bg-green-100 text-green-800 px-4 py-2 rounded-lg font-semibold hover:bg-green-200 flex items-center justify-center gap-2">
              <CreditCard size={16}/> Make Final Payment
            </button>
            <button className="flex-1 text-center bg-gray-200 text-gray-800 px-4 py-2 rounded-lg font-semibold hover:bg-gray-300 flex items-center justify-center gap-2">
              <Download size={16}/> Download Invoice
            </button>
        </div>
      </div>
    </motion.div>
  );
};

export default UpcomingHikeCard;
