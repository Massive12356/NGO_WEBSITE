import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { Mail, Phone, MapPin, Instagram } from "lucide-react";
import logo from "../images/logo1.png";

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div className="lg:col-span-1">
            <Link
              to="/"
              className="flex items-center space-x-2 text-xl font-bold text-primary-400 mb-4"
              aria-label="Twelve In Twelve LBG Home"
            >
              <img
                src={logo}
                alt="Twelve In Twelve LBG Logo"
                className="w-32 h-auto object-contain"
              />
            </Link>
            <p className="text-gray-300 mb-4">
              Ensuring universal access to standardised healthcare services in
              underserved communities all over Ghana.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/twelveintwelvelbg"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 rounded"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.tiktok.com/@12.in.12"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 rounded"
                aria-label="Follow us on TikTok"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About</h3>
            <nav className="space-y-2">
              <Link
                to="/about-us"
                className="block text-gray-300 hover:text-primary-400 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 rounded"
              >
                Our Mission
              </Link>
              <HashLink
                to="/about-us#team"
                className="block text-gray-300 hover:text-primary-400 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 rounded"
              >
                Our Team
              </HashLink>
              <Link
                to="/our-impact"
                className="block text-gray-300 hover:text-primary-400 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 rounded"
              >
                Our Impact
              </Link>
              <Link
                to="/contact-us"
                className="block text-gray-300 hover:text-primary-400 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 rounded"
              >
                Contact Us
              </Link>
            </nav>
          </div>

          {/* Get Involved */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get Involved</h3>
            <nav className="space-y-2">
              <HashLink
                to="/get-involved#giving"
                className="block text-gray-300 hover:text-primary-400 transition-colors"
              >
                Donate
              </HashLink>
              <Link
                to="/contact-us"
                className="block text-gray-300 hover:text-primary-400 transition-colors"
              >
                Partner with Us
              </Link>
              <HashLink
                to="/contact-us#faqs"
                className="block text-gray-300 hover:text-primary-400 transition-colors"
              >
                FAQs
              </HashLink>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <a
                  href="mailto:info@twelveintwelvelbg.org"
                  className="text-gray-300 hover:text-primary-400 transition-colors"
                >
                  info@twelveintwelvelbg.org
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <a
                  href="tel:+233538795542"
                  className="text-gray-300 hover:text-primary-400 transition-colors"
                >
                  +233 53 879 5542
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
                <address className="text-gray-300 not-italic">
                  HNo. C2/11, Sakumono
                  <br />
                  Tema, Ghana
                </address>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm text-center md:text-left">
            © 2025 Twelve In Twelve LBG. All rights reserved. | Transforming the
            health of our nation, one citizen at a time.
          </p>

          {/* <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="#"
              className="text-gray-400 hover:text-primary-400 text-sm transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-primary-400 text-sm transition-colors"
            >
              Terms of Service
            </a>
          </div> */}
        </div>

        {/* Developed By Section */}
        <div className="mt-6 text-center">
          <p className="text-gray-500 text-sm">
            Developed by{" "}
            <a
              href="https://sukutechnologies.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-400 hover:underline hover:text-primary-300 transition-colors"
            >
              Suku Technologies
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
