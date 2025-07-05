import React, { useState, useEffect } from 'react';
import { Menu, X, BookOpen, Lightbulb, Zap, FlaskConical, Mail, ArrowUp } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [showScrollTop, setShowScrollTop] = useState(false);

  const navigationItems = [
    { id: 'home', label: 'Home', icon: BookOpen },
    { id: 'themes', label: 'Themes', icon: Lightbulb },
    { id: 'mission', label: 'Mission', icon: Zap },
    { id: 'sponsors', label: 'Sponsorship', icon: FlaskConical },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
      const sections = navigationItems.map(item => item.id);
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Techfest Demo
              </h1>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              {navigationItems.map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-gray-100 ${
                    activeSection === id
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  <Icon size={16} />
                  <span>{label}</span>
                </button>
              ))}
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-lg text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigationItems.map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`flex items-center space-x-3 w-full px-3 py-2 rounded-lg text-left text-base font-medium transition-all duration-200 ${
                    activeSection === id
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  <Icon size={20} />
                  <span>{label}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

 {/* Home Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="text-center max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Welcome to <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Techfest Demo</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">Showcasing creativity, innovation, and technology in one platform.</p>
          <button
            onClick={() => scrollToSection('themes')}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-purple-600 transition"
          >
            Explore Themes
          </button>
        </div>
      </section>

      {/* Content Sections */}
      <section id="themes" className="pt-20 py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Proposed Themes</h2>
          <p className="text-lg text-gray-600 mb-10">A glimpse into the future through innovation, imagination, and interconnection.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {["Neoverse: Reprogramming Reality", "BioCircuit: Nature Has Entered the Chat", "Ignitia: Code. Spark. Revolt.", "Synthetica: Merging Minds, Machines & Meaning"].map((title, i) => (
              <div key={i} className="bg-blue-50 p-6 rounded-xl shadow hover:shadow-md transition-all duration-200">
                <h3 className="text-xl font-semibold text-blue-700 mb-2">{title}</h3>
                <p className="text-gray-600 text-sm">Click to explore this scenario and its future relevance</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="mission" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Mission Statement</h2>
          <p className="text-lg text-gray-600">
            Techfest aims to foster innovation, ignite curiosity, and unite young minds in solving global challenges through science and technology.
            We envision it as a global platform where future thinkers, creators, and leaders converge to exchange groundbreaking ideas. Through immersive experiences, competitions, and knowledge sharing, we empower students to shape a smarter, sustainable world.
          </p>
        </div>
      </section>

      <section id="sponsors" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Sponsorship Sectors</h2>
          <p className="text-lg text-gray-600 mb-8">Industries aligned with innovation, sustainability, and future tech are ideal partners for Techfest.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {["AI & Cloud Platforms", "Green Energy & Sustainability", "Biotech & Healthcare", "VR/AR & Gaming", "EdTech & Online Learning", "Telecom & Electronics", "Auto-Tech & Mobility", "Finance & Crypto", "Govt. & Think Tanks"].map((sector, index) => (
              <div key={index} className="bg-gray-100 p-5 rounded-xl text-blue-800 font-medium">
                {sector}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-lg text-gray-600">Share your feedback, ideas, or questions with us!</p>
          </div>
          <form className="bg-white p-8 rounded-xl shadow-md space-y-6">
            <input type="text" placeholder="Your Name" className="w-full px-4 py-3 border border-gray-300 rounded-md" />
            <input type="email" placeholder="Your Email" className="w-full px-4 py-3 border border-gray-300 rounded-md" />
            <textarea placeholder="Your Message" rows={5} className="w-full px-4 py-3 border border-gray-300 rounded-md"></textarea>
            <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700">Send Message</button>
          </form>
        </div>
      </section>


 {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Techfest Demo</h3>
          <p className="text-gray-400 mb-8">Celebrating innovation & the spirit of engineering</p>
          <div className="flex justify-center space-x-6">
            {navigationItems.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </footer>

      
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transform hover:scale-110 transition-all duration-200 z-40"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </div>
  );
}

export default App;
