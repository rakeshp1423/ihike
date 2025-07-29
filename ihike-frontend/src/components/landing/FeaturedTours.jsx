import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MapPin, Clock, BarChart2, Star, ArrowRight, X, Check, ShieldAlert, Zap, Sun
} from 'lucide-react';

const featuredTours = [
  {
    id: 1,
    name: 'Everest Base Camp Trek',
    location: 'Nepal',
    duration: '12 Days',
    difficulty: 'Challenging',
    rating: 4.9,
    price: 45000,
    image: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?q=80&w=2070&auto=format&fit=crop',
    description: 'The classic trek to the foot of the world\'s highest mountain, offering breathtaking views and rich Sherpa culture.',
    highlights: ['Tengboche Monastery', 'Kala Patthar Sunset', 'Everest Base Camp'],
    itinerary: [
      { day: '1-2', task: 'Fly to Lukla & Trek to Phakding' },
      { day: '3-4', task: 'Acclimatize in Namche Bazaar' },
      { day: '5-8', task: 'Trek through high passes to Gorak Shep' },
      { day: '9-12', task: 'Reach Base Camp & Descend' },
    ],
    included: ['Flights (KTM-Lukla-KTM)', 'Accommodation', 'All Meals', 'Guide & Porters', 'Permits'],
    excluded: ['International Flights', 'Visa Fees', 'Personal Expenses']
  },
  {
    id: 2,
    name: 'Annapurna Circuit',
    location: 'Nepal',
    duration: '14 Days',
    difficulty: 'Challenging',
    rating: 4.8,
    price: 55000,
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop',
    description: 'A legendary trek circling the Annapurna massif, showcasing diverse landscapes from lush forests to arid peaks.',
    highlights: ['Thorong La Pass', 'Muktinath Temple', 'Manang Valley'],
    itinerary: [
      { day: '1-3', task: 'Drive to Chame & begin trek' },
      { day: '4-7', task: 'Acclimatize and explore Manang' },
      { day: '8-10', task: 'Cross Thorong La Pass to Muktinath' },
      { day: '11-14', task: 'Descend and drive back to Pokhara' },
    ],
    included: ['Accommodation', 'All Meals', 'Guide & Porters', 'Permits'],
    excluded: ['Flights', 'Visa Fees', 'Personal Expenses']
  },
  {
    id: 3,
    name: 'Valley of Flowers',
    location: 'India',
    duration: '6 Days',
    difficulty: 'Moderate',
    rating: 4.7,
    price: 15000,
    image: 'https://i.pinimg.com/1200x/91/6a/19/916a19a1da186ca091d3c6a7efaef660.jpg',
    description: 'A vibrant monsoon trek into a UNESCO World Heritage site, famous for its meadows of endemic alpine flowers.',
    highlights: ['UNESCO World Heritage Site', 'Hemkund Sahib', 'Rare Himalayan Flora'],
    itinerary: [
      { day: '1-2', task: 'Drive to Govindghat & trek to Ghangaria' },
      { day: '3', task: 'Explore the Valley of Flowers' },
      { day: '4', task: 'Trek to Hemkund Sahib' },
      { day: '5-6', task: 'Descend and drive back to Rishikesh' },
    ],
    included: ['Transport (Rishikesh-Govindghat)', 'Accommodation', 'All Meals', 'Guide', 'Permits'],
    excluded: ['Transport to Rishikesh', 'Personal Expenses']
  },
];

const TourDetailModal = ({ tour, onClose }) => {
  if (!tour) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: -20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: -20 }}
        className="bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col"
        onClick={e => e.stopPropagation()}
      >
        <div className="relative">
          <img src={tour.image} alt={tour.name} className="w-full h-64 object-cover rounded-t-2xl" />
          <button onClick={onClose} className="absolute top-4 right-4 bg-white/50 p-2 rounded-full hover:bg-white transition-colors">
            <X size={24} className="text-gray-800 dark:text-white" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto max-h-[calc(90vh-160px)]">
          <h2 className="text-3xl font-bold">{tour.name}</h2>
          <p className="flex items-center gap-2 mt-1 text-gray-500 dark:text-gray-400">
            <MapPin size={16} /> {tour.location}
          </p>
          <p className="my-4 text-gray-700 dark:text-gray-300">{tour.description}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold text-lg mb-2">Highlights</h4>
              <ul className="space-y-2">
                {tour.highlights.map(item => (
                  <li key={item} className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <Zap size={16} className="text-yellow-500" />{item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2">Brief Itinerary</h4>
              <ul className="space-y-2">
                {tour.itinerary.map(item => (
                  <li key={item.day} className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <Sun size={16} className="text-orange-500" /><strong>Day {item.day}:</strong> {item.task}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <hr className="my-6 border-gray-300 dark:border-gray-700" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold text-lg mb-2">What's Included</h4>
              <ul className="space-y-2">
                {tour.included.map(item => (
                  <li key={item} className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <Check size={18} className="text-green-600" />{item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2">What's Not Included</h4>
              <ul className="space-y-2">
                {tour.excluded.map(item => (
                  <li key={item} className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <ShieldAlert size={18} className="text-red-500" />{item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="p-6 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 flex justify-between items-center rounded-b-2xl">
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Starting from</p>
            <p className="text-2xl font-bold text-gray-800 dark:text-white">₹{tour.price.toLocaleString('en-IN')}</p>
          </div>
          <a href="/login" className="bg-green-600 text-white font-bold px-8 py-3 rounded-lg hover:bg-green-700 transition-transform transform hover:scale-105">
            Book Now
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};

const FeaturedTours = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTour, setSelectedTour] = useState(null);

  const handleOpenModal = (tour) => {
    setSelectedTour(tour);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const cardVariants = {
    offscreen: { y: 50, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", bounce: 0.4, duration: 0.8 }
    }
  };

  return (
    <>
      <section id="featured-tours" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">Popular Tours</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
              Explore our best-selling adventures, loved by hikers from all over the world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredTours.map((tour, index) => (
              <motion.div
                key={tour.id}
                className="bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-xl shadow-lg overflow-hidden group transform hover:-translate-y-2 transition-transform duration-300 ease-in-out"
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.3 }}
                variants={cardVariants}
                transition={{ delay: index * 0.1 }}
              >
                <div className="relative">
                  <img src={tour.image} alt={tour.name} className="w-full h-56 object-cover" />
                  <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    From ₹{tour.price.toLocaleString('en-IN')}
                  </div>
                  <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 flex items-center text-white">
                    <MapPin size={16} className="mr-2" />
                    <h3 className="text-xl font-bold">{tour.name}</h3>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-center mb-4 text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center">
                      <Clock size={14} className="mr-1.5 text-green-600" />
                      <span>{tour.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <BarChart2 size={14} className="mr-1.5 text-blue-500" />
                      <span>{tour.difficulty}</span>
                    </div>
                    <div className="flex items-center">
                      <Star size={14} className="mr-1.5 text-yellow-400" />
                      <span>{tour.rating}</span>
                    </div>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-6">
                    Embark on a journey to {tour.location}, a trek known for its stunning vistas and rich biodiversity.
                  </p>
                  <button
                    onClick={() => handleOpenModal(tour)}
                    className="w-full flex justify-center items-center gap-2 bg-green-100 dark:bg-green-900/40 text-green-800 dark:text-green-300 px-4 py-3 rounded-lg font-semibold hover:bg-green-200 dark:hover:bg-green-800 transition-colors duration-300"
                  >
                    View Details
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-16">
            <a href="/login" className="bg-green-600 text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-green-700 transition-transform transform hover:scale-105 inline-block">
              Explore All Tours
            </a>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {isModalOpen && <TourDetailModal tour={selectedTour} onClose={handleCloseModal} />}
      </AnimatePresence>
    </>
  );
};

export default FeaturedTours;
