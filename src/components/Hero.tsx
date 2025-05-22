import React from 'react';
import {ArrowRight} from 'lucide-react';
import {motion} from 'framer-motion';
import {Link} from 'react-router-dom';

const Hero: React.FC = () => {
    return (
        <section className="relative h-screen flex items-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <div
                    className="absolute inset-0 bg-gradient-to-r from-neutral-900/80 to-neutral-800/50 z-10"
                ></div>
                <img
                    src="https://images.pexels.com/photos/935756/pexels-photo-935756.jpeg"
                    alt="Tranquil setting"
                    className="h-full w-full object-cover"
                />
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 relative z-20 text-white pt-24">
                <div className="max-w-3xl">
                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.6}}
                        className="mb-4"
                    >
            <span
                className="inline-block py-1 px-3 rounded-full bg-primary-700/80 text-xs uppercase tracking-wider font-medium mb-4">
              Unlocking the depths of personality through psychoanalysis and coaching.
            </span>
                    </motion.div>

                    <motion.h1
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.6, delay: 0.2}}
                        className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-6"
                    >
                        International Association of Psychoanalytic Coaches
                    </motion.h1>

                    <motion.p
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.6, delay: 0.4}}
                        className="text-lg md:text-xl text-neutral-200 mb-8 leading-relaxed"
                    >
                        Welcome to the Association of Psychoanalytic Coaches! We unite professionals dedicated to
                        harmonizing deep subconscious exploration with modern coaching techniques. Join us to grow
                        professionally and help others unlock their potential.
                    </motion.p>

                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.6, delay: 0.6}}
                        className="flex flex-col sm:flex-row gap-4"
                    >
                        <Link
                            to="/contact"
                            className="bg-primary-600 hover:bg-primary-700 transition-colors text-white font-medium py-3 px-6 rounded-md inline-flex items-center justify-center"
                        >
                            Get in Touch
                            <ArrowRight size={18} className="ml-2"/>
                        </Link>
                        <Link
                            to="/about"
                            className="bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-colors text-white font-medium py-3 px-6 rounded-md inline-flex items-center justify-center"
                        >
                            Learn More
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
