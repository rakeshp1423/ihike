import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Download } from 'lucide-react';

const NewsletterSignup = () => {
  return (
    <section id="newsletter" className="bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6 py-20">
        <motion.div 
          className="bg-green-600 dark:bg-green-700 rounded-2xl shadow-xl text-white p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {/* Left Side: Text Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center justify-center w-16 h-16 mb-4 bg-white/20 rounded-full">
              <Download size={32} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Don't Miss Out!
            </h2>
            <p className="text-lg text-green-100 max-w-2xl">
              Get a FREE 'Hiking Prep Checklist' PDF and access to exclusive deals when you join our newsletter.
            </p>
          </div>

          {/* Right Side: Form */}
          <form className="w-full max-w-md" onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-grow">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="email"
                  placeholder="Enter your email address"
                  required
                  className="w-full pl-12 pr-4 py-4 rounded-lg bg-white dark:bg-gray-800 text-gray-800 dark:text-white placeholder-gray-500 border border-transparent focus:outline-none focus:ring-2 focus:ring-green-300"
                />
              </div>
              <button 
                type="submit" 
                className="bg-gray-900/80 dark:bg-black/50 text-white font-semibold px-6 py-4 rounded-lg hover:bg-black transition-colors transform hover:scale-105"
              >
                Sign Up
              </button>
            </div>
            <p className="text-xs text-green-200 mt-3 text-center sm:text-left">
              We respect your privacy. No spam, ever.
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsletterSignup;
