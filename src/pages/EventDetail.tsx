import React from 'react';
import { motion } from 'framer-motion';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Calendar, Clock, MapPin, Users, ArrowLeft, Share2, Download, ArrowRight, CheckCircle, Target, BookOpen, User } from 'lucide-react';

interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  image: string;
  category: string;
  description: string;
  speakers: string[];
  price: string;
  agenda: string[];
  requirements?: string[];
  materials?: string[];
  learningOutcomes?: string[];
}

const events: Event[] = [
  {
    id: 'unconscious-coaching',
    title: "The Unconscious in Coaching: Theory and Practice",
    date: "June 15, 2025",
    time: "10:00 AM - 4:00 PM",
    location: "Virtual Workshop",
    image: "https://images.pexels.com/photos/7092613/pexels-photo-7092613.jpeg",
    category: "Workshop",
    description: "This interactive workshop explores how the unconscious influences coaching relationships and outcomes. Learn practical techniques for working with unconscious material, defense mechanisms, and transference dynamics in coaching conversations.",
    speakers: ["Dr. Eleanor Thompson", "Sarah Johnson, MA"],
    price: "$195 (Members: $145)",
    agenda: [
      "Introduction to Unconscious Processes in Coaching",
      "Working with Defense Mechanisms",
      "Recognizing and Using Transference",
      "Practical Techniques and Case Studies",
      "Integration and Application"
    ],
    requirements: [
      "Basic understanding of coaching principles",
      "Previous coaching experience recommended",
      "Stable internet connection for virtual participation"
    ],
    materials: [
      "Workshop handbook (PDF)",
      "Case study materials",
      "Recording available for 30 days"
    ],
    learningOutcomes: [
      "Understand key psychoanalytic concepts relevant to coaching",
      "Identify unconscious patterns in client behavior",
      "Apply techniques for working with resistance",
      "Develop skills for recognizing and using transference",
      "Create more effective coaching interventions"
    ]
  },
  {
    id: 'depth-psychology-conference',
    title: "Annual Conference: Depth Psychology in the Digital Age",
    date: "September 22-24, 2025",
    time: "9:00 AM - 5:00 PM",
    location: "New York Marriott, NY",
    image: "https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg",
    category: "Conference",
    description: "Our flagship annual conference brings together leading psychoanalytic coaches, researchers, and practitioners to explore how depth psychology can address the unique challenges of the digital era. Featured keynotes, breakout sessions, and networking opportunities.",
    speakers: ["Dr. Michael Chen", "Dr. James Rodriguez", "Dr. Amara Patel"],
    price: "$595 (Members: $395)",
    agenda: [
      "Day 1: Digital Transformation and the Psyche",
      "Day 2: Virtual Relationships and Attachment",
      "Day 3: Future of Depth-Oriented Coaching",
      "Evening Networking Events",
      "Closing Ceremony and Awards"
    ],
    learningOutcomes: [
      "Explore the intersection of technology and depth psychology",
      "Learn about emerging trends in digital-era coaching",
      "Network with leading practitioners in the field",
      "Gain practical tools for virtual coaching",
      "Contribute to the evolution of psychoanalytic practice"
    ]
  },
  {
    id: 'certification-program',
    title: "Certification Program: Foundations of Psychoanalytic Coaching",
    date: "Starting July 10, 2025",
    time: "Weekly sessions",
    location: "Online",
    image: "https://images.pexels.com/photos/3810788/pexels-photo-3810788.jpeg",
    category: "Training",
    description: "Our comprehensive 6-month certification program provides coaches with a solid foundation in psychoanalytic theory and practice. The program includes live online sessions, supervised practice, case consultations, and a final project.",
    speakers: ["Robert Williams, PhD", "Multiple Faculty"],
    price: "$2,995 (Members: $2,495)",
    agenda: [
      "Module 1: Foundations of Psychoanalytic Theory",
      "Module 2: The Unconscious in Coaching",
      "Module 3: Working with Resistance",
      "Module 4: Transference and Countertransference",
      "Module 5: Integration and Practice",
      "Final Project and Certification"
    ],
    learningOutcomes: [
      "Master foundational psychoanalytic concepts",
      "Develop advanced coaching techniques",
      "Build a strong theoretical framework",
      "Gain practical clinical experience",
      "Join a community of practitioners"
    ]
  }
];

const EventDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const event = events.find(e => e.id === id);

  const handleRegister = () => {
    navigate('/contact', { state: { eventTitle: event?.title } });
  };

  if (!event) {
    return (
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl text-center">Event not found</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center bg-primary-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/95 to-primary-800/90 z-10"></div>
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 py-20">
          <Link
            to="/events"
            className="inline-flex items-center text-primary-200 hover:text-white transition-colors mb-6"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Events
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <span className="inline-block py-1 px-3 bg-primary-700/50 text-primary-100 rounded-full text-sm font-medium mb-4">
              {event.category}
            </span>
            
            <h1 className="font-serif text-4xl md:text-6xl font-semibold mb-6">
              {event.title}
            </h1>
            
            <p className="text-xl text-primary-100 mb-8 max-w-3xl">
              {event.description}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-primary-100">
              <div className="flex items-center">
                <Calendar size={24} className="mr-3" />
                <div>
                  <p className="text-sm text-primary-200">Date</p>
                  <p>{event.date}</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <Clock size={24} className="mr-3" />
                <div>
                  <p className="text-sm text-primary-200">Time</p>
                  <p>{event.time}</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <MapPin size={24} className="mr-3" />
                <div>
                  <p className="text-sm text-primary-200">Location</p>
                  <p>{event.location}</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <Users size={24} className="mr-3" />
                <div>
                  <p className="text-sm text-primary-200">Speakers</p>
                  <p>{event.speakers.join(', ')}</p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleRegister}
                className="bg-white text-primary-900 hover:bg-primary-50 transition-colors font-medium py-3 px-8 rounded-md inline-flex items-center justify-center"
              >
                Register Now
              </button>
              <button className="bg-primary-700/50 text-white hover:bg-primary-700 transition-colors font-medium py-3 px-8 rounded-md inline-flex items-center justify-center">
                <Share2 size={20} className="mr-2" />
                Share Event
              </button>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Learning Outcomes */}
      {event.learningOutcomes && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto text-center mb-12"
            >
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6 text-neutral-900">
                What You'll Learn
              </h2>
              <p className="text-neutral-600 text-lg">
                By the end of this {event.category.toLowerCase()}, you'll have gained the following skills and knowledge:
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {event.learningOutcomes.map((outcome, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start p-6 bg-neutral-50 rounded-xl"
                >
                  <Target size={24} className="text-primary-600 mr-4 flex-shrink-0" />
                  <p className="text-neutral-700">{outcome}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
      
      {/* Agenda */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="font-serif text-3xl font-semibold mb-6 text-neutral-900">
                  Program Agenda
                </h2>
                <div className="space-y-4">
                  {event.agenda.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start p-4 bg-white rounded-lg shadow-sm"
                    >
                      <CheckCircle size={20} className="text-primary-600 mr-3 flex-shrink-0 mt-1" />
                      <span className="text-neutral-700">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="space-y-8"
              >
                {event.requirements && (
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <h3 className="font-serif text-xl font-medium mb-4 text-neutral-900">
                      Requirements
                    </h3>
                    <ul className="space-y-3">
                      {event.requirements.map((req, index) => (
                        <li
                          key={index}
                          className="flex items-start"
                        >
                          <User size={20} className="mr-3 text-primary-600 flex-shrink-0 mt-1" />
                          <span className="text-neutral-600">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {event.materials && (
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <h3 className="font-serif text-xl font-medium mb-4 text-neutral-900">
                      Included Materials
                    </h3>
                    <ul className="space-y-3">
                      {event.materials.map((material, index) => (
                        <li
                          key={index}
                          className="flex items-start"
                        >
                          <BookOpen size={20} className="mr-3 text-primary-600 flex-shrink-0 mt-1" />
                          <span className="text-neutral-600">{material}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Speakers */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6 text-neutral-900">
              Meet Your {event.category === 'Workshop' ? 'Instructors' : 'Speakers'}
            </h2>
            <p className="text-neutral-600 text-lg">
              Learn from experienced practitioners and thought leaders in psychoanalytic coaching.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {event.speakers.map((speaker, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-neutral-50 p-6 rounded-xl text-center"
              >
                <div className="w-24 h-24 rounded-full bg-neutral-200 mx-auto mb-4"></div>
                <h3 className="font-serif text-xl font-medium mb-2 text-neutral-900">{speaker}</h3>
                <p className="text-neutral-600">Expert in Psychoanalytic Coaching</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Registration CTA */}
      <section className="py-20 bg-primary-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="font-serif text-3xl md:text-4xl font-semibold mb-6"
            >
              Ready to Join This {event.category}?
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-primary-100 mb-8"
            >
              Secure your spot today and take the next step in your professional development.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <div className="text-3xl font-medium">{event.price}</div>
              <button
                onClick={handleRegister}
                className="bg-white text-primary-900 hover:bg-primary-50 transition-colors font-medium py-3 px-8 rounded-md inline-flex items-center justify-center"
              >
                Register Now <ArrowRight size={20} className="ml-2" />
              </button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EventDetail;