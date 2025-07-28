import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Bell, Database, Trash2, Globe, Moon, Sun, Mail, Lock, Smartphone, ExternalLink } from 'lucide-react';

// Import layout components
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// MOCK USER SETTINGS DATA
const userSettings = {
    email: 'aarav.sharma@example.com',
    twoFactorEnabled: false,
    linkedAccounts: { google: true, facebook: false },
    language: 'English (US)',
    currency: 'INR (₹)',
    theme: 'light',
    communication: { newsletter: true, bookingUpdates: true, promotions: false }
};

const SettingsPage = () => {
    const [activeTab, setActiveTab] = useState('security');
    
    const tabs = [
        { id: 'security', label: 'Account Security', icon: <Shield size={20} /> },
        { id: 'preferences', label: 'Preferences', icon: <Bell size={20} /> },
        { id: 'privacy', label: 'Data & Privacy', icon: <Database size={20} /> },
        { id: 'danger', label: 'Danger Zone', icon: <Trash2 size={20} /> },
    ];

    const renderContent = () => {
        switch (activeTab) {
            case 'security': return <AccountSecurity settings={userSettings} />;
            case 'preferences': return <Preferences settings={userSettings} />;
            case 'privacy': return <DataPrivacy />;
            case 'danger': return <DangerZone />;
            default: return null;
        }
    };

    return (
        <div className="bg-gray-50 flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
                <div className="container mx-auto p-6 lg:p-12">
                    <div className="mb-8">
                        <h1 className="text-4xl font-extrabold text-gray-800">Settings</h1>
                        <p className="text-lg text-gray-600">Manage your account, preferences, and privacy.</p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
                        <aside className="lg:col-span-1">
                            <nav className="space-y-2">
                                {tabs.map(tab => (
                                    <button 
                                        key={tab.id} 
                                        onClick={() => setActiveTab(tab.id)}
                                        className={`w-full flex items-center gap-3 p-3 rounded-lg text-left font-semibold transition-colors ${
                                            activeTab === tab.id 
                                            ? 'bg-green-100 text-green-700' 
                                            : `text-gray-600 hover:bg-gray-100 ${tab.id === 'danger' && 'hover:bg-red-50 hover:text-red-700'}`
                                        } ${tab.id === 'danger' && activeTab === tab.id && 'bg-red-100 text-red-700'}`}
                                    >
                                        {tab.icon}
                                        {tab.label}
                                    </button>
                                ))}
                            </nav>
                        </aside>
                        <div className="lg:col-span-3">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeTab}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    {renderContent()}
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

// --- SUB-COMPONENTS FOR EACH TAB ---

const AccountSecurity = ({ settings }) => (
    <div className="space-y-8">
        <SettingBlock title="Change Email" icon={<Mail />} description="Update the email address associated with your account.">
            <input type="email" defaultValue={settings.email} className="w-full mt-2 p-3 border border-gray-300 rounded-lg" />
            <button className="mt-4 bg-green-600 text-white font-bold px-6 py-2 rounded-lg">Update Email</button>
        </SettingBlock>
        <SettingBlock title="Change Password" icon={<Lock />} description="It's a good idea to use a strong password that you're not using elsewhere.">
            <input type="password" placeholder="Current Password" className="w-full mt-2 p-3 border border-gray-300 rounded-lg" />
            <input type="password" placeholder="New Password" className="w-full mt-2 p-3 border border-gray-300 rounded-lg" />
            <button className="mt-4 bg-green-600 text-white font-bold px-6 py-2 rounded-lg">Update Password</button>
        </SettingBlock>
        <SettingBlock title="Two-Factor Authentication" icon={<Smartphone />} description="Add an extra layer of security to your account.">
            <div className="flex items-center justify-between mt-2">
                <p className="font-semibold">{settings.twoFactorEnabled ? "Enabled" : "Disabled"}</p>
                <button className="bg-blue-600 text-white font-bold px-6 py-2 rounded-lg">{settings.twoFactorEnabled ? "Manage" : "Enable"}</button>
            </div>
        </SettingBlock>
    </div>
);

const Preferences = ({ settings }) => (
     <div className="space-y-8">
        <SettingBlock title="Language & Region" icon={<Globe />} description="Choose the language and currency you see on the site.">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                <select defaultValue={settings.language} className="w-full p-3 border border-gray-300 rounded-lg bg-white"><option>English (US)</option><option>Hindi (हिन्दी)</option></select>
                <select defaultValue={settings.currency} className="w-full p-3 border border-gray-300 rounded-lg bg-white"><option>INR (₹)</option><option>USD ($)</option></select>
             </div>
        </SettingBlock>
        <SettingBlock title="Theme" icon={<Moon />} description="Choose how iHike looks to you. Select a theme preference.">
            <div className="flex gap-4 mt-2">
                <button className="flex-1 p-4 border-2 border-green-500 rounded-lg text-center"><Sun className="mx-auto mb-1"/> Light</button>
                <button className="flex-1 p-4 border border-gray-300 rounded-lg text-center"><Moon className="mx-auto mb-1"/> Dark</button>
            </div>
        </SettingBlock>
        <SettingBlock title="Communication Preferences" icon={<Bell />} description="Manage how we get in touch with you.">
             <div className="space-y-3 mt-2">
                <div className="flex justify-between items-center bg-gray-100 p-4 rounded-lg"><p className="font-semibold">iHike Newsletter</p><ToggleSwitch checked={settings.communication.newsletter} /></div>
                <div className="flex justify-between items-center bg-gray-100 p-4 rounded-lg"><p className="font-semibold">Booking Updates & Reminders</p><ToggleSwitch checked={settings.communication.bookingUpdates} /></div>
                <div className="flex justify-between items-center bg-gray-100 p-4 rounded-lg"><p className="font-semibold">Promotional Offers</p><ToggleSwitch checked={settings.communication.promotions} /></div>
             </div>
        </SettingBlock>
    </div>
);

const DataPrivacy = () => (
    <div className="space-y-8">
        <SettingBlock title="Download Your Data" icon={<Database />} description="Request a copy of all your personal data, including booking history and reviews.">
            <button className="mt-4 bg-green-600 text-white font-bold px-6 py-2 rounded-lg">Request Data Export</button>
        </SettingBlock>
        <SettingBlock title="Manage Cookie Preferences" icon={<ExternalLink />} description="Control which non-essential cookies are used during your sessions.">
            <button className="mt-4 bg-gray-200 text-gray-800 font-bold px-6 py-2 rounded-lg">Open Cookie Settings</button>
        </SettingBlock>
    </div>
);

const DangerZone = () => (
    <div className="border border-red-300 bg-red-50 rounded-lg p-6">
        <h3 className="font-bold text-lg text-red-800">Delete Your Account</h3>
        <p className="text-red-700 mt-2 mb-4">Once you delete your account, there is no going back. All your data will be permanently removed. Please be certain.</p>
        <button className="bg-red-600 text-white font-bold px-6 py-2 rounded-lg hover:bg-red-700">Delete My Account</button>
    </div>
);

// --- HELPER COMPONENTS ---
const SettingBlock = ({ title, description, icon, children }) => (
    <div className="bg-white p-6 rounded-2xl shadow-lg">
        <div className="flex items-start gap-4">
            <div className="text-green-600 mt-1">{icon}</div>
            <div>
                <h3 className="text-xl font-bold text-gray-800">{title}</h3>
                <p className="text-gray-500 text-sm mt-1">{description}</p>
            </div>
        </div>
        <div className="mt-6 pl-10">
            {children}
        </div>
    </div>
);

const ToggleSwitch = ({ checked }) => {
    const [isOn, setIsOn] = useState(checked);
    return (
        <button onClick={() => setIsOn(!isOn)} className={`w-12 h-6 rounded-full flex items-center transition-colors ${isOn ? 'bg-green-500 justify-end' : 'bg-gray-300 justify-start'}`}>
            <motion.span layout className="w-5 h-5 bg-white rounded-full shadow block" />
        </button>
    );
};

export default SettingsPage;
