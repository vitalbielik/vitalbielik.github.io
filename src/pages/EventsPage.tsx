import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, ArrowRight, Search, Filter, Users } from 'lucide-react';
import CallToAction from '../components/CallToAction';

interface EventProps {
  title: string;
  date: string;
  time: string;
  location: string;
  image: string;
  category: string;
  description: string;
  speakers: string[];
  price: string;
}

const EventCard: React.FC<EventProps> = ({
  title,
  date,
  time,
  location,
  image,
  category,
  description,
  speakers,
  price
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="flex flex-col md:flex-row bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
  >
    <div className="md:w-1/3 lg:w-1/4 relative">
      <img
        src={image}
        alt={title}
        className="w-full h-64 md:h-full object-cover"
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
          <Clock size={18} className="mr-3 text-primary-600" />
          <span className="text-neutral-700">{time}</span>
        </div>
        <div className="flex items-center">
          <MapPin size={18} className="mr-3 text-primary-600" />
          <span className="text-neutral-700">{location}</span>
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
          Register Now <ArrowRight size={16} className="ml-2" />
        </button>
      </div>
    </div>
  </motion.div>
);

const EventsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('upcoming');
  
  const events = [
    {
      title: "The Unconscious in Coaching: Theory and Practice",
      date: "June 15, 2025",
      time: "10:00 AM - 4:00 PM",
      location: "Virtual Workshop",
      image: "https://images.pexels.com/photos/7092613/pexels-photo-7092613.jpeg",
      category: "Workshop",
      description: "This interactive workshop explores how the unconscious influences coaching relationships and outcomes. Learn practical techniques for working with unconscious material, defense mechanisms, and transference dynamics in coaching conversations.",
      speakers: ["Dr. Eleanor Thompson", "Sarah Johnson, MA"],
      price: "$195 (Members: $145)"
    },
    {
      title: "Annual Conference: Depth Psychology in the Digital Age",
      date: "September 22-24, 2025",
      time: "9:00 AM - 5:00 PM",
      location: "New York Marriott, NY",
      image: "https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg",
      category: "Conference",
      description: "Our flagship annual conference brings together leading psychoanalytic coaches, researchers, and practitioners to explore how depth psychology can address the unique challenges of the digital era. Featured keynotes, breakout sessions, and networking opportunities.",
      speakers: ["Dr. Michael Chen", "Dr. James Rodriguez", "Dr. Amara Patel"],
      price: "$595 (Members: $395)"
    },
    {
      title: "Certification Program: Foundations of Psychoanalytic Coaching",
      date: "Starting July 10, 2025",
      time: "Weekly sessions",
      location: "Online",
      image: "https://images.pexels.com/photos/3810788/pexels-photo-3810788.jpeg",
      category: "Training",
      description: "Our comprehensive 6-month certification program provides coaches with a solid foundation in psychoanalytic theory and practice. The program includes live online sessions, supervised practice, case consultations, and a final project.",
      speakers: ["Robert Williams, PhD", "Multiple Faculty"],
      price: "$2,995 (Members: $2,495)"
    },
    {
      title: "Group Dynamics and Systems-Psychodynamic Coaching",
      date: "August 5, 2025",
      time: "1:00 PM - 4:30 PM",
      location: "Virtual Seminar",
      image: "https://images.pexels.com/photos/3153198/pexels-photo-3153198.jpeg",
      category: "Seminar",
      description: "This advanced seminar explores how unconscious group dynamics impact team performance and organizational culture. Learn to apply systems-psychodynamic principles to team coaching and organizational interventions.",
      speakers: ["Dr. James Rodriguez"],
      price: "$145 (Members: $95)"
    },
    {
      title: "Working with Narcissistic Patterns in Executive Coaching",
      date: "July 12, 2025",
      time: "10:00 AM - 12:00 PM",
      location: "Virtual Workshop",
      image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",
      category: "Workshop",
      description: "This specialized workshop addresses the challenges and opportunities in coaching executives with narcissistic personality features. Develop strategies for building alliance, managing countertransference, and facilitating sustainable change.",
      speakers: ["Dr. Amara Patel"],
      price: "$125 (Members: $85)"
    },
    {
      title: "Dreams and Imagery in Coaching Practice",
      date: "October 8, 2025",
      time: "2:00 PM - 5:00 PM",
      location: "Virtual Workshop",
      image: "https://images.pexels.com/photos/3771681/pexels-photo-3771681.jpeg",
      category: "Workshop",
      description: "Learn how to ethically and effectively incorporate dream work and imagery into coaching sessions. This workshop provides practical frameworks for using these powerful tools to access unconscious material and foster insight.",
      speakers: ["Sarah Johnson, MA"],
      price: "$145 (Members: $95)"
    }
  ];

  // For demonstration purposes, let's just show all events as upcoming
  const filteredEvents = activeTab === 'upcoming' 
    ? events 
    : [];

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
      
      {/* Events Section */}
      <section className="py-20 bg-neutral-100">
        <div className="container mx-auto px-4">
          {/* Tabs */}
          <div className="max-w-3xl mx-auto mb-12">
            <div className="flex justify-center">
              <div className="inline-flex bg-white rounded-lg p-1 shadow-sm">
                <button
                  onClick={() => setActiveTab('upcoming')}
                  className={`py-2 px-6 rounded-md text-sm font-medium transition-colors ${
                    activeTab === 'upcoming'
                      ? 'bg-primary-600 text-white'
                      : 'text-neutral-700 hover:bg-neutral-100'
                  }`}
                >
                  Upcoming Events
                </button>
                <button
                  onClick={() => setActiveTab('past')}
                  className={`py-2 px-6 rounded-md text-sm font-medium transition-colors ${
                    activeTab === 'past'
                      ? 'bg-primary-600 text-white'
                      : 'text-neutral-700 hover:bg-neutral-100'
                  }`}
                >
                  Past Events
                </button>
              </div>
            </div>
          </div>
          
          {/* Events List */}
          <div className="space-y-8">
            {filteredEvents.map((event, index) => (
              <EventCard
                key={index}
                title={event.title}
                date={event.date}
                time={event.time}
                location={event.location}
                image={event.image}
                category={event.category}
                description={event.description}
                speakers={event.speakers}
                price={event.price}
              />
            ))}
          </div>
          
          {/* Add to Calendar Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-20 bg-white p-8 rounded-xl shadow-sm border border-neutral-200 max-w-3xl mx-auto text-center"
          >
            <Calendar size={36} className="mx-auto mb-4 text-primary-600" />
            <h3 className="font-serif text-2xl font-medium mb-3 text-neutral-900">
              Never Miss an Event
            </h3>
            <p className="text-neutral-600 mb-6">
              Subscribe to our events calendar to stay updated with all our workshops, conferences, and training programs.
            </p>
            <button className="bg-primary-600 hover:bg-primary-700 transition-colors text-white font-medium py-3 px-6 rounded-md inline-flex items-center">
              Add to Your Calendar
            </button>
          </motion.div>
        </div>
      </section>
      
      {/* Host an Event Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-primary-600 font-medium text-sm uppercase tracking-wider">
                Collaborate With Us
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mt-3 mb-6 text-neutral-900">
                Host an Event with APC
              </h2>
              
              <div className="space-y-6 text-neutral-700">
                <p>
                  We welcome proposals for workshops, seminars, and presentations that align with our mission 
                  of advancing psychoanalytic coaching. If you're an expert in the field and interested in 
                  sharing your knowledge, consider collaborating with us.
                </p>
                
                <p>
                  Benefits of hosting an event with APC include:
                </p>
                
                <ul className="space-y-3">
                  {[
                    "Access to our established community of psychoanalytic coaches",
                    "Marketing and promotional support through our channels",
                    "Administrative and technical assistance",
                    "Opportunity to contribute to the field's development",
                    "Potential for publication in our journal or resource library"
                  ].map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-primary-600 mr-2">•</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="pt-4">
                  <button className="bg-primary-600 hover:bg-primary-700 transition-colors text-white font-medium py-3 px-6 rounded-md inline-flex items-center">
                    Submit a Proposal
                  </button>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative h-96 rounded-xl overflow-hidden shadow-xl"
            >
              <img
                src="https://images.pexels.com/photos/7647913/pexels-photo-7647913.jpeg"
                alt="Workshop presentation"
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

export default EventsPage;