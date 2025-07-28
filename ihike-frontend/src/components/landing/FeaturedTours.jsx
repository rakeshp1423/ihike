import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, BarChart2, Star, ArrowRight } from 'lucide-react';

// Mock data for featured tours
const featuredTours = [
  {
    id: 1,
    name: 'Everest Base Camp Trek',
    location: 'Nepal',
    duration: '12 Days',
    difficulty: 'Challenging',
    rating: 4.9,
    price: '1,200',
    image: 'https://i.pinimg.com/1200x/33/85/c3/3385c3337bd00be5f304f6e34190f1b7.jpg',
  },
  {
    id: 2,
    name: 'Annapurna Circuit',
    location: 'Nepal',
    duration: '14 Days',
    difficulty: 'Challenging',
    rating: 4.8,
    price: '1,350',
    image: 'https://i.pinimg.com/1200x/c2/5e/03/c25e03981482da937bd5ba87f33aeb58.jpg',
  },
  {
    id: 3,
    name: 'Valley of Flowers',
    location: 'India',
    duration: '6 Days',
    difficulty: 'Moderate',
    rating: 4.7,
    price: '800',
    image: 'https://i.pinimg.com/736x/19/47/b9/1947b9354eb6c7e2f5b43ef004053286.jpg',
  },
];

// Animation variants for Framer Motion
const cardVariants = {
  offscreen: {
    y: 50,
    opacity: 0
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  }
};

const FeaturedTours = () => {
  return (
    <section id="featured-tours" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
            Popular Tours
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
            Explore our best-selling adventures, loved by hikers from all over the world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredTours.map((tour, index) => (
            <motion.div
              key={tour.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden group transform hover:-translate-y-2 transition-transform duration-300 ease-in-out"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              transition={{ delay: index * 0.1 }}
            >
              <div className="relative">
                <img src={tour.image} alt={tour.name} className="w-full h-56 object-cover" />
                <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  From ${tour.price}
                </div>
                <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 flex items-center text-white">
                    <MapPin size={16} className="mr-2"/>
                    <h3 className="text-xl font-bold">{tour.name}</h3>
                </div>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-center mb-4 text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex items-center">
                    <Clock size={14} className="mr-1.5 text-green-500" />
                    <span>{tour.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <BarChart2 size={14} className="mr-1.5 text-green-500" />
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
                <button className="w-full flex justify-center items-center gap-2 bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300 px-4 py-3 rounded-lg font-semibold hover:bg-green-200 dark:hover:bg-green-800/60 transition-colors duration-300">
                  View Details
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-16">
            <button className="bg-green-600 text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-green-700 transition-transform transform hover:scale-105">
                Explore All Tours
            </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedTours;
