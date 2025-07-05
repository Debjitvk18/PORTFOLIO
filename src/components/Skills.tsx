import React from 'react';
import { Code, Database, Cloud, Cpu, Wrench, Lightbulb } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      skills: ['C/C++', 'Python', 'Java', 'JavaScript'],
      color: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
      delay: 'delay-100',
    },
    {
      title: 'Web Development',
      icon: Cpu,
      skills: ['React.js', 'Express.js', 'Ethers.js', 'HTML/CSS'],
      color: 'bg-teal-500/20 text-teal-400 border-teal-500/30',
      delay: 'delay-200',
    },
    {
      title: 'Databases',
      icon: Database,
      skills: ['MongoDB', 'SQL', 'Firebase'],
      color: 'bg-orange-500/20 text-orange-400 border-orange-500/30',
      delay: 'delay-300',
    },
    {
      title: 'Cloud & DevOps',
      icon: Cloud,
      skills: ['AWS EC2', 'S3 Bucket', 'Linux/Unix', 'Git/GitHub'],
      color: 'bg-green-500/20 text-green-400 border-green-500/30',
      delay: 'delay-400',
    },
    {
      title: 'Tools & Technologies',
      icon: Wrench,
      skills: ['VS Code', 'Figma', 'MQTT', 'Ganache', 'MetaMask'],
      color: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
      delay: 'delay-500',
    },
    {
      title: 'Core Concepts',
      icon: Lightbulb,
      skills: ['Data Structures', 'Algorithms', 'OOP', 'Software Design'],
      color: 'bg-rose-500/20 text-rose-400 border-rose-500/30',
      delay: 'delay-600',
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-800 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/5 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-teal-500/5 rounded-full blur-xl animate-float delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl font-bold text-white mb-4 animate-slideInFromTop">Technical Skills</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto animate-slideInFromBottom delay-200">
            Comprehensive skill set spanning multiple technologies and programming paradigms
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`bg-gray-900 rounded-xl shadow-xl p-6 hover:shadow-2xl transition-all duration-500 border border-gray-700 hover:border-gray-600 transform hover:-translate-y-2 hover:scale-105 animate-fadeInUp ${category.delay} group`}
            >
              <div className="flex items-center mb-4">
                <div className={`p-3 rounded-lg border ${category.color} mr-4 group-hover:scale-110 transition-transform duration-300 animate-pulse`}>
                  <category.icon size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">{category.title}</h3>
              </div>
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className={`flex items-center justify-between p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all duration-300 border border-gray-700 hover:border-blue-500/50 transform hover:translate-x-2 animate-slideInFromLeft`}
                    style={{ animationDelay: `${skillIndex * 100 + 300}ms` }}
                  >
                    <span className="text-gray-300 font-medium">{skill}</span>
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-ping"></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;