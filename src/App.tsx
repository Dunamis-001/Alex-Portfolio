import { useState } from 'react';
import { projects } from './data/portfolio';
import profilePhoto from './assets/profile-photo-new.png';

function App() {
  const [activeProject, setActiveProject] = useState<string | null>(null);
  const [showPortfolio, setShowPortfolio] = useState(false);

  const scrollToSection = (id: string) => {
    setShowPortfolio(true);
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  const hidePortfolio = () => {
    setShowPortfolio(false);
    setActiveProject(null);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 300);
  };

  return (
    <div className={`min-h-screen bg-off-white ${!showPortfolio ? 'h-screen overflow-hidden' : ''}`}>
      {/* Hero / Welcome Section */}
      <section className={`relative bg-navy text-white pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden ${!showPortfolio ? 'h-screen flex items-center' : ''}`}>
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(198, 167, 94, 0.1) 2px, rgba(198, 167, 94, 0.1) 4px)'
          }}></div>
        </div>

        <div className={`container mx-auto px-6 md:px-12 lg:px-16 max-w-7xl relative z-10 ${!showPortfolio ? 'w-full' : ''}`}>
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
            {/* Left Content */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 tracking-tight px-2 md:px-0">
                Hi <span className="text-gold">Nairobi Litfest</span>!
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-4 md:mb-6 leading-relaxed max-w-2xl mx-auto md:mx-0 px-2 md:px-0">
                My name is <strong className="text-gold">Alex Nyamai</strong>, a Digital Strategist, Media Lead, and recently qualified Software Developer with extensive experience managing social media presence, planning content, and engaging audiences across platforms. I'm excited about the opportunity to bring the energy of Nairobi Litfest online and grow your festival's digital community.
              </p>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 md:mb-8 leading-relaxed max-w-2xl mx-auto md:mx-0 italic px-2 md:px-0">
                To see my track record in social media coordination and content execution, click below.
              </p>
              {!showPortfolio ? (
                <button
                  onClick={() => scrollToSection('portfolio')}
                  className="relative inline-block bg-gold text-charcoal px-6 py-3 md:px-12 md:py-5 font-bold tracking-widest uppercase hover:bg-gold/95 transition-all duration-500 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 text-xs md:text-sm overflow-hidden group w-full md:w-auto"
                  style={{
                    letterSpacing: '0.15em',
                    boxShadow: '0 10px 25px -5px rgba(198, 167, 94, 0.4), 0 4px 6px -2px rgba(198, 167, 94, 0.2)'
                  }}
                >
                  <span className="relative z-10">Show Me the Work</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </button>
              ) : (
                <button
                  onClick={hidePortfolio}
                  className="relative inline-block border-2 border-gold text-gold px-6 py-3 md:px-12 md:py-5 font-bold tracking-widest uppercase hover:bg-gold hover:text-charcoal transition-all duration-500 shadow-lg hover:shadow-xl transform hover:-translate-y-2 text-xs md:text-sm overflow-hidden group w-full md:w-auto"
                  style={{
                    letterSpacing: '0.15em',
                    boxShadow: '0 4px 6px -1px rgba(198, 167, 94, 0.2)'
                  }}
                >
                  <span className="relative z-10">Hide Portfolio</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-gold/0 via-gold/10 to-gold/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </button>
              )}
            </div>

            {/* Right Photo - Desktop */}
            <div className="hidden md:block flex-shrink-0">
              <div className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-gold shadow-2xl group">
                <img 
                  src={profilePhoto} 
                  alt="Alex Nyamai" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 border-2 border-gold/20 rounded-full"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-gold/0 via-gold/0 to-gold/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>

            {/* Photo Above CTA - Mobile */}
            <div className="md:hidden">
              <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-gold shadow-2xl mx-auto mb-8 group">
                <img 
                  src={profilePhoto} 
                  alt="Alex Nyamai" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 border-2 border-gold/20 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative Line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent"></div>
      </section>

      {/* Back to Top Button - Shows when portfolio is visible */}
      {showPortfolio && (
        <div className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-50">
          <button
            onClick={hidePortfolio}
            className="relative bg-gold text-charcoal px-4 py-2 md:px-8 md:py-4 font-bold tracking-widest uppercase hover:bg-gold/95 transition-all duration-500 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 text-xs rounded-full overflow-hidden group"
            title="Hide Portfolio"
            style={{
              letterSpacing: '0.1em',
              boxShadow: '0 10px 25px -5px rgba(198, 167, 94, 0.4)'
            }}
          >
            <span className="relative z-10">↑ Hide</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700 rounded-full"></div>
          </button>
        </div>
      )}


      {/* Portfolio / Experience Section */}
      {showPortfolio && (
        <section 
          id="portfolio" 
          className="py-20 md:py-28 bg-white transition-all duration-1000"
        >
          <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-7xl transition-all duration-1000 opacity-100 translate-y-0">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-charcoal mb-3 md:mb-4 pb-3 md:pb-4 border-b-2 border-gold inline-block">
            Portfolio & Experience
          </h2>
          <p className="text-gray-600 mb-8 md:mb-12 text-base md:text-lg italic max-w-3xl">
            Selected projects demonstrating social media management, content planning, and audience engagement experience
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`bg-white border-2 border-gray-200 p-6 md:p-10 hover:shadow-2xl transition-all duration-700 cursor-pointer transform hover:-translate-y-3 relative overflow-hidden group ${
                  activeProject === project.id ? 'border-gold shadow-2xl scale-[1.01] ring-2 ring-gold/20' : 'hover:border-gold/50'
                }`}
                onClick={() => setActiveProject(activeProject === project.id ? null : project.id)}
                style={{
                  transitionDelay: `${index * 50}ms`,
                  animation: showPortfolio ? `fadeInUp 0.6s ease-out ${index * 0.1}s both` : 'none',
                  boxShadow: activeProject === project.id 
                    ? '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(198, 167, 94, 0.1)' 
                    : '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
                }}
              >
                {/* Premium accent line */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent transition-all duration-500 ${
                  activeProject === project.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                }`}></div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 md:mb-5 gap-2">
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-charcoal leading-tight">{project.title}</h3>
                  <span className="text-xs text-gold font-bold uppercase tracking-wider whitespace-nowrap px-3 py-1 bg-gold/10 rounded-full border border-gold/20 self-start sm:self-auto">{project.period}</span>
                </div>
                <p className="text-gold font-semibold text-xs mb-4 md:mb-5 uppercase tracking-widest letter-spacing-wider border-l-2 border-gold pl-3">
                  {project.roles.join(' • ')}
                </p>
                <p className="text-gray-700 mb-6 md:mb-8 leading-relaxed text-sm md:text-base">{project.description}</p>
                <div className="flex flex-wrap gap-2 md:gap-3">
                  {project.links.map((link, linkIndex) => (
                    <a
                      key={linkIndex}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative border-2 border-gold text-gold px-4 py-2 md:px-6 md:py-3 font-bold text-xs uppercase tracking-widest hover:bg-gold hover:text-charcoal transition-all duration-500 transform hover:scale-105 overflow-hidden group/btn"
                      onClick={(e) => e.stopPropagation()}
                      style={{
                        letterSpacing: '0.1em'
                      }}
                    >
                      <span className="relative z-10">{link.label}</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-gold/0 via-gold/20 to-gold/0 transform -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></div>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
          </div>
        </section>
      )}

      {/* Divider */}
      {showPortfolio && (
        <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent transition-all duration-1000"></div>
      )}

      {/* Footer */}
      {showPortfolio && (
        <footer className="bg-charcoal text-white py-10 transition-all duration-1000">
        <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-7xl text-center">
          <a 
            href="https://wa.me/254717776105?text=Hi%20Alex,%20I'm%20interested%20in%20discussing%20digital%20strategy%20and%20social%20media%20coordination." 
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-block bg-gold text-charcoal px-8 py-4 md:px-14 md:py-6 font-bold tracking-widest uppercase hover:bg-gold/95 transition-all duration-500 shadow-2xl hover:shadow-[0_25px_50px_-12px_rgba(198,167,94,0.5)] transform hover:-translate-y-2 text-sm md:text-base overflow-hidden group"
            style={{
              letterSpacing: '0.15em',
              boxShadow: '0 20px 25px -5px rgba(198, 167, 94, 0.4), 0 10px 10px -5px rgba(198, 167, 94, 0.2)'
            }}
          >
            <span className="relative z-10">Get In Touch</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          </a>
        </div>
      </footer>
      )}

      <style>{`
        @keyframes slide {
          0% { transform: translateX(0); }
          100% { transform: translateX(20px); }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}

export default App;
