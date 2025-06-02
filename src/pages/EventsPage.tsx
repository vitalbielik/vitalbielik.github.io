import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight, Search, Filter, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import CallToAction from '../components/CallToAction';

interface EventProps {
  id: string;
  title: string;
  date: string;
  image: string;
  category: string;
  description: string;
  speakers: string[];
  price: string;
}

const EventCard: React.FC<EventProps> = ({
  id,
  title,
  date,
  image,
  category,
  description,
  speakers,
  price
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/events/${id}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex flex-col md:flex-row bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer"
      onClick={handleClick}
    >
      <div className="md:w-72 h-64 md:h-auto relative flex-shrink-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 left-4">
          <span className="inline-block py-1 px-3 text-xs font-medium bg-primary-600 text-white rounded-full uppercase">
            {category}
          </span>
        </div>
      </div>
      <div className="p-6 md:p-8 flex-grow">
        <h3 className="font-serif text-2xl font-medium mb-3 text-neutral-900">{title}</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="flex items-center">
            <Calendar size={18} className="mr-3 text-primary-600" />
            <span className="text-neutral-700">{date}</span>
          </div>
          <div className="flex items-center">
            <Users size={18} className="mr-3 text-primary-600" />
            <span className="text-neutral-700">{speakers.join(', ')}</span>
          </div>
        </div>
        
        <p className="text-neutral-600 mb-6 line-clamp-3">{description}</p>
        
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="font-medium text-lg text-primary-800">
            {price}
          </div>
          <button className="bg-primary-600 hover:bg-primary-700 transition-colors text-white font-medium py-2 px-6 rounded-md inline-flex items-center">
            View Details <ArrowRight size={16} className="ml-2" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const EventsPage: React.FC = () => {
  const events = [
    {
      id: "unconscious-coaching",
      title: "The Unconscious in Coaching: Theory and Practice",
      date: "June 15, 2025",
      image: "https://images.pexels.com/photos/7092613/pexels-photo-7092613.jpeg",
      category: "Workshop",
      description: "This interactive workshop explores how the unconscious influences coaching relationships and outcomes.",
      speakers: ["Dr. Eleanor Thompson", "Sarah Johnson, MA"],
      price: "$195 (Members: $145)"
    },
    {
      id: "depth-psychology-conference",
      title: "Annual Conference: Depth Psychology in the Digital Age",
      date: "September 22-24, 2025",
      image: "https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg",
      category: "Conference",
      description: "Our flagship annual conference brings together leading psychoanalytic coaches, researchers, and practitioners.",
      speakers: ["Dr. Michael Chen", "Dr. James Rodriguez", "Dr. Amara Patel"],
      price: "$595 (Members: $395)"
    },
    {
      id: "certification-program",
      title: "Certification Program: Foundations of Psychoanalytic Coaching",
      date: "Starting July 10, 2025",
      image: "https://images.pexels.com/photos/3810788/pexels-photo-3810788.jpeg",
      category: "Training",
      description: "Our comprehensive 6-month certification program provides coaches with a solid foundation in psychoanalytic theory and practice.",
      speakers: ["Robert Williams, PhD", "Multiple Faculty"],
      price: "$2,995 (Members: $2,495)"
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
              Events & Programs
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-neutral-600 leading-relaxed mb-10"
            >
              Join us for workshops, conferences, training programs, and webinars designed to deepen 
              your understanding and practice of psychoanalytic coaching.
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
                  placeholder="Search events"
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
      
      {/* Events List */}
      <section className="py-20 bg-neutral-100">
        <div className="container mx-auto px-4">
          <div className="space-y-8">
            {events.map((event) => (
              <EventCard
                key={event.id}
                {...event}
              />
            ))}
          </div>
        </div>
      </section>
      
      <CallToAction />
    </div>
  );
};

export default EventsPage;