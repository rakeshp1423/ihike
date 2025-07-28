import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Login from './pages/Login'; // Adjust the path as needed
import LandingPage from './pages/LandingPage';
import Signup from './pages/Signup'; // Adjust the path as needed
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {/* Add more routes here later */}
      </Routes>
    </Router>
  );
}

export default App;
