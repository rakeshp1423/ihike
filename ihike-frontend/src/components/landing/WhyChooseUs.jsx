import React from 'react';
import { motion } from 'framer-motion';
import { Users, Shield, Leaf, Package } from 'lucide-react';

const uspData = [
  {
    icon: <Users size={24} className="text-green-600" />,
    title: 'Expert Local Guides',
    description: 'Hike with certified guides who know the trails, history, and nature like the back of their hand.',
  },
  {
    icon: <Shield size={24} className="text-green-600" />,
    title: 'Safety First',
    description: 'Your safety is our priority. We provide top-tier equipment and have comprehensive emergency protocols.',
  },
  {
    icon: <Leaf size={24} className="text-green-600" />,
    title: 'Sustainable Travel',
    description: "We're committed to responsible tourism that protects nature and supports local communities.",
  },
  {
    icon: <Package size={24} className="text-green-600" />,
    title: 'All-Inclusive Packages',
    description: 'Forget the hassle. Our tours include permits, meals, accommodation, and transport.',
  },
];

const listVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
            Why Hike With Us?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
            We go the extra mile to ensure your adventure is safe, memorable, and responsible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <motion.div 
            className="relative h-96 lg:h-full w-full"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7 }}
          >
            <img 
              src="https://placehold.co/600x800/10B981/FFFFFF?text=Happy+Hiker" 
              alt="Happy hiker on a mountain" 
              className="absolute inset-0 w-full h-full object-cover rounded-xl shadow-2xl"
            />
          </motion.div>

          {/* USP List Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={listVariants}
            className="space-y-8"
          >
            {uspData.map((item, index) => (
              <motion.div key={index} className="flex items-start gap-4" variants={itemVariants}>
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-green-100 dark:bg-gray-800 rounded-full">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mt-1">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
