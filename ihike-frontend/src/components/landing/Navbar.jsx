import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'; // Add this import if using React Router

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const toggleMenu = () => setMenuOpen(!menuOpen)

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/40 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1
          className={`text-2xl font-bold cursor-pointer font-[Fredoka] ${
            scrolled ? 'text-black' : 'text-white'
          }`}
          onClick={() => window.location.reload()}
        >
          iHike
        </h1>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6 items-center">
          <a href="#tours" className={`${scrolled ? 'text-black' : 'text-white'} font-medium hover:underline`}>Tours</a>
          <a href="#how-it-works" className={`${scrolled ? 'text-black' : 'text-white'} font-medium hover:underline`}>How It Works</a>
          <a href="#guides" className={`${scrolled ? 'text-black' : 'text-white'} font-medium hover:underline`}>Guides</a>
          <a href="#testimonials" className={`${scrolled ? 'text-black' : 'text-white'} font-medium hover:underline`}>Testimonials</a>
          <a href="#blog" className={`${scrolled ? 'text-black' : 'text-white'} font-medium hover:underline`}>Blog</a>
          <Link to="/login">
            <button className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition text-sm">
              Login / Sign Up
            </button>
          </Link>
        </div>

        {/* Hamburger */}
        <div className="md:hidden z-50">
          <button onClick={toggleMenu}>
            {menuOpen ? (
              <X size={28} className={scrolled ? 'text-black' : 'text-white'} />
            ) : (
              <Menu size={28} className={scrolled ? 'text-black' : 'text-white'} />
            )}
          </button>
        </div>
      </div>

      {/* Slide-in mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-white/90 backdrop-blur-md z-40"
          >
            <div className="flex flex-col justify-between h-full p-6">
              <div className="space-y-6 text-left mt-8">
                <a onClick={toggleMenu} href="#tours" className="block text-lg font-semibold text-gray-800">Tours</a>
                <a onClick={toggleMenu} href="#how-it-works" className="block text-lg font-semibold text-gray-800">How It Works</a>
                <a onClick={toggleMenu} href="#guides" className="block text-lg font-semibold text-gray-800">Meet the Guides</a>
                <a onClick={toggleMenu} href="#testimonials" className="block text-lg font-semibold text-gray-800">Testimonials</a>
                <a onClick={toggleMenu} href="#blog" className="block text-lg font-semibold text-gray-800">Blog</a>
                <a onClick={toggleMenu} href="#faq" className="block text-lg font-semibold text-gray-800">FAQs</a>
                <Link to="/login" onClick={toggleMenu}>
                  <button
                    className="w-full bg-green-600 text-white text-sm py-2 rounded-full hover:bg-green-700 transition"
                  >
                    Login / Sign Up
                  </button>
                </Link>
              </div>

              {/* Bottom Support Links */}
              <div className="pt-6 border-t border-gray-300 text-sm text-gray-700 space-y-2">
                <a href="#support" className="block">Support</a>
                <a href="#contact" className="block">Contact Us</a>
                <a href="#privacy" className="block">Privacy Policy</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
