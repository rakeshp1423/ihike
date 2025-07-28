import React from 'react'
import { motion } from 'framer-motion'
import { UserCircle2 } from 'lucide-react'

const guides = [
  {
    name: 'Aarav Singh',
    bio: 'Certified mountain guide with over 10 years of experience leading Himalayan treks.',
    image: 'https://placehold.co/200x200?text=Aarav',
  },
  {
    name: 'Meera Kapoor',
    bio: 'Nature lover and wildlife expert passionate about eco-friendly travel.',
    image: 'https://placehold.co/200x200?text=Meera',
  },
  {
    name: 'Dev Joshi',
    bio: 'Adventure junkie who has summited several 6,000m peaks in Nepal and India.',
    image: 'https://placehold.co/200x200?text=Dev',
  },
]

const MeetTheGuides = () => {
  return (
    <section id="guides" className="bg-gray-100 dark:bg-gray-900 py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold text-gray-800 dark:text-white mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Meet Our Expert Guides
        </motion.h2>
        <motion.p
          className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Passionate. Experienced. Friendly. Our guides are here to ensure your hiking journey is safe and unforgettable.
        </motion.p>

        <div className="grid gap-8 md:grid-cols-3">
          {guides.map((guide, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 text-center hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <img
                src={guide.image}
                alt={guide.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{guide.name}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">{guide.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MeetTheGuides
