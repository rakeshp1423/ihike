import React, { useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { Users, Tent, MessageSquare, ArrowRight } from 'lucide-react';

const actions = [
  {
    icon: <Users size={24} className="text-blue-500" />,
    title: 'Plan a Custom Trip',
    description: 'Organize a private trek for your group.',
    link: '/custom-trip',
    color: 'blue'
  },
  {
    icon: <Tent size={24} className="text-purple-500" />,
    title: 'Rent Hiking Gear',
    description: 'Browse our selection of quality equipment.',
    link: '/gear-rental',
    color: 'purple'
  },
  {
    icon: <MessageSquare size={24} className="text-orange-500" />,
    title: 'Contact Support',
    description: 'Our team is here to help you with any questions.',
    link: '/contact',
    color: 'orange'
  },
];

// This is a new, self-contained component for each interactive card
const InteractiveActionCard = ({ action }) => {
    const ref = useRef(null);

    // Motion values to track mouse position
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Spring animation for smooth return
    const springConfig = { stiffness: 150, damping: 20 };
    const springX = useSpring(x, springConfig);
    const springY = useSpring(y, springConfig);

    // Transform mouse position into a 3D rotation
    const rotateX = useTransform(springY, [-100, 100], [15, -15]);
    const rotateY = useTransform(springX, [-100, 100], [-15, 15]);

    const handleMouseMove = (e) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();
        // Calculate mouse position relative to the center of the card
        const mouseX = e.clientX - rect.left - rect.width / 2;
        const mouseY = e.clientY - rect.top - rect.height / 2;
        
        x.set(mouseX);
        y.set(mouseY);
    };

    const handleMouseLeave = () => {
        // Reset mouse position on leave
        x.set(0);
        y.set(0);
    };

    return (
        <a href={action.link}>
            <motion.div
                ref={ref}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                    rotateX,
                    rotateY,
                    transformStyle: 'preserve-3d',
                }}
                className="relative bg-white p-6 rounded-xl shadow-lg h-full flex flex-col items-center text-center transition-shadow duration-300 hover:shadow-2xl"
            >
                {/* This div creates the 3D effect for the inner elements */}
                <div style={{ transform: 'translateZ(40px)' }}>
                    <div className={`flex-shrink-0 w-16 h-16 flex items-center justify-center bg-${action.color}-100 rounded-full mb-4`}>
                        {action.icon}
                    </div>
                    <h3 className="font-bold text-lg text-gray-800 mb-2">{action.title}</h3>
                    <p className="text-sm text-gray-500 mb-4">{action.description}</p>
                    <div className="flex items-center justify-center font-semibold text-green-600">
                        Go <ArrowRight size={16} className="ml-1" />
                    </div>
                </div>
            </motion.div>
        </a>
    );
};


const QuickActions = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Quick Actions</h2>
      {/* The perspective wrapper is crucial for the 3D effect */}
      <div style={{ perspective: '1000px' }} className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {actions.map((action) => (
          <InteractiveActionCard key={action.title} action={action} />
        ))}
      </div>
    </motion.div>
  );
};

export default QuickActions;
