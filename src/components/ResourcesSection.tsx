import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, ArrowRight, FileText, Video, BookOpenCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ResourceProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  type: string;
}

const ResourceCard: React.FC<ResourceProps> = ({ title, description, icon, type }) => (
  <div className="flex flex-col h-full bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow border border-neutral-100 p-6">
    <div className="flex justify-between items-start mb-4">
      <div className="p-3 bg-primary-50 rounded-md text-primary-600">
        {icon}
      </div>
      <span className="text-xs font-medium py-1 px-3 bg-neutral-100 text-neutral-700 rounded-full">
        {type}
      </span>
    </div>
    <h3 className="font-serif text-xl font-medium mb-3 text-neutral-900">{title}</h3>
    <p className="text-neutral-600 mb-4 flex-grow text-sm">{description}</p>
    <Link
      to="/resources"
      className="text-primary-700 hover:text-primary-800 font-medium text-sm inline-flex items-center mt-auto transition-colors"
    >
      Read More <ArrowRight size={16} className="ml-1" />
    </Link>
  </div>
);

const ResourcesSection: React.FC = () => {
  const resources = [
    {
      title: "The Integration of Psychoanalytic Theory in Coaching Practice",
      description: "An in-depth exploration of how psychoanalytic concepts can enhance coaching interventions and outcomes.",
      icon: <BookOpen size={24} />,
      type: "Article"
    },
    {
      title: "Working with Resistance in Coaching Relationships",
      description: "This comprehensive guide explores the unconscious dynamics of resistance and offers practical approaches for coaches.",
      icon: <FileText size={24} />,
      type: "Guide"
    },
    {
      title: "Transference in the Coaching Relationship",
      description: "Learn how to recognize and work with transference patterns to deepen the coaching process and facilitate transformation.",
      icon: <Video size={24} />,
      type: "Webinar"
    },
    {
      title: "Psychoanalytic Coaching: A Reflective Practice Manual",
      description: "Our flagship publication providing a structured approach to integrating psychoanalytic principles into coaching.",
      icon: <BookOpenCheck size={24} />,
      type: "Book"
    }
  ];

  return (
    <section className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="max-w-2xl mb-8 md:mb-0">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-primary-600 font-medium text-sm uppercase tracking-wider"
            >
              Knowledge Center
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-serif text-3xl md:text-4xl font-semibold mt-3 mb-4 text-neutral-900"
            >
              Resources for Psychoanalytic Coaches
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-neutral-600 text-lg"
            >
              Access our curated collection of articles, guides, webinars, and research to deepen your 
              understanding and enhance your practice as a psychoanalytic coach.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link
              to="/resources"
              className="inline-flex items-center bg-primary-50 text-primary-700 hover:bg-primary-100 transition-colors font-medium py-3 px-6 rounded-md"
            >
              Browse All Resources <ArrowRight size={18} className="ml-2" />
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
          {resources.map((resource, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
            >
              <ResourceCard
                title={resource.title}
                description={resource.description}
                icon={resource.icon}
                type={resource.type}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ResourcesSection;