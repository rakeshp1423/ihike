import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Lock, Eye, EyeOff, ArrowLeft } from 'lucide-react';

// A simple SVG for the Google icon
const GoogleIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 48 48">
    <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039L38.802 9.92C34.553 6.186 29.658 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"></path>
    <path fill="#FF3D00" d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.553 6.186 29.658 4 24 4C16.318 4 9.656 8.337 6.306 14.691z"></path>
    <path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"></path>
    <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303c-.792 2.237-2.231 4.166-4.087 5.574l6.19 5.238C41.382 36.661 44 30.637 44 24c0-1.341-.138-2.65-.389-3.917z"></path>
  </svg>
);

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div 
      className="min-h-screen bg-cover bg-center flex items-center justify-center px-4"
      style={{ backgroundImage: "url('https://placehold.co/1920x1080/1F2937/FFFFFF?text=iHike+Background')" }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative w-full max-w-md bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8"
      >
        <a href="/" className="absolute top-4 left-4 text-white/70 hover:text-white transition-colors">
            <ArrowLeft size={24} />
        </a>

        <div className="text-center mb-8">
          <a href="#" className="text-4xl font-bold text-white" style={{ fontFamily: "'Pacifico', cursive" }}>
            iHike
          </a>
          <p className="text-white/80 mt-2">Welcome back, adventurer!</p>
        </div>

        <form onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-6">
            {/* Email Input */}
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50" size={20} />
              <input
                type="email"
                placeholder="Email Address"
                required
                className="w-full bg-white/20 text-white placeholder-white/70 pl-12 pr-4 py-3 rounded-lg border border-white/30 focus:outline-none focus:ring-2 focus:ring-green-400 transition-all"
              />
            </div>
            
            {/* Password Input */}
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50" size={20} />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                required
                className="w-full bg-white/20 text-white placeholder-white/70 pl-12 pr-12 py-3 rounded-lg border border-white/30 focus:outline-none focus:ring-2 focus:ring-green-400 transition-all"
              />
              <button 
                type="button" 
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          <div className="flex justify-end mt-4">
            <a href="#" className="text-sm text-white/70 hover:text-white hover:underline">
              Forgot Password?
            </a>
          </div>

          <button 
            type="submit" 
            className="w-full bg-green-600 text-white font-bold py-3 rounded-lg mt-8 hover:bg-green-700 transition-all transform hover:scale-105"
          >
            Login
          </button>
        </form>

        <div className="flex items-center my-8">
          <hr className="w-full border-t border-white/20" />
          <span className="px-4 text-white/70 text-sm">OR</span>
          <hr className="w-full border-t border-white/20" />
        </div>
        
        <div className="space-y-4">
          <button className="w-full flex items-center justify-center gap-3 bg-white/90 text-gray-800 font-semibold py-3 rounded-lg hover:bg-white transition-all">
            <GoogleIcon />
            Continue with Google
          </button>
        </div>

        <p className="text-center text-white/70 mt-8">
          Don't have an account?{' '}
          <a href="/signup" className="font-semibold text-white hover:underline">
            Sign up
          </a>
        </p>

      </motion.div>
    </div>
  );
};

export default LoginPage;
