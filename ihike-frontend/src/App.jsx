import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Dashboard from './pages/UserDashboard'; // Make sure this file exists
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} /> {/* Dashboard route */}
        {/* Add more routes here later */}
      </Routes>
    </Router>
  );
}

export default App;
