import React from 'react';
import { Trophy, Users, Calendar, MapPin } from 'lucide-react';

const Organizations = () => {
  const hackathons = [
    {
      name: 'Ace Hack 4.0',
      position: '15th Position',
      participants: '800+',
      date: 'Mar 2025',
      location: 'Jaipur, Rajasthan, India',
      status: 'PARTICIPANT',
      rank: 15,
      color: 'from-yellow-400 to-orange-500',
    },
    {
      name: 'HackUEM 2.0',
      position: '3rd Position',
      participants: '200+',
      date: 'Sep 2024',
      location: 'Jaipur, Rajasthan, India',
      status: 'PARTICIPANT',
      rank: 3,
      color: 'from-green-400 to-emerald-500',
    },
    {
      name: 'Ace Hack 3.0',
      position: '11th Position',
      participants: '700+',
      date: 'Apr 2023',
      location: 'Jaipur, Rajasthan, India',
      status: 'PARTICIPANT',
      rank: 11,
      color: 'from-blue-400 to-blue-600',
    },
  ];

  const getRankSuffix = (rank: number) => {
    if (rank >= 11 && rank <= 13) return 'th';
    switch (rank % 10) {
      case 1: return 'st';
      case 2: return 'nd';
      case 3: return 'rd';
      default: return 'th';
    }
  };

  return (
    <section id="awards" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Hackathons & Competitions</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Competitive programming and hackathon achievements showcasing problem-solving skills
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid gap-6">
            {hackathons.map((hackathon, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-700"
              >
                <div className={`h-2 bg-gradient-to-r ${hackathon.color}`}></div>
                
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <div className={`w-16 h-16 bg-gradient-to-br ${hackathon.color} rounded-full flex items-center justify-center shadow-lg`}>
                        <Trophy size={28} className="text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-1">{hackathon.name}</h3>
                        <p className="text-gray-400">{hackathon.status}</p>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className={`text-2xl font-bold bg-gradient-to-r ${hackathon.color} bg-clip-text text-transparent`}>
                        {hackathon.rank}{getRankSuffix(hackathon.rank)}
                      </div>
                      <div className="text-sm text-gray-400">Position</div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-4 mb-4">
                    <div className="flex items-center space-x-2 text-gray-400">
                      <Users size={16} />
                      <span className="text-sm">{hackathon.participants} participants</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-400">
                      <Calendar size={16} />
                      <span className="text-sm">{hackathon.date}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-400">
                      <MapPin size={16} />
                      <span className="text-sm">{hackathon.location}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-white">
                      {hackathon.position}
                    </span>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-gray-400">Completed</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="bg-gray-900 rounded-xl shadow-xl p-8 border border-gray-700">
              <div className="flex justify-center items-center space-x-8 mb-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400">3</div>
                  <div className="text-gray-400">Hackathons</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400">1700+</div>
                  <div className="text-gray-400">Total Participants</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-400">Top 15</div>
                  <div className="text-gray-400">Avg. Ranking</div>
                </div>
              </div>
              <p className="text-gray-400">
                Consistent performance in competitive programming and hackathon environments
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Organizations;