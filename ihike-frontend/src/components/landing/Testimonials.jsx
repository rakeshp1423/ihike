import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  {
    id: 1,
    name: 'Aarav Sharma',
    trip: 'Everest Base Camp Trek',
    avatar: 'https://placehold.co/100x100/818CF8/ffffff?text=AS',
    quote: "An absolutely life-changing experience. The guides from iHike were not just professionals; they were mentors and friends. Every detail was perfectly organized. I felt safe and supported throughout the entire journey.",
  },
  {
    id: 2,
    name: 'Saanvi Patel',
    trip: 'Valley of Flowers',
    avatar: 'https://placehold.co/100x100/F472B6/ffffff?text=SP',
    quote: "The beauty of the valley was matched only by the quality of the service. The food was delicious, the camps were comfortable, and our guide was incredibly knowledgeable about the local flora. Highly recommended!",
  },
  {
    id: 3,
    name: 'Rohan Mehta',
    trip: 'Annapurna Circuit',
    avatar: 'https://placehold.co/100x100/34D399/ffffff?text=RM',
    quote: "As a solo traveler, I was a bit nervous, but the iHike team made me feel like part of a family. The group camaraderie was fantastic, and the logistics were flawless. I'll be booking my next trek with them for sure.",
  },
    {
    id: 4,
    name: 'Diya Singh',
    trip: 'Hampta Pass Trek',
    avatar: 'https://placehold.co/100x100/FBBF24/ffffff?text=DS',
    quote: "Challenging but incredibly rewarding. The landscapes were surreal, from green valleys to snowy passes. The iHike crew managed everything perfectly, allowing us to just soak in the experience. 10/10!",
  }
];

const cardVariants = {
  offscreen: {
    y: 100,
    opacity: 0
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 1
    }
  }
};

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
            Stories from the Trail
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our happy hikers have to say about their adventures with us.
          </p>
        </div>

        {/* Testimonials for Desktop - Grid Layout */}
        <div className="hidden md:grid grid-cols-1 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg flex flex-col"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.4 }}
              variants={cardVariants}
            >
              <Quote className="w-8 h-8 text-green-200 dark:text-green-800 mb-4" fill="currentColor" />
              <p className="text-gray-600 dark:text-gray-300 mb-6 flex-grow">"{testimonial.quote}"</p>
              <div className="flex items-center mt-auto">
                <img src={testimonial.avatar} alt={testimonial.name} className="w-14 h-14 rounded-full mr-4 border-2 border-green-500" />
                <div>
                  <h4 className="font-bold text-lg text-gray-800 dark:text-white">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Trek: {testimonial.trip}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Testimonials for Mobile - Carousel Layout */}
        <div className="md:hidden">
            <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                loop={true}
                className="pb-12" // Padding bottom for pagination bullets
            >
                {testimonials.map((testimonial) => (
                    <SwiperSlide key={testimonial.id}>
                        <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg flex flex-col h-full">
                            <Quote className="w-8 h-8 text-green-200 dark:text-green-800 mb-4" fill="currentColor" />
                            <p className="text-gray-600 dark:text-gray-300 mb-6 flex-grow">"{testimonial.quote}"</p>
                            <div className="flex items-center mt-auto">
                                <img src={testimonial.avatar} alt={testimonial.name} className="w-14 h-14 rounded-full mr-4 border-2 border-green-500" />
                                <div>
                                    <h4 className="font-bold text-lg text-gray-800 dark:text-white">{testimonial.name}</h4>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">Trek: {testimonial.trip}</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
