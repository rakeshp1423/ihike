import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, MapPin, Clock, BarChart2, Star, ListFilter, X, Check, ShieldAlert } from 'lucide-react';

// Import layout components
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// MOCK DATA for all available hikes with updated prices and real images
const allHikes = [
  { id: 1, name: 'Everest Base Camp', location: 'Nepal', duration: 12, difficulty: 'Challenging', rating: 4.9, price: 45000, image: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?q=80&w=2070&auto=format&fit=crop', description: 'The classic trek to the foot of the world\'s highest mountain, offering breathtaking views and rich Sherpa culture.', included: ['Flights (KTM-Lukla-KTM)', 'Accommodation', 'All Meals', 'Guide & Porters', 'Permits'], excluded: ['International Flights', 'Visa Fees', 'Personal Expenses'] },
  { id: 2, name: 'Annapurna Circuit', location: 'Nepal', duration: 14, difficulty: 'Challenging', rating: 4.8, price: 55000, image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop', description: 'A legendary trek circling the Annapurna massif, showcasing diverse landscapes from lush forests to arid peaks.', included: ['Accommodation', 'All Meals', 'Guide & Porters', 'Permits'], excluded: ['Flights', 'Visa Fees', 'Personal Expenses'] },
  { id: 3, name: 'Valley of Flowers', location: 'Uttarakhand, India', duration: 6, difficulty: 'Moderate', rating: 4.7, price: 15000, image: 'https://images.unsplash.com/photo-1604435249408-a436a5a4a4a3?q=80&w=1974&auto=format&fit=crop', description: 'A vibrant monsoon trek into a UNESCO World Heritage site, famous for its meadows of endemic alpine flowers.', included: ['Transport (Rishikesh-Govindghat)', 'Accommodation', 'All Meals', 'Guide', 'Permits'], excluded: ['Transport to Rishikesh', 'Personal Expenses'] },
  { id: 4, name: 'Hampta Pass', location: 'Himachal, India', duration: 5, difficulty: 'Moderate', rating: 4.8, price: 12500, image: 'https://images.unsplash.com/photo-1605249199390-04b3a436de3a?q=80&w=2070&auto=format&fit=crop', description: 'A dramatic pass crossing that connects the lush Kullu Valley with the arid landscapes of Lahaul.', included: ['Transport (Manali-Jobra)', 'Accommodation (Camps)', 'All Meals', 'Guide & Cook', 'Permits'], excluded: ['Transport to Manali', 'Personal Expenses'] },
  { id: 5, name: 'Roopkund Trek', location: 'Uttarakhand, India', duration: 8, difficulty: 'Difficult', rating: 4.9, price: 18500, image: 'https://images.unsplash.com/photo-1598128362369-f539b1a73a96?q=80&w=2070&auto=format&fit=crop', description: 'A thrilling high-altitude trek to the mysterious skeletal lake, surrounded by stunning Himalayan peaks.', included: ['Transport (Lohajung base)', 'Accommodation', 'All Meals', 'Guide & Porters', 'Permits', 'Equipment'], excluded: ['Transport to Lohajung', 'Personal Expenses'] },
  { id: 6, name: 'Triund Trek', location: 'Himachal, India', duration: 2, difficulty: 'Easy', rating: 4.6, price: 6000, image: 'https://images.unsplash.com/photo-1584693786595-5de4a2755a53?q=80&w=2070&auto=format&fit=crop', description: 'A short and rewarding trek offering panoramic views of the Dhauladhar range, perfect for beginners.', included: ['Accommodation (Camps)', 'Dinner & Breakfast', 'Guide'], excluded: ['Transport to McLeod Ganj', 'Lunch'] },
  { id: 7, name: 'Brahmatal Trek', location: 'Uttarakhand, India', duration: 6, difficulty: 'Moderate', rating: 4.7, price: 14000, image: 'https://images.unsplash.com/photo-1626621341526-76a932b7b3f4?q=80&w=1974&auto=format&fit=crop', description: 'A beautiful winter trek with stunning views of Mt. Trishul and Nanda Ghunti, and frozen alpine lakes.', included: ['Transport (Lohajung base)', 'Accommodation', 'All Meals', 'Guide', 'Permits'], excluded: ['Transport to Lohajung', 'Personal Expenses'] },
  { id: 8, name: 'Tour du Mont Blanc', location: 'Europe', duration: 11, difficulty: 'Challenging', rating: 4.9, price: 85000, image: 'https://images.unsplash.com/photo-1501555088652-021faa106b9b?q=80&w=2073&auto=format&fit=crop', description: 'An iconic long-distance trek through France, Italy, and Switzerland, circumnavigating the Mont Blanc massif.', included: ['Accommodation (Huts/Hotels)', 'Breakfast & Dinner', 'Guide', 'Luggage Transfer'], excluded: ['Flights', 'Lunches', 'Personal Expenses'] },
  { id: 9, name: 'Cinque Terre', location: 'Europe', duration: 4, difficulty: 'Easy', rating: 4.8, price: 40000, image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=2070&auto=format&fit=crop', description: 'A scenic coastal walk connecting five picturesque villages clinging to cliffs along the Italian Riviera.', included: ['Accommodation', 'Breakfast', 'Guide', 'Train/Boat Tickets'], excluded: ['Flights', 'Other Meals', 'Personal Expenses'] },
  { id: 10, name: 'Kashmir Great Lakes', location: 'Kashmir, India', duration: 7, difficulty: 'Moderate', rating: 4.9, price: 17000, image: 'https://images.unsplash.com/photo-1549442243-a61874a7b6a2?q=80&w=2070&auto=format&fit=crop', description: 'A breathtaking trek across lush meadows and past a series of stunning high-altitude alpine lakes.', included: ['Transport (Srinagar base)', 'Accommodation', 'All Meals', 'Guide & Horses', 'Permits'], excluded: ['Flights to Srinagar', 'Personal Expenses'] },
  { id: 11, name: 'Markha Valley Trek', location: 'Ladakh, India', duration: 9, difficulty: 'Difficult', rating: 4.8, price: 22000, image: 'https://images.unsplash.com/photo-1542693532-532452331590?q=80&w=2070&auto=format&fit=crop', description: 'A classic Ladakh trek through remote landscapes, ancient monasteries, and charming villages.', included: ['Transport (Leh base)', 'Accommodation', 'All Meals', 'Guide & Mules', 'Permits'], excluded: ['Flights to Leh', 'Personal Expenses'] },
  { id: 12, name: 'Sandakphu Trek', location: 'West Bengal, India', duration: 6, difficulty: 'Moderate', rating: 4.7, price: 13000, image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=2070&auto=format&fit=crop', description: 'Walk through the "Sleeping Buddha" range to witness a panoramic view of the world\'s tallest peaks, including Everest and Kanchenjunga.', included: ['Transport (NJP base)', 'Accommodation', 'All Meals', 'Guide', 'Permits'], excluded: ['Flights/Train to NJP', 'Personal Expenses'] },
];

const difficulties = ['Easy', 'Moderate', 'Challenging', 'Difficult'];
const durations = [ { label: 'Any', value: [0, 100] }, { label: '1-3 Days', value: [1, 3] }, { label: '4-7 Days', value: [4, 7] }, { label: '8+ Days', value: [8, 100] }, ];

// --- MODAL COMPONENT ---
const HikeDetailModal = ({ hike, onClose }) => {
    const [activeTab, setActiveTab] = useState('included');

    if (!hike) return null;

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4" onClick={onClose}>
            <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }} className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col" onClick={e => e.stopPropagation()}>
                <div className="relative">
                    <img src={hike.image} alt={hike.name} className="w-full h-64 object-cover rounded-t-2xl" />
                    <button onClick={onClose} className="absolute top-4 right-4 bg-white/50 p-2 rounded-full hover:bg-white"><X size={24} /></button>
                </div>
                <div className="p-6 flex-grow overflow-y-auto">
                    <h2 className="text-3xl font-bold text-gray-800">{hike.name}</h2>
                    <p className="text-gray-500 flex items-center gap-2 mt-1"><MapPin size={16} /> {hike.location}</p>
                    <div className="flex items-center gap-6 my-4 text-center">
                        <div><p className="font-bold text-lg">{hike.duration} Days</p><p className="text-sm text-gray-500">Duration</p></div>
                        <div><p className="font-bold text-lg">{hike.difficulty}</p><p className="text-sm text-gray-500">Difficulty</p></div>
                        <div><p className="font-bold text-lg flex items-center gap-1"><Star size={16} className="text-yellow-400" fill="currentColor"/>{hike.rating}</p><p className="text-sm text-gray-500">Rating</p></div>
                    </div>
                    <p className="text-gray-600 mb-6">{hike.description}</p>
                    
                    <div className="border-b border-gray-200">
                        <nav className="-mb-px flex space-x-6">
                            <button onClick={() => setActiveTab('included')} className={`py-3 px-1 font-semibold ${activeTab === 'included' ? 'border-b-2 border-green-500 text-green-600' : 'text-gray-500'}`}>What's Included</button>
                            <button onClick={() => setActiveTab('excluded')} className={`py-3 px-1 font-semibold ${activeTab === 'excluded' ? 'border-b-2 border-green-500 text-green-600' : 'text-gray-500'}`}>What's Not Included</button>
                        </nav>
                    </div>
                    <div className="py-4">
                        <AnimatePresence mode="wait">
                            <motion.ul key={activeTab} initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -10, opacity: 0 }} className="space-y-2">
                                {hike[activeTab].map(item => (
                                    <li key={item} className="flex items-center gap-3">
                                        {activeTab === 'included' ? <Check size={18} className="text-green-500" /> : <ShieldAlert size={18} className="text-red-500" />}
                                        <span className="text-gray-700">{item}</span>
                                    </li>
                                ))}
                            </motion.ul>
                        </AnimatePresence>
                    </div>
                </div>
                <div className="p-6 border-t border-gray-200 bg-gray-50 flex justify-between items-center rounded-b-2xl">
                    <div>
                        <p className="text-sm text-gray-600">Starting from</p>
                        <p className="text-2xl font-bold text-gray-800">₹{hike.price.toLocaleString('en-IN')}</p>
                    </div>
                    <button className="bg-green-600 text-white font-bold px-8 py-3 rounded-lg hover:bg-green-700 transition-transform transform hover:scale-105">Book Now</button>
                </div>
            </motion.div>
        </motion.div>
    );
};

const ExploreHikesPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedDifficulties, setSelectedDifficulties] = useState([]);
    const [priceRange, setPriceRange] = useState(90000);
    const [selectedDuration, setSelectedDuration] = useState(durations[0].value);
    const [sortBy, setSortBy] = useState('rating');
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedHike, setSelectedHike] = useState(null);

    const handleOpenModal = (hike) => { setSelectedHike(hike); setIsModalOpen(true); };
    const handleCloseModal = () => { setIsModalOpen(false); };

    const handleDifficultyChange = (difficulty) => { setSelectedDifficulties(prev => prev.includes(difficulty) ? prev.filter(d => d !== difficulty) : [...prev, difficulty]); };

    const filteredAndSortedHikes = useMemo(() => {
        let filtered = allHikes
            .filter(hike => hike.name.toLowerCase().includes(searchTerm.toLowerCase()))
            .filter(hike => selectedDifficulties.length === 0 || selectedDifficulties.includes(hike.difficulty))
            .filter(hike => hike.price <= priceRange)
            .filter(hike => hike.duration >= selectedDuration[0] && hike.duration <= selectedDuration[1]);
        filtered.sort((a, b) => {
            if (sortBy === 'rating') return b.rating - a.rating;
            if (sortBy === 'price_asc') return a.price - b.price;
            if (sortBy === 'price_desc') return b.price - a.price;
            if (sortBy === 'duration') return a.duration - b.duration;
            return 0;
        });
        return filtered;
    }, [searchTerm, selectedDifficulties, priceRange, selectedDuration, sortBy]);

    const FilterSidebar = () => (
        <aside className="lg:col-span-1 space-y-8">
            <div><h3 className="text-xl font-bold mb-4">Search by Name</h3><div className="relative"><Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} /><input type="text" placeholder="e.g., Annapurna" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" /></div></div>
            <div><h3 className="text-xl font-bold mb-4">Difficulty</h3><div className="space-y-3">{difficulties.map(d => (<label key={d} className="flex items-center"><input type="checkbox" checked={selectedDifficulties.includes(d)} onChange={() => handleDifficultyChange(d)} className="h-5 w-5 rounded border-gray-300 text-green-600 focus:ring-green-500" /><span className="ml-3 text-gray-700">{d}</span></label>))}</div></div>
            <div><h3 className="text-xl font-bold mb-4">Max Price</h3><input type="range" min="5000" max="90000" step="1000" value={priceRange} onChange={(e) => setPriceRange(Number(e.target.value))} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-600" /><div className="text-right font-semibold text-green-600 mt-2">Up to ₹{priceRange.toLocaleString('en-IN')}</div></div>
            <div><h3 className="text-xl font-bold mb-4">Duration</h3><div className="space-y-3">{durations.map(d => (<label key={d.label} className="flex items-center"><input type="radio" name="duration" checked={JSON.stringify(selectedDuration) === JSON.stringify(d.value)} onChange={() => setSelectedDuration(d.value)} className="h-5 w-5 text-green-600 focus:ring-green-500" /><span className="ml-3 text-gray-700">{d.label}</span></label>))}</div></div>
        </aside>
    );

    return (
        <div className="bg-gray-50 flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
                <div className="container mx-auto p-6">
                    <div className="text-center my-8"><h1 className="text-4xl font-extrabold text-gray-800">Explore All Hikes</h1><p className="text-lg text-gray-600 mt-2">Find your next unforgettable journey from our collection of world-class treks.</p></div>
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                        <div className="lg:hidden col-span-1 mb-4"><button onClick={() => setIsFilterOpen(!isFilterOpen)} className="w-full flex items-center justify-center gap-2 bg-white p-3 rounded-lg shadow font-semibold"><ListFilter size={20} />{isFilterOpen ? 'Hide Filters' : 'Show Filters'}</button></div>
                        <div className="hidden lg:block"><FilterSidebar /></div>
                        <AnimatePresence>{isFilterOpen && (<motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="lg:hidden col-span-1 bg-white p-6 rounded-lg shadow-lg overflow-hidden"><FilterSidebar /></motion.div>)}</AnimatePresence>
                        <div className="lg:col-span-3">
                            <div className="flex justify-between items-center mb-6"><p className="text-sm text-gray-600">Showing <span className="font-bold">{filteredAndSortedHikes.length}</span> of <span className="font-bold">{allHikes.length}</span> hikes</p><select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"><option value="rating">Sort by: Popularity</option><option value="price_asc">Sort by: Price (Low to High)</option><option value="price_desc">Sort by: Price (High to Low)</option><option value="duration">Sort by: Duration</option></select></div>
                            <AnimatePresence><motion.div layout className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                                {filteredAndSortedHikes.map(hike => (
                                    <motion.div layout animate={{ opacity: 1 }} initial={{ opacity: 0 }} exit={{ opacity: 0 }} key={hike.id} className="bg-white rounded-xl shadow-lg overflow-hidden group transform hover:-translate-y-2 transition-transform duration-300">
                                        <div className="relative"><img src={hike.image} alt={hike.name} className="w-full h-56 object-cover" /><div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">₹{hike.price.toLocaleString('en-IN')}</div><div className="absolute top-4 left-4 flex items-center bg-black/50 text-white px-2 py-1 rounded-full text-sm"><Star size={14} className="mr-1 text-yellow-400" fill="currentColor" /> {hike.rating}</div></div>
                                        <div className="p-6">
                                            <h3 className="text-xl font-bold truncate">{hike.name}</h3>
                                            <p className="text-gray-600 flex items-center my-2"><MapPin size={16} className="mr-2" /> {hike.location}</p>
                                            <div className="flex justify-between text-sm text-gray-500 mb-4"><span className="flex items-center"><Clock size={14} className="inline mr-1.5" /> {hike.duration} Days</span><span className="font-semibold">{hike.difficulty}</span></div>
                                            <button onClick={() => handleOpenModal(hike)} className="w-full bg-green-100 text-green-800 px-4 py-2 rounded-lg font-semibold hover:bg-green-200 transition-colors">View Details</button>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div></AnimatePresence>
                            {filteredAndSortedHikes.length === 0 && (<div className="text-center py-20 col-span-full"><p className="text-lg font-semibold">No hikes match your criteria.</p><p className="text-gray-500">Try adjusting your filters.</p></div>)}
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
            <AnimatePresence>{isModalOpen && <HikeDetailModal hike={selectedHike} onClose={handleCloseModal} />}</AnimatePresence>
        </div>
    );
};

export default ExploreHikesPage;
