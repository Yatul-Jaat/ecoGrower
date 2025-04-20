import React, { useState } from "react";
import Header from "./Header";
import { Outlet, useLocation } from "react-router-dom";
import { GiPlantRoots } from "react-icons/gi";
import { FaComments, FaTimes, FaExpand, FaCompress } from "react-icons/fa";
import Input from "./Input";

function Layout() {
  const location = useLocation();
  const [chatOpen, setChatOpen] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);

  // Don't show CropAdvisor component on login, signup, or account pages
  const showCropAdvisor = 
    !location.pathname.includes("/login") && 
    !location.pathname.includes("/signup") && 
    !location.pathname.includes("/account");

  const toggleChat = () => {
    setChatOpen(!chatOpen);
  };

  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };

  return (
    <div className="min-h-screen bg-green-50 flex flex-col">
      <Header />
      
      {/* Decorative plant divider */}
      <div className="bg-emerald-600 py-1 flex justify-center">
        <div className="max-w-7xl w-full px-4 flex items-center justify-between">
          <div className="h-1 flex-grow bg-gradient-to-r from-green-200 to-transparent"></div>
          <GiPlantRoots className="text-green-200 mx-4" />
          <div className="h-1 flex-grow bg-gradient-to-l from-green-200 to-transparent"></div>
        </div>
      </div>
      
      {/* Seasonal tips banner - could be conditionally rendered based on season */}
      <div className="bg-amber-100 text-emerald-800 text-center text-sm py-2 px-4">
        <p className="max-w-7xl mx-auto">
          {getSeason()} growing tips: {getSeasonalTip()}
        </p>
      </div>
      
      <main className="flex-grow container mx-auto px-4 py-6">
        <Outlet />
      </main>

      {/* Floating chat button - only shown when we want the crop advisor */}
      {showCropAdvisor && !chatOpen && (
        <button 
          onClick={toggleChat}
          className="fixed bottom-6 right-6 bg-emerald-600 text-white p-4 rounded-full shadow-lg hover:bg-emerald-700 transition-all duration-300 z-50 flex items-center justify-center"
          aria-label="Open Farming Assistant"
        >
          <FaComments className="text-xl" />
          <span className="absolute -top-1 -right-1 bg-amber-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
            1
          </span>
        </button>
      )}

      {/* Chat window - now can be corner or full screen */}
      {chatOpen && (
        <div className={`fixed z-50 transition-all duration-300 ${
          isFullScreen 
            ? "inset-0 bg-black bg-opacity-50" 
            : "bottom-0 right-0 mr-6 mb-6"
        }`}>
          <div className={`bg-white rounded-lg shadow-xl flex flex-col overflow-hidden ${
            isFullScreen
              ? "w-full h-full md:m-0"
              : "w-80 h-96"
          }`}>
            <div className="bg-emerald-600 text-white px-4 py-3 flex justify-between items-center">
              <div className="flex items-center">
                <FaComments className="mr-2" />
                <h3 className="font-semibold">Organic Farming Assistant</h3>
              </div>
              <div className="flex">
                <button 
                  onClick={toggleFullScreen}
                  className="text-white hover:text-emerald-200 p-2 mr-1"
                  aria-label={isFullScreen ? "Minimize chat" : "Expand chat"}
                >
                  {isFullScreen ? <FaCompress /> : <FaExpand />}
                </button>
                <button 
                  onClick={toggleChat}
                  className="text-white hover:text-emerald-200 p-2"
                  aria-label="Close chat"
                >
                  <FaTimes />
                </button>
              </div>
            </div>
            <div className="flex-grow overflow-auto">
              <Input />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Helper function to determine current season
function getSeason() {
  const month = new Date().getMonth();
  if (month >= 2 && month <= 4) return "Spring";
  if (month >= 5 && month <= 7) return "Summer";
  if (month >= 8 && month <= 10) return "Fall";
  return "Winter";
}

// Helper function to get seasonal tips
function getSeasonalTip() {
  const season = getSeason();
  const tips = {
    Spring: "Consider planting heat-loving crops now for summer harvest.",
    Summer: "Maintain consistent watering schedules during hot days.",
    Fall: "Prepare your soil with compost for winter crops.",
    Winter: "Plan your spring garden and order seeds early."
  };
  
  return tips[season];
}

export default Layout;