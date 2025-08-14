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
                            <p>Founded in 2010 by a group of psychologists, psychoanalysts, and coaches, the
                                Association of Psychoanalytic Coaching (APC) was established with the goal of
                                integrating pragmatic coaching methods, specifically designed for rapid goal
                                achievement, with in-depth exploration of unconscious processes.</p>
                            <p>Our founders recognized that traditional coaching, which focuses on goals and action,
                                often overlooks the unconscious motivations and internal conflicts that influence
                                behavior beyond conscious control.</p>
                            <p>Our innovative approach, psychoanalytic coaching, uncovers deep unconscious dynamics,
                                providing them with meaning. It enables clients to effectively achieve their goals
                                by overcoming hidden psychological barriers. In doing so, clients gain a deep
                                understanding of themselves and clarity about their true aspirations. This frees up
                                internal resources for achieving goals and increases the level of subjective
                                well-being. Thanks to psychoanalytic coaching, this feeling of harmony and
                                satisfaction accompanies both the process of achieving goals and life in
                                general.</p>
                            <p>Such results are not available with standard coaching methods. This is a unique
                                method that harmoniously combines conscious work with a goal and working through the
                                unconscious, ensuring a holistic transformation.</p>
                            <p>Today, APC unites more than 1,200 practitioners in 38 countries, forming a global
                                community dedicated to in-depth coaching that fosters lasting change for
                                individuals, teams, and organizations.</p>
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
