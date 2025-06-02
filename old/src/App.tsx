import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import MembersPage from './pages/MembersPage';
import ResourcesPage from './pages/ResourcesPage';
import ContactPage from './pages/ContactPage';
import EventsPage from './pages/EventsPage';
import CoachProfile from './components/CoachProfile';

const App: React.FC = () => {
  return (
    <Router basename="/asocias">
      <div className="min-h-screen flex flex-col bg-neutral-50">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/members" element={<MembersPage />} />
              <Route path="/members/:id" element={<CoachProfile />} />
              <Route path="/resources" element={<ResourcesPage />} />
              <Route path="/events" element={<EventsPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </main>
          <Footer />
        </motion.div>
      </div>
    </Router>
  );
};

export default App;
