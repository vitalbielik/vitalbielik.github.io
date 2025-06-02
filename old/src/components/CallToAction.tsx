import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CallToAction: React.FC = () => {
  return (
    <section className="py-20 bg-primary-700 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-white transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-white transform translate-x-1/3 translate-y-1/3"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-serif text-3xl md:text-4xl font-semibold text-white mb-6"
          >
            Ready to Elevate Your Coaching Practice?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-primary-100 text-lg mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            Join our community of psychoanalytic coaches and gain access to specialized resources,
            professional development opportunities, supervision, and a network of like-minded
            practitioners committed to depth-oriented coaching.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            {/*<Link*/}
            {/*  to="/about"*/}
            {/*  className="bg-white text-primary-700 hover:bg-neutral-100 transition-colors font-medium py-3 px-6 rounded-md inline-flex items-center"*/}
            {/*>*/}
            {/*  Learn About Membership <ArrowRight size={18} className="ml-2" />*/}
            {/*</Link>*/}
            <Link
              to="/contact"
              className="bg-primary-600 text-white hover:bg-primary-500 transition-colors font-medium py-3 px-6 rounded-md inline-flex items-center"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
