import React from 'react';
import {motion} from 'framer-motion';
import {BookOpen, Award, Users, Brain, Heart, MessageSquare} from 'lucide-react';
import CallToAction from '../components/CallToAction';

interface ValueProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

const Value: React.FC<ValueProps> = ({icon, title, description}) => (
    <motion.div
        initial={{opacity: 0, y: 20}}
        whileInView={{opacity: 1, y: 0}}
        viewport={{once: true}}
        transition={{duration: 0.5}}
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
            icon: <Brain size={28}/>,
            title: 'Depth of Understanding',
            description: 'We believe in looking beyond superficial behavior to explore the unconscious patterns and motives that drive a person\'s actions.'
        },
        {
            icon: <Heart size={28}/>,
            title: 'Compassionate Research',
            description: 'Our approach combines intellectual rigor with empathic sensitivity, creating a supportive environment for growth.'
        },
        {
            icon: <MessageSquare size={28}/>,
            title: 'Reflective dialogue',
            description: 'We value the transformative power of open, exploratory conversations that respect both rational insights and emotional truths.'
        },
        {
            icon: <Award size={28}/>,
            title: 'Ethical practice',
            description: 'We are committed to the highest standards of professional conduct, confidentiality and continuous development.'
        },
        {
            icon: <Users size={28}/>,
            title: 'Collaborative community',
            description: 'We create a supportive network where practitioners learn from each other and grow together.'
        },
        {
            icon: <BookOpen size={28}/>,
            title: 'Lifelong learning',
            description: 'We are committed to continuous education, research, and development of psychoanalytic coaching practices.'
        }
    ];

    return (
        <div className="pt-16">
            {/* Hero Section */}
            <section className="relative py-20 md:py-32 bg-primary-900 text-white overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-20">
                    <div
                        className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary-500 blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
                    <div
                        className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-secondary-500 blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-3xl mx-auto text-center">
                        <motion.h1
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.6}}
                            className="font-serif text-4xl md:text-5xl font-semibold mb-6"
                        >
                            About the Association of Psychoanalytic Coaches
                        </motion.h1>

                        <motion.p
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.6, delay: 0.2}}
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
                            initial={{opacity: 0, x: -30}}
                            whileInView={{opacity: 1, x: 0}}
                            viewport={{once: true}}
                            transition={{duration: 0.5}}
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
                            initial={{opacity: 0, x: 30}}
                            whileInView={{opacity: 1, x: 0}}
                            viewport={{once: true}}
                            transition={{duration: 0.5, delay: 0.2}}
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
                        initial={{opacity: 0, y: 20}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true}}
                        transition={{duration: 0.5}}
                        className="max-w-3xl mx-auto text-center mb-16"
                    >
            <span className="text-primary-600 font-medium text-sm uppercase tracking-wider">
              Our Values
            </span>
                        <h2 className="font-serif text-3xl md:text-4xl font-semibold mt-3 mb-6 text-neutral-900">
                            Fundamental principles
                        </h2>
                        <p className="text-neutral-600 text-lg">
                            These core values guide our approach to coaching, community engagement, and professional
                            standards.
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
                            initial={{opacity: 0, y: 20}}
                            whileInView={{opacity: 1, y: 0}}
                            viewport={{once: true}}
                            transition={{duration: 0.5}}
                            className="bg-primary-50 p-8 rounded-xl border border-primary-100"
                        >
                            <div className="bg-primary-100 inline-block p-3 rounded-full text-primary-700 mb-6">
                                <BookOpen size={28}/>
                            </div>
                            <h3 className="font-serif text-2xl font-medium mb-4 text-neutral-900">Our Mission</h3>
                            <p className="text-neutral-700 mb-4">
                                To develop and advance the field of coaching through the integration of psychoanalytic
                                principles, promoting a deep understanding of human motivations and behavior, and
                                facilitating transformational change and awareness for individuals and systems, ensuring
                                their well-being and contributing to the holistic development of society, including
                                science, medicine, culture, education, business, and personal growth.
                            </p>
                            <p className="text-neutral-700">
                                We achieve this through professional development, educational programs, knowledge
                                dissemination, setting ethical standards, building a community, and supporting research
                                in the field of psychoanalytic coaching.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{opacity: 0, y: 20}}
                            whileInView={{opacity: 1, y: 0}}
                            viewport={{once: true}}
                            transition={{duration: 0.5, delay: 0.2}}
                            className="bg-secondary-50 p-8 rounded-xl border border-secondary-100"
                        >
                            <div className="bg-secondary-100 inline-block p-3 rounded-full text-secondary-700 mb-6">
                                <Brain size={28}/>
                            </div>
                            <h3 className="font-serif text-2xl font-medium mb-4 text-neutral-900">Our Vision</h3>
                            <p className="text-neutral-700 mb-4">
                                We envision a world in which psychoanalytic coaching consistently engages with the most
                                profound aspects of human experience, offering more authentic, sustainable, and profound
                                personal and professional growth.
                            </p>
                            <p className="text-neutral-700">
                                We strive to be the leading authority in the field of psychoanalytic coaching,
                                recognized worldwide for excellence in teaching, research, and practice that transforms
                                individuals, organizations, and communities.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            <CallToAction/>
        </div>
    );
};

export default AboutPage;
