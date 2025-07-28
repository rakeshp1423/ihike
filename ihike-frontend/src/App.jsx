import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Dashboard from './pages/UserDashboard'; // Make sure this file exists
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ExploreHikesPage from './pages/ExploreHikesPage';
import MyBookingsPage from './pages/MyBookingsPage';
import MyProfilePage from './pages/MyProfilePage';
import SettingsPage from './pages/SettingsPage';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/explore-hikes" element={<ExploreHikesPage />} />
        <Route path="/my-bookings" element={<MyBookingsPage />} />
        <Route path="/profile" element={<MyProfilePage />} />
        <Route path="/settings" element={<SettingsPage />} />
        {/* Add more routes here later */}
      </Routes>
    </Router>
  );
}

export default App;
