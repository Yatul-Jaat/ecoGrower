import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";

function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white border-t border-gray-100">
      {/* Newsletter Section */}
      <div className="bg-emerald-50 py-8">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-lg font-bold text-emerald-800">Join our sustainable farming community</h3>
              <p className="text-emerald-600 mt-1">Get seasonal growing tips and organic farming news</p>
            </div>
            <div className="w-full md:w-auto">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 rounded-l-lg border-y border-l border-gray-300 focus:outline-none focus:ring-1 focus:ring-emerald-500 w-full md:w-64"
                />
                <button className="bg-emerald-600 text-white px-4 py-2 rounded-r-lg hover:bg-emerald-700 transition">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Footer Content */}
      <div className="py-10 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-sprout h-8 w-8 text-emerald-600"
              >
                <path d="M7 20h10"></path>
                <path d="M10 20c5.5-2.5.8-6.4 3-10"></path>
                <path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z"></path>
                <path d="M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z"></path>
              </svg>
              <span className="ml-2 text-xl font-bold text-gray-800">
                Eco<span className="text-emerald-600">Growers</span>
              </span>
            </div>
            <p className="mt-4 text-gray-600">
              Empowering farmers to grow organic, sustainable produce for a healthier world and future generations.
            </p>
            
            {/* Contact Info */}
            <div className="mt-6 space-y-2">
              <div className="flex items-center text-gray-600">
                <MdLocationOn className="text-emerald-600 mr-2" />
                <span>Army Institute of Technology, Pune</span>
              </div>
              <div className="flex items-center text-gray-600">
                <MdPhone className="text-emerald-600 mr-2" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center text-gray-600">
                <MdEmail className="text-emerald-600 mr-2" />
                <span>jezorb0212@gmail.com</span>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Farming Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/crops" className="text-gray-600 hover:text-emerald-600 transition">Crop Guide</Link></li>
              <li><Link to="/soil-guide" className="text-gray-600 hover:text-emerald-600 transition">Soil Health</Link></li>
              <li><Link to="/seasonal" className="text-gray-600 hover:text-emerald-600 transition">Seasonal Planting</Link></li>
              <li><Link to="/pests" className="text-gray-600 hover:text-emerald-600 transition">Pest Control</Link></li>
              <li><Link to="/organic" className="text-gray-600 hover:text-emerald-600 transition">Organic Certification</Link></li>
            </ul>
          </div>
          
          {/* Company Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-600 hover:text-emerald-600 transition">About Us</Link></li>
              <li><Link to="/team" className="text-gray-600 hover:text-emerald-600 transition">Our Team</Link></li>
              <li><Link to="/careers" className="text-gray-600 hover:text-emerald-600 transition">Careers</Link></li>
              <li><Link to="/partners" className="text-gray-600 hover:text-emerald-600 transition">Partners</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-emerald-600 transition">Contact Us</Link></li>
            </ul>
          </div>
          
          {/* Legal & Social */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Connect</h3>
            {/* Social Media */}
            <div className="flex space-x-4 mb-6">
              <a href="#" className="text-gray-400 hover:text-emerald-600 transition">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-600 transition">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-600 transition">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-600 transition">
                <FaYoutube size={20} />
              </a>
            </div>
            
            {/* Legal Links */}
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/privacy" className="text-gray-600 hover:text-emerald-600 transition">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-600 hover:text-emerald-600 transition">Terms of Service</Link></li>
              <li><Link to="/cookies" className="text-gray-600 hover:text-emerald-600 transition">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="border-t border-gray-200 pt-6 pb-6">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">&copy; {currentYear} EcoGrowers. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <p className="text-xs text-gray-500">Made with 🌱 for sustainable farming practices</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;