import React from 'react';
import { motion } from 'framer-motion';
import { BarChart2, ArrowRight } from 'lucide-react';

const PersonalizedRecommendations = ({ pastHikes, allHikes }) => {
  // Determine the recommendations with safer logic
  const getRecommendations = () => {
    // 1. First, check if we have a list of all hikes to recommend from. If not, we can't do anything.
    if (!allHikes || allHikes.length === 0) {
      return { reason: '', hikes: [] };
    }

    // 2. If the user has no past hikes, fallback to showing popular ones.
    if (!pastHikes || pastHikes.length === 0) {
      return {
        reason: 'Popular with other hikers',
        hikes: allHikes.slice(0, 2) // Now this is safe because we know allHikes exists
      };
    }

    // 3. If we have past hikes, proceed with the original recommendation logic.
    const lastHike = pastHikes[0];
    const targetDifficulty = lastHike.difficulty;
    const completedHikeNames = new Set(pastHikes.map(h => h.name));

    const recommendedHikes = allHikes.filter(hike => 
      hike.difficulty === targetDifficulty && !completedHikeNames.has(hike.name)
    );

    if (recommendedHikes.length > 0) {
      return {
        reason: `Because you enjoyed the ${lastHike.name}`,
        hikes: recommendedHikes.slice(0, 2)
      };
    } else {
      // Fallback if no specific recommendations are found, but still filter out completed hikes.
      return {
        reason: 'Popular with other hikers',
        hikes: allHikes.filter(h => !completedHikeNames.has(h.name)).slice(0, 2)
      };
    }
  };

  const { reason, hikes: recommendations } = getRecommendations();

  // Don't render the component at all if there's nothing to show.
  if (!recommendations || recommendations.length === 0) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.8 }}
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-1">Recommended For You</h2>
      <p className="text-sm text-gray-500 mb-4">{reason}</p>
      
      <div className="space-y-4">
        {recommendations.map((hike) => (
          <div
            key={hike.id}
            className="bg-white p-3 rounded-xl shadow-lg flex items-center gap-4 group transition-all hover:shadow-xl"
          >
            <img 
                src={hike.image} 
                alt={hike.name}
                className="w-20 h-20 rounded-lg object-cover"
            />
            <div className="flex-grow">
              <p className="font-bold text-gray-800">{hike.name}</p>
              <p className="text-sm text-gray-500 flex items-center gap-1.5">
                <BarChart2 size={12} /> {hike.difficulty}
              </p>
            </div>
            <a
              href="#"
              className="p-2 rounded-full bg-gray-100 group-hover:bg-green-600 text-gray-500 group-hover:text-white transition-colors"
              aria-label={`View details for ${hike.name}`}
            >
              <ArrowRight size={18} />
            </a>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default PersonalizedRecommendations;
