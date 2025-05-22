import React from 'react';
import {motion} from 'framer-motion';

const OurStorySection: React.FC = () => {
    return (
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
    );
};

export default OurStorySection;
