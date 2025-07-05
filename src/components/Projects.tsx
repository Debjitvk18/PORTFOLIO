import React from 'react';
import { ExternalLink, Github, Calendar, Users, TrendingUp } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Kissan Helper – Smart Farming Assistant',
      duration: 'Jan 2025 – May 2025',
      techStack: ['Python', 'Scikit-learn', 'Raspberry Pi', 'IoT Sensors', 'Flask', 'MQTT', 'AWS'],
      description: 'Developed an ML- and IoT-based system used by 500+ farmers for crop selection, disease prediction, soil analysis, and smart irrigation.',
      highlights: [
        'Integrated ML models with 10+ sensor inputs',
        'Enhanced yield and improved decision-making accuracy',
        'Served 500+ farmers with real-time insights'
      ],
      impact: '500+ farmers',
      category: 'IoT & ML',
      color: 'from-green-400 to-green-600',
      delay: 'delay-100',
    },
    {
      title: 'Soilnutrient Using ML',
      duration: 'Apr 2025 – May 2025',
      techStack: ['Python', 'Scikit-learn', 'Matplotlib', 'Pandas'],
      description: 'Analyzed 18 soil features to predict suitability for 30+ crops using regression and classification models.',
      highlights: [
        'Analyzed 18 soil features for crop prediction',
        'Suggested top 5 alternative crops',
        'Visualized results with pie charts and confusion matrices'
      ],
      impact: '30+ crops analyzed',
      category: 'Machine Learning',
      color: 'from-blue-400 to-blue-600',
      delay: 'delay-200',
    },
    {
      title: 'Plant Disease Detection using ML',
      duration: 'Nov 2024 – Dec 2024',
      techStack: ['Python', 'TensorFlow/Keras', 'OpenCV'],
      description: 'Built a CNN model trained on 100K+ labeled leaf images to detect and classify plant diseases.',
      highlights: [
        'Trained on 100K+ labeled leaf images',
        'Achieved high accuracy in early diagnosis',
        'Provided treatment suggestions using computer vision'
      ],
      impact: '100K+ images processed',
      category: 'Computer Vision',
      color: 'from-emerald-400 to-emerald-600',
      delay: 'delay-300',
    },
    {
      title: 'Crowdfunding Web App Using Blockchain',
      duration: 'Jun 2024 – Aug 2024',
      techStack: ['Ethereum', 'Solidity', 'IPFS', 'Python', 'Web3.js', 'Ganache', 'MetaMask'],
      description: 'Built a blockchain-based system using Ethereum and IPFS to verify digital content authenticity.',
      highlights: [
        'Implemented smart contracts for crowdfunding',
        'Processed 10,000+ images with 99% accuracy',
        'Integrated with MetaMask for secure transactions'
      ],
      impact: '99% accuracy',
      category: 'Blockchain',
      color: 'from-purple-400 to-purple-600',
      delay: 'delay-400',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-800 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-40 right-20 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-40 left-20 w-48 h-48 bg-blue-500/5 rounded-full blur-3xl animate-float delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl font-bold text-white mb-4 animate-slideInFromTop">Featured Projects</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto animate-slideInFromBottom delay-200">
            Innovative solutions leveraging cutting-edge technologies in ML, IoT, and blockchain
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`bg-gray-900 rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-700 transform hover:-translate-y-3 hover:scale-105 animate-fadeInUp ${project.delay} group`}
            >
              <div className={`h-2 bg-gradient-to-r ${project.color} animate-gradient-x`}></div>
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">{project.title}</h3>
                    <div className="flex items-center space-x-2 text-gray-400 mb-2">
                      <Calendar size={16} className="animate-pulse" />
                      <span className="text-sm">{project.duration}</span>
                    </div>
                    <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium border border-blue-500/30 animate-pulse">
                      {project.category}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 text-orange-400 animate-bounce">
                    <TrendingUp size={16} />
                    <span className="text-sm font-semibold">{project.impact}</span>
                  </div>
                </div>

                <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>

                <div className="mb-4">
                  <h4 className="font-semibold text-white mb-2">Key Achievements:</h4>
                  <ul className="space-y-1">
                    {project.highlights.map((highlight, hIndex) => (
                      <li key={hIndex} className="flex items-start space-x-2 animate-slideInFromLeft" style={{ animationDelay: `${hIndex * 100 + 500}ms` }}>
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0 animate-ping"></div>
                        <span className="text-gray-300 text-sm">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-white mb-2">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, tIndex) => (
                      <span
                        key={tIndex}
                        className="px-2 py-1 bg-gray-800 text-gray-300 rounded text-sm border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:scale-105 animate-fadeInUp"
                        style={{ animationDelay: `${tIndex * 50 + 700}ms` }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-3">
                  <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                    <Github size={16} className="animate-spin-slow" />
                    <span>Code</span>
                  </button>
                  <button className="flex items-center space-x-2 px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                    <ExternalLink size={16} className="animate-bounce" />
                    <span>Demo</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;