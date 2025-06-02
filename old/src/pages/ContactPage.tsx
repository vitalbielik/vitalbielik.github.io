import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const ContactPage: React.FC = () => {
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
              Contact Us
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-neutral-600 leading-relaxed"
            >
              We're here to answer your questions about membership, events, 
              certification, or any other inquiries about the Association of 
              Psychoanalytic Coaches.
            </motion.p>
          </div>
        </div>
      </section>
      
      {/* Contact Information and Form */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <div>
                <h2 className="font-serif text-3xl font-semibold mb-6 text-neutral-900">
                  Get in Touch
                </h2>
                <p className="text-neutral-600 text-lg mb-8">
                  Have questions about the Association of Psychoanalytic Coaches? 
                  We're here to help you with any inquiries about membership, events, 
                  resources, or general information.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary-50 p-3 rounded-md text-primary-600 mr-4">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-medium text-neutral-900 mb-1">Address</h3>
                    <p className="text-neutral-600">123 Analysis Street, New York, NY 10001</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-50 p-3 rounded-md text-primary-600 mr-4">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-medium text-neutral-900 mb-1">Email</h3>
                    <a 
                      href="mailto:info@apc.org" 
                      className="text-primary-600 hover:text-primary-800 transition-colors"
                    >
                      info@apc.org
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-50 p-3 rounded-md text-primary-600 mr-4">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-medium text-neutral-900 mb-1">Phone</h3>
                    <p className="text-neutral-600">(555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-50 p-3 rounded-md text-primary-600 mr-4">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 className="font-medium text-neutral-900 mb-1">Office Hours</h3>
                    <p className="text-neutral-600">Monday - Friday: 9:00 AM - 5:00 PM</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="font-medium text-neutral-900 mb-3">Connect With Us</h3>
                <div className="flex space-x-4">
                  {[
                    { icon: <Facebook size={20} />, url: '#', label: 'Facebook' },
                    { icon: <Twitter size={20} />, url: '#', label: 'Twitter' },
                    { icon: <Linkedin size={20} />, url: '#', label: 'LinkedIn' },
                    { icon: <Instagram size={20} />, url: '#', label: 'Instagram' }
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      aria-label={social.label}
                      className="bg-neutral-100 hover:bg-primary-50 text-neutral-700 hover:text-primary-600 transition-colors p-3 rounded-full"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
            
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-8 rounded-xl shadow-md border border-neutral-200"
            >
              <h3 className="font-serif text-2xl font-medium mb-6 text-neutral-900">
                Send Us a Message
              </h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full p-3 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full p-3 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
                      placeholder="Your email"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-neutral-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full p-3 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
                    placeholder="Message subject"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full p-3 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
                    placeholder="Your message"
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="bg-primary-600 hover:bg-primary-700 transition-colors text-white font-medium py-3 px-6 rounded-md w-full inline-flex items-center justify-center"
                >
                  <Send size={18} className="mr-2" />
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="font-serif text-3xl font-semibold mb-4 text-neutral-900">
                Frequently Asked Questions
              </h2>
              <p className="text-neutral-600 text-lg">
                Find quick answers to common questions about the Association of Psychoanalytic Coaches.
              </p>
            </motion.div>
            
            <div className="space-y-6">
              {[
                {
                  question: "How do I become a member of the APC?",
                  answer: "To become a member of the Association of Psychoanalytic Coaches, you'll need to complete our application process, which includes submitting your professional qualifications, references, and a statement of interest. Visit our Membership page for detailed requirements and to start your application."
                },
                {
                  question: "What are the benefits of APC membership?",
                  answer: "APC membership provides access to our extensive resource library, professional development opportunities, peer supervision groups, networking events, discounted rates for conferences and workshops, listing in our public directory, and subscription to our quarterly journal and monthly newsletter."
                },
                {
                  question: "Does the APC offer certification programs?",
                  answer: "Yes, we offer a comprehensive Psychoanalytic Coaching Certification program that provides in-depth training in psychoanalytic theory and its application to coaching practice. The program includes online learning, live supervision, case consultation, and a final project."
                },
                {
                  question: "How often does the APC host events?",
                  answer: "We host a variety of events throughout the year, including monthly webinars, quarterly workshops, special interest group meetings, and our annual conference. Check our Events page for the current schedule."
                },
                {
                  question: "Can I propose a workshop or presentation to the APC?",
                  answer: "Absolutely! We welcome proposals for workshops, presentations, and articles from members and qualified professionals in the field. Please use the 'Submit a Proposal' button on our Events page to share your ideas with us."
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="bg-white p-6 rounded-lg shadow-sm border border-neutral-200"
                >
                  <h3 className="font-medium text-lg mb-3 text-neutral-900">{faq.question}</h3>
                  <p className="text-neutral-600">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="font-serif text-3xl font-semibold mb-4 text-neutral-900">
                Our Location
              </h2>
              <p className="text-neutral-600 text-lg">
                Visit our office in the heart of New York City.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-neutral-200 h-96 rounded-xl overflow-hidden relative flex items-center justify-center"
            >
              {/* Placeholder for map - in a real implementation, this would be an actual map */}
              <div className="text-center p-12">
                <MapPin size={48} className="mx-auto mb-4 text-primary-600" />
                <h3 className="font-medium text-lg mb-2">Association of Psychoanalytic Coaches</h3>
                <p className="text-neutral-600">123 Analysis Street, New York, NY 10001</p>
                <button className="mt-4 bg-primary-600 hover:bg-primary-700 transition-colors text-white font-medium py-2 px-4 rounded-md text-sm">
                  Get Directions
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;