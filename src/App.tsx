import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Layout from './layout/Layout';
import Home from './pages/Home';
import Programs from './pages/Programs';
import About from './pages/About';
import Reviews from './pages/Reviews';
import Contact from './pages/Contact';
import Pricing from './pages/Pricing';
import Gallery from './pages/Gallery';
import Schedule from './pages/Schedule';
import Terms from './pages/Terms';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const PageTransition: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ duration: 0.4, ease: "easeInOut" }}
  >
    {children}
  </motion.div>
);

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<PageTransition><Home /></PageTransition>} />
            <Route path="/programs" element={<PageTransition><Programs /></PageTransition>} />
            <Route path="/about" element={<PageTransition><About /></PageTransition>} />
            <Route path="/aboutus" element={<PageTransition><About /></PageTransition>} />
            <Route path="/reviews" element={<PageTransition><Reviews /></PageTransition>} />
            <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
            <Route path="/pricing" element={<PageTransition><Pricing /></PageTransition>} />
            <Route path="/gallery" element={<PageTransition><Gallery /></PageTransition>} />
            <Route path="/schedule" element={<PageTransition><Schedule /></PageTransition>} />
            <Route path="/terms" element={<PageTransition><Terms /></PageTransition>} />
            <Route path="/policy" element={<PageTransition><Terms /></PageTransition>} />
          </Routes>
        </AnimatePresence>
      </Layout>
    </Router>
  );
};

export default App;
