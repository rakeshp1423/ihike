import React from 'react';
import { motion } from 'framer-motion';
import { Search, Edit3, ShieldCheck, Mountain } from 'lucide-react';

const steps = [
  {
    icon: <Search size={32} className="text-green-600 dark:text-green-500" />,
    title: 'Step 1: Explore',
    description: 'Browse our curated trails or use the search to find your perfect hike.',
  },
  {
    icon: <Edit3 size={32} className="text-green-600 dark:text-green-500" />,
    title: 'Step 2: Customize',
    description: 'Select your preferred dates, group size, and any add-ons.',
  },
  {
    icon: <ShieldCheck size={32} className="text-green-600 dark:text-green-500" />,
    title: 'Step 3: Book Securely',
    description: 'Confirm your trip with our easy and secure payment system.',
  },
  {
    icon: <Mountain size={32} className="text-green-600 dark:text-green-500" />,
    title: 'Step 4: Adventure!',
    description: 'Get ready for an unforgettable experience with our expert guides.',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
            Your Adventure in 4 Easy Steps
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
            We've streamlined the process so you can focus on the excitement of the journey ahead.
          </p>
        </div>

        <motion.div 
          className="relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={containerVariants}
        >
          {/* Dotted line connector for desktop */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-px -translate-y-1/2">
            <svg width="100%" height="2">
              <line x1="0" y1="1" x2="100%" y2="1" strokeWidth="2" strokeDasharray="8, 16" className="stroke-gray-300 dark:stroke-gray-600"/>
            </svg>
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {steps.map((step, index) => (
              <motion.div key={index} className="text-center" variants={itemVariants}>
                <div className="relative inline-flex items-center justify-center w-24 h-24 mb-6 bg-green-100 dark:bg-gray-700 rounded-full">
                  {/* Circle for the step number */}
                  <div className="absolute -top-2 -right-2 flex items-center justify-center w-8 h-8 bg-green-600 text-white font-bold text-sm rounded-full">
                    {index + 1}
                  </div>
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
