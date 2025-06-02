import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Users, Book, Award } from 'lucide-react';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => (
  <div className="flex flex-col items-start p-6 bg-white rounded-lg shadow-sm border border-neutral-100 hover:shadow-md transition-shadow">
    <div className="p-3 bg-primary-50 rounded-md text-primary-700 mb-4">
      {icon}
    </div>
    <h3 className="font-serif text-xl font-medium mb-2 text-neutral-900">
      {title}
    </h3>
    <p className="text-neutral-600 leading-relaxed">
      {description}
    </p>
  </div>
);

const AboutSection: React.FC = () => {
  const features = [
    {
      icon: <Brain size={24} />,
      title: 'Psychoanalytic Approach',
      description: 'We integrate traditional psychoanalytic principles with modern coaching methodologies for deeper insights and lasting change.'
    },
    {
      icon: <Users size={24} />,
      title: 'Professional Community',
      description: 'Join a supportive network of like-minded professionals dedicated to growth, learning, and ethical practice.'
    },
    {
      icon: <Book size={24} />,
      title: 'Continuous Learning',
      description: 'Access specialized resources, supervision, and professional development opportunities to enhance your practice.'
    },
    {
      icon: <Award size={24} />,
      title: 'Ethical Standards',
      description: 'We uphold the highest ethical standards, ensuring integrity and excellence in psychoanalytic coaching.'
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
            About Our Association
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-serif text-3xl md:text-4xl font-semibold mt-3 mb-6 text-neutral-900"
          >
            Where Depth Psychology Meets Coaching Excellence
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-neutral-600 text-lg leading-relaxed"
          >
            Founded in 2010, the Association of Psychoanalytic Coaches brings together professionals 
            who believe in the transformative power of combining coaching with psychoanalytic understanding.
            We are dedicated to advancing this unique approach through education, research, and community.
          </motion.p>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            >
              <Feature 
                icon={feature.icon} 
                title={feature.title} 
                description={feature.description} 
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;