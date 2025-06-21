import React, { useState, useEffect } from 'react';
import { Menu, X, User, Briefcase, Mail, Home } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (isHomePage) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsMenuOpen(false);
      }
    } else {
      navigate('/', { state: { scrollTo: sectionId } });
      setIsMenuOpen(false);
    }
  };

  const goHome = () => {
    navigate('/');
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <button 
            onClick={goHome}
            className="flex items-center hover:scale-105 transition-transform duration-200"
          >
            <span className={`font-bold text-xl ${isScrolled ? 'text-slate-800' : 'text-slate-800'}`}>
              Ben Lopez
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {!isHomePage && (
              <button
                onClick={goHome}
                className={`flex items-center space-x-1 hover:text-teal-500 transition-colors font-medium ${
                  isScrolled ? 'text-slate-700' : 'text-slate-700'
                }`}
              >
                <Home size={16} />
                <span>Home</span>
              </button>
            )}
            <button
              onClick={() => scrollToSection('about')}
              className={`hover:text-teal-500 transition-colors font-medium ${
                isScrolled ? 'text-slate-700' : 'text-slate-700'
              }`}
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('portfolio')}
              className={`hover:text-teal-500 transition-colors font-medium ${
                isScrolled ? 'text-slate-700' : 'text-slate-700'
              }`}
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className={`hover:text-teal-500 transition-colors font-medium ${
                isScrolled ? 'text-slate-700' : 'text-slate-700'
              }`}
            >
              Contact
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden ${isScrolled ? 'text-slate-800' : 'text-slate-800'}`}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-sm rounded-lg mt-2 p-4 shadow-lg border border-gray-200">
            <nav className="flex flex-col space-y-4">
              {!isHomePage && (
                <button
                  onClick={goHome}
                  className="flex items-center space-x-2 text-slate-700 hover:text-teal-500 transition-colors font-medium text-left"
                >
                  <Home size={16} />
                  <span>Home</span>
                </button>
              )}
              <button
                onClick={() => scrollToSection('about')}
                className="text-slate-700 hover:text-teal-500 transition-colors font-medium text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('portfolio')}
                className="text-slate-700 hover:text-teal-500 transition-colors font-medium text-left"
              >
                Portfolio
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-slate-700 hover:text-teal-500 transition-colors font-medium text-left"
              >
                Contact
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;