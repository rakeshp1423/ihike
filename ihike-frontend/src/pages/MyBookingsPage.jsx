import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, CheckCircle, Edit } from 'lucide-react';

// Import layout components
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Import the reusable card for upcoming hikes
import UpcomingHikeCard from '../components/dashboard/UpcomingHikeCard';
import HikeDetailModal from '../components/dashboard/HikeDetailModal';

// MOCK DATA for the user's bookings
const userBookings = {
  upcoming: [
    {
      id: 5, name: 'Roopkund Trek', location: 'Uttarakhand, India', startDate: 'Aug 15, 2025',
      image: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?q=80&w=2070&auto=format&fit=crop',
      payment: { status: 'Partially Paid', due: '5,000' },
      guide: { name: 'Ramesh Singh', avatar: 'https://placehold.co/100x100/34D399/FFFFFF?text=RS', experience: '12 years' },
      itinerary: [ { day: 1, title: 'Arrival in Lohajung', description: 'Acclimatization and briefing.' }, { day: 2, title: 'Trek to Didna Village', description: 'A 6.5km trek through oak and rhododendron forests.' } , { day: 3, title: 'Didna to Ali Bugyal', description: 'A 7km trek with stunning views of the Himalayas.' } , { day: 4, title: 'Ali Bugyal to Bedni Bugyal', description: 'A 5km trek with panoramic views.' }, { day: 5, title: 'Bedni Bugyal to Roopkund', description: 'A 6km trek to the mysterious Roopkund Lake.' }, { day: 6, title: 'Return to Bedni Bugyal', description: 'Retracing our steps back.' }, { day: 7, title: 'Bedni Bugyal to Lohajung', description: 'Final trek back to Lohajung.' } ],
      gearList: [ { item: 'Trekking Shoes', required: true }, { item: 'Warm Jacket', required: true }, { item: 'Trekking Poles', required: false } , { item: 'Backpack (50-60L)', required: true } ],
      documents: [ { name: 'Trek Permit.pdf', link: '#' } ]
    },
  ],
  past: [
    { id: 4, name: 'Hampta Pass', location: 'Himachal, India', completedDate: 'May 2024', image: 'https://i.pinimg.com/1200x/2d/63/8e/2d638eb6e4d62e47c9a991d23ef22c0f.jpg' },
    { id: 3, name: 'Valley of Flowers', location: 'Uttarakhand, India', completedDate: 'Aug 2023', image: 'https://i.pinimg.com/736x/bc/a2/05/bca20522572248cec1a1c0d3e6a2a304.jpg' },
    { id: 6, name: 'Triund Trek', location: 'Himachal, India', completedDate: 'Oct 2022', image: 'https://i.pinimg.com/1200x/19/1b/2f/191b2fe37bd2ef449cba439626dae54b.jpg' },
  ]
};

// A new card component for past bookings
const PastBookingCard = ({ hike }) => (
    <motion.div 
        layout
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row"
    >
        <img src={hike.image} alt={hike.name} className="w-full md:w-1/3 h-48 md:h-auto object-cover" />
        <div className="p-6 flex flex-col justify-between flex-grow">
            <div>
                <h3 className="text-xl font-bold text-gray-800">{hike.name}</h3>
                <p className="text-gray-500 flex items-center gap-2 mt-1">
                    <CheckCircle size={16} className="text-green-500" /> 
                    Completed: {hike.completedDate}
                </p>
            </div>
            <div className="flex gap-3 mt-4">
                <button className="flex-1 text-center bg-green-100 text-green-800 px-4 py-2 rounded-lg font-semibold hover:bg-green-200 flex items-center justify-center gap-2">
                    <Edit size={16} /> Write a Review
                </button>
                <button className="flex-1 text-center bg-gray-200 text-gray-800 px-4 py-2 rounded-lg font-semibold hover:bg-gray-300">
                    View Memories
                </button>
            </div>
        </div>
    </motion.div>
);

const MyBookingsPage = () => {
    const [activeTab, setActiveTab] = useState('upcoming');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedHike, setSelectedHike] = useState(null);

    const handleOpenModal = (hike) => {
        setSelectedHike(hike);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const bookingsToShow = userBookings[activeTab];

    return (
        <div className="bg-gray-50 flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
                <div className="container mx-auto p-6">
                    <div className="my-8">
                        <h1 className="text-4xl font-extrabold text-gray-800 mb-2">My Bookings</h1>
                        <p className="text-lg text-gray-600">Manage your upcoming adventures and revisit past journeys.</p>
                    </div>

                    {/* Tab Navigation */}
                    <div className="border-b border-gray-200 mb-8">
                        <nav className="-mb-px flex space-x-8">
                            <button onClick={() => setActiveTab('upcoming')} className={`py-4 px-1 font-semibold text-lg ${activeTab === 'upcoming' ? 'border-b-2 border-green-500 text-green-600' : 'text-gray-500 hover:text-gray-700'}`}>
                                Upcoming
                            </button>
                            <button onClick={() => setActiveTab('past')} className={`py-4 px-1 font-semibold text-lg ${activeTab === 'past' ? 'border-b-2 border-green-500 text-green-600' : 'text-gray-500 hover:text-gray-700'}`}>
                                Past
                            </button>
                        </nav>
                    </div>

                    {/* Bookings List */}
                    <div className="space-y-8">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3 }}
                                className="space-y-8"
                            >
                                {bookingsToShow.length > 0 ? (
                                    bookingsToShow.map(hike => (
                                        activeTab === 'upcoming' ? (
                                            <UpcomingHikeCard key={hike.id} hike={hike} onDetailsClick={handleOpenModal} />
                                        ) : (
                                            <PastBookingCard key={hike.id} hike={hike} />
                                        )
                                    ))
                                ) : (
                                    <div className="text-center py-20 bg-white rounded-xl shadow-lg">
                                        <Calendar size={48} className="mx-auto text-gray-300" />
                                        <p className="mt-4 text-lg font-semibold">No {activeTab} bookings found.</p>
                                        <p className="text-gray-500">Time to plan your next adventure!</p>
                                        <button className="mt-6 bg-green-600 text-white font-bold px-6 py-2 rounded-lg hover:bg-green-700">
                                            Explore Hikes
                                        </button>
                                    </div>
                                )}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </main>
            <Footer />
            <AnimatePresence>
                {isModalOpen && <HikeDetailModal hike={selectedHike} onClose={handleCloseModal} />}
            </AnimatePresence>
        </div>
    );
};

export default MyBookingsPage;
