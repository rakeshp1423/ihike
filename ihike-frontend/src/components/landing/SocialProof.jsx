import { Search } from "lucide-react"

export default function SocialProof() {
  const logos = [
    "/logos/rei.png",
    "/logos/decathlon.png",
    "/logos/national-geographic.png",
    "/logos/patagonia.png",
    "/logos/the-north-face.png",
    "/logos/trekking-logo.png",
  ]

  return (
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

      {/* Logo Scroller */}
      <div className="overflow-hidden py-4">
        <div className="flex animate-scroll whitespace-nowrap gap-16 px-8">
          {logos.concat(logos).map((src, index) => (
            <img
              key={index}
              src={src}
              alt="Logo"
              className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
