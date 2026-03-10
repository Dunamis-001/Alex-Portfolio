import { useState } from 'react';
import { projects } from './data/portfolio';
import profilePhoto from './assets/profile-photo.png';

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
                My name is <strong className="text-gold">Alex Dunamis</strong>, a Digital Strategist and Media Lead with extensive experience managing social media presence, planning content, and engaging audiences across platforms. I'm excited about the opportunity to bring the energy of Nairobi Litfest online and grow your festival's digital community.
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
                  alt="Alex 'Dunamis' Nyamai" 
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
                  alt="Alex 'Dunamis' Nyamai" 
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

      {/* Bringing Festival Energy Online */}
      {showPortfolio && (
        <section className="py-20 md:py-28 bg-off-white transition-all duration-1000">
          <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-7xl transition-all duration-1000 delay-300 opacity-100 translate-y-0">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal mb-6 md:mb-10 pb-4 md:pb-6 border-b-2 border-gold inline-block">
              Bringing Festival Energy Online
            </h2>
            
            {/* Social Media Coordination Value Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-10 md:mb-14">
              {/* Social Media Presence Management */}
              <div className="bg-white p-8 md:p-10 border-2 border-gray-200 hover:border-gold hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="text-5xl md:text-6xl mb-4 text-gold group-hover:scale-110 transition-transform duration-300">
                  📱
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-charcoal mb-3 leading-tight">
                  Manage & Grow Social Media Presence
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  Strategic management across platforms to build a vibrant, engaged community around Nairobi Litfest. Focus on consistent growth, authentic engagement, and platform-specific optimization.
                </p>
              </div>

              {/* Content Planning & Execution */}
              <div className="bg-white p-8 md:p-10 border-2 border-gray-200 hover:border-gold hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="text-5xl md:text-6xl mb-4 text-gold group-hover:scale-110 transition-transform duration-300">
                  📝
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-charcoal mb-3 leading-tight">
                  Plan & Execute Content
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  Structured content calendars and execution systems that showcase festival highlights, author spotlights, event announcements, and behind-the-scenes moments that capture the essence of Nairobi Litfest.
                </p>
              </div>

              {/* Audience Engagement */}
              <div className="bg-white p-8 md:p-10 border-2 border-gray-200 hover:border-gold hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="text-5xl md:text-6xl mb-4 text-gold group-hover:scale-110 transition-transform duration-300">
                  💬
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-charcoal mb-3 leading-tight">
                  Engage Audiences
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  Active community management that responds to comments, sparks conversations, builds anticipation, and creates a sense of belonging among festival attendees and literary enthusiasts.
                </p>
              </div>

              {/* Festival Energy Online */}
              <div className="bg-white p-8 md:p-10 border-2 border-gray-200 hover:border-gold hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="text-5xl md:text-6xl mb-4 text-gold group-hover:scale-110 transition-transform duration-300">
                  ✨
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-charcoal mb-3 leading-tight">
                  Bring Festival Energy Online
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  Capture and amplify the excitement, intellectual discourse, and cultural significance of Nairobi Litfest through dynamic content that makes the festival accessible to both attendees and remote audiences.
                </p>
              </div>

              {/* Multi-Platform Coordination */}
              <div className="bg-white p-8 md:p-10 border-2 border-gray-200 hover:border-gold hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="text-5xl md:text-6xl mb-4 text-gold group-hover:scale-110 transition-transform duration-300">
                  🔄
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-charcoal mb-3 leading-tight">
                  Multi-Platform Coordination
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  Unified strategy across Instagram, Twitter, Facebook, TikTok, and other platforms, ensuring consistent messaging while leveraging each platform's unique strengths and audience behaviors.
                </p>
              </div>

              {/* Event Coverage & Live Content */}
              <div className="bg-white p-8 md:p-10 border-2 border-gray-200 hover:border-gold hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="text-5xl md:text-6xl mb-4 text-gold group-hover:scale-110 transition-transform duration-300">
                  🎥
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-charcoal mb-3 leading-tight">
                  Event Coverage & Live Content
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  Real-time coverage during festival events, live updates, session highlights, author interviews, and engaging content that brings the live experience to social media audiences.
                </p>
              </div>
            </div>

            {/* Strategic Impact Paragraph */}
            <div className="bg-gradient-to-br from-white to-off-white p-8 md:p-10 lg:p-12 border-2 border-gold/20 shadow-lg">
              <div className="max-w-4xl mx-auto">
                <h3 className="text-2xl md:text-3xl font-bold text-charcoal mb-5 md:mb-6 text-center">
                  From Social Media Strategy to Engaged Literary Community
                </h3>
                <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed text-center">
                  Every post, story, and interaction is strategically designed to build anticipation, showcase the intellectual richness of Nairobi Litfest, and create a vibrant online community. By combining thoughtful content planning with authentic engagement and multi-platform coordination, social media becomes a powerful tool that extends the festival's reach, amplifies its impact, and brings the energy of live events to digital audiences. The result: <strong className="text-charcoal">increased visibility, engaged community, and a digital presence that reflects the festival's cultural significance</strong>.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Divider */}
      {showPortfolio && (
        <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent transition-all duration-1000 delay-500"></div>
      )}

      {/* Final CTA Section */}
      {showPortfolio && (
        <section className="py-20 md:py-32 bg-navy text-white relative overflow-hidden transition-all duration-1000">
        {/* Subtle animated background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(198, 167, 94, 0.1) 10px, rgba(198, 167, 94, 0.1) 20px)',
            animation: 'slide 20s linear infinite'
          }}></div>
        </div>
        
          <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-5xl text-center relative z-10 transition-all duration-1000 delay-500 opacity-100 translate-y-0">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 pb-3 md:pb-4 border-b-2 border-gold inline-block px-4">
            Ready to Bring Nairobi Litfest Online
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-6 md:mb-8 max-w-3xl mx-auto leading-relaxed px-4">
            I'm excited about the opportunity to manage Nairobi Litfest's social media presence and help grow your festival's digital community during the April–June project period.
          </p>
          <p className="text-base md:text-lg text-gray-400 mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed px-4">
            <strong className="text-gold">Nairobi | Flexible Hours | Project Contract: April – June</strong>
          </p>
          <a 
            href="mailto:comms@bookbunk.org?subject=Social Media Coordinator Application - Alex Dunamis&body=Dear Nairobi Litfest Team,%0D%0A%0D%0AI am writing to express my interest in the Social Media Coordinator position for Nairobi Litfest.%0D%0A%0D%0APlease find attached my CV and portfolio showcasing my experience in social media management, content planning, and audience engagement.%0D%0A%0D%0ALooking forward to discussing how I can help bring the energy of Nairobi Litfest online.%0D%0A%0D%0ABest regards,%0D%0AAlex 'Dunamis' Nyamai" 
            className="relative inline-block bg-gold text-charcoal px-8 py-4 md:px-14 md:py-6 font-bold tracking-widest uppercase hover:bg-gold/95 transition-all duration-500 shadow-2xl hover:shadow-[0_25px_50px_-12px_rgba(198,167,94,0.5)] transform hover:-translate-y-2 text-sm md:text-base overflow-hidden group w-full sm:w-auto"
            style={{
              letterSpacing: '0.15em',
              boxShadow: '0 20px 25px -5px rgba(198, 167, 94, 0.4), 0 10px 10px -5px rgba(198, 167, 94, 0.2)'
            }}
          >
            <span className="relative z-10">Apply Now</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          </a>
          <p className="text-sm md:text-base text-gray-400 mt-6 max-w-xl mx-auto px-4">
            Send CV, portfolio or links to previous campaigns, and a brief cover letter to <strong className="text-gold">comms@bookbunk.org</strong> (rolling basis)
          </p>
          </div>
        </section>
      )}

      {/* Footer */}
      {showPortfolio && (
        <footer className="bg-charcoal text-white py-10 transition-all duration-1000">
        <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-7xl text-center">
          <p className="text-gray-400 text-sm tracking-wide">
            © {new Date().getFullYear()} Alex 'Dunamis' Nyamai. All rights reserved.
          </p>
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
