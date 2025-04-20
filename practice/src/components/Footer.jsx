import React from "react";

function Footer() {
  return (
    <footer className="bg-white text-gray-500 py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* Company Info */}
        <div>
        <div className="flex items-center ">
        {" "}
        <svg
          cl
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-sprout h-8 w-8 text-emerald-600"
        >
          <path d="M7 20h10"></path>
          <path d="M10 20c5.5-2.5.8-6.4 3-10"></path>
          <path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z"></path>
          <path d="M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z"></path>
        </svg>
        <span className="ml-2 text-xl font-bold text-gray-800">EcoGrowers</span>
        </div>
          <p className="mt-2 text-gray-600">
            Empowering farmers to grow organic, sustainable produce for a healthier world.
          </p>
        </div>
        
        {/* Navigation Links */}
        <div className="grid grid-cols-2 gap-6">
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase">Company</h3>
            <ul className="mt-2 space-y-2">
              <li><a href="#" className="hover:text-emerald-400 transition">About</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition">Careers</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition">Partners</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase">Resources</h3>
            <ul className="mt-2 space-y-2">
              <li><a href="#" className="hover:text-emerald-400 transition">Blog</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition">Guides</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition">Support</a></li>
            </ul>
          </div>
        </div>
        
        {/* Legal Links */}
        <div>
          <h3 className="text-sm font-semibold text-gray-900 uppercase">Legal</h3>
          <ul className="mt-2 space-y-2">
            <li><a href="#" className="hover:text-emerald-400 transition">Privacy</a></li>
            <li><a href="#" className="hover:text-emerald-400 transition">Terms</a></li>
            <li><a href="#" className="hover:text-emerald-400 transition">Contact</a></li>
          </ul>
        </div>
        
      </div>
      <div className="mt-12 border-t border-gray-200 pt-8 mx-20"> 
        <p className="text-center">&copy; 2025 EcoHarvest. All rights reserved.</p>
      </div>
      
      
    </footer>
  );
}

export default Footer;
