import { useState, useEffect } from "react";
import {
  Calendar,
  MapPin,
  Users,
  Phone,
  Globe,
  Instagram,
  Clock,
  Star,
  Trophy,
  Palette,
  Zap,
  Heart,
} from "lucide-react";


import sdcLogo from "../assets/sdc-white.png";

function Uxplosion() {
  const [isHovered, setIsHovered] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleRegister = () => {
    window.open("http://sdcindia.tech", "_blank");
  };

  const workshopDays = [
    { date: "Sept 15", topic: "Design Thinking Fundamentals", icon: "🎨" },
    { date: "Sept 16", topic: "User Research & Personas", icon: "👥" },
    { date: "Sept 17", topic: "Wireframing & Prototyping", icon: "📐" },
    { date: "Sept 18", topic: "Visual Design & UI", icon: "🎭" },
    { date: "Sept 19", topic: "Figma Mastery", icon: "⚡" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden" style={{ fontFamily: 'Gilroy, Inter, system-ui, sans-serif' }}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-pink-500/20 to-violet-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-r from-cyan-500/15 to-blue-500/15 rounded-full blur-3xl animate-bounce slow"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-gradient-to-r from-orange-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse"></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDMpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
      </div>

      <div className="relative z-10">
        {/* Minimal Navbar */}
        <header className="absolute top-0 left-0 right-0 z-50">
          <div className="container mx-auto px-8 py-6">
            <div className="flex items-center justify-between">
              {/* SDC Logo */}
              <div className="flex items-center">
                <img src={sdcLogo} alt="SDC" className="h-12 w-auto" />
              </div>
              
              {/* Register Button */}
              <button
                onClick={handleRegister}
                className="px-8 py-3 bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 rounded-full font-bold text-white transition-all duration-300 transform hover:scale-105 shadow-lg"
                style={{ fontFamily: 'Gilroy, Inter, system-ui, sans-serif' }}
              >
                Register Now
              </button>
            </div>
          </div>
        </header>


        {/* Hero Section */}
        <section className="relative py-20 px-6">
          <div className="container mx-auto text-center max-w-5xl">
            {/* Event Title */}
            <div className="mb-12">
              <p className="text-lg text-gray-300 mb-4 font-light tracking-wider" style={{ fontFamily: 'Gilroy, Inter, system-ui, sans-serif' }}>SDC PRESENTS</p>
              
              <div className="relative">
                <h1 className="text-7xl md:text-9xl font-black mb-6 relative" style={{ fontFamily: 'Gilroy, Inter, system-ui, sans-serif' }}>
                  <span className="bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 bg-clip-text text-transparent drop-shadow-2xl">
                    UX
                  </span>
                  <span className="bg-gradient-to-r from-pink-500 via-purple-600 to-blue-500 bg-clip-text text-transparent">
                    plosion
                  </span>
                  <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full blur-xl opacity-60 animate-pulse"></div>
                </h1>
                
                <div className="relative">
                  <h2 className="text-6xl md:text-8xl font-black text-transparent bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text mb-8" style={{ fontFamily: 'Gilroy, Inter, system-ui, sans-serif' }}>
                    2.0
                  </h2>
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 blur-3xl"></div>
                </div>
              </div>

              <p className="text-xl md:text-2xl text-gray-300 font-light max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'Gilroy, Inter, system-ui, sans-serif' }}>
                Transform your design journey from{" "}
                <span className="text-transparent bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text font-semibold">
                  basics to brilliance
                </span>{" "}
                in an immersive 5-day UI/UX experience
              </p>
            </div>

            {/* CTA Button */}
            <div className="relative">
              <button
                onClick={handleRegister}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="group relative px-12 py-4 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 rounded-2xl font-bold text-xl text-white shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
              >
                <span className="relative z-10 flex items-center space-x-3">
                  <span>Register for FREE</span>
                  <Heart className={`w-6 h-6 transition-all duration-300 ${isHovered ? 'text-red-300' : 'text-white'}`} />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600 via-pink-600 to-purple-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              
              <p className="mt-4 text-gray-400 mb-20">
                <Zap className="w-4 h-4 inline mr-2 text-yellow-400" />
                Limited seats • No prerequisites required
              </p>
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                <div className="text-3xl mb-2">🎨</div>
                <h3 className="text-2xl font-bold text-white mb-2">5 Days</h3>
                <p className="text-gray-400">Intensive Workshop</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                <div className="text-3xl mb-2">🏆</div>
                <h3 className="text-2xl font-bold text-white mb-2">1 Day</h3>
                <p className="text-gray-400">Hackathon Challenge</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                <div className="text-3xl mb-2">🎯</div>
                <h3 className="text-2xl font-bold text-white mb-2">100%</h3>
                <p className="text-gray-400">Hands-on Learning</p>
              </div>
            </div>

            </div>
          </div>
        </section>

        {/* Workshop Timeline */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'Gilroy, Inter, system-ui, sans-serif' }}>
                Your Learning Journey
              </h2>
              <p className="text-xl text-gray-400" style={{ fontFamily: 'Gilroy, Inter, system-ui, sans-serif' }}>5 days of progressive skill building</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {workshopDays.map((day, index) => (
                <div
                  key={index}
                  className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:from-white/20 hover:to-white/10 transition-all duration-300 group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-pink-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    <div className="text-4xl mb-4">{day.icon}</div>
                    <h3 className="text-lg font-bold text-white mb-2" style={{ fontFamily: 'Gilroy, Inter, system-ui, sans-serif' }}>{day.date}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed" style={{ fontFamily: 'Gilroy, Inter, system-ui, sans-serif' }}>{day.topic}</p>
                  </div>
                  
                  <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full flex items-center justify-center text-xs font-bold text-white">
                    {index + 1}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Event Details Cards */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Workshop Card */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-pink-600 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                <div className="relative bg-gradient-to-br from-orange-500 to-pink-600 rounded-3xl p-8 text-white">
                  <div className="absolute top-6 right-6 w-16 h-16 bg-black/20 rounded-2xl flex items-center justify-center">
                    <Palette className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-3xl font-bold mb-4 pt-8" style={{ fontFamily: 'Gilroy, Inter, system-ui, sans-serif' }}>Workshop Experience</h3>
                  <p className="text-lg mb-6 opacity-90 leading-relaxed" style={{ fontFamily: 'Gilroy, Inter, system-ui, sans-serif' }}>
                    Master UI/UX fundamentals through interactive sessions covering design thinking, 
                    user research, wireframing, prototyping, and advanced Figma techniques.
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Calendar className="w-5 h-5" />
                      <span>Sept 15-19, 2025</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="w-5 h-5" />
                      <span>7:00 - 8:30 PM IST</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Globe className="w-5 h-5" />
                      <span>Online Sessions</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hackathon Card */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-blue-600 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                <div className="relative bg-gradient-to-br from-purple-600 to-blue-600 rounded-3xl p-8 text-white">
                  <div className="absolute top-6 right-6 w-16 h-16 bg-black/20 rounded-2xl flex items-center justify-center">
                    <Trophy className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-3xl font-bold mb-4 pt-8" style={{ fontFamily: 'Gilroy, Inter, system-ui, sans-serif' }}>Hackathon Challenge</h3>
                  <p className="text-lg mb-6 opacity-90 leading-relaxed" style={{ fontFamily: 'Gilroy, Inter, system-ui, sans-serif' }}>
                    Apply your new skills in an exciting offline hackathon featuring real-world challenges, 
                    team collaboration, expert feedback, and amazing prizes.
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Calendar className="w-5 h-5" />
                      <span>September 20, 2025</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="w-5 h-5" />
                      <span>Full Day Event</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-5 h-5" />
                      <span>Admin Seminar Hall, SNIST</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Join Section */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-16" style={{ fontFamily: 'Gilroy, Inter, system-ui, sans-serif' }}>
              Why Join UXplosion 2.0?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: "🚀", title: "Career Boost", desc: "Gain industry-relevant skills that employers value" },
                { icon: "🎓", title: "Expert Mentorship", desc: "Learn from experienced UX designers and developers" },
                { icon: "🌟", title: "Portfolio Projects", desc: "Build real projects to showcase your new abilities" },
                { icon: "🤝", title: "Network", desc: "Connect with like-minded designers and developers" },
                { icon: "🏆", title: "Certificates", desc: "Earn completion certificates for your achievements" },
                { icon: "💡", title: "Innovation", desc: "Develop creative problem-solving skills" }
              ].map((benefit, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3" style={{ fontFamily: 'Gilroy, Inter, system-ui, sans-serif' }}>{benefit.title}</h3>
                  <p className="text-gray-400 leading-relaxed" style={{ fontFamily: 'Gilroy, Inter, system-ui, sans-serif' }}>{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Uxplosion;
