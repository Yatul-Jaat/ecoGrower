import React from "react";
import Footer from "./Footer";
import Component1 from "./Component1";
import { NavLink } from "react-router-dom";
import { FaSeedling, FaLeaf, FaSearch, FaHandHoldingWater, FaCloudSun } from "react-icons/fa";
import { MdOutlineEco, MdHealthAndSafety, MdNaturePeople } from "react-icons/md";
import { GiPlantRoots, GiSprout, GiFarmTractor } from "react-icons/gi";

function Home() {
  return (
    <>
      {/* Hero Section - Enhanced with animation and better visuals */}
      <section className="bg-gradient-to-br from-emerald-50 to-green-100 px-6 py-16 md:py-24 overflow-hidden relative">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-16 -right-16 w-64 h-64 bg-emerald-200 rounded-full opacity-30 animate-pulse"></div>
          <div className="absolute top-1/2 -left-24 w-48 h-48 bg-green-200 rounded-full opacity-20"></div>
          <div className="absolute bottom-0 right-1/4 w-32 h-32 bg-emerald-100 rounded-full opacity-30"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto relative z-10">
          <div className="p-4 md:p-7 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start mb-4">
              <span className="bg-emerald-100 text-emerald-700 px-4 py-1 rounded-full text-sm font-medium flex items-center shadow-sm">
                <FaSeedling className="mr-2" /> Sustainable Farming Solutions
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Grow <span className="text-emerald-600 relative">
                Organic
                <span className="absolute bottom-1 left-0 w-full h-2 bg-emerald-200 -z-10 opacity-70"></span>
              </span>, Live <span className="text-emerald-600 relative">
                Healthy
                <span className="absolute bottom-1 left-0 w-full h-2 bg-emerald-200 -z-10 opacity-70"></span>
              </span>
            </h1>
            <p className="mt-6 text-lg text-gray-700 md:pr-6">
              Join our thriving community of sustainable farmers making a positive
              impact on the environment while producing nutritious, organic food for generations to come.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 items-center justify-center md:justify-start">
              <NavLink to="/crops" className="bg-emerald-600 hover:cursor-pointer px-8 py-3 text-white hover:bg-emerald-700 rounded-lg flex items-center transition duration-300 shadow-md hover:shadow-lg w-full sm:w-auto justify-center transform hover:-translate-y-1">
                <FaSearch className="mr-2" />
                Explore Crops
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
                  className="ml-2 h-5 w-5"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </NavLink>
              <NavLink to="/about" className="border-2 border-emerald-600 hover:cursor-pointer text-emerald-600 px-8 py-3 hover:bg-emerald-50 rounded-lg flex items-center transition duration-300 w-full sm:w-auto justify-center transform hover:-translate-y-1">
                <FaLeaf className="mr-2" />
                Learn More
              </NavLink>
            </div>
            
            {/* Trust badges */}
            <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4">
              <div className="bg-white/80 px-3 py-2 rounded-lg shadow-sm flex items-center">
                <div className="bg-emerald-100 p-1 rounded-full mr-2">
                  <MdOutlineEco className="text-emerald-600" />
                </div>
                <span className="text-xs font-medium">100% Organic</span>
              </div>
              <div className="bg-white/80 px-3 py-2 rounded-lg shadow-sm flex items-center">
                <div className="bg-emerald-100 p-1 rounded-full mr-2">
                  <MdHealthAndSafety className="text-emerald-600" />
                </div>
                <span className="text-xs font-medium">Eco-Certified</span>
              </div>
              <div className="bg-white/80 px-3 py-2 rounded-lg shadow-sm flex items-center">
                <div className="bg-emerald-100 p-1 rounded-full mr-2">
                  <MdNaturePeople className="text-emerald-600" />
                </div>
                <span className="text-xs font-medium">Community Supported</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            {/* Animated decorative elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-emerald-100 rounded-full opacity-70 animate-pulse"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-emerald-200 rounded-full opacity-70 animate-pulse"></div>
            
            {/* Main image with overlay */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                className="w-full max-w-lg mx-auto relative z-10 rounded-2xl object-cover h-80 md:h-96"
                src="https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?auto=format&fit=crop&w=800&q=80"
                alt="Organic Farming"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/30 to-transparent rounded-2xl"></div>
              
              {/* Image overlay badges */}
              <div className="absolute top-4 right-8 bg-white/90 px-3 py-1 rounded-full shadow-lg z-20 flex items-center ">
                <span className="text-emerald-600 text-xs font-medium flex items-center">
                  <GiSprout className="mr-1" /> Grown with Care
                </span>
              </div>
            </div>
            
            {/* Bottom badge */}
            <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 bg-white px-6 py-3 rounded-full shadow-lg z-20 flex items-center">
              <FaSeedling className="text-emerald-600 mr-2" />
              <span className="text-emerald-600 font-medium">Nature's Bounty</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - New section showing impact */}
      <section className="py-12 bg-white px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-6">
              <div className="text-emerald-600 font-bold text-3xl mb-2">10k+</div>
              <p className="text-gray-600">Organic Farmers</p>
            </div>
            <div className="p-6">
              <div className="text-emerald-600 font-bold text-3xl mb-2">50+</div>
              <p className="text-gray-600">Crop Varieties</p>
            </div>
            <div className="p-6">
              <div className="text-emerald-600 font-bold text-3xl mb-2">95%</div>
              <p className="text-gray-600">Sustainable Methods</p>
            </div>
            <div className="p-6">
              <div className="text-emerald-600 font-bold text-3xl mb-2">30+</div>
              <p className="text-gray-600">Countries Served</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Enhanced with better visuals */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block bg-emerald-100 text-emerald-700 px-4 py-1 rounded-full text-sm font-medium mb-4">
              Our Approach
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Why Choose EcoGrowers?</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              We empower farmers with sustainable practices, innovative resources, and a supportive community
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Feature 1 */}
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition duration-300 transform hover:-translate-y-2 group">
              <div className="bg-emerald-100 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-emerald-200 transition-colors">
                <GiPlantRoots className="text-emerald-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Organic Farming</h3>
              <p className="text-gray-600">
                Learn best practices for chemical-free farming methods that preserve soil health and increase biodiversity.
              </p>
              <NavLink to="/grow" className="mt-4 inline-flex items-center text-emerald-600 font-medium hover:text-emerald-800">
                Learn more
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-1 h-4 w-4"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </NavLink>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition duration-300 transform hover:-translate-y-2 group">
              <div className="bg-emerald-100 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-emerald-200 transition-colors">
                <FaHandHoldingWater className="text-emerald-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Sustainable Methods</h3>
              <p className="text-gray-600">
                Discover techniques that reduce environmental impact while increasing crop yield and quality over time.
              </p>
              <NavLink to="/grow" className="mt-4 inline-flex items-center text-emerald-600 font-medium hover:text-emerald-800">
                Learn more
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-1 h-4 w-4"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </NavLink>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition duration-300 transform hover:-translate-y-2 group">
              <div className="bg-emerald-100 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-emerald-200 transition-colors">
                <MdHealthAndSafety className="text-emerald-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Better Nutrition</h3>
              <p className="text-gray-600">
                Produce healthier crops with higher nutritional value using our proven methods and organic techniques.
              </p>
              <NavLink to="/grow" className="mt-4 inline-flex items-center text-emerald-600 font-medium hover:text-emerald-800">
                Learn more
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-1 h-4 w-4"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </NavLink>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Crops Section - New section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div>
              <div className="inline-block bg-emerald-100 text-emerald-700 px-4 py-1 rounded-full text-sm font-medium mb-3">
                Popular Crops
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Seasonal Favorites</h2>
              <p className="mt-3 text-lg text-gray-600 max-w-xl">
                Explore our most popular organic crops that thrive in this season
              </p>
            </div>
            <NavLink to="/crops" className="mt-6 md:mt-0 bg-emerald-50 text-emerald-600 px-6 py-2 rounded-lg flex items-center hover:bg-emerald-100 transition">
              View All Crops
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ml-2 h-4 w-4"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </NavLink>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {/* Featured Crop 1 */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition group">
              <div className="relative overflow-hidden">
                <img 
                  src="https://cdn.pixabay.com/photo/2021/09/10/21/18/tomatoes-6614242_1280.jpg" 
                  alt="Tomatoes"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3 bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-medium">
                  Vegetable
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-900">Heirloom Tomatoes</h3>
                <div className="flex items-center mt-2 text-gray-600 text-sm">
                  <FaCloudSun className="mr-1 text-emerald-500" />
                  <span>Spring, Summer</span>
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-sm font-medium text-green-600">Easy to grow</span>
                  <NavLink to="/crops" className="text-emerald-600 hover:text-emerald-800 text-sm">
                    Details →
                  </NavLink>
                </div>
              </div>
            </div>
            
            {/* Featured Crop 2 */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition group">
              <div className="relative overflow-hidden">
                <img 
                  src="https://cdn.pixabay.com/photo/2017/08/01/14/39/green-2565925_1280.jpg" 
                  alt="Lettuce"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3 bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-medium">
                  Leafy Green
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-900">Organic Lettuce</h3>
                <div className="flex items-center mt-2 text-gray-600 text-sm">
                  <FaCloudSun className="mr-1 text-emerald-500" />
                  <span>Spring, Fall</span>
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-sm font-medium text-green-600">Easy to grow</span>
                  <NavLink to="/crops" className="text-emerald-600 hover:text-emerald-800 text-sm">
                    Details →
                  </NavLink>
                </div>
              </div>
            </div>
            
            {/* Featured Crop 3 */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition group">
              <div className="relative overflow-hidden">
                <img 
                  src="https://cdn.pixabay.com/photo/2016/08/03/01/09/carrot-1565597_1280.jpg" 
                  alt="Carrots"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3 bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-medium">
                  Root Vegetable
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-900">Rainbow Carrots</h3>
                <div className="flex items-center mt-2 text-gray-600 text-sm">
                  <FaCloudSun className="mr-1 text-emerald-500" />
                  <span>Spring, Fall</span>
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-sm font-medium text-yellow-600">Medium difficulty</span>
                  <NavLink to="/crops" className="text-emerald-600 hover:text-emerald-800 text-sm">
                    Details →
                  </NavLink>
                </div>
              </div>
            </div>
            
            {/* Featured Crop 4 */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition group">
              <div className="relative overflow-hidden">
                <img 
                  src="https://cdn.pixabay.com/photo/2020/06/15/17/10/basil-5302622_1280.jpg" 
                  alt="Herbs"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3 bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-medium">
                  Herbs
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-900">Culinary Herbs</h3>
                <div className="flex items-center mt-2 text-gray-600 text-sm">
                  <FaCloudSun className="mr-1 text-emerald-500" />
                  <span>Year-round</span>
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-sm font-medium text-green-600">Easy to grow</span>
                  <NavLink to="/crops" className="text-emerald-600 hover:text-emerald-800 text-sm">
                    Details →
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section - New section */}
      <section className="py-20 px-6 bg-gradient-to-br from-emerald-50 to-green-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block bg-white text-emerald-700 px-4 py-1 rounded-full text-sm font-medium mb-3 shadow-sm">
              Success Stories
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">What Our Community Says</h2>
            <p className="mt-3 text-lg text-gray-600 max-w-2xl mx-auto">
              Hear from farmers who have transformed their practices with EcoGrowers
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-emerald-200 rounded-full flex items-center justify-center text-emerald-700 font-bold">
                  JD
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold">John Doe</h4>
                  <p className="text-sm text-gray-500">Small-scale Farmer, Oregon</p>
                </div>
              </div>
              <p className="text-gray-600">
                "Since implementing the organic methods I learned from EcoGrowers, my soil health has improved dramatically and my yields have increased by 30%."
              </p>
              <div className="mt-4 flex text-emerald-500">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
            </div>
            {/* Testimonial 2 */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-emerald-200 rounded-full flex items-center justify-center text-emerald-700 font-bold">
                  MS
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold">Maria Smith</h4>
                  <p className="text-sm text-gray-500">Community Garden Leader, Colorado</p>
                </div>
              </div>
              <p className="text-gray-600">
                "EcoGrowers provided our community garden with sustainable solutions that have reduced water usage by 40% while improving our harvest quality."
              </p>
              <div className="mt-4 flex text-emerald-500">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
            </div>
            
            {/* Testimonial 3 */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-emerald-200 rounded-full flex items-center justify-center text-emerald-700 font-bold">
                  RJ
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold">Robert Johnson</h4>
                  <p className="text-sm text-gray-500">Commercial Farmer, Michigan</p>
                </div>
              </div>
              <p className="text-gray-600">
                "Switching to organic methods seemed risky at first, but with EcoGrowers' guidance, we've seen better profits and created a healthier working environment."
              </p>
              <div className="mt-4 flex text-emerald-500">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
            </div>
          </div>
          
          {/* CTA Button */}
          <div className="mt-12 text-center">
            <NavLink to="/about" className="inline-flex items-center bg-white text-emerald-600 px-6 py-3 rounded-lg border border-emerald-200 hover:bg-emerald-50 transition shadow-sm">
              Read More Success Stories
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ml-2 h-4 w-4"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </NavLink>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="bg-emerald-700 rounded-2xl overflow-hidden shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="inline-block bg-emerald-800 text-emerald-100 px-4 py-1 rounded-full text-sm font-medium mb-4">
                  Stay Connected
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Get Seasonal Growing Tips</h2>
                <p className="text-emerald-100 mb-6">
                  Join thousands of organic farmers receiving our weekly newsletter with seasonal advice, crop rotations, and sustainable farming tips.
                </p>
                <form className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="px-4 py-3 rounded-lg flex-grow focus:outline-none focus:ring-2 focus:ring-white"
                  />
                  <button
                    type="submit"
                    className="bg-emerald-100 hover:bg-white text-emerald-800 font-medium px-6 py-3 rounded-lg transition duration-300 flex items-center justify-center"
                  >
                    Subscribe
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="ml-2 h-4 w-4"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </button>
                </form>
                <p className="text-emerald-200 text-sm mt-4">
                  We respect your privacy. Unsubscribe anytime.
                </p>
              </div>
              <div className="hidden md:block relative">
                <img
                  src="https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=600&q=80"
                  alt="Organic Farm Newsletter"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-700 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Blog Posts Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div>
              <div className="inline-block bg-emerald-100 text-emerald-700 px-4 py-1 rounded-full text-sm font-medium mb-3">
                Latest Articles
              </div>
              <h2 className="text-3xl font-bold text-gray-900">From Our Blog</h2>
              <p className="mt-3 text-lg text-gray-600 max-w-xl">
                Tips, insights, and stories from our community of organic farmers
              </p>
            </div>
            <NavLink to="/about" className="mt-6 md:mt-0 bg-emerald-50 text-emerald-600 px-6 py-2 rounded-lg flex items-center hover:bg-emerald-100 transition">
              View All Posts
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ml-2 h-4 w-4"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </NavLink>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Blog Post 1 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition group">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=600&q=80" 
                  alt="Blog Post About Crop Rotation"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3 bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-medium">
                  Growing Tips
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  <NavLink to="/about" className="hover:text-emerald-600 transition">
                    5 Benefits of Crop Rotation for Soil Health
                  </NavLink>
                </h3>
                <p className="text-gray-600 mb-4">
                  Learn how rotating your crops can improve soil structure, reduce pest pressure, and increase yields naturally.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-emerald-200 rounded-full"></div>
                    <span className="ml-2 text-sm text-gray-600">Sarah Green</span>
                  </div>
                  <span className="text-xs text-gray-500">April 5, 2025</span>
                </div>
              </div>
            </div>
            
            {/* Blog Post 2 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition group">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1590682680695-43b964a3ae17?auto=format&fit=crop&w=600&q=80" 
                  alt="Blog Post About Natural Pest Control"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3 bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-medium">
                  Pest Management
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  <NavLink to="/about" className="hover:text-emerald-600 transition">
                    Natural Pest Control: Beyond Pesticides
                  </NavLink>
                </h3>
                <p className="text-gray-600 mb-4">
                  Discover effective strategies to manage pests without harmful chemicals, creating a balanced ecosystem in your garden.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-emerald-200 rounded-full"></div>
                    <span className="ml-2 text-sm text-gray-600">Miguel Rodriguez</span>
                  </div>
                  <span className="text-xs text-gray-500">April 1, 2025</span>
                </div>
              </div>
            </div>
            
            {/* Blog Post 3 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition group">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1611735341450-74d61e660ad2?auto=format&fit=crop&w=600&q=80" 
                  alt="Blog Post About Water Conservation"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3 bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-medium">
                  Water Conservation
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  <NavLink to="/about" className="hover:text-emerald-600 transition">
                    7 Water Conservation Techniques for Farms
                  </NavLink>
                </h3>
                <p className="text-gray-600 mb-4">
                  Implement these innovative water-saving methods to reduce usage while maintaining crop health and productivity.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-emerald-200 rounded-full"></div>
                    <span className="ml-2 text-sm text-gray-600">James Waters</span>
                  </div>
                  <span className="text-xs text-gray-500">March 27, 2025</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-emerald-600">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Start Your Organic Journey?</h2>
          <p className="text-emerald-100 text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of farmers who have transformed their practice with our sustainable methods and supportive community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <NavLink to="/login" className="bg-white text-emerald-600 hover:bg-emerald-50 px-8 py-3 rounded-lg font-medium transition duration-300 shadow-lg hover:shadow-xl flex items-center justify-center">
              <GiFarmTractor className="mr-2" />
              Get Started Today
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ml-2 h-4 w-4"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </NavLink>
            <NavLink to="/" className="border-2 border-white text-white hover:bg-emerald-700 px-8 py-3 rounded-lg font-medium transition duration-300 flex items-center justify-center">
              Contact Us
            </NavLink>
          </div>
        </div>
      </section>

      {/* Import and use the Footer component */}
      <Footer />
    </>
  );
}

export default Home;