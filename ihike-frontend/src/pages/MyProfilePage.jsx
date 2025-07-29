import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Shield, Bell, Trash2, Camera, Eye, EyeOff, HeartPulse, CreditCard, Star, MessageSquare, Edit } from 'lucide-react';

// Import layout components
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// MOCK USER DATA - EXPANDED
const currentUser = {
  name: 'Anamika Das',
  email: 'anamika.das@example.com',
  avatar: 'https://i.pinimg.com/736x/57/5a/b3/575ab3182c51aad2bd18b6628c68210b.jpg',
  phone: '+91 9876543210',
  address: '123, Mountain View Rd, Dehradun, Uttarakhand, 248001',
  safetyInfo: {
      emergencyContactName: 'Riya Sharma',
      emergencyContactPhone: '+91 98765 43210',
      medicalNotes: 'Allergic to penicillin.',
      fitnessLevel: 'Intermediate',
  },
  paymentMethods: [
      { id: 1, type: 'visa', last4: '4242', expiry: '12/26' },
  ],
  preferences: {
      interests: ['Challenging Peaks', 'Photography'],
      communication: {
          newsletter: true,
          bookingUpdates: true,
          promotions: false,
      }
  },
  reviews: [
      { id: 1, hikeName: 'Hampta Pass', rating: 5, date: 'May 20, 2024', comment: 'Absolutely breathtaking! The views were surreal and the guide was fantastic. A must-do trek.'},
      { id: 2, hikeName: 'Valley of Flowers', rating: 4, date: 'Aug 15, 2023', comment: 'Incredibly beautiful and serene. A bit crowded, but the floral bloom was worth it.'},
  ]
};

const MyProfilePage = () => {
    const [activeTab, setActiveTab] = useState('profile');
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    // --- Form States ---
    const [profileData, setProfileData] = useState({ name: currentUser.name, email: currentUser.email });
    const [passwordData, setPasswordData] = useState({ current: '', new: '', confirm: '' });
    const [safetyData, setSafetyData] = useState(currentUser.safetyInfo);
    const [billingData, setBillingData] = useState({ phone: currentUser.phone, address: currentUser.address });
    const [preferencesData, setPreferencesData] = useState(currentUser.preferences);

    // --- Editing States ---
    const [isProfileEditing, setIsProfileEditing] = useState(false);
    const [isSafetyEditing, setIsSafetyEditing] = useState(false);
    const [isBillingEditing, setIsBillingEditing] = useState(false);
    const [isPreferencesEditing, setIsPreferencesEditing] = useState(false);

    const [showPasswords, setShowPasswords] = useState({});

    // --- Handlers ---
    const handleProfileChange = (e) => { setIsProfileEditing(true); setProfileData({ ...profileData, [e.target.name]: e.target.value }); };
    const handlePasswordChange = (e) => { setPasswordData({ ...passwordData, [e.target.name]: e.target.value }); };
    const handleSafetyChange = (e) => { setIsSafetyEditing(true); setSafetyData({ ...safetyData, [e.target.name]: e.target.value }); };
    const handleBillingChange = (e) => { setIsBillingEditing(true); setBillingData({ ...billingData, [e.target.name]: e.target.value }); };
    const handlePreferencesChange = (type, key, value) => {
        setIsPreferencesEditing(true);
        if (type === 'interests') {
            const newInterests = preferencesData.interests.includes(key)
                ? preferencesData.interests.filter(i => i !== key)
                : [...preferencesData.interests, key];
            setPreferencesData({ ...preferencesData, interests: newInterests });
        } else {
            setPreferencesData({ ...preferencesData, communication: { ...preferencesData.communication, [key]: value } });
        }
    };
    
    // --- Save Handlers (API calls would go here) ---
    const handleProfileSave = (e) => { e.preventDefault(); console.log('Saving profile:', profileData); setIsProfileEditing(false); };
    const handlePasswordSave = (e) => { e.preventDefault(); console.log('Saving password...'); setIsProfileEditing(false); };
    const handleSafetySave = (e) => { e.preventDefault(); console.log('Saving safety info:', safetyData); setIsSafetyEditing(false); };
    const handleBillingSave = (e) => { e.preventDefault(); console.log('Saving billing info:', billingData); setIsBillingEditing(false); };
    const handlePreferencesSave = (e) => { e.preventDefault(); console.log('Saving preferences:', preferencesData); setIsPreferencesEditing(false); };

    const toggleShowPassword = (fieldName) => { setShowPasswords(prev => ({ ...prev, [fieldName]: !prev[fieldName] })); };

    const tabs = [
        { id: 'profile', label: 'Edit Profile', icon: <User size={20} /> },
        { id: 'safety', label: 'Hiking & Safety', icon: <HeartPulse size={20} /> },
        { id: 'billing', label: 'Billing Details', icon: <CreditCard size={20} /> },
        { id: 'preferences', label: 'Preferences', icon: <Bell size={20} /> },
        { id: 'reviews', label: 'My Reviews', icon: <MessageSquare size={20} /> },
        { id: 'security', label: 'Password', icon: <Shield size={20} /> },
        { id: 'danger', label: 'Danger Zone', icon: <Trash2 size={20} /> },
    ];

    const renderContent = () => {
        switch (activeTab) {
            case 'profile': return <ProfileForm data={profileData} onChange={handleProfileChange} onSave={handleProfileSave} isEditing={isProfileEditing} />;
            case 'safety': return <SafetyForm data={safetyData} onChange={handleSafetyChange} onSave={handleSafetySave} isEditing={isSafetyEditing} />;
            case 'billing': return <BillingForm data={billingData} paymentMethods={currentUser.paymentMethods} onChange={handleBillingChange} onSave={handleBillingSave} isEditing={isBillingEditing} />;
            case 'preferences': return <PreferencesForm data={preferencesData} onChange={handlePreferencesChange} onSave={handlePreferencesSave} isEditing={isPreferencesEditing} />;
            case 'reviews': return <ReviewsSection reviews={currentUser.reviews} />;
            case 'security': return <SecurityForm data={passwordData} onChange={handlePasswordChange} onSave={handlePasswordSave} showPasswords={showPasswords} toggleShowPassword={toggleShowPassword} />;
            case 'danger': return <DangerZone onShowModal={() => setShowDeleteModal(true)} />;
            default: return null;
        }
    };

    return (
        <div className="bg-gray-50 flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow"><div className="container mx-auto p-6 lg:p-12"><div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
                <aside className="lg:col-span-1"><nav className="space-y-2">{tabs.map(tab => (<button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`w-full flex items-center gap-3 p-3 rounded-lg text-left font-semibold transition-colors ${activeTab === tab.id ? 'bg-green-100 text-green-700' : `text-gray-600 hover:bg-gray-100 ${tab.id === 'danger' && 'hover:bg-red-50 hover:text-red-700'}`} ${tab.id === 'danger' && activeTab === tab.id && 'bg-red-100 text-red-700'}`}>{tab.icon}{tab.label}</button>))}</nav></aside>
                <div className="lg:col-span-3 bg-white p-8 rounded-2xl shadow-lg"><AnimatePresence mode="wait"><motion.div key={activeTab} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.2 }}>{renderContent()}</motion.div></AnimatePresence></div>
            </div></div></main>
            <Footer />
            <AnimatePresence>{showDeleteModal && <DeleteAccountModal onClose={() => setShowDeleteModal(false)} />}</AnimatePresence>
        </div>
    );
};

// --- SUB-COMPONENTS FOR EACH TAB ---
const ProfileForm = ({ data, onChange, onSave, isEditing }) => (
    <form onSubmit={onSave}>
        <div className="flex items-center gap-6 mb-8">
            <div className="relative"><img src={currentUser.avatar} alt="Profile" className="w-24 h-24 rounded-full object-cover" /><button type="button" className="absolute -bottom-1 -right-1 bg-green-600 p-2 rounded-full text-white hover:bg-green-700 transition-transform hover:scale-110"><Camera size={16} /></button></div>
            <div><h2 className="text-2xl font-bold">{currentUser.name}</h2><p className="text-gray-500">Welcome to your profile.</p></div>
        </div>
        <div className="space-y-6">
            <div><label className="font-semibold text-gray-700">Full Name</label><input type="text" name="name" value={data.name} onChange={onChange} className="w-full mt-2 p-3 border border-gray-300 rounded-lg" /></div>
            <div><label className="font-semibold text-gray-700">Email Address</label><input type="email" name="email" value={data.email} disabled className="w-full mt-2 p-3 border border-gray-300 rounded-lg bg-gray-100 cursor-not-allowed" /></div>
        </div>
        <div className="text-right mt-8"><button type="submit" disabled={!isEditing} className="bg-green-600 text-white font-bold px-8 py-3 rounded-lg hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors">Save Changes</button></div>
    </form>
);

const SafetyForm = ({ data, onChange, onSave, isEditing }) => (
    <form onSubmit={onSave}>
        <h2 className="text-2xl font-bold mb-2">Hiking & Safety Information</h2><p className="text-gray-500 mb-6">This information is kept confidential and is only shared with your guide in case of an emergency.</p>
        <div className="space-y-6">
            <div><label className="font-semibold text-gray-700">Emergency Contact Name</label><input type="text" name="emergencyContactName" value={data.emergencyContactName} onChange={onChange} className="w-full mt-2 p-3 border border-gray-300 rounded-lg" /></div>
            <div><label className="font-semibold text-gray-700">Emergency Contact Phone</label><input type="tel" name="emergencyContactPhone" value={data.emergencyContactPhone} onChange={onChange} className="w-full mt-2 p-3 border border-gray-300 rounded-lg" /></div>
            <div><label className="font-semibold text-gray-700">Medical Information</label><textarea name="medicalNotes" value={data.medicalNotes} onChange={onChange} rows="4" className="w-full mt-2 p-3 border border-gray-300 rounded-lg" placeholder="e.g., Allergies, past injuries..."></textarea></div>
            <div><label className="font-semibold text-gray-700">Self-Assessed Fitness Level</label><select name="fitnessLevel" value={data.fitnessLevel} onChange={onChange} className="w-full mt-2 p-3 border border-gray-300 rounded-lg bg-white"><option>Beginner</option><option>Intermediate</option><option>Advanced</option></select></div>
        </div>
        <div className="text-right mt-8"><button type="submit" disabled={!isEditing} className="bg-green-600 text-white font-bold px-8 py-3 rounded-lg hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors">Save Safety Info</button></div>
    </form>
);

const BillingForm = ({ data, paymentMethods, onChange, onSave, isEditing }) => (
    <form onSubmit={onSave}>
        <h2 className="text-2xl font-bold mb-6">Billing Details</h2>
        <div className="space-y-6">
            <div><label className="font-semibold text-gray-700">Phone Number</label><input type="tel" name="phone" value={data.phone} onChange={onChange} className="w-full mt-2 p-3 border border-gray-300 rounded-lg" /></div>
            <div><label className="font-semibold text-gray-700">Billing Address</label><textarea name="address" value={data.address} onChange={onChange} rows="3" className="w-full mt-2 p-3 border border-gray-300 rounded-lg"></textarea></div>
        </div>
        <div className="text-right mt-8"><button type="submit" disabled={!isEditing} className="bg-green-600 text-white font-bold px-8 py-3 rounded-lg hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors">Save Billing Info</button></div>
        <hr className="my-8"/>
        <h2 className="text-2xl font-bold mb-4">Payment Methods</h2>
        <div className="space-y-4">
            {paymentMethods.map(pm => (
                <div key={pm.id} className="bg-gray-100 p-4 rounded-lg flex justify-between items-center">
                    <div className="flex items-center gap-4"><CreditCard size={24} className="text-gray-600" /><div><p className="font-semibold">Visa ending in {pm.last4}</p><p className="text-sm text-gray-500">Expires {pm.expiry}</p></div></div>
                    <button className="text-sm font-semibold text-red-600 hover:underline">Remove</button>
                </div>
            ))}
        </div>
        <button type="button" className="mt-4 w-full text-center bg-green-100 text-green-800 font-semibold py-3 rounded-lg hover:bg-green-200 transition-colors">Add New Payment Method</button>
    </form>
);

const PreferencesForm = ({ data, onChange, onSave, isEditing }) => {
    const allInterests = ['Photography', 'Wildlife', 'Challenging Peaks', 'Family-Friendly', 'Cultural Immersion'];
    return (
        <form onSubmit={onSave}>
            <h2 className="text-2xl font-bold mb-6">Travel Preferences</h2>
            <div className="mb-8">
                <label className="font-semibold text-gray-700">My Interests</label>
                <div className="flex flex-wrap gap-3 mt-3">
                    {allInterests.map(interest => (
                        <button key={interest} type="button" onClick={() => onChange('interests', interest)} className={`px-4 py-2 rounded-full font-semibold transition-colors ${data.interests.includes(interest) ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}>{interest}</button>
                    ))}
                </div>
            </div>
            <h2 className="text-2xl font-bold mb-6">Communication Preferences</h2>
            <div className="space-y-4">
                <div className="flex justify-between items-center bg-gray-100 p-4 rounded-lg"><p className="font-semibold">iHike Newsletter</p><button type="button" onClick={() => onChange('communication', 'newsletter', !data.communication.newsletter)} className={`w-12 h-6 rounded-full flex items-center transition-colors ${data.communication.newsletter ? 'bg-green-500 justify-end' : 'bg-gray-300 justify-start'}`}><span className="w-5 h-5 bg-white rounded-full shadow block"></span></button></div>
                <div className="flex justify-between items-center bg-gray-100 p-4 rounded-lg"><p className="font-semibold">Booking Updates & Reminders</p><button type="button" onClick={() => onChange('communication', 'bookingUpdates', !data.communication.bookingUpdates)} className={`w-12 h-6 rounded-full flex items-center transition-colors ${data.communication.bookingUpdates ? 'bg-green-500 justify-end' : 'bg-gray-300 justify-start'}`}><span className="w-5 h-5 bg-white rounded-full shadow block"></span></button></div>
                <div className="flex justify-between items-center bg-gray-100 p-4 rounded-lg"><p className="font-semibold">Promotional Offers</p><button type="button" onClick={() => onChange('communication', 'promotions', !data.communication.promotions)} className={`w-12 h-6 rounded-full flex items-center transition-colors ${data.communication.promotions ? 'bg-green-500 justify-end' : 'bg-gray-300 justify-start'}`}><span className="w-5 h-5 bg-white rounded-full shadow block"></span></button></div>
            </div>
            <div className="text-right mt-8"><button type="submit" disabled={!isEditing} className="bg-green-600 text-white font-bold px-8 py-3 rounded-lg hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors">Save Preferences</button></div>
        </form>
    );
};

const ReviewsSection = ({ reviews }) => (
    <div>
        <h2 className="text-2xl font-bold mb-6">My Reviews</h2>
        <div className="space-y-6">
            {reviews.map(review => (
                <div key={review.id} className="bg-gray-50 p-6 rounded-lg">
                    <div className="flex justify-between items-start">
                        <div><h3 className="font-bold text-lg">{review.hikeName}</h3><p className="text-sm text-gray-500">{review.date}</p></div>
                        <div className="flex items-center gap-1">{[...Array(5)].map((_, i) => <Star key={i} size={16} className={i < review.rating ? 'text-yellow-400' : 'text-gray-300'} fill="currentColor"/>)}</div>
                    </div>
                    <p className="text-gray-700 mt-3">"{review.comment}"</p>
                    <div className="text-right mt-4"><button className="flex items-center gap-2 text-sm font-semibold text-green-600 hover:underline"><Edit size={14}/> Edit Review</button></div>
                </div>
            ))}
        </div>
    </div>
);

const SecurityForm = ({ data, onChange, onSave, showPasswords, toggleShowPassword }) => (
    <form onSubmit={onSave}>
        <h2 className="text-2xl font-bold mb-6">Change Password</h2>
        <div className="space-y-6">
            <div className="relative"><label className="font-semibold text-gray-700">Current Password</label><input type={showPasswords.current ? 'text' : 'password'} name="current" value={data.current} onChange={onChange} className="w-full mt-2 p-3 border border-gray-300 rounded-lg" /><button type="button" onClick={() => toggleShowPassword('current')} className="absolute right-3 top-11 text-gray-500">{showPasswords.current ? <EyeOff/> : <Eye/>}</button></div>
            <div className="relative"><label className="font-semibold text-gray-700">New Password</label><input type={showPasswords.new ? 'text' : 'password'} name="new" value={data.new} onChange={onChange} className="w-full mt-2 p-3 border border-gray-300 rounded-lg" /><button type="button" onClick={() => toggleShowPassword('new')} className="absolute right-3 top-11 text-gray-500">{showPasswords.new ? <EyeOff/> : <Eye/>}</button></div>
            <div className="relative"><label className="font-semibold text-gray-700">Confirm New Password</label><input type={showPasswords.confirm ? 'text' : 'password'} name="confirm" value={data.confirm} onChange={onChange} className="w-full mt-2 p-3 border border-gray-300 rounded-lg" /><button type="button" onClick={() => toggleShowPassword('confirm')} className="absolute right-3 top-11 text-gray-500">{showPasswords.confirm ? <EyeOff/> : <Eye/>}</button></div>
        </div>
        <div className="text-right mt-8"><button type="submit" className="bg-green-600 text-white font-bold px-8 py-3 rounded-lg hover:bg-green-700 transition-colors">Update Password</button></div>
    </form>
);

const DangerZone = ({ onShowModal }) => (
    <div>
        <h2 className="text-2xl font-bold text-red-600 mb-4">Danger Zone</h2>
        <div className="border border-red-300 bg-red-50 rounded-lg p-6">
            <h3 className="font-bold text-lg text-red-800">Delete Your Account</h3>
            <p className="text-red-700 mt-2 mb-4">Once you delete your account, there is no going back. All your data, including booking history and reviews, will be permanently removed. Please be certain.</p>
            <button onClick={onShowModal} className="bg-red-600 text-white font-bold px-6 py-2 rounded-lg hover:bg-red-700 transition-colors">Delete My Account</button>
        </div>
    </div>
);

const DeleteAccountModal = ({ onClose }) => {
    const [confirmText, setConfirmText] = useState('');
    const canDelete = confirmText === 'DELETE';
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4" onClick={onClose}>
            <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }} className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8" onClick={e => e.stopPropagation()}>
                <h2 className="text-2xl font-bold text-red-600">Are you absolutely sure?</h2><p className="text-gray-600 my-4">This action cannot be undone. This will permanently delete your account and all associated data.</p><p className="text-gray-600 font-semibold">Please type <strong className="text-red-700">DELETE</strong> to confirm.</p>
                <input type="text" value={confirmText} onChange={(e) => setConfirmText(e.target.value)} className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500" />
                <button disabled={!canDelete} className="w-full mt-6 bg-red-600 text-white font-bold py-3 rounded-lg hover:bg-red-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors">I understand the consequences, delete my account</button>
                <button onClick={onClose} className="w-full mt-3 text-center text-gray-600 font-semibold py-2">Cancel</button>
            </motion.div>
        </motion.div>
    );
};

export default MyProfilePage;
