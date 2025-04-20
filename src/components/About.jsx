import React from "react";
import Footer from "./Footer";
import { NavLink } from "react-router-dom";
import { FaSeedling, FaUsers, FaHistory } from "react-icons/fa";
import { MdOutlineEco, MdHealthAndSafety, MdVolunteerActivism } from "react-icons/md";
import { BsFillAwardFill } from "react-icons/bs";

function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 to-green-100 px-6 py-12 md:py-16">
        <div className="max-w-5xl mx-auto text-center">
          <div className="flex items-center justify-center mb-4">
            <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium flex items-center">
              <FaSeedling className="mr-1" /> Our Mission
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            About <span className="text-emerald-600">EcoGrowers</span>
          </h1>
          <p className="mt-4 sm:mt-6 text-lg text-gray-700 max-w-3xl mx-auto">
            We're dedicated to revolutionizing farming through sustainable practices, 
            supporting local farmers, and providing resources for a healthier planet.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-start mb-4">
                <FaHistory className="text-emerald-600 text-xl mt-1 mr-2" />
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Our Story</h2>
              </div>
              <p className="text-gray-700 mb-4">
                EcoGrowers began in 2025 with a simple mission: to make sustainable farming accessible to everyone. 
                What started as a small community of passionate organic farmers has grown into a nationwide movement.
              </p>
              <p className="text-gray-700 mb-4">
                Our founders, Emma and David Wilson, experienced firsthand the challenges of transitioning to organic 
                farming methods. They created EcoGrowers to provide the support and resources they wished they had 
                when they started their journey.
              </p>
              <p className="text-gray-700">
                In future, we'll be proud to support over 5,000 farmers across the country, helping them implement 
                sustainable practices while improving their crop yields and soil health.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-emerald-100 rounded-full opacity-70"></div>
              <img
                className="rounded-2xl shadow-xl w-full relative z-10"
                src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?auto=format&fit=crop&w=800&q=80"
                alt="Farmers in field"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium flex items-center">
                <MdVolunteerActivism className="mr-1" /> What We Stand For
              </span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Our Core Values</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do at EcoGrowers
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition duration-300">
              <div className="bg-emerald-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <MdOutlineEco className="text-emerald-600 text-xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Sustainability</h3>
              <p className="text-gray-600">
                We believe in farming practices that preserve our planet for future generations by maintaining soil health, 
                conserving water, and promoting biodiversity.
              </p>
            </div>
            
            {/* Value 2 */}
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition duration-300">
              <div className="bg-emerald-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <MdHealthAndSafety className="text-emerald-600 text-xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Health & Wellness</h3>
              <p className="text-gray-600">
                We champion farming methods that produce nutritious food without harmful chemicals, 
                benefiting both consumer health and farmer safety.
              </p>
            </div>
            
            {/* Value 3 */}
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition duration-300">
              <div className="bg-emerald-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <FaUsers className="text-emerald-600 text-xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Community</h3>
              <p className="text-gray-600">
                We foster a supportive network where farmers can share knowledge, collaborate, 
                and help each other succeed in sustainable agriculture.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Meet Our Team</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Passionate experts dedicated to sustainable farming
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-gray-50 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-300">
              <img
                className="w-full h-64 object-cover object-center"
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=500&q=80"
                alt="Emma Wilson"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">Sandeep</h3>
                <p className="text-emerald-600 mb-3">Web Developer</p>
                <p className="text-gray-600">
                Yatul helped Sandeep to create the website and handling with apis.
                </p>
              </div>
            </div>
            
            {/* Team Member 2 */}
            <div className="bg-gray-50 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-300">
              <img
                className="w-full h-64 object-cover object-center"
                src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&w=500&q=80"
                alt="David Wilson"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">Yatul</h3>
                <p className="text-emerald-600 mb-3">Web Developer</p>
                <p className="text-gray-600">
                  Yatul helped Sandeep to create the website and handling with apis.
                </p>
              </div>
            </div>
            
            {/* Team Member 3 */}
            <div className="bg-gray-50 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-300">
              <img
                className="w-full h-64 object-cover object-center"
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=500&q=80"
                alt="Sarah Martinez"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">Shubham SIngh</h3>
                <p className="text-emerald-600 mb-3">Data Anilist</p>
                <p className="text-gray-600">
                  Shubham used to collect all the data we needed for the work and helped sahil.
                </p>
              </div>
            </div>
            <div className="bg-gray-50 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-300">
              <img
                className="w-full h-64 object-cover object-center"
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=500&q=80"
                alt="Sarah Martinez"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">Sahil</h3>
                <p className="text-emerald-600 mb-3">UI/UX Desiner</p>
                <p className="text-gray-600">
                  Sahil uses figma to design the website pages.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-emerald-500 to-emerald-700 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <span className="bg-white text-emerald-700 px-3 py-1 rounded-full text-sm font-medium flex items-center">
                <BsFillAwardFill className="mr-1" /> Our Impact
              </span>
            </div>
            <h2 className="text-3xl font-bold">Our Achievements</h2>
            <p className="mt-4 text-lg max-w-2xl mx-auto opacity-90">
              Making a difference in sustainable agriculture
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Achievement 1 */}
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-bold mb-2">5,000+</p>
              <p className="text-lg">Farmers Supported</p>
            </div>
            
            {/* Achievement 2 */}
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-bold mb-2">15,000</p>
              <p className="text-lg">Acres Converted</p>
            </div>
            
            {/* Achievement 3 */}
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-bold mb-2">30%</p>
              <p className="text-lg">Average Yield Increase</p>
            </div>
            
            {/* Achievement 4 */}
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-bold mb-2">10+</p>
              <p className="text-lg">Industry Awards</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Join Our Community</h2>
          <p className="text-lg mb-8 text-gray-700">
            Connect with like-minded farmers and access our resources to transform your farming practices
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <NavLink to="/register" className="bg-emerald-600 text-white px-8 py-3 rounded-lg hover:bg-emerald-700 transition duration-300 font-medium">
              Become a Member
            </NavLink>
            <NavLink to="/contact" className="bg-transparent border-2 border-emerald-600 text-emerald-600 px-8 py-3 rounded-lg hover:bg-emerald-50 transition duration-300">
              Contact Us
            </NavLink>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default About;