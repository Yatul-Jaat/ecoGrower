import React, { useState } from "react";
import {
  FaSeedling,
  FaLeaf,
  FaWater,
  FaSun,
  FaInfoCircle,
  FaCalendarAlt
} from "react-icons/fa";
import { GiStoneBlock , GiPlantRoots, GiSpade, GiGarlic } from "react-icons/gi";
import { BsRecycle } from "react-icons/bs";
import {
  MdOutlineEco,
  MdHealthAndSafety
} from "react-icons/md";

import { soilTypes ,soilAmendments,cropSoilRequirements,soilTestingGuide} from "../Data/Soildata.js";

export default function SoilGuide() {
  const [selectedSoilType, setSelectedSoilType] = useState("loam");
  const [expandedSection, setExpandedSection] = useState("characteristics");

  

  const soil = soilTypes.find((s) => s.id === selectedSoilType);

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <header className="bg-gradient-to-br from-emerald-500 to-green-600 text-white py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center mb-4">
            <span className="bg-white text-emerald-600 px-3 py-1 rounded-full text-sm font-medium flex items-center">
              <GiStoneBlock  className="mr-1" /> Soil Guide
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Understanding Garden Soils
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            A comprehensive guide to soil types, amendments, and crop-specific requirements
          </p>
        </div>
      </header>

      {/* Soil Type Selector */}
      <section className="py-8 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Select a soil type to learn more:
          </h2>
          <div className="flex flex-wrap gap-3 mb-8">
            <button
              onClick={() => setSelectedSoilType("loam")}
              className={`px-4 py-2 rounded-lg flex items-center ${
                selectedSoilType === "loam"
                  ? "bg-emerald-600 text-white"
                  : "bg-gray-100 text-gray-800 hover:bg-gray-200"
              }`}
            >
              <GiStoneBlock  className="mr-2" /> Loamy Soil
            </button>
            <button
              onClick={() => setSelectedSoilType("clay")}
              className={`px-4 py-2 rounded-lg flex items-center ${
                selectedSoilType === "clay"
                  ? "bg-emerald-600 text-white"
                  : "bg-gray-100 text-gray-800 hover:bg-gray-200"
              }`}
            >
              <GiStoneBlock  className="mr-2" /> Clay Soil
            </button>
            <button
              onClick={() => setSelectedSoilType("sandy")}
              className={`px-4 py-2 rounded-lg flex items-center ${
                selectedSoilType === "sandy"
                  ? "bg-emerald-600 text-white"
                  : "bg-gray-100 text-gray-800 hover:bg-gray-200"
              }`}
            >
              <GiStoneBlock  className="mr-2" /> Sandy Soil
            </button>
            <button
              onClick={() => setSelectedSoilType("silty")}
              className={`px-4 py-2 rounded-lg flex items-center ${
                selectedSoilType === "silty"
                  ? "bg-emerald-600 text-white"
                  : "bg-gray-100 text-gray-800 hover:bg-gray-200"
              }`}
            >
              <GiStoneBlock  className="mr-2" /> Silty Soil
            </button>
          </div>
        </div>
      </section>

      {/* Soil Overview */}
      <section className="py-6 px-6">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {soil.name}
            </h2>
            <p className="text-gray-700 mb-4">{soil.description}</p>

            <div className="grid grid-cols-1 gap-4 mb-4">
              <div className="bg-emerald-50 p-4 rounded-lg">
                <h3 className="text-lg font-medium mb-2">Key Benefits</h3>
                <ul className="list-disc pl-5 space-y-1">
                  {soil.benefits.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-amber-50 p-4 rounded-lg">
                <h3 className="text-lg font-medium mb-2">Best Practices</h3>
                <ul className="list-disc pl-5 space-y-1">
                  {soil.bestPractices.map((practice, index) => (
                    <li key={index}>{practice}</li>
                  ))}
                </ul>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="text-lg font-medium mb-2">Ideal For Growing</h3>
                <ul className="list-disc pl-5 space-y-1">
                  {soil.idealFor.map((crop, index) => (
                    <li key={index}>{crop}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Soil Information Sections */}
      <section className="py-8 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Complete Soil Guide
          </h2>

          {/* Characteristics */}
          <div className="bg-white rounded-lg shadow-sm mb-4 overflow-hidden">
            <button
              className="w-full flex items-center justify-between p-4"
              onClick={() => toggleSection("characteristics")}
            >
              <span className="flex items-center font-medium text-lg">
                <GiStoneBlock  className="text-emerald-600 mr-3" />
                Understanding Soil Characteristics
              </span>
              <span>{expandedSection === "characteristics" ? "−" : "+"}</span>
            </button>

            {expandedSection === "characteristics" && (
              <div className="p-4 pt-0 border-t border-gray-100">
                <p className="text-gray-700 mb-4">
                  Soil is a complex mixture of minerals, organic matter, water, air, and living organisms. 
                  Understanding your soil's characteristics is essential for successful gardening.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div className="bg-emerald-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Texture</h4>
                    <p className="text-gray-700">
                      Refers to the proportion of sand, silt, and clay particles in soil. 
                      Texture affects drainage, nutrient retention, and workability.
                    </p>
                  </div>

                  <div className="bg-emerald-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Structure</h4>
                    <p className="text-gray-700">
                      How soil particles clump together, forming aggregates. 
                      Good structure creates pore spaces for water, air, and root growth.
                    </p>
                  </div>

                  <div className="bg-emerald-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">pH Level</h4>
                    <p className="text-gray-700">
                      Measures soil acidity/alkalinity on a scale of 1-14. 
                      Most vegetables prefer a slightly acidic to neutral pH (6.0-7.0).
                    </p>
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">How to Identify Your Soil Type:</h4>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li><strong>Jar Test:</strong> Fill a jar 1/3 with soil, add water, shake, and let settle. Sand sinks first, then silt, then clay.</li>
                    <li><strong>Feel Test:</strong> Rub moist soil between fingers. Sandy soil feels gritty, silty soil feels smooth, clay soil feels sticky.</li>
                    <li><strong>Ball Test:</strong> Squeeze moist soil in your hand. Sandy soil falls apart, loamy soil forms a ball that crumbles when poked, clay soil forms a sticky ball.</li>
                  </ol>
                </div>
              </div>
            )}
          </div>

          {/* Amendments */}
          <div className="bg-white rounded-lg shadow-sm mb-4 overflow-hidden">
            <button
              className="w-full flex items-center justify-between p-4"
              onClick={() => toggleSection("amendments")}
            >
              <span className="flex items-center font-medium text-lg">
                <BsRecycle  className="text-emerald-600 mr-3" />
                Soil Amendments
              </span>
              <span>{expandedSection === "amendments" ? "−" : "+"}</span>
            </button>

            {expandedSection === "amendments" && (
              <div className="p-4 pt-0 border-t border-gray-100">
                <p className="text-gray-700 mb-4">
                  Soil amendments improve soil structure, fertility, and biological activity. 
                  Adding the right amendments can transform problematic soil into productive growing medium.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {soilAmendments.map((amendment, index) => (
                    <div key={index} className="bg-emerald-50 p-4 rounded-lg">
                      <h4 className="font-medium mb-2">{amendment.name}</h4>
                      <p className="text-sm mb-2"><strong>Benefits:</strong> {amendment.benefits}</p>
                      <p className="text-sm mb-2"><strong>How to Use:</strong> {amendment.howToUse}</p>
                      <p className="text-sm"><strong>Best For:</strong> {amendment.bestFor}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Testing */}
          <div className="bg-white rounded-lg shadow-sm mb-4 overflow-hidden">
            <button
              className="w-full flex items-center justify-between p-4"
              onClick={() => toggleSection("testing")}
            >
              <span className="flex items-center font-medium text-lg">
                <FaInfoCircle className="text-emerald-600 mr-3" />
                Soil Testing Guide
              </span>
              <span>{expandedSection === "testing" ? "−" : "+"}</span>
            </button>

            {expandedSection === "testing" && (
              <div className="p-4 pt-0 border-t border-gray-100">
                <p className="text-gray-700 mb-4">
                  Soil testing provides crucial information about your soil's composition, nutrient levels, 
                  and pH, helping you make informed decisions about amendments and fertilizers.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div className="bg-emerald-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Why Test Your Soil</h4>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      {soilTestingGuide.whyTest.map((reason, index) => (
                        <li key={index}>{reason}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">How to Test Your Soil</h4>
                    <ol className="list-decimal pl-5 space-y-1 text-sm">
                      {soilTestingGuide.howToTest.map((step, index) => (
                        <li key={index}>{step}</li>
                      ))}
                    </ol>
                  </div>

                  <div className="bg-amber-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">What to Test For</h4>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      {soilTestingGuide.whatToTest.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Interpreting Results</h4>
                  <p className="text-gray-700 mb-2">
                    Soil test results typically include recommendations for amendments based on your soil's needs. 
                    Follow these guidelines for targeted improvement rather than applying amendments blindly.
                  </p>
                  <p className="text-gray-700">
                    Most extension services provide detailed explanations with your results. Keep records of your 
                    soil tests to track improvements over time.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Crop Requirements */}
          <div className="bg-white rounded-lg shadow-sm mb-4 overflow-hidden">
            <button
              className="w-full flex items-center justify-between p-4"
              onClick={() => toggleSection("crops")}
            >
              <span className="flex items-center font-medium text-lg">
                <FaSeedling className="text-emerald-600 mr-3" />
                Crop-Specific Soil Requirements
              </span>
              <span>{expandedSection === "crops" ? "−" : "+"}</span>
            </button>

            {expandedSection === "crops" && (
              <div className="p-4 pt-0 border-t border-gray-100">
                <p className="text-gray-700 mb-4">
                  Different crops have specific soil preferences. Understanding these requirements 
                  helps you prepare ideal growing conditions for each plant type.
                </p>

                <div className="space-y-4">
                  {cropSoilRequirements.map((crop) => (
                    <div key={crop.id} className="border border-gray-200 rounded-lg overflow-hidden">
                      <div className="bg-emerald-50 p-3">
                        <h4 className="font-medium">{crop.crop}</h4>
                      </div>
                      <div className="p-4">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-3">
                          <div>
                            <p className="text-xs text-gray-500">Preferred Soil</p>
                            <p className="text-sm font-medium">{crop.soilType}</p>
                          </div>
                          <div>
                            <p className="text-xs text-gray-500">pH Range</p>
                            <p className="text-sm font-medium">{crop.ph}</p>
                          </div>
                          <div>
                            <p className="text-xs text-gray-500">Organic Matter</p>
                            <p className="text-sm font-medium">{crop.organicMatter}</p>
                          </div>
                        </div>
                        
                        <h5 className="text-sm font-medium mb-1">Specific Needs:</h5>
                        <ul className="list-disc pl-5 space-y-1 text-sm mb-3">
                          {crop.specificNeeds.map((need, index) => (
                            <li key={index}>{need}</li>
                          ))}
                        </ul>
                        
                        <h5 className="text-sm font-medium mb-1">Recommended Amendments:</h5>
                        <ul className="list-disc pl-5 space-y-1 text-sm mb-3">
                          {crop.amendments.map((amendment, index) => (
                            <li key={index}>{amendment}</li>
                          ))}
                        </ul>
                        
                        <div className="bg-blue-50 p-2 rounded">
                          <p className="text-sm"><strong>Pro Tip:</strong> {crop.tips}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Seasonal Work */}
          <div className="bg-white rounded-lg shadow-sm mb-4 overflow-hidden">
            <button
              className="w-full flex items-center justify-between p-4"
              onClick={() => toggleSection("seasonal")}
            >
              <span className="flex items-center font-medium text-lg">
                <FaCalendarAlt className="text-emerald-600 mr-3" />
                Seasonal Soil Care
              </span>
              <span>{expandedSection === "seasonal" ? "−" : "+"}</span>
            </button>

            {expandedSection === "seasonal" && (
              <div className="p-4 pt-0 border-t border-gray-100">
                <p className="text-gray-700 mb-4">
                  Soil care changes with the seasons. Follow this calendar for year-round soil health.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-medium text-blue-800 mb-2">Spring</h3>
                    <ul className="text-sm space-y-2">
                      <li className="flex items-start">
                        <span className="bg-blue-100 text-blue-800 rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">
                          1
                        </span>
                        <span>Conduct soil test after winter</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-blue-100 text-blue-800 rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">
                          2
                        </span>
                        <span>Apply amendments based on test results</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-blue-100 text-blue-800 rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">
                          3
                        </span>
                        <span>Add compost to beds before planting</span>
                      </li>
                      <li className="flex items-start">
                      <span className="bg-blue-100 text-blue-800 rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">
                          3
                        </span>
                        <span>Add compost to beds before planting</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-blue-100 text-blue-800 rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">
                          4
                        </span>
                        <span>Implement mulching after seedlings emerge</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h3 className="font-medium text-green-800 mb-2">Summer</h3>
                    <ul className="text-sm space-y-2">
                      <li className="flex items-start">
                        <span className="bg-green-100 text-green-800 rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">
                          1
                        </span>
                        <span>Maintain mulch layer to retain moisture</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-green-100 text-green-800 rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">
                          2
                        </span>
                        <span>Monitor soil moisture during dry periods</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-green-100 text-green-800 rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">
                          3
                        </span>
                        <span>Side-dress heavy feeders with compost</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-green-100 text-green-800 rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">
                          4
                        </span>
                        <span>Consider foliar feeding during peak growth</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-amber-50 p-4 rounded-lg">
                    <h3 className="font-medium text-amber-800 mb-2">Fall</h3>
                    <ul className="text-sm space-y-2">
                      <li className="flex items-start">
                        <span className="bg-amber-100 text-amber-800 rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">
                          1
                        </span>
                        <span>Apply amendments based on harvest results</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-amber-100 text-amber-800 rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">
                          2
                        </span>
                        <span>Plant cover crops in empty beds</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-amber-100 text-amber-800 rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">
                          3
                        </span>
                        <span>Collect fallen leaves for leaf mold</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-amber-100 text-amber-800 rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">
                          4
                        </span>
                        <span>Add a layer of compost to empty beds</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-indigo-50 p-4 rounded-lg">
                    <h3 className="font-medium text-indigo-800 mb-2">Winter</h3>
                    <ul className="text-sm space-y-2">
                      <li className="flex items-start">
                        <span className="bg-indigo-100 text-indigo-800 rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">
                          1
                        </span>
                        <span>Plan next season's beds and rotations</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-indigo-100 text-indigo-800 rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">
                          2
                        </span>
                        <span>Test soil pH and nutrients</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-indigo-100 text-indigo-800 rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">
                          3
                        </span>
                        <span>Keep soil covered to prevent erosion</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-indigo-100 text-indigo-800 rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">
                          4
                        </span>
                        <span>Order amendments for spring preparation</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Improving Soil */}
          <div className="bg-white rounded-lg shadow-sm mb-4 overflow-hidden">
            <button
              className="w-full flex items-center justify-between p-4"
              onClick={() => toggleSection("improving")}
            >
              <span className="flex items-center font-medium text-lg">
                <GiSpade className="text-emerald-600 mr-3" />
                Improving Problem Soils
              </span>
              <span>{expandedSection === "improving" ? "−" : "+"}</span>
            </button>

            {expandedSection === "improving" && (
              <div className="p-4 pt-0 border-t border-gray-100">
                <p className="text-gray-700 mb-4">
                  Every soil type has its challenges, but with the right amendments and techniques,
                  even problem soils can become productive growing environments.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-emerald-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Improving Clay Soil</h4>
                    <ol className="list-decimal pl-5 space-y-2 text-sm">
                      <li><strong>Add organic matter:</strong> Work in 4-6 inches of compost to improve drainage and structure.</li>
                      <li><strong>Apply gypsum:</strong> Helps break up clay particles without affecting pH.</li>
                      <li><strong>Build raised beds:</strong> Creates better drainage and prevents compaction.</li>
                      <li><strong>Use cover crops:</strong> Deep-rooted crops like daikon radish can break up clay.</li>
                      <li><strong>Avoid working when wet:</strong> Prevents compaction and clumping.</li>
                    </ol>
                  </div>

                  <div className="bg-emerald-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Improving Sandy Soil</h4>
                    <ol className="list-decimal pl-5 space-y-2 text-sm">
                      <li><strong>Add organic matter:</strong> Work in 3-4 inches of compost to improve water retention.</li>
                      <li><strong>Mulch heavily:</strong> Helps retain moisture and adds organic matter as it breaks down.</li>
                      <li><strong>Use cover crops:</strong> Plants like clover add organic matter and prevent erosion.</li>
                      <li><strong>Apply clay minerals:</strong> Bentonite clay can improve water retention.</li>
                      <li><strong>Water frequently but lightly:</strong> Prevents leaching of nutrients.</li>
                    </ol>
                  </div>

                  <div className="bg-emerald-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Addressing Compacted Soil</h4>
                    <ol className="list-decimal pl-5 space-y-2 text-sm">
                      <li><strong>Double-digging:</strong> One-time deep loosening of soil to break compaction.</li>
                      <li><strong>Use broadfork:</strong> Gently loosens soil without disturbing its layers.</li>
                      <li><strong>Plant deep-rooted crops:</strong> Natural soil-breakers create channels for air and water.</li>
                      <li><strong>Implement no-till methods:</strong> Prevents future compaction.</li>
                      <li><strong>Create permanent paths:</strong> Limits compaction to non-growing areas.</li>
                    </ol>
                  </div>

                  <div className="bg-emerald-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Balancing pH</h4>
                    <ol className="list-decimal pl-5 space-y-2 text-sm">
                      <li><strong>Acidic soil (low pH):</strong> Add garden lime to raise pH gradually.</li>
                      <li><strong>Alkaline soil (high pH):</strong> Add sulfur, pine needles, or peat moss to lower pH.</li>
                      <li><strong>Test regularly:</strong> pH changes gradually, test annually to monitor.</li>
                      <li><strong>Apply amendments in fall:</strong> Allows time for changes to take effect.</li>
                      <li><strong>Target crop needs:</strong> Some crops prefer specific pH ranges.</li>
                    </ol>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section className="py-8 px-6 bg-emerald-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Growing Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition">
              <FaSeedling className="text-3xl text-emerald-600 mb-3" />
              <h3 className="text-lg font-semibold mb-2">Crop Selection Guide</h3>
              <p className="text-gray-700 mb-4">Find the perfect crops for your soil type and climate.</p>
              <a href="/crops" className="text-emerald-600 font-medium hover:underline">
                Explore Crops →
              </a>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition">
              <FaWater className="text-3xl text-emerald-600 mb-3" />
              <h3 className="text-lg font-semibold mb-2">Garden Irrigation</h3>
              <p className="text-gray-700 mb-4">Watering techniques to maximize soil health and plant growth.</p>
              <a href="/irrigation" className="text-emerald-600 font-medium hover:underline">
                Learn More →
              </a>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition">
              <BsRecycle  className="text-3xl text-emerald-600 mb-3" />
              <h3 className="text-lg font-semibold mb-2">Composting Basics</h3>
              <p className="text-gray-700 mb-4">Create nutrient-rich compost to improve any soil type.</p>
              <a href="/composting" className="text-emerald-600 font-medium hover:underline">
                Start Composting →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Community CTA */}
      <section className="bg-gradient-to-br from-emerald-500 to-green-600 py-12 px-6 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Join Our Gardening Community</h2>
          <p className="text-lg mb-6">
            Connect with other gardeners, share your soil experiences, and learn from experts.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="/community" 
              className="bg-white text-emerald-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition font-medium"
            >
              Join Community
            </a>
            <a 
              href="/newsletter" 
              className="bg-transparent border-2 border-white px-6 py-3 rounded-lg hover:bg-emerald-600 transition"
            >
              Subscribe to Newsletter
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-8">
            <span className="font-bold text-xl text-white flex items-center">
              <GiStoneBlock  className="mr-2" /> SoilSavvy
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="text-white font-medium mb-4">About Us</h4>
              <ul className="space-y-2">
                <li><a href="/about" className="hover:text-white transition">Our Mission</a></li>
                <li><a href="/team" className="hover:text-white transition">Meet the Team</a></li>
                <li><a href="/contact" className="hover:text-white transition">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-medium mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><a href="/blog" className="hover:text-white transition">Blog</a></li>
                <li><a href="/guides" className="hover:text-white transition">Growing Guides</a></li>
                <li><a href="/calculator" className="hover:text-white transition">Soil Calculator</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-medium mb-4">Connect</h4>
              <ul className="space-y-2">
                <li><a href="/forum" className="hover:text-white transition">Community Forum</a></li>
                <li><a href="/events" className="hover:text-white transition">Local Events</a></li>
                <li><a href="/subscribe" className="hover:text-white transition">Newsletter</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center">
            <p>&copy; {new Date().getFullYear()} SoilSavvy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}