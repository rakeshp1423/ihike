import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, FileText, Download, CheckCircle, UserCheck } from 'lucide-react';

const HikeDetailModal = ({ hike, onClose }) => {
    const [activeTab, setActiveTab] = useState('itinerary');

    // If no hike data is provided, don't render anything
    if (!hike) {
        return null;
    }

    const tabs = ['itinerary', 'gear', 'guide & docs'];

    const modalVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
        exit: { opacity: 0 },
    };

    const cardVariants = {
        hidden: { scale: 0.9, y: -20 },
        visible: { scale: 1, y: 0 },
        exit: { scale: 0.9, y: -20 },
    };

    return (
        <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"
            onClick={onClose} // Close modal when clicking on the overlay
        >
            <motion.div
                variants={cardVariants}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] flex flex-col"
                onClick={e => e.stopPropagation()} // Prevent closing when clicking inside the modal
            >
                {/* Modal Header */}
                <div className="flex justify-between items-center p-6 border-b border-gray-200">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800">{hike.name}</h2>
                        <p className="text-gray-500">{hike.location}</p>
                    </div>
                    <button onClick={onClose} className="p-2 rounded-full text-gray-500 hover:bg-gray-100 transition-colors">
                        <X size={24} />
                    </button>
                </div>

                {/* Tabs Navigation */}
                <div className="flex border-b border-gray-200 px-6">
                    {tabs.map(tab => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`py-4 px-1 mr-6 font-semibold capitalize transition-colors ${activeTab === tab ? 'text-green-600 border-b-2 border-green-600' : 'text-gray-500 hover:text-gray-800'}`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Tab Content */}
                <div className="overflow-y-auto p-6 space-y-6">
                    {activeTab === 'itinerary' && (
                        <div className="space-y-4">
                            {hike.itinerary.map((day, index) => (
                                <div key={day.day} className="flex gap-4">
                                    <div className="flex flex-col items-center">
                                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-100 font-bold text-green-700">{day.day}</div>
                                        {index < hike.itinerary.length - 1 && <div className="w-px h-full bg-gray-300 my-1"></div>}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-800">{day.title}</h4>
                                        <p className="text-gray-600">{day.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                    {activeTab === 'gear' && (
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                            {hike.gearList.map(gear => (
                                <li key={gear.item} className="flex items-center">
                                    <CheckCircle size={18} className={`${gear.required ? 'text-green-500' : 'text-gray-400'} mr-3 flex-shrink-0`} />
                                    <span className="text-gray-700">{gear.item}</span>
                                    {!gear.required && <span className="ml-2 text-xs bg-gray-200 px-2 py-0.5 rounded-full">Optional</span>}
                                </li>
                            ))}
                        </ul>
                    )}
                    {activeTab === 'guide & docs' && (
                        <div>
                            <h3 className="text-xl font-bold mb-4">Your Guide</h3>
                            <div className="bg-gray-100 p-4 rounded-lg flex items-center gap-4 mb-8">
                                <img src={hike.guide.avatar} alt={hike.guide.name} className="w-16 h-16 rounded-full" />
                                <div>
                                    <h4 className="font-bold text-lg text-gray-800">{hike.guide.name}</h4>
                                    <p className="text-gray-600">{hike.guide.experience} of experience</p>
                                </div>
                            </div>

                            <h3 className="text-xl font-bold mb-4">Pre-Trek Documents</h3>
                            <div className="space-y-3">
                                {hike.documents.map(doc => (
                                    <a href={doc.link} key={doc.name} className="flex items-center justify-between bg-gray-100 p-4 rounded-lg hover:bg-gray-200 transition-colors">
                                        <div className="flex items-center">
                                            <FileText size={20} className="mr-3 text-gray-500" />
                                            <span className="font-medium text-gray-800">{doc.name}</span>
                                        </div>
                                        <Download size={20} className="text-green-600" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </motion.div>
        </motion.div>
    );
};

export default HikeDetailModal;
