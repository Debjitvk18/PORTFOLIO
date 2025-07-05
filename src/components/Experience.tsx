import React from 'react';
import { MapPin, Calendar, Award } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'AI-ML Virtual Internship',
      company: 'EDUSKILL by AWS Academy',
      duration: 'Feb 2025 – Apr 2025',
      location: 'Jaipur, India',
      type: 'Internship',
      description: 'Learn about Machine learning and cloud computing',
      highlights: ['AWS Cloud Computing', 'Machine Learning Fundamentals', 'Virtual Learning Environment'],
    },
    {
      title: 'Trainee',
      company: 'HNNOIX INDIA',
      duration: 'Nov 2024 – Feb 2025',
      location: 'Gurgaon, India',
      type: 'Training',
      description: 'Got training on 6G technology',
      highlights: ['6G Technology', 'Telecommunications', 'Advanced Networks'],
    },
    {
      title: 'Technical & Support Management',
      company: 'E-Cell UEM, Jaipur',
      duration: 'Ongoing',
      location: 'Jaipur, India',
      type: 'Leadership',
      description: 'Managing technical operations and support for entrepreneurship cell',
      highlights: ['Team Management', 'Technical Support', 'Event Organization'],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Professional Experience</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Hands-on experience in cutting-edge technologies and leadership roles
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="relative">
              {index !== experiences.length - 1 && (
                <div className="absolute left-6 top-16 w-0.5 h-full bg-gradient-to-b from-blue-500 to-teal-500"></div>
              )}
              
              <div className="flex items-start space-x-6 mb-12">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full flex items-center justify-center shadow-lg">
                  <Award size={20} className="text-white" />
                </div>
                
                <div className="flex-1 bg-gray-800 rounded-xl p-6 shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-gray-700">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                      <p className="text-blue-400 font-semibold">{exp.company}</p>
                    </div>
                    <div className="flex flex-col lg:items-end space-y-2 mt-2 lg:mt-0">
                      <div className="flex items-center space-x-2 text-gray-400">
                        <Calendar size={16} />
                        <span className="text-sm">{exp.duration}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-400">
                        <MapPin size={16} />
                        <span className="text-sm">{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4">{exp.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.highlights.map((highlight, hIndex) => (
                      <span
                        key={hIndex}
                        className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium border border-blue-500/30"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;