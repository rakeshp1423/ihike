import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

// Import the common layout components
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Import all the dashboard components
import UpcomingHikeCard from '../components/dashboard/UpcomingHikeCard';
import UserStats from '../components/dashboard/UserStats';
import PastHikesList from '../components/dashboard/PastHikesList';
import HikeDetailModal from '../components/dashboard/HikeDetailModal';
import Wishlist from '../components/dashboard/Wishlist';
import PersonalizedRecommendations from '../components/dashboard/PersonalizedRecommendations';
import ReferralTracker from '../components/dashboard/ReferralTracker';
import QuickActions from '../components/dashboard/QuickActions';

// --- MOCK DATA EXPANDED ---
// In a real app, this would come from multiple API calls
const allHikesForRecommendations = [
    { id: 1, name: 'Roopkund Trek', difficulty: 'Difficult', image: 'https://placehold.co/100x100/60A5FA/FFFFFF?text=R' },
    { id: 2, name: 'Hampta Pass', difficulty: 'Moderate', image: 'https://placehold.co/100x100/34D399/FFFFFF?text=H' },
    { id: 3, name: 'Valley of Flowers', difficulty: 'Moderate', image: 'https://placehold.co/100x100/FBBF24/FFFFFF?text=V' },
    { id: 4, name: 'Brahmatal Trek', difficulty: 'Moderate', image: 'https://placehold.co/100x100/A855F7/FFFFFF?text=B' },
    { id: 5, name: 'Stok Kangri', difficulty: 'Difficult', image: 'https://placehold.co/100x100/F472B6/FFFFFF?text=S' },
];

const userData = {
  name: 'Aarav',
  upcomingHikes: [
    {
      id: 1, name: 'Roopkund Trek', location: 'Uttarakhand', startDate: 'Aug 15, 2025',
      image: 'https://placehold.co/600x400/60A5FA/1F2937?text=Roopkund',
      payment: { status: 'Partially Paid', due: '5,000' },
      guide: { name: 'Ramesh Singh', avatar: 'https://placehold.co/100x100/34D399/FFFFFF?text=RS', experience: '12 years' },
      itinerary: [
        { day: 1, title: 'Arrival in Lohajung', description: 'Acclimatization and briefing.' },
        { day: 2, title: 'Trek to Didna Village', description: 'A 6.5km trek through oak and rhododendron forests.' },
      ],
      gearList: [
        { item: 'Trekking Shoes', required: true }, { item: 'Backpack (50-60L)', required: true },
      ],
      documents: [
          { name: 'Trek Permit.pdf', link: '#' }, { name: 'Medical_Certificate_Form.pdf', link: '#' },
      ]
    },
  ],
  pastHikes: [
      { id: 2, name: 'Hampta Pass', completedDate: 'May 2024', difficulty: 'Moderate' },
      { id: 3, name: 'Valley of Flowers', completedDate: 'Aug 2023', difficulty: 'Moderate' },
  ],
  stats: { completed: 5, daysTrekked: 38, badges: 2 },
  wishlist: [
      { id: 4, name: 'Brahmatal Trek', location: 'Uttarakhand', image: 'https://placehold.co/100x100/A855F7/FFFFFF?text=B' },
      { id: 5, name: 'Stok Kangri', location: 'Ladakh', image: 'https://placehold.co/100x100/F472B6/FFFFFF?text=S' }
  ],
  referralData: {
      code: 'AARAV-IH1KE',
      friendsJoined: 3,
      rewardsEarned: 3000,
  }
};

const UserDashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedHike, setSelectedHike] = useState(null);

  const handleOpenModal = (hike) => {
    setSelectedHike(hike);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => { setSelectedHike(null); }, 300);
  };

  return (
    <div className="bg-gray-100 flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        <div className="container mx-auto p-6 space-y-10">
          
          <h2 className="text-3xl font-bold text-gray-800">Your Dashboard</h2>

          {/* Top Section: Upcoming Hikes and Sidebar */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              {userData.upcomingHikes.length > 0 ? (
                userData.upcomingHikes.map(hike => (
                  <UpcomingHikeCard key={hike.id} hike={hike} onDetailsClick={handleOpenModal} />
                ))
              ) : (
                <div className="text-center py-12 bg-white rounded-xl shadow-lg">
                  <p className="text-gray-500">You have no upcoming hikes.</p>
                  <button className="mt-4 bg-green-100 text-green-800 px-4 py-2 rounded-full font-semibold hover:bg-green-200">
                    Explore Tours
                  </button>
                </div>
              )}
            </div>
            <aside className="space-y-8">
              <UserStats stats={userData.stats} />
              <Wishlist hikes={userData.wishlist} />
            </aside>
          </div>

          {/* Second Section: Quick Actions */}
          <div>
            <QuickActions />
          </div>

          {/* Third Section: Other Modules */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
                <ReferralTracker referralData={userData.referralData} />
            </div>
            <aside className="space-y-8">
                <PersonalizedRecommendations 
                    pastHikes={userData.pastHikes} 
                    allHikes={allHikesForRecommendations} 
                />
                <PastHikesList hikes={userData.pastHikes} />
            </aside>
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

export default UserDashboard;
