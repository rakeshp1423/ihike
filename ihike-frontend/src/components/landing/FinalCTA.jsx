import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const FinalCTA = () => {
  return (
    <section id="final-cta" className="relative py-24 md:py-32 bg-cover bg-center bg-fixed" style={{ backgroundImage: "url('https://placehold.co/1920x800/22C55E/FFFFFF?text=Your+Adventure+Awaits')" }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            Ready to Start Your Adventure?
          </h2>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-10">
            The mountains are calling. Let's get you there. Browse our expertly curated hikes and find the one that speaks to you.
          </p>
          <button className="group inline-flex items-center justify-center bg-green-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-green-700 transition-transform transform hover:scale-105 shadow-2xl">
            Find Your Perfect Hike
            <ArrowRight size={22} className="ml-3 transform group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
