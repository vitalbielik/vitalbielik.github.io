import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface EventProps {
  title: string;
  date: string;
  time: string;
  location: string;
  image: string;
  category: string;
}

const EventCard: React.FC<EventProps> = ({ title, date, time, location, image, category }) => (
  <div className="flex flex-col h-full bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow border border-neutral-100">
    <div className="relative h-48 overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
      />
      <div className="absolute top-4 left-4">
        <span className="inline-block py-1 px-3 text-xs font-medium bg-primary-600 text-white rounded-full uppercase">
          {category}
        </span>
      </div>
    </div>
    <div className="flex-grow p-6 flex flex-col">
      <h3 className="font-serif text-xl font-medium mb-3 text-neutral-900 line-clamp-2">
        {title}
      </h3>
      <div className="text-neutral-600 flex-grow">
        <div className="flex items-center mb-2">
          <Calendar size={16} className="mr-2 text-primary-600" />
          <span className="text-sm">{date}</span>
        </div>
        <div className="flex items-center mb-2">
          <Clock size={16} className="mr-2 text-primary-600" />
          <span className="text-sm">{time}</span>
        </div>
        <div className="flex items-center">
          <MapPin size={16} className="mr-2 text-primary-600" />
          <span className="text-sm">{location}</span>
        </div>
      </div>
      <Link
        to="/events"
        className="mt-4 inline-flex items-center text-primary-700 hover:text-primary-800 font-medium text-sm transition-colors"
      >
        Event Details <ArrowRight size={16} className="ml-1" />
      </Link>
    </div>
  </div>
);

const EventsSection: React.FC = () => {
  const events = [
    {
      title: "The Unconscious in Coaching: Theory and Practice",
      date: "June 15, 2025",
      time: "10:00 AM - 4:00 PM",
      location: "Virtual Workshop",
      image: "https://images.pexels.com/photos/7092613/pexels-photo-7092613.jpeg",
      category: "Workshop"
    },
    {
      title: "Annual Conference: Depth Psychology in the Digital Age",
      date: "September 22-24, 2025",
      time: "9:00 AM - 5:00 PM",
      location: "New York Marriott, NY",
      image: "https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg",
      category: "Conference"
    },
    {
      title: "Certification Program: Foundations of Psychoanalytic Coaching",
      date: "Starting July 10, 2025",
      time: "Weekly sessions",
      location: "Online",
      image: "https://images.pexels.com/photos/3810788/pexels-photo-3810788.jpeg",
      category: "Training"
    }
  ];

  return (
    <section className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-primary-600 font-medium text-sm uppercase tracking-wider"
          >
            Upcoming Events
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-serif text-3xl md:text-4xl font-semibold mt-3 mb-6 text-neutral-900"
          >
            Join Us for Learning & Connection
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-neutral-600 text-lg leading-relaxed"
          >
            We offer a range of events designed to deepen your understanding of psychoanalytic coaching, 
            from workshops and webinars to our annual conference and specialized training programs.
          </motion.p>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            >
              <EventCard
                title={event.title}
                date={event.date}
                time={event.time}
                location={event.location}
                image={event.image}
                category={event.category}
              />
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Link
            to="/events"
            className="inline-flex items-center bg-primary-600 hover:bg-primary-700 transition-colors text-white font-medium py-3 px-6 rounded-md"
          >
            View All Events <ArrowRight size={18} className="ml-2" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default EventsSection;