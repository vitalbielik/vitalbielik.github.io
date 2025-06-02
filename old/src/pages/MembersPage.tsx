import React from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, ArrowRight } from 'lucide-react';
import CallToAction from '../components/CallToAction';

interface MemberProps {
  image: string;
  name: string;
  title: string;
  location: string;
  specialties: string[];
  bio: string;
}

const MemberCard: React.FC<MemberProps> = ({ image, name, title, location, specialties, bio }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="flex flex-col md:flex-row bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
  >
    <div className="md:w-1/3 lg:w-1/4">
      <img
        src={image}
        alt={name}
        className="w-full h-64 md:h-full object-cover object-center"
      />
    </div>
    <div className="p-6 md:p-8 flex-grow">
      <h3 className="font-serif text-2xl font-medium mb-1 text-neutral-900">{name}</h3>
      <p className="text-primary-600 text-sm mb-1">{title}</p>
      <p className="text-neutral-500 text-sm mb-4">{location}</p>
      
      <div className="mb-4 flex flex-wrap gap-2">
        {specialties.map((specialty, index) => (
          <span 
            key={index}
            className="text-xs font-medium py-1 px-3 bg-primary-50 text-primary-700 rounded-full"
          >
            {specialty}
          </span>
        ))}
      </div>
      
      <p className="text-neutral-600 mb-6 line-clamp-3">{bio}</p>
      
      <button className="text-primary-700 hover:text-primary-800 font-medium text-sm inline-flex items-center transition-colors">
        View Full Profile <ArrowRight size={16} className="ml-1" />
      </button>
    </div>
  </motion.div>
);

const MembersPage: React.FC = () => {
  const members = [
    {
      image: "https://images.pexels.com/photos/5792641/pexels-photo-5792641.jpeg",
      name: "Dr. Eleanor Thompson",
      title: "Founding Member & President",
      location: "New York, NY",
      specialties: ["Executive Coaching", "Leadership Development", "Organizational Dynamics"],
      bio: "With over 20 years of experience in clinical psychology and executive coaching, Dr. Thompson integrates psychoanalytic principles with leadership development. Her approach focuses on helping executives understand the unconscious dynamics that influence their leadership style and organizational culture. She has worked with Fortune 500 companies across various industries and is the author of 'The Reflective Leader: Psychoanalytic Insights for Executive Growth.'"
    },
    {
      image: "https://images.pexels.com/photos/5397723/pexels-photo-5397723.jpeg",
      name: "Dr. Michael Chen",
      title: "Director of Training",
      location: "San Francisco, CA",
      specialties: ["Career Transitions", "Identity Development", "Group Dynamics"],
      bio: "Dr. Chen specializes in psychodynamic approaches to career transitions and professional identity development. His work integrates object relations theory with contemporary coaching methodologies to help clients navigate complex career changes and leadership challenges. Previously a corporate executive before pursuing his doctorate in psychology, Dr. Chen brings a unique perspective that bridges business and psychological insights."
    },
    {
      image: "https://images.pexels.com/photos/5082976/pexels-photo-5082976.jpeg",
      name: "Sarah Johnson, MA",
      title: "Ethics Committee Chair",
      location: "Chicago, IL",
      specialties: ["Workplace Relationships", "Jungian Analysis", "Shadow Work"],
      bio: "A Jungian-oriented coach with a background in organizational psychology, Sarah focuses on unconscious dynamics in workplace relationships. Her approach helps clients identify and integrate shadow aspects that influence their professional interactions and leadership abilities. Sarah has pioneered several programs that apply archetypal psychology to team development and organizational culture."
    },
    {
      image: "https://images.pexels.com/photos/5334040/pexels-photo-5334040.jpeg",
      name: "Dr. James Rodriguez",
      title: "Research Director",
      location: "Boston, MA",
      specialties: ["Evidence-Based Coaching", "Methodology Development", "Outcome Assessment"],
      bio: "Combining psychoanalytic theory with evidence-based coaching methodologies, Dr. Rodriguez leads our research initiatives on coaching efficacy. His work focuses on developing robust assessment tools to measure the impact of psychoanalytic coaching interventions. He previously served as a research fellow at Harvard's Center for Leadership Development and has published extensively on psychodynamic approaches to organizational change."
    },
    {
      image: "https://images.pexels.com/photos/6551790/pexels-photo-6551790.jpeg",
      name: "Dr. Amara Patel",
      title: "Membership Director",
      location: "Austin, TX",
      specialties: ["Intercultural Coaching", "Attachment Theory", "Self Psychology"],
      bio: "Dr. Patel specializes in applying self psychology and attachment theory to leadership coaching in multicultural contexts. Her approach helps executives understand how their personal history shapes their leadership presence and decision-making. With experience working across five continents, Dr. Patel brings unique insights into cross-cultural dynamics in global organizations."
    },
    {
      image: "https://images.pexels.com/photos/5393594/pexels-photo-5393594.jpeg",
      name: "Robert Williams, PhD",
      title: "Publications Committee Chair",
      location: "Seattle, WA",
      specialties: ["Team Dynamics", "Systems-Psychodynamic Approach", "Organizational Change"],
      bio: "Dr. Williams specializes in systems-psychodynamic approaches to team coaching and organizational change. His work helps leaders understand the unconscious forces at play in group dynamics and organizational structures. Previously a consultant with McKinsey, Dr. Williams combines business acumen with psychoanalytic depth to facilitate transformative change in complex organizations."
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-primary-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-serif text-4xl md:text-5xl font-semibold mb-6 text-neutral-900"
            >
              Our Distinguished Members
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-neutral-600 leading-relaxed mb-10"
            >
              Connect with coaches who integrate psychoanalytic principles into their practice,
              offering depth-oriented approaches to personal and professional development.
            </motion.p>
            
            {/* Search and Filter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white p-4 rounded-lg shadow-sm border border-neutral-200 flex flex-col md:flex-row gap-4"
            >
              <div className="relative flex-grow">
                <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400" />
                <input
                  type="text"
                  placeholder="Search by name or specialty"
                  className="w-full pl-10 pr-4 py-3 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"
                />
              </div>
              <div className="relative">
                <button className="bg-neutral-100 hover:bg-neutral-200 text-neutral-700 font-medium py-3 px-6 rounded-md inline-flex items-center transition-colors">
                  <Filter size={18} className="mr-2" />
                  Filter
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Members List */}
      <section className="py-20 bg-neutral-100">
        <div className="container mx-auto px-4">
          <div className="space-y-8">
            {members.map((member, index) => (
              <MemberCard
                key={index}
                image={member.image}
                name={member.name}
                title={member.title}
                location={member.location}
                specialties={member.specialties}
                bio={member.bio}
              />
            ))}
          </div>
          
          {/* Pagination */}
          <div className="mt-12 flex justify-center">
            <div className="inline-flex items-center space-x-2">
              <button className="w-10 h-10 rounded-md border border-neutral-300 flex items-center justify-center text-neutral-700 hover:bg-neutral-200 transition-colors">
                &laquo;
              </button>
              {[1, 2, 3, 4, 5].map((page) => (
                <button
                  key={page}
                  className={`w-10 h-10 rounded-md flex items-center justify-center transition-colors ${
                    page === 1
                      ? 'bg-primary-600 text-white'
                      : 'border border-neutral-300 text-neutral-700 hover:bg-neutral-200'
                  }`}
                >
                  {page}
                </button>
              ))}
              <button className="w-10 h-10 rounded-md border border-neutral-300 flex items-center justify-center text-neutral-700 hover:bg-neutral-200 transition-colors">
                &raquo;
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Join Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="order-2 lg:order-1"
            >
              <span className="text-primary-600 font-medium text-sm uppercase tracking-wider">
                Join Our Community
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mt-3 mb-6 text-neutral-900">
                Become a Member
              </h2>
              
              <div className="space-y-6 text-neutral-700">
                <p>
                  The Association of Psychoanalytic Coaches welcomes practitioners who are committed to 
                  integrating psychoanalytic principles into their coaching work. Our membership provides:
                </p>
                
                <ul className="space-y-3">
                  {[
                    "Access to our extensive resource library and research database",
                    "Professional development through workshops, webinars, and conferences",
                    "Peer supervision and consultation groups",
                    "Networking opportunities with like-minded professionals",
                    "Listing in our public directory of certified psychoanalytic coaches",
                    "Subscription to our quarterly journal and monthly newsletter"
                  ].map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-primary-600 mr-2">•</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="pt-4">
                  <button className="bg-primary-600 hover:bg-primary-700 transition-colors text-white font-medium py-3 px-6 rounded-md inline-flex items-center">
                    Apply for Membership
                  </button>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="order-1 lg:order-2 relative h-96 rounded-xl overflow-hidden shadow-xl"
            >
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
                alt="APC member gathering"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>
      
      <CallToAction />
    </div>
  );
};

export default MembersPage;