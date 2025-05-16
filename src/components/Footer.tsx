import React from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram 
} from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-neutral-200">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & About */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 text-white mb-4">
              <BookOpen size={28} strokeWidth={2} />
              <span className="font-serif text-xl font-semibold tracking-tight">APC</span>
            </div>
            <p className="text-neutral-400 text-sm leading-relaxed">
              The Association of Psychoanalytic Coaches is dedicated to advancing the practice of 
              coaching through psychoanalytic principles, promoting ethical standards, and supporting 
              coach development.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-medium mb-4 text-lg">Quick Links</h3>
            <ul className="space-y-3">
              {['About', 'Members', 'Resources', 'Events', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    to={`/${item.toLowerCase()}`} 
                    className="text-neutral-400 hover:text-primary-300 transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-medium mb-4 text-lg">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-sm">
                <MapPin size={18} className="text-neutral-400 mt-0.5 flex-shrink-0" />
                <span className="text-neutral-400">123 Analysis Street, New York, NY 10001</span>
              </li>
              <li className="flex items-center space-x-3 text-sm">
                <Phone size={18} className="text-neutral-400 flex-shrink-0" />
                <span className="text-neutral-400">(555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3 text-sm">
                <Mail size={18} className="text-neutral-400 flex-shrink-0" />
                <a href="mailto:info@apc.org" className="text-neutral-400 hover:text-primary-300 transition-colors">
                  info@apc.org
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-medium mb-4 text-lg">Join Our Newsletter</h3>
            <p className="text-neutral-400 text-sm mb-4">
              Stay updated with our latest events and resources.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="bg-neutral-800 px-4 py-2 rounded w-full text-sm text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <button
                type="submit"
                className="bg-primary-700 hover:bg-primary-600 transition-colors text-white px-4 py-2 rounded text-sm w-full"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Social & Copyright */}
        <div className="mt-12 pt-8 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex space-x-4">
            {[
              { icon: <Facebook size={20} />, url: '#' },
              { icon: <Twitter size={20} />, url: '#' },
              { icon: <Linkedin size={20} />, url: '#' },
              { icon: <Instagram size={20} />, url: '#' }
            ].map((social, index) => (
              <a
                key={index}
                href={social.url}
                className="text-neutral-400 hover:text-primary-300 transition-colors p-2 rounded-full hover:bg-neutral-800"
              >
                {social.icon}
              </a>
            ))}
          </div>
          <div className="text-neutral-500 text-sm">
            © {currentYear} Association of Psychoanalytic Coaches. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;