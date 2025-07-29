import { Search } from "lucide-react";

export default function SocialProof() {
  const logos = [
    { name: "REI", url: "https://cdn.worldvectorlogo.com/logos/rei.svg" },
    { name: "Decathlon", url: "https://cdn.worldvectorlogo.com/logos/decathlon-1.svg" },
    { name: "National Geographic", url: "https://i.pinimg.com/736x/18/25/d2/1825d2a89fca8bd9095f65037f2fa987.jpg" },
    { name: "Patagonia", url: "https://cdn.worldvectorlogo.com/logos/patagonia.svg" },
    { name: "The North Face", url: "https://cdn.worldvectorlogo.com/logos/the-north-face-1.svg" },
    { name: "TripAdvisor", url: "https://cdn.worldvectorlogo.com/logos/tripadvisor.svg" },
  ];

  return (
    <>
      {/* This style tag is necessary for the custom animation. 
        In a real project, this would go in your main CSS file or tailwind.config.js.
      */}
      <style jsx global>{`
        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-100%);
          }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
      `}</style>

      <section className="w-full bg-gray-100 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Explore Our Hikes</h2>
          <p className="text-gray-600 mb-8">
            Find the perfect trek that matches your spirit of adventure. Filter by destination, difficulty, and more.
          </p>

          <div className="bg-white shadow-md rounded-xl p-4 flex flex-col md:flex-row items-center gap-4 mb-12">
            <div className="relative flex-grow w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search for a destination..."
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <select className="w-full md:w-auto px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500">
              <option>Difficulty (All)</option>
              <option>Easy</option>
              <option>Moderate</option>
              <option>Difficult</option>
            </select>

            <select className="w-full md:w-auto px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500">
              <option>Duration (All)</option>
              <option>1-3 Days</option>
              <option>4-7 Days</option>
              <option>8+ Days</option>
            </select>

            <button className="w-full md:w-auto bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 font-semibold">
              Search
            </button>
          </div>
        </div>

        {/* Logo Scroller with Fade Effect */}
        <div className="relative w-full max-w-5xl mx-auto overflow-hidden py-4">
          {/* Left Fade */}
          <div className="absolute left-0 top-0 bottom-0 w-1/4 bg-gradient-to-r from-gray-100 to-transparent z-10"></div>
          
          <div className="flex animate-scroll whitespace-nowrap">
            {/* We render the logos twice to create the seamless loop */}
            {[...logos, ...logos].map((logo, index) => (
              <div key={index} className="flex-shrink-0 mx-8" style={{ width: '160px' }}>
                <img
                  src={logo.url}
                  alt={logo.name}
                  className="h-10 w-full object-contain filter grayscale hover:grayscale-0 transition duration-300"
                />
              </div>
            ))}
          </div>

          {/* Right Fade */}
          <div className="absolute right-0 top-0 bottom-0 w-1/4 bg-gradient-to-l from-gray-100 to-transparent z-10"></div>
        </div>
      </section>
    </>
  )
}
