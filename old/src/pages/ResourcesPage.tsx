import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, BookOpen, FileText, Video, BookOpenCheck, Download, Clock, ArrowRight } from 'lucide-react';
import CallToAction from '../components/CallToAction';

interface ResourceProps {
  title: string;
  description: string;
  image: string;
  type: string;
  author: string;
  date: string;
  readTime: string;
  downloadable: boolean;
  memberOnly: boolean;
}

const ResourceCard: React.FC<ResourceProps> = ({ 
  title, 
  description, 
  image, 
  type, 
  author, 
  date, 
  readTime, 
  downloadable, 
  memberOnly 
}) => {
  const getIcon = () => {
    switch (type) {
      case 'Article':
        return <BookOpen size={20} />;
      case 'Guide':
        return <FileText size={20} />;
      case 'Webinar':
        return <Video size={20} />;
      case 'Book':
        return <BookOpenCheck size={20} />;
      default:
        return <FileText size={20} />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex flex-col bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-neutral-100 h-full"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
        />
        {memberOnly && (
          <div className="absolute top-0 right-0 bg-secondary-600 text-white text-xs font-medium py-1 px-3">
            Members Only
          </div>
        )}
        <div className="absolute top-4 left-4">
          <span className="inline-flex items-center py-1 px-3 text-xs font-medium bg-primary-600 text-white rounded-full">
            {getIcon()}
            <span className="ml-1">{type}</span>
          </span>
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="font-serif text-xl font-medium mb-2 text-neutral-900 line-clamp-2">
          {title}
        </h3>
        
        <p className="text-neutral-500 text-sm mb-3">By {author} • {date}</p>
        
        <p className="text-neutral-600 mb-4 line-clamp-3 flex-grow">
          {description}
        </p>
        
        <div className="flex justify-between items-center text-sm text-neutral-500 mb-4">
          <div className="flex items-center">
            <Clock size={16} className="mr-1" />
            <span>{readTime} min read</span>
          </div>
          {downloadable && (
            <div className="flex items-center text-primary-600">
              <Download size={16} className="mr-1" />
              <span>Downloadable</span>
            </div>
          )}
        </div>
        
        <button className="text-primary-700 hover:text-primary-800 font-medium text-sm inline-flex items-center transition-colors mt-auto">
          Read More <ArrowRight size={16} className="ml-1" />
        </button>
      </div>
    </motion.div>
  );
};

const ResourcesPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('all');
  
  const resources = [
    {
      title: "The Integration of Psychoanalytic Theory in Coaching Practice",
      description: "An in-depth exploration of how psychoanalytic concepts can enhance coaching interventions and outcomes. This article examines key principles such as transference, countertransference, and defense mechanisms in the context of coaching relationships.",
      image: "https://images.pexels.com/photos/6551133/pexels-photo-6551133.jpeg",
      type: "Article",
      author: "Dr. Eleanor Thompson",
      date: "May 15, 2024",
      readTime: "15",
      downloadable: true,
      memberOnly: false
    },
    {
      title: "Working with Resistance in Coaching Relationships",
      description: "This comprehensive guide explores the unconscious dynamics of resistance and offers practical approaches for coaches. Learn how to recognize, understand, and work through client resistance to facilitate deeper change.",
      image: "https://images.pexels.com/photos/3760778/pexels-photo-3760778.jpeg",
      type: "Guide",
      author: "Sarah Johnson, MA",
      date: "February 3, 2024",
      readTime: "25",
      downloadable: true,
      memberOnly: false
    },
    {
      title: "Transference in the Coaching Relationship",
      description: "Learn how to recognize and work with transference patterns to deepen the coaching process and facilitate transformation. This webinar includes case studies and practical techniques for working with transference phenomena.",
      image: "https://images.pexels.com/photos/3810756/pexels-photo-3810756.jpeg",
      type: "Webinar",
      author: "Dr. Michael Chen",
      date: "March 12, 2024",
      readTime: "60",
      downloadable: false,
      memberOnly: true
    },
    {
      title: "Psychoanalytic Coaching: A Reflective Practice Manual",
      description: "Our flagship publication providing a structured approach to integrating psychoanalytic principles into coaching. This comprehensive manual includes theoretical foundations, practical techniques, case studies, and reflective exercises.",
      image: "https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg",
      type: "Book",
      author: "Robert Williams, PhD",
      date: "January 20, 2024",
      readTime: "240",
      downloadable: true,
      memberOnly: true
    },
    {
      title: "The Shadow in Leadership: Coaching Executives Through Integration",
      description: "Examining how Jungian concepts of the shadow manifest in leadership behaviors and organizational culture. This article offers frameworks for coaches to help executives recognize and integrate shadow aspects.",
      image: "https://images.pexels.com/photos/8365688/pexels-photo-8365688.jpeg",
      type: "Article",
      author: "Dr. Amara Patel",
      date: "April 5, 2024",
      readTime: "20",
      downloadable: true,
      memberOnly: false
    },
    {
      title: "Coaching Through Life Transitions: A Psychodynamic Approach",
      description: "This webinar explores how object relations theory and attachment patterns influence how clients navigate major life and career transitions. Learn practical interventions to support clients through these pivotal moments.",
      image: "https://images.pexels.com/photos/3814341/pexels-photo-3814341.jpeg",
      type: "Webinar",
      author: "Dr. James Rodriguez",
      date: "May 8, 2024",
      readTime: "45",
      downloadable: false,
      memberOnly: true
    }
  ];

  const filteredResources = activeTab === 'all' 
    ? resources 
    : resources.filter(resource => resource.type.toLowerCase() === activeTab);

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
              Resources
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-neutral-600 leading-relaxed mb-10"
            >
              Explore our curated collection of articles, guides, webinars, and research to deepen your 
              understanding and enhance your practice as a psychoanalytic coach.
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
                  placeholder="Search resources"
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
      
      {/* Resources Section */}
      <section className="py-20 bg-neutral-100">
        <div className="container mx-auto px-4">
          {/* Tabs */}
          <div className="max-w-3xl mx-auto mb-12">
            <div className="flex flex-wrap justify-center gap-2">
              {['all', 'article', 'guide', 'webinar', 'book'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                    activeTab === tab
                      ? 'bg-primary-600 text-white'
                      : 'bg-white text-neutral-700 hover:bg-neutral-200'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}s
                </button>
              ))}
            </div>
          </div>
          
          {/* Resources Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredResources.map((resource, index) => (
              <ResourceCard
                key={index}
                title={resource.title}
                description={resource.description}
                image={resource.image}
                type={resource.type}
                author={resource.author}
                date={resource.date}
                readTime={resource.readTime}
                downloadable={resource.downloadable}
                memberOnly={resource.memberOnly}
              />
            ))}
          </div>
          
          {/* Load More Button */}
          <div className="mt-12 text-center">
            <button className="bg-primary-600 hover:bg-primary-700 transition-colors text-white font-medium py-3 px-6 rounded-md inline-flex items-center">
              Load More Resources
            </button>
          </div>
        </div>
      </section>
      
      {/* Subscribe Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-primary-50 p-8 md:p-12 rounded-xl border border-primary-100">
            <div className="text-center mb-8">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="font-serif text-3xl font-semibold mb-4 text-neutral-900"
              >
                Subscribe to Our Resource Library
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-neutral-600 text-lg max-w-2xl mx-auto"
              >
                Get monthly updates with our latest articles, guides, and exclusive content directly to your inbox.
              </motion.p>
            </div>
            
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-xl mx-auto"
            >
              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-grow p-3 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"
                  required
                />
                <button
                  type="submit"
                  className="bg-primary-600 hover:bg-primary-700 transition-colors text-white font-medium py-3 px-6 rounded-md whitespace-nowrap"
                >
                  Subscribe
                </button>
              </div>
              <p className="text-neutral-500 text-sm mt-3">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </motion.form>
          </div>
        </div>
      </section>
      
      <CallToAction />
    </div>
  );
};

export default ResourcesPage;