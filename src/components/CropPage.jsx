import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaSeedling, FaFilter, FaSearch, FaCalendarAlt, FaTemperatureLow, FaWater } from "react-icons/fa";
import { MdOutlineEco, MdHealthAndSafety, MdArrowBack } from "react-icons/md";
import { GiPlantRoots, GiSun } from "react-icons/gi";
import { crops } from "../Data/Crops.js";

function CropPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterOpen, setFilterOpen] = useState(false);
  const [selectedCrop, setSelectedCrop] = useState(null);
  const [filters, setFilters] = useState({
    growingSeason: [],
    difficulty: [],
    waterRequirements: [],
  });

  // Sample crop data
  
  // Filter crops based on search query and filters
  const filteredCrops = crops.filter((crop) => {
    // Filter by search query
    if (searchQuery && !crop.name.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    
    // Filter by growing season
    if (filters.growingSeason.length > 0 && !filters.growingSeason.some(season => crop.growingSeason.includes(season))) {
      return false;
    }
    
    // Filter by difficulty
    if (filters.difficulty.length > 0 && !filters.difficulty.includes(crop.difficulty)) {
      return false;
    }
    
    // Filter by water requirements
    if (filters.waterRequirements.length > 0 && !filters.waterRequirements.includes(crop.waterRequirements)) {
      return false;
    }
    
    return true;
  });

  const handleFilterChange = (filterType, value) => {
    setFilters(prevFilters => {
      const currentValues = [...prevFilters[filterType]];
      
      if (currentValues.includes(value)) {
        return {
          ...prevFilters,
          [filterType]: currentValues.filter(item => item !== value)
        };
      } else {
        return {
          ...prevFilters,
          [filterType]: [...currentValues, value]
        };
      }
    });
  };

  const clearFilters = () => {
    setFilters({
      growingSeason: [],
      difficulty: [],
      waterRequirements: []
    });
    setSearchQuery("");
  };

  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-emerald-50 to-green-100 px-6 py-12">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center mb-4">
            <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium flex items-center">
              <FaSeedling className="mr-1" /> Crop Directory
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Find the Perfect <span className="text-emerald-600">Organic Crops</span> for Your Farm
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Explore our comprehensive database of organic crops, complete with growing guides, 
            seasonal recommendations, and sustainability tips.
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Bar */}
            <div className="relative w-full md:w-2/3">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search for crops..."
                className="pl-10 pr-4 py-3 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-300 focus:border-emerald-500 outline-none transition"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            {/* Filter Button */}
            <button 
              className="flex items-center gap-2 bg-emerald-50 text-emerald-700 px-4 py-3 rounded-lg hover:bg-emerald-100 transition w-full md:w-auto justify-center"
              onClick={() => setFilterOpen(!filterOpen)}
            >
              <FaFilter />
              Filters
              {Object.values(filters).some(arr => arr.length > 0) && (
                <span className="bg-emerald-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {Object.values(filters).reduce((acc, arr) => acc + arr.length, 0)}
                </span>
              )}
            </button>
          </div>
          
          {/* Filter Panel */}
          {filterOpen && (
            <div className="mt-4 bg-gray-50 rounded-lg p-4 border border-gray-200">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-medium text-gray-900">Filter Crops</h3>
                <button 
                  className="text-sm text-emerald-600 hover:text-emerald-800"
                  onClick={clearFilters}
                >
                  Clear all filters
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Growing Season Filter */}
                <div>
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Growing Season</h4>
                  <div className="space-y-2">
                    {["Spring", "Summer", "Fall", "Winter"].map((season) => (
                      <label key={season} className="flex items-center">
                        <input
                          type="checkbox"
                          className="rounded text-emerald-600 focus:ring-emerald-500 mr-2"
                          checked={filters.growingSeason.includes(season)}
                          onChange={() => handleFilterChange("growingSeason", season)}
                        />
                        {season}
                      </label>
                    ))}
                  </div>
                </div>
                
                {/* Difficulty Filter */}
                <div>
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Difficulty Level</h4>
                  <div className="space-y-2">
                    {["Easy", "Medium", "Hard"].map((level) => (
                      <label key={level} className="flex items-center">
                        <input
                          type="checkbox"
                          className="rounded text-emerald-600 focus:ring-emerald-500 mr-2"
                          checked={filters.difficulty.includes(level)}
                          onChange={() => handleFilterChange("difficulty", level)}
                        />
                        {level}
                      </label>
                    ))}
                  </div>
                </div>
                
                {/* Water Requirements Filter */}
                <div>
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Water Requirements</h4>
                  <div className="space-y-2">
                    {["Low", "Moderate", "High"].map((level) => (
                      <label key={level} className="flex items-center">
                        <input
                          type="checkbox"
                          className="rounded text-emerald-600 focus:ring-emerald-500 mr-2"
                          checked={filters.waterRequirements.includes(level)}
                          onChange={() => handleFilterChange("waterRequirements", level)}
                        />
                        {level}
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Crops Grid or Detail View */}
      <section className="py-12 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          {selectedCrop ? (
            // Crop Detail View
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <button 
                onClick={() => setSelectedCrop(null)}
                className="m-4 inline-flex items-center text-emerald-600 hover:text-emerald-800 transition"
              >
                <MdArrowBack className="mr-1" /> Back to all crops
              </button>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
                <div className="relative">
                  <img 
                    src={selectedCrop.image} 
                    alt={selectedCrop.name}
                    className="rounded-lg w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium">
                    {selectedCrop.type}
                  </div>
                </div>
                
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">{selectedCrop.name}</h2>
                  <p className="text-gray-700 mb-6">
                    {selectedCrop.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center">
                      <FaCalendarAlt className="text-emerald-600 mr-2" />
                      <div>
                        <p className="text-sm text-gray-500">Growing Season</p>
                        <p className="font-medium">{selectedCrop.growingSeason}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <FaWater className="text-emerald-600 mr-2" />
                      <div>
                        <p className="text-sm text-gray-500">Water Needs</p>
                        <p className="font-medium">{selectedCrop.waterRequirements}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <GiSun className="text-emerald-600 mr-2" />
                      <div>
                        <p className="text-sm text-gray-500">Sun Requirements</p>
                        <p className="font-medium">{selectedCrop.sunRequirements}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <GiPlantRoots className="text-emerald-600 mr-2" />
                      <div>
                        <p className="text-sm text-gray-500">Soil Type</p>
                        <p className="font-medium">{selectedCrop.soilType}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <FaTemperatureLow className="text-emerald-600 mr-2" />
                      <div>
                        <p className="text-sm text-gray-500">Difficulty</p>
                        <p className="font-medium">{selectedCrop.difficulty}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <FaCalendarAlt className="text-emerald-600 mr-2" />
                      <div>
                        <p className="text-sm text-gray-500">Days to Harvest</p>
                        <p className="font-medium">{selectedCrop.daysToHarvest}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Benefits</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      {selectedCrop.benefits.map((benefit, index) => (
                        <li key={index} className="text-gray-700">{benefit}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Growing Guidelines */}
              <div className="border-t border-gray-200 p-6">
                <h3 className="text-xl font-semibold mb-4">Organic Growing Guidelines</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-emerald-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2 flex items-center">
                      <FaSeedling className="text-emerald-600 mr-2" /> Planting
                    </h4>
                    <p className="text-sm text-gray-700">
                      Plant {selectedCrop.name.toLowerCase()} in {selectedCrop.soilType} soil during {selectedCrop.growingSeason.toLowerCase()} season. Ensure proper spacing for adequate airflow.
                    </p>
                  </div>
                  
                  <div className="bg-emerald-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2 flex items-center">
                      <MdOutlineEco className="text-emerald-600 mr-2" /> Maintenance
                    </h4>
                    <p className="text-sm text-gray-700">
                      Provide {selectedCrop.waterRequirements.toLowerCase()} water and use organic mulch to retain moisture. Monitor for pests regularly.
                    </p>
                  </div>
                  
                  <div className="bg-emerald-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2 flex items-center">
                      <MdHealthAndSafety className="text-emerald-600 mr-2" /> Harvesting
                    </h4>
                    <p className="text-sm text-gray-700">
                      Harvest after {selectedCrop.daysToHarvest} days from planting. Store in cool, dry conditions to maximize shelf life.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-emerald-50 p-6 text-center">
                <h3 className="text-lg font-semibold mb-2">Ready to grow {selectedCrop.name}?</h3>
                <NavLink to="/grow" className="inline-flex items-center bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition">
                  Get Growing Resources
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
              </div>
            </div>
          ) : (
            // Crops Grid View
            <>
              <div className="mb-6 flex justify-between items-center">
                <h2 className="text-2xl font-bold text-gray-900">
                  {filteredCrops.length} {filteredCrops.length === 1 ? 'Crop' : 'Crops'} Available
                </h2>
                {Object.values(filters).some(arr => arr.length > 0) && (
                  <button 
                    className="text-sm text-emerald-600 hover:text-emerald-800 flex items-center"
                    onClick={clearFilters}
                  >
                    Clear all filters
                  </button>
                )}
              </div>
              
              {filteredCrops.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {filteredCrops.map((crop) => (
                    <div 
                      key={crop.id} 
                      className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition cursor-pointer"
                      onClick={() => setSelectedCrop(crop)}
                    >
                      <div className="relative">
                        <img 
                          src={crop.image} 
                          alt={crop.name}
                          className="w-full h-48 object-cover"
                        />
                        <div className="absolute top-3 left-3 bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium">
                          {crop.type}
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{crop.name}</h3>
                        <p className="text-gray-600 line-clamp-2 mb-4">{crop.description}</p>
                        <div className="flex flex-wrap gap-2 mb-3">
                          <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs flex items-center">
                            <FaCalendarAlt className="mr-1 text-emerald-600" />
                            {crop.growingSeason}
                          </span>
                          <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs flex items-center">
                            <FaWater className="mr-1 text-emerald-600" />
                            {crop.waterRequirements}
                          </span>
                          <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs flex items-center">
                            <GiSun className="mr-1 text-emerald-600" />
                            {crop.sunRequirements}
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className={`text-sm font-medium ${
                            crop.difficulty === 'Easy' ? 'text-green-600' :
                            crop.difficulty === 'Medium' ? 'text-yellow-600' : 'text-red-600'
                          }`}>
                            {crop.difficulty} to grow
                          </span>
                          <span className="text-emerald-600 text-sm">View details →</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="mb-4 text-gray-400">
                    <FaSearch className="text-5xl mx-auto" />
                  </div>
                  <h3 className="text-xl font-medium text-gray-700 mb-2">No crops match your search</h3>
                  <p className="text-gray-500 mb-4">Try adjusting your filters or search terms</p>
                  <button
                    onClick={clearFilters}
                    className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition"
                  >
                    Clear all filters
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* Related Resources Section */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Growing Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-emerald-50 p-6 rounded-lg border border-emerald-100 hover:shadow-md transition">
              <MdOutlineEco className="text-3xl text-emerald-600 mb-3" />
              <h3 className="text-lg font-semibold mb-2">Seasonal Planting Guide</h3>
              <p className="text-gray-700 mb-4">Learn the optimal times to plant various crops based on your climate zone.</p>
              <NavLink to="/seasonal-guide" className="text-emerald-600 hover:text-emerald-800 font-medium">
                Read Guide →
              </NavLink>
            </div>
            
            <div className="bg-emerald-50 p-6 rounded-lg border border-emerald-100 hover:shadow-md transition">
              <MdHealthAndSafety className="text-3xl text-emerald-600 mb-3" />
              <h3 className="text-lg font-semibold mb-2">Organic Pest Control</h3>
              <p className="text-gray-700 mb-4">Natural methods to keep your crops healthy without harmful chemicals.</p>
              <NavLink to="/pest-control" className="text-emerald-600 hover:text-emerald-800 font-medium">
                Read Guide →
              </NavLink>
            </div>
            
            <div className="bg-emerald-50 p-6 rounded-lg border border-emerald-100 hover:shadow-md transition">
              <FaSeedling className="text-3xl text-emerald-600 mb-3" />
              <h3 className="text-lg font-semibold mb-2">Soil Health Basics</h3>
              <p className="text-gray-700 mb-4">Everything you need to know about building healthy soil for your crops.</p>
              <NavLink to="/soil-health" className="text-emerald-600 hover:text-emerald-800 font-medium">
                Read Guide →
              </NavLink>
            </div>
          </div>
        </div>
      </section>

      {/* Community CTA */}
      <section className="bg-gradient-to-br from-emerald-500 to-green-600 py-12 px-6 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Join Our Farming Community</h2>
          <p className="text-lg mb-6">
            Connect with other organic farmers, share your experiences, and learn from experts.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <NavLink to="/community" className="bg-white text-emerald-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition font-medium">
              Join Community
            </NavLink>
            <NavLink to="/newsletter" className="bg-transparent border-2 border-white px-6 py-3 rounded-lg hover:bg-emerald-600 transition">
              Subscribe to Newsletter
            </NavLink>
          </div>
        </div>
      </section>
    </>
  );
}

export default CropPage;