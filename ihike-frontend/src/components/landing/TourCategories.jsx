import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const categories = [
  {
    name: 'Mountain Peaks',
    image: 'https://placehold.co/600x800/22C55E/FFFFFF?text=Peaks',
    description: 'Conquer majestic summits and witness breathtaking panoramic views.',
  },
  {
    name: 'Coastal Trails',
    image: 'https://placehold.co/600x800/3B82F6/FFFFFF?text=Coastal',
    description: 'Experience the stunning beauty of ocean cliffs and sandy shores.',
  },
  {
    name: 'Forest Walks',
    image: 'https://placehold.co/600x800/F59E0B/FFFFFF?text=Forests',
    description: 'Immerse yourself in the tranquility of ancient woods and lush greenery.',
  },
  {
    name: 'Family Friendly',
    image: 'https://placehold.co/600x800/A855F7/FFFFFF?text=Family',
    description: 'Easy-going trails perfect for creating lasting memories with loved ones.',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut'
    },
  },
};

const TourCategories = () => {
  return (
    <section id="tour-categories" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
            Discover Hikes by Interest
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
            Whatever your passion, there's a trail waiting for you. Find the journey that calls to you.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {categories.map((category) => (
            <motion.div
              key={category.name}
              variants={cardVariants}
              className="relative rounded-xl overflow-hidden h-96 group cursor-pointer shadow-lg"
            >
              <div
                className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-500 ease-in-out group-hover:scale-110"
                style={{ backgroundImage: `url(${category.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
              <div className="relative h-full flex flex-col justify-end p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                <p className="text-gray-200 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 h-0 group-hover:h-auto mb-4">
                  {category.description}
                </p>
                <div className="flex items-center font-semibold text-green-400 transform -translate-x-4 group-hover:translate-x-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                  <span>Explore</span>
                  <ArrowRight size={18} className="ml-2" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TourCategories;
