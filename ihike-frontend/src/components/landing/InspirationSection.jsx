import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    category: 'Gear',
    title: 'The Ultimate Packing List for a 3-Day Hike',
    excerpt: 'Never forget a thing. Our comprehensive guide ensures you have everything you need for a short trek.',
    image: 'https://placehold.co/600x400/10B981/FFFFFF?text=Packing+List',
    link: '#',
  },
  {
    id: 2,
    category: 'Beginner Tips',
    title: 'Top 5 Beginner Hikes in the Himalayas',
    excerpt: 'New to hiking? These stunning yet manageable trails are the perfect place to start your journey.',
    image: 'https://placehold.co/600x400/3B82F6/FFFFFF?text=Beginner+Hikes',
    link: '#',
  },
  {
    id: 3,
    category: 'Training',
    title: 'How to Train for a High-Altitude Trek',
    excerpt: 'Prepare your body for the demands of high altitudes with our expert-approved fitness plan.',
    image: 'https://placehold.co/600x400/8B5CF6/FFFFFF?text=Training',
    link: '#',
  },
];

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

const InspirationSection = () => {
  return (
    <section id="inspiration" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
            Get Inspired for Your Next Trip
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
            From packing lists to training guides, our blog is your go-to resource for all things hiking.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              className="bg-white dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden group"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              transition={{ delay: index * 0.1 }}
            >
              <div className="overflow-hidden">
                <img src={post.image} alt={post.title} className="w-full h-56 object-cover transform group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-6">
                <p className="text-sm font-semibold text-green-600 dark:text-green-400 mb-2">{post.category}</p>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">{post.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">{post.excerpt}</p>
                <a href={post.link} className="font-semibold text-gray-800 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-300 flex items-center">
                  Read More
                  <ArrowRight size={18} className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InspirationSection;
