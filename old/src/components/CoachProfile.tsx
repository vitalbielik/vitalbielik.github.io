import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Calendar, GraduationCap, Award, BookOpen } from 'lucide-react';
import { useParams } from 'react-router-dom';

export interface Coach {
  id: string;
  image: string;
  name: string;
  title: string;
  location: string;
  specialties: string[];
  bio: string;
  education: string[];
  certifications: string[];
  publications: string[];
  experience: string;
  email: string;
}

const coaches: Coach[] = [
  {
    id: 'eleanor-thompson',
    image: "https://images.pexels.com/photos/5792641/pexels-photo-5792641.jpeg",
    name: "Dr. Eleanor Thompson",
    title: "Founding Member & President",
    location: "New York, NY",
    specialties: ["Executive Coaching", "Leadership Development", "Organizational Dynamics"],
    bio: "With over 20 years of experience in clinical psychology and executive coaching, Dr. Thompson integrates psychoanalytic principles with leadership development. Her approach focuses on helping executives understand the unconscious dynamics that influence their leadership style and organizational culture. She has worked with Fortune 500 companies across various industries and is the author of 'The Reflective Leader: Psychoanalytic Insights for Executive Growth.'",
    education: [
      "Ph.D. in Clinical Psychology, Columbia University",
      "M.A. in Organizational Psychology, NYU",
      "B.A. in Psychology, Yale University"
    ],
    certifications: [
      "Certified Psychoanalyst, New York Psychoanalytic Institute",
      "Executive Coach Certification, International Coach Federation",
      "Group Relations Conference Director, A.K. Rice Institute"
    ],
    publications: [
      "The Reflective Leader: Psychoanalytic Insights for Executive Growth (2022)",
      "Understanding Organizational Shadows: A Psychodynamic Approach (2020)",
      "Leadership and the Unconscious Mind (Journal of Executive Coaching, 2019)"
    ],
    experience: "Dr. Thompson has been a pioneer in integrating psychoanalytic understanding with executive coaching. She founded the Association of Psychoanalytic Coaches in 2010 and has since trained hundreds of coaches in psychodynamic approaches. Her client list includes CEOs and senior executives from Fortune 500 companies.",
    email: "eleanor.thompson@apc.org"
  },
  {
    id: 'michael-chen',
    image: "https://images.pexels.com/photos/5397723/pexels-photo-5397723.jpeg",
    name: "Dr. Michael Chen",
    title: "Director of Training",
    location: "San Francisco, CA",
    specialties: ["Career Transitions", "Identity Development", "Group Dynamics"],
    bio: "Dr. Chen specializes in psychodynamic approaches to career transitions and professional identity development. His work integrates object relations theory with contemporary coaching methodologies to help clients navigate complex career changes and leadership challenges. Previously a corporate executive before pursuing his doctorate in psychology, Dr. Chen brings a unique perspective that bridges business and psychological insights.",
    education: [
      "Psy.D. in Clinical Psychology, Stanford University",
      "MBA, Harvard Business School",
      "B.S. in Computer Science, MIT"
    ],
    certifications: [
      "Certified Psychoanalytic Coach, APC",
      "Professional Certified Coach, ICF",
      "Certified Group Process Consultant"
    ],
    publications: [
      "Identity in Transition: A Psychodynamic Guide to Career Change (2021)",
      "The Psychology of Professional Reinvention (2019)",
      "Group Dynamics in Corporate Settings (Business Psychology Quarterly, 2020)"
    ],
    experience: "Before his career in psychology, Dr. Chen spent 15 years in technology leadership roles. This background informs his unique approach to coaching, particularly in helping professionals navigate career transitions and identity shifts.",
    email: "michael.chen@apc.org"
  },
  {
    id: 'sarah-johnson',
    image: "https://images.pexels.com/photos/5082976/pexels-photo-5082976.jpeg",
    name: "Sarah Johnson, MA",
    title: "Ethics Committee Chair",
    location: "Chicago, IL",
    specialties: ["Workplace Relationships", "Jungian Analysis", "Shadow Work"],
    bio: "A Jungian-oriented coach with a background in organizational psychology, Sarah focuses on unconscious dynamics in workplace relationships. Her approach helps clients identify and integrate shadow aspects that influence their professional interactions and leadership abilities. Sarah has pioneered several programs that apply archetypal psychology to team development and organizational culture.",
    education: [
      "M.A. in Depth Psychology, Pacifica Graduate Institute",
      "B.A. in Philosophy, University of Chicago",
      "Advanced Studies in Jungian Psychology, C.G. Jung Institute"
    ],
    certifications: [
      "Certified Jungian Coach",
      "Shadow Work Facilitator",
      "Advanced Diploma in Group Facilitation"
    ],
    publications: [
      "Shadow and Light in Organizational Life (2023)",
      "Archetypal Patterns in Leadership (2021)",
      "The Role of Symbol in Professional Development (Depth Psychology Review, 2022)"
    ],
    experience: "Sarah has developed innovative approaches to applying Jungian concepts in organizational settings. Her work focuses on helping leaders and teams understand and integrate shadow aspects for more authentic and effective workplace relationships.",
    email: "sarah.johnson@apc.org"
  },
  {
    id: 'james-rodriguez',
    image: "https://images.pexels.com/photos/5334040/pexels-photo-5334040.jpeg",
    name: "Dr. James Rodriguez",
    title: "Research Director",
    location: "Boston, MA",
    specialties: ["Evidence-Based Coaching", "Methodology Development", "Outcome Assessment"],
    bio: "Combining psychoanalytic theory with evidence-based coaching methodologies, Dr. Rodriguez leads our research initiatives on coaching efficacy. His work focuses on developing robust assessment tools to measure the impact of psychoanalytic coaching interventions. He previously served as a research fellow at Harvard's Center for Leadership Development and has published extensively on psychodynamic approaches to organizational change.",
    education: [
      "Ph.D. in Organizational Psychology, Harvard University",
      "M.Sc. in Research Methods, London School of Economics",
      "B.A. in Psychology, Boston College"
    ],
    certifications: [
      "Certified Research Psychologist",
      "Advanced Statistical Analysis Certification",
      "Psychometric Assessment Specialist"
    ],
    publications: [
      "Measuring the Unconscious: New Approaches to Coaching Assessment (2023)",
      "Evidence-Based Psychodynamic Coaching (2022)",
      "Quantifying Change in Depth-Oriented Coaching (Journal of Coaching Psychology, 2021)"
    ],
    experience: "Dr. Rodriguez has pioneered new methodologies for assessing the effectiveness of psychoanalytic coaching interventions. His research has helped establish empirical support for depth-oriented coaching approaches.",
    email: "james.rodriguez@apc.org"
  }
];

const CoachProfile: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const coach = coaches.find(c => c.id === id);

  if (!coach) {
    return (
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl text-center">Coach not found</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-primary-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="w-64 h-64 rounded-full overflow-hidden shadow-xl"
              >
                <img
                  src={coach.image}
                  alt={coach.name}
                  className="w-full h-full object-cover"
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex-grow"
              >
                <h1 className="font-serif text-4xl md:text-5xl font-semibold mb-4 text-neutral-900">
                  {coach.name}
                </h1>
                <p className="text-primary-600 text-xl mb-4">{coach.title}</p>
                
                <div className="flex items-center text-neutral-600 mb-6">
                  <MapPin size={20} className="mr-2" />
                  <span>{coach.location}</span>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {coach.specialties.map((specialty, index) => (
                    <span
                      key={index}
                      className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
                
                <a
                  href={`mailto:${coach.email}`}
                  className="inline-flex items-center bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-md transition-colors"
                >
                  <Mail size={20} className="mr-2" />
                  Contact {coach.name.split(' ')[0]}
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main Bio */}
              <div className="lg:col-span-2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="font-serif text-3xl font-semibold mb-6 text-neutral-900">About</h2>
                  <div className="prose max-w-none text-neutral-600">
                    <p className="text-lg leading-relaxed mb-6">{coach.bio}</p>
                    <p className="text-lg leading-relaxed">{coach.experience}</p>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="mt-12"
                >
                  <h2 className="font-serif text-3xl font-semibold mb-6 text-neutral-900">Publications</h2>
                  <ul className="space-y-4">
                    {coach.publications.map((publication, index) => (
                      <li
                        key={index}
                        className="flex items-start"
                      >
                        <BookOpen size={20} className="mr-3 text-primary-600 flex-shrink-0 mt-1" />
                        <span className="text-neutral-600">{publication}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
              
              {/* Sidebar */}
              <div className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="bg-neutral-50 p-6 rounded-xl"
                >
                  <h3 className="font-serif text-xl font-semibold mb-4 text-neutral-900">
                    Education
                  </h3>
                  <ul className="space-y-3">
                    {coach.education.map((edu, index) => (
                      <li
                        key={index}
                        className="flex items-start"
                      >
                        <GraduationCap size={20} className="mr-3 text-primary-600 flex-shrink-0 mt-1" />
                        <span className="text-neutral-600">{edu}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="bg-neutral-50 p-6 rounded-xl"
                >
                  <h3 className="font-serif text-xl font-semibold mb-4 text-neutral-900">
                    Certifications
                  </h3>
                  <ul className="space-y-3">
                    {coach.certifications.map((cert, index) => (
                      <li
                        key={index}
                        className="flex items-start"
                      >
                        <Award size={20} className="mr-3 text-primary-600 flex-shrink-0 mt-1" />
                        <span className="text-neutral-600">{cert}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-primary-50 p-6 rounded-xl"
                >
                  <h3 className="font-serif text-xl font-semibold mb-4 text-neutral-900">
                    Schedule a Consultation
                  </h3>
                  <p className="text-neutral-600 mb-4">
                    Interested in working with {coach.name.split(' ')[0]}? Schedule a consultation to discuss your goals.
                  </p>
                  <button className="w-full bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-md transition-colors flex items-center justify-center">
                    <Calendar size={20} className="mr-2" />
                    Book Now
                  </button>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CoachProfile;
export { coaches };