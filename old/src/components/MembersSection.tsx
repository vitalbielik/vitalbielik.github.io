import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { coaches } from './CoachProfile';

interface MemberProps {
  id: string;
  image: string;
  name: string;
  title: string;
  bio: string;
}

const MemberCard: React.FC<MemberProps> = ({ id, image, name, title, bio }) => (
  <div className="flex flex-col h-full overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-shadow bg-white border border-neutral-100">
    <div className="h-72 overflow-hidden">
      <img 
        src={image} 
        alt={name} 
        className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
      />
    </div>
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="font-serif text-xl font-medium mb-1 text-neutral-900">{name}</h3>
      <p className="text-primary-600 text-sm mb-4">{title}</p>
      <p className="text-neutral-600 text-sm line-clamp-4 mb-4 flex-grow">{bio}</p>
      <Link 
        to={`/members/${id}`}
        className="text-primary-700 hover:text-primary-800 font-medium text-sm inline-flex items-center mt-2 transition-colors"
      >
        View Profile <ArrowRight size={16} className="ml-1" />
      </Link>
    </div>
  </div>
);

const MembersSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="max-w-2xl mb-8 md:mb-0">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-primary-600 font-medium text-sm uppercase tracking-wider"
            >
              Our Coaches
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-serif text-3xl md:text-4xl font-semibold mt-3 mb-4 text-neutral-900"
            >
              Meet Our Distinguished Members
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-neutral-600 text-lg"
            >
              Our members are highly trained professionals who combine coaching expertise with deep 
              psychoanalytic understanding to facilitate profound personal and professional growth.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link
              to="/members"
              className="inline-flex items-center bg-primary-50 text-primary-700 hover:bg-primary-100 transition-colors font-medium py-3 px-6 rounded-md"
            >
              View All Members <ArrowRight size={18} className="ml-2" />
            </Link>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {coaches.map((coach, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
            >
              <MemberCard
                id={coach.id}
                image={coach.image}
                name={coach.name}
                title={coach.title}
                bio={coach.bio}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MembersSection;