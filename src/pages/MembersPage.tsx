import React from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import CallToAction from '../components/CallToAction';

interface MemberProps {
  id: string;
  image: string;
  name: string;
  title: string;
  location: string;
  specialties: string[];
  bio: string;
}

const MemberCard: React.FC<MemberProps> = ({ id, image, name, title, location, specialties, bio }) => {
  const navigate = useNavigate();

  const handleViewProfile = () => {
    navigate(`/members/${id}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex flex-col md:flex-row bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer"
      onClick={handleViewProfile}
    >
      <div className="md:w-72 h-64 md:h-auto relative flex-shrink-0">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
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

        <button
          onClick={handleViewProfile}
          className="text-primary-700 hover:text-primary-800 font-medium text-sm inline-flex items-center transition-colors"
        >
          View Full Profile <ArrowRight size={16} className="ml-1" />
        </button>
      </div>
    </motion.div>
  );
};

const MembersPage: React.FC = () => {
  const members = [
    {
      id: "eleanor-thompson",
      image: "https://images.pexels.com/photos/5792641/pexels-photo-5792641.jpeg",
      name: "Dr. Eleanor Thompson",
      title: "Founding Member & President",
      location: "New York, NY",
      specialties: ["Executive Coaching", "Leadership Development", "Organizational Dynamics"],
      bio: "With over 20 years of experience in clinical psychology and executive coaching, Dr. Thompson integrates psychoanalytic principles with leadership development."
    },
    {
      id: "michael-chen",
      image: "https://images.pexels.com/photos/5397723/pexels-photo-5397723.jpeg",
      name: "Dr. Michael Chen",
      title: "Director of Training",
      location: "San Francisco, CA",
      specialties: ["Career Transitions", "Identity Development", "Group Dynamics"],
      bio: "Dr. Chen specializes in psychodynamic approaches to career transitions and professional identity development."
    },
    {
      id: "sarah-johnson",
      image: "https://images.pexels.com/photos/5082976/pexels-photo-5082976.jpeg",
      name: "Sarah Johnson, MA",
      title: "Ethics Committee Chair",
      location: "Chicago, IL",
      specialties: ["Workplace Relationships", "Jungian Analysis", "Shadow Work"],
      bio: "A Jungian-oriented coach with a background in organizational psychology, Sarah focuses on unconscious dynamics in workplace relationships."
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
              className="text-xl text-neutral-600 leading-relaxed"
            >
              Connect with coaches who integrate psychoanalytic principles into their practice,
              offering depth-oriented approaches to personal and professional development.
            </motion.p>

            {/* Search and Filter */}
            {/*<motion.div*/}
            {/*  initial={{ opacity: 0, y: 20 }}*/}
            {/*  animate={{ opacity: 1, y: 0 }}*/}
            {/*  transition={{ duration: 0.6, delay: 0.3 }}*/}
            {/*  className="bg-white p-4 rounded-lg shadow-sm border border-neutral-200 flex flex-col md:flex-row gap-4"*/}
            {/*>*/}
            {/*  <div className="relative flex-grow">*/}
            {/*    <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400" />*/}
            {/*    <input*/}
            {/*      type="text"*/}
            {/*      placeholder="Search by name or specialty"*/}
            {/*      className="w-full pl-10 pr-4 py-3 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"*/}
            {/*    />*/}
            {/*  </div>*/}
            {/*  <div className="relative">*/}
            {/*    <button className="bg-neutral-100 hover:bg-neutral-200 text-neutral-700 font-medium py-3 px-6 rounded-md inline-flex items-center transition-colors">*/}
            {/*      <Filter size={18} className="mr-2" />*/}
            {/*      Filter*/}
            {/*    </button>*/}
            {/*  </div>*/}
            {/*</motion.div>*/}
          </div>
        </div>
      </section>

      {/* Members List */}
      <section className="py-20 bg-neutral-100">
        <div className="container mx-auto px-4">
          <div className="space-y-8">
            {members.map((member) => (
              <MemberCard
                key={member.id}
                {...member}
              />
            ))}
          </div>
        </div>
      </section>

      <CallToAction />
    </div>
  );
};

export default MembersPage;
