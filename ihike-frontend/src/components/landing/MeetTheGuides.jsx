import React from 'react'
import { motion } from 'framer-motion'
import { UserCircle2 } from 'lucide-react'

const guides = [
  {
    name: 'Khusi Yadav',
    bio: 'Certified mountain guide with over 10 years of experience leading Himalayan treks.',
    image: 'https://i.pinimg.com/736x/b0/30/88/b0308897ab62e254d79853f667410ac6.jpg',
  },
  {
    name: 'Meera Kapoor',
    bio: 'Nature lover and wildlife expert passionate about eco-friendly travel.',
    image: 'https://i.pinimg.com/736x/57/5a/b3/575ab3182c51aad2bd18b6628c68210b.jpg',
  },
  {
    name: 'Misthi Joshi',
    bio: 'Adventure junkie who has summited several 6,000m peaks in Nepal and India.',
    image: 'https://i.pinimg.com/736x/8d/4e/7e/8d4e7e76d423d307be0f78ff26636eb1.jpg',
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
