import React from 'react';
import { GraduationCap, Award, Calendar, MapPin, Star } from 'lucide-react';

const Education = () => {
  const education = {
    degree: 'B.Tech in Computer Science',
    institution: 'University of Engineering and Management (UEM)',
    duration: 'Aug 2022 – Jul 2026',
    location: 'Jaipur, Rajasthan, India',
    gpa: '9.30',
    status: 'Rank Card Holder',
  };

  const courses = [
    {
      title: 'DATA SCIENCE USING PYTHON',
      institution: 'IIT Madras',
      duration: 'Jan 2024 – Apr 2024',
      type: 'Certification',
    },
    {
      title: 'PROBLEM SOLVING USING C',
      institution: 'IIT Kharagpur',
      duration: 'Jul 2023 – Oct 2023',
      type: 'Certification',
    },
    {
      title: 'Joy of Computing Using Python',
      institution: 'IIT Madras',
      duration: 'Jan 2023 – Apr 2023',
      type: 'Certification',
    },
  ];

  const awards = [
    {
      title: 'NMMS Scholarship',
      organization: 'Ministry of Human Resource Development (MHRD) Govt. of India',
      date: 'Aug 2016',
      description: 'National Merit-cum-Means Scholarship',
    },
    {
      title: 'Rank Card Holder',
      organization: 'UEM, Jaipur',
      date: 'Current',
      description: 'GPA: 9.30/10.0',
    },
  ];

  return (
    <section id="education" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Education & Achievements</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Academic excellence and continuous learning in computer science and technology
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Main Education */}
          <div className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-xl p-8 mb-12 text-white shadow-2xl">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mr-6">
                <GraduationCap size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">{education.degree}</h3>
                <p className="text-blue-100 text-lg">{education.institution}</p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-4">
              <div className="flex items-center space-x-2">
                <Calendar size={20} className="text-blue-200" />
                <span>{education.duration}</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin size={20} className="text-blue-200" />
                <span>{education.location}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star size={20} className="text-yellow-300" />
                <span>GPA: {education.gpa}/10.0</span>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Courses */}
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <GraduationCap className="mr-3 text-blue-400" size={24} />
                Certifications
              </h3>
              <div className="space-y-4">
                {courses.map((course, index) => (
                  <div key={index} className="bg-gray-900 rounded-lg p-4 shadow-sm border-l-4 border-blue-500">
                    <h4 className="font-semibold text-white mb-2">{course.title}</h4>
                    <p className="text-blue-400 font-medium mb-1">{course.institution}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400 text-sm">{course.duration}</span>
                      <span className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded text-sm border border-blue-500/30">
                        {course.type}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Awards */}
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Award className="mr-3 text-orange-400" size={24} />
                Awards & Recognition
              </h3>
              <div className="space-y-4">
                {awards.map((award, index) => (
                  <div key={index} className="bg-gray-900 rounded-lg p-4 shadow-sm border-l-4 border-orange-500">
                    <h4 className="font-semibold text-white mb-2">{award.title}</h4>
                    <p className="text-orange-400 font-medium mb-1">{award.organization}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400 text-sm">{award.description}</span>
                      <span className="px-2 py-1 bg-orange-500/20 text-orange-400 rounded text-sm border border-orange-500/30">
                        {award.date}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;