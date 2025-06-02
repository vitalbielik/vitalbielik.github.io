import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface TestimonialProps {
  quote: string;
  author: string;
  title: string;
  image: string;
}

const TestimonialsSection: React.FC = () => {
  const testimonials: TestimonialProps[] = [
    {
      quote: "The Association of Psychoanalytic Coaches has been transformative for my practice. The community, resources, and supervision have deepened my work with clients immeasurably.",
      author: "Dr. Rachel Martinez",
      title: "Executive Coach & Psychologist",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg"
    },
    {
      quote: "Joining APC was one of the best decisions of my professional career. The integration of psychoanalytic principles into coaching has allowed me to facilitate more profound and lasting change for my clients.",
      author: "Mark Thompson",
      title: "Leadership Coach",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
    },
    {
      quote: "The training and certification program at APC provided me with a robust theoretical foundation and practical tools that set my coaching practice apart. I highly recommend it to any coach looking to deepen their work.",
      author: "Sophia Chen, MBA",
      title: "Career Transition Coach",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg"
    }
  ];
  
  const [current, setCurrent] = useState(0);
  
  const next = () => {
    setCurrent((current + 1) % testimonials.length);
  };
  
  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-primary-900 text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <span className="text-primary-300 font-medium text-sm uppercase tracking-wider">
              Testimonials
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mt-3 mb-0">
              Voices from Our Community
            </h2>
          </motion.div>
          
          <div className="relative">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-primary-800/50 backdrop-blur-sm rounded-xl p-8 md:p-12 relative"
            >
              <div className="text-primary-300 absolute top-8 left-8 md:top-12 md:left-12">
                <Quote size={48} className="opacity-50" />
              </div>
              
              <div className="flex flex-col md:flex-row items-center gap-10">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden flex-shrink-0 border-4 border-primary-300/30">
                  <img 
                    src={testimonials[current].image} 
                    alt={testimonials[current].author}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="flex-grow">
                  <p className="text-xl md:text-2xl text-neutral-100 mb-6 italic leading-relaxed">
                    "{testimonials[current].quote}"
                  </p>
                  
                  <div>
                    <h4 className="font-medium text-lg">{testimonials[current].author}</h4>
                    <p className="text-primary-300">{testimonials[current].title}</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <div className="flex justify-center space-x-4 mt-8">
              <button 
                onClick={prev}
                className="p-2 rounded-full bg-primary-800/50 hover:bg-primary-700/50 transition-colors text-white"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={24} />
              </button>
              
              <div className="flex space-x-2 items-center">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrent(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === current ? 'bg-primary-300' : 'bg-primary-700'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              
              <button 
                onClick={next}
                className="p-2 rounded-full bg-primary-800/50 hover:bg-primary-700/50 transition-colors text-white"
                aria-label="Next testimonial"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;