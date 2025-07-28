import { useEffect, useState } from "react"
import Lenis from "@studio-freight/lenis"
import { motion, AnimatePresence } from "framer-motion"

const bgImages = [
  "/images/hero1.jpg",
  "/images/hero2.jpg",
  "/images/hero3.jpg"
]

export default function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const lenis = new Lenis()
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % bgImages.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative isolate h-screen w-full overflow-hidden z-0">
      {/* Slideshow Background confined only to Hero */}
      <div className="absolute inset-0 -z-10 isolate overflow-hidden">
        <AnimatePresence>
          <motion.div
            key={currentImage}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 1 }}
            className="absolute inset-0 bg-cover bg-center z-[-1]"
            style={{ backgroundImage: `url(${bgImages[currentImage]})` }}
          >
            <div className="absolute inset-0 bg-black/30" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 h-screen flex items-center justify-center text-center px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="text-white max-w-3xl"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
            Discover Incredible Trails
          </h1>
          <p className="text-lg md:text-xl mb-6 drop-shadow-sm">
            Unleash your adventurous spirit — explore the most scenic hiking trails across the country.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <button className="bg-[#FFD700] text-black font-semibold px-6 py-3 rounded-full shadow hover:bg-yellow-400 transition">
              Explore Tours
            </button>
            <button className="bg-white text-black font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-200 transition">
              Plan My Trip
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
