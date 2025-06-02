import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Award, Users, Brain, Heart, MessageSquare } from 'lucide-react';
import CallToAction from '../components/CallToAction';

interface ValueProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Value: React.FC<ValueProps> = ({ icon, title, description }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="flex flex-col items-center text-center p-6"
  >
    <div className="bg-primary-50 p-4 rounded-full text-primary-600 mb-4">
      {icon}
    </div>
    <h3 className="font-serif text-xl font-medium mb-3 text-neutral-900">{title}</h3>
    <p className="text-neutral-600">{description}</p>
  </motion.div>
);

const AboutPage: React.FC = () => {
  const values = [
    {
      icon: <Brain size={28} />,
      title: "Depth of Understanding",
      description: "We believe in looking beyond surface behaviors to explore unconscious patterns and motivations that drive human behavior."
    },
    {
      icon: <Heart size={28} />,
      title: "Compassionate Inquiry",
      description: "Our approach balances intellectual rigor with empathic attunement to create a holding environment for growth."
    },
    {
      icon: <MessageSquare size={28} />,
      title: "Reflective Dialogue",
      description: "We value the transformative power of open, exploratory conversation that honors both rational insight and emotional truth."
    },
    {
      icon: <Award size={28} />,
      title: "Ethical Practice",
      description: "We uphold the highest standards of professional conduct, confidentiality, and continuous development."
    },
    {
      icon: <Users size={28} />,
      title: "Collaborative Community",
      description: "We foster a supportive network where practitioners learn from each other and grow together."
    },
    {
      icon: <BookOpen size={28} />,
      title: "Lifelong Learning",
      description: "We are committed to ongoing education, research, and evolution of psychoanalytic coaching practices."
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-primary-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary-500 blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-secondary-500 blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-serif text-4xl md:text-5xl font-semibold mb-6"
            >
              About the Association of Psychoanalytic Coaches
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-primary-100 leading-relaxed"
            >
              A community dedicated to advancing the integration of psychoanalytic principles 
              with contemporary coaching practices.
            </motion.p>
          </div>
        </div>
      </section>
      
      {/* Our Story */}
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
                Our Story
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mt-3 mb-6 text-neutral-900">
                Pioneering a New Approach
              </h2>
              
              <div className="space-y-6 text-neutral-700">
                <p>
                  Founded in 2010 by a group of psychologists, psychoanalysts and executive coaches, the 
                  Association of Psychoanalytic Coaches emerged from a shared vision to bridge the gap 
                  between traditional coaching methodologies and the depth-oriented insights of 
                  psychoanalytic theory.
                </p>
                <p>
                  Our founders recognized that while coaching focuses on future goals and action, the 
                  psychoanalytic tradition offers profound insights into unconscious motivations and patterns 
                  that can either facilitate or hinder growth. By integrating these approaches, we created 
                  a new paradigm in coaching that addresses both conscious aspirations and unconscious dynamics.
                </p>
                <p>
                  Today, the APC has grown into a global community of over 1,200 practitioners across 
                  42 countries, united by our commitment to depth-oriented coaching that facilitates lasting 
                  transformation for individuals, teams, and organizations.
                </p>
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
                src="https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg"
                alt="APC founding members"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Our Values */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <span className="text-primary-600 font-medium text-sm uppercase tracking-wider">
              Our Values
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mt-3 mb-6 text-neutral-900">
              Guiding Principles
            </h2>
            <p className="text-neutral-600 text-lg">
              These core values inform our approach to coaching, our community interactions, 
              and our professional standards.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Value
                key={index}
                icon={value.icon}
                title={value.title}
                description={value.description}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-primary-50 p-8 rounded-xl border border-primary-100"
            >
              <div className="bg-primary-100 inline-block p-3 rounded-full text-primary-700 mb-6">
                <BookOpen size={28} />
              </div>
              <h3 className="font-serif text-2xl font-medium mb-4 text-neutral-900">Our Mission</h3>
              <p className="text-neutral-700 mb-4">
                To advance the field of coaching through the integration of psychoanalytic principles, 
                fostering deeper understanding of human motivation and behavior, and promoting transformative 
                change for individuals and systems.
              </p>
              <p className="text-neutral-700">
                We achieve this through professional development, ethical standards, community building, 
                and advancing research in psychoanalytic coaching approaches.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-secondary-50 p-8 rounded-xl border border-secondary-100"
            >
              <div className="bg-secondary-100 inline-block p-3 rounded-full text-secondary-700 mb-6">
                <Brain size={28} />
              </div>
              <h3 className="font-serif text-2xl font-medium mb-4 text-neutral-900">Our Vision</h3>
              <p className="text-neutral-700 mb-4">
                We envision a world where coaching consistently engages with the depth dimensions of human 
                experience, leading to more authentic, sustainable, and profound personal and professional 
                growth.
              </p>
              <p className="text-neutral-700">
                We strive to be the leading authority on psychoanalytic coaching, recognized globally for 
                excellence in training, research, and practice that transforms individuals, organizations, 
                and communities.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      <CallToAction />
    </div>
  );
};

export default AboutPage;