import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductPhilosophy from './components/ProductPhilosophy';
import About from './components/About';
import Testimonials from './components/Testimonials';
import CrossFunctionalLeadership from './components/CrossFunctionalLeadership';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import CaseStudyPage from './pages/CaseStudyPage';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Portfolio />
            <About />
            <ProductPhilosophy />
            <CrossFunctionalLeadership />
            <Testimonials />
            <Contact />
          </>
        } />
        <Route path="/case-study/:projectSlug" element={<CaseStudyPage />} />
      </Routes>
    </div>
  );
}

export default App;