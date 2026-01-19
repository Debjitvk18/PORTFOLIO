import { MapPin, Calendar } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile Photo Section */}
            <div className="text-center lg:text-left order-2 lg:order-1">
              <div className="relative inline-block mb-8 animate-fadeInUp">
                <div className="relative group profile-photo-container">
                  {/* Profile photo container */}
                  <div className="w-80 h-80 mx-auto lg:mx-0 rounded-full bg-gradient-to-br from-blue-500 via-teal-500 to-purple-500 p-1 shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 transform hover:scale-105">
                    <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center overflow-hidden relative">
                      {/* Your profile photo */}
                      <img
                        src="/WhatsApp Image 2025-07-05 at 20.34.19_f23d817a.jpg"
                        alt="Debjit Ghosh"
                        className="w-full h-full object-cover rounded-full profile-photo"
                      />
                    </div>
                  </div>

                  {/* Animated rings */}
                  <div className="absolute inset-0 rounded-full border-2 border-blue-500/30 animate-ping"></div>
                  <div className="absolute inset-0 rounded-full border border-teal-500/20 animate-pulse"></div>
                </div>

                {/* Status indicator */}
                <div className="absolute bottom-8 right-8 w-8 h-8 bg-green-500 rounded-full border-4 border-gray-900 animate-bounce shadow-lg">
                  <div className="w-full h-full bg-green-400 rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="text-center lg:text-left order-1 lg:order-2">
              <div className="animate-fadeInUp delay-200">
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 animate-slideInFromRight">
                  <span className="inline-block animate-bounce delay-100">D</span>
                  <span className="inline-block animate-bounce delay-200">e</span>
                  <span className="inline-block animate-bounce delay-300">b</span>
                  <span className="inline-block animate-bounce delay-400">j</span>
                  <span className="inline-block animate-bounce delay-500">i</span>
                  <span className="inline-block animate-bounce delay-600">t</span>
                  <span className="inline-block animate-bounce delay-700 ml-4">G</span>
                  <span className="inline-block animate-bounce delay-800">h</span>
                  <span className="inline-block animate-bounce delay-900">o</span>
                  <span className="inline-block animate-bounce delay-1000">s</span>
                  <span className="inline-block animate-bounce delay-1100">h</span>
                </h1>

                <div className="text-2xl md:text-3xl mb-6 animate-slideInFromLeft delay-300">
                  <span className="block text-transparent bg-gradient-to-r from-blue-400 via-teal-400 to-purple-400 bg-clip-text animate-gradient-x">
                    Computer Science Student & Developer
                  </span>
                </div>

                <p className="text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed animate-fadeInUp delay-500">
                  Motivated Full Stack Developer Fresher with hands-on experience in building scalable web applications using React,
                  Next.js, Node.js, Express, and MongoDB. Strong foundation in Data Structures, OOPs, REST APIs, and modern
                  frontend development. Seeking opportunities as a Full Stack Developer Intern / SDE-1.
                </p>
              </div>

              <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8 animate-fadeInUp delay-700">
                <div className="flex items-center space-x-2 bg-gray-800/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:scale-105">
                  <MapPin size={16} className="text-blue-400 animate-pulse" />
                  <span className="text-gray-300">Jaipur, Rajasthan</span>
                </div>
                <div className="flex items-center space-x-2 bg-gray-800/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-gray-700 hover:border-teal-500 transition-all duration-300 hover:scale-105">
                  <Calendar size={16} className="text-teal-400 animate-pulse delay-500" />
                  <span className="text-gray-300">B.Tech CSE (2022-2026)</span>
                </div>
              </div>

              <div className="flex justify-center lg:justify-start space-x-4 animate-fadeInUp delay-1000">
                <a
                  href="#contact"
                  className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-3 rounded-full hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-blue-500/25 transform hover:-translate-y-1 hover:scale-105 animate-pulse"
                >
                  Get In Touch
                </a>
                <a
                  href="#projects"
                  className="bg-gray-800/80 backdrop-blur-sm text-blue-400 px-8 py-3 rounded-full border-2 border-blue-400 hover:bg-blue-400 hover:text-white transition-all duration-300 shadow-lg hover:shadow-blue-500/25 transform hover:-translate-y-1 hover:scale-105"
                >
                  View Projects
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;