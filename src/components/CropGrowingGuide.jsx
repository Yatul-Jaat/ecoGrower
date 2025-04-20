import React, { useState } from "react";
import {
  FaSeedling,
  FaLeaf,
  FaWater,
  FaSun,
  FaBug,
  FaCalendarAlt,
  FaCut,
} from "react-icons/fa";
import {
  GiPlantRoots,
  GiTomato,
  GiSpade,
  GiCarrot,
  GiGarlic,
} from "react-icons/gi";
import {
  MdOutlineEco,
  MdHealthAndSafety,
  MdEmojiFoodBeverage,
} from "react-icons/md";
import { TbPlant } from "react-icons/tb";
import { LuSalad } from "react-icons/lu";
import { RiPlantFill } from "react-icons/ri";
import { CiPizza } from "react-icons/ci";

import { cropsData } from "../Data/cropsData.js";

export default function CropGrowingGuide() {
  const [selectedCrop, setSelectedCrop] = useState("tomatoes");
  const [expandedSection, setExpandedSection] = useState("planting");

  const crop = cropsData[selectedCrop];

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
              <FaSeedling className="mr-1" /> Growing Guide
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            How to Grow Healthy Organic Crops
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            A step-by-step guide to growing nutritious vegetables sustainably in
            your garden
          </p>
        </div>
      </header>

      {/* Crop Selector */}
      <section className="py-8 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Select a crop to learn how to grow:
          </h2>
          <div className="flex flex-wrap gap-3 mb-8">
            <button
              onClick={() => setSelectedCrop("tomatoes")}
              className={`px-4 py-2 rounded-lg flex items-center ${
                selectedCrop === "tomatoes"
                  ? "bg-emerald-600 text-white"
                  : "bg-gray-100 text-gray-800 hover:bg-gray-200"
              }`}
            >
              <GiTomato className="mr-2" /> Tomatoes
            </button>
            <button
              onClick={() => setSelectedCrop("spinach")}
              className={`px-4 py-2 rounded-lg flex items-center ${
                selectedCrop === "spinach"
                  ? "bg-emerald-600 text-white"
                  : "bg-gray-100 text-gray-800 hover:bg-gray-200"
              }`}
            >
              <LuSalad className="mr-2" /> Spinach
            </button>
            <button
              onClick={() => setSelectedCrop("carrots")}
              className={`px-4 py-2 rounded-lg flex items-center ${
                selectedCrop === "carrots"
                  ? "bg-emerald-600 text-white"
                  : "bg-gray-100 text-gray-800 hover:bg-gray-200"
              }`}
            >
              <GiCarrot className="mr-2" /> Carrots
            </button>
            <button
              onClick={() => setSelectedCrop("basil")}
              className={`px-4 py-2 rounded-lg flex items-center ${
                selectedCrop === "basil"
                  ? "bg-emerald-600 text-white"
                  : "bg-gray-100 text-gray-800 hover:bg-gray-200"
              }`}
            >
              <FaLeaf className="mr-2" /> Basil
            </button>
            <button
              onClick={() => setSelectedCrop("kale")}
              className={`px-4 py-2 rounded-lg flex items-center ${
                selectedCrop === "kale"
                  ? "bg-emerald-600 text-white"
                  : "bg-gray-100 text-gray-800 hover:bg-gray-200"
              }`}
            >
              <FaLeaf className="mr-2" /> Kale
            </button>
            <button
              onClick={() => setSelectedCrop("garlic")}
              className={`px-4 py-2 rounded-lg flex items-center ${
                selectedCrop === "garlic"
                  ? "bg-emerald-600 text-white"
                  : "bg-gray-100 text-gray-800 hover:bg-gray-200"
              }`}
            >
              <GiGarlic className="mr-2" /> Garlic
            </button>
            <button
              onClick={() => setSelectedCrop("zucchini")}
              className={`px-4 py-2 rounded-lg flex items-center ${
                selectedCrop === "zucchini"
                  ? "bg-emerald-600 text-white"
                  : "bg-gray-100 text-gray-800 hover:bg-gray-200"
              }`}
            >
              <TbPlant className="mr-2" /> Zucchini
            </button>
            <button
              onClick={() => setSelectedCrop("bell_peppers")}
              className={`px-4 py-2 rounded-lg flex items-center ${
                selectedCrop === "bell_peppers"
                  ? "bg-emerald-600 text-white"
                  : "bg-gray-100 text-gray-800 hover:bg-gray-200"
              }`}
            >
              <CiPizza className="mr-2" /> Bell Peppers
            </button>
            <button
              onClick={() => setSelectedCrop("rosemary")}
              className={`px-4 py-2 rounded-lg flex items-center ${
                selectedCrop === "rosemary"
                  ? "bg-emerald-600 text-white"
                  : "bg-gray-100 text-gray-800 hover:bg-gray-200"
              }`}
            >
              <RiPlantFill className="mr-2" /> Rosemary
            </button>
            <button
              onClick={() => setSelectedCrop("radishes")}
              className={`px-4 py-2 rounded-lg flex items-center ${
                selectedCrop === "radishes"
                  ? "bg-emerald-600 text-white"
                  : "bg-gray-100 text-gray-800 hover:bg-gray-200"
              }`}
            >
              <GiPlantRoots className="mr-2" /> Radishes
            </button>
            <button
              onClick={() => setSelectedCrop("lettuce")}
              className={`px-4 py-2 rounded-lg flex items-center ${
                selectedCrop === "lettuce"
                  ? "bg-emerald-600 text-white"
                  : "bg-gray-100 text-gray-800 hover:bg-gray-200"
              }`}
            >
              <LuSalad className="mr-2" /> Lettuce
            </button>
            <button
              onClick={() => setSelectedCrop("mint")}
              className={`px-4 py-2 rounded-lg flex items-center ${
                selectedCrop === "mint"
                  ? "bg-emerald-600 text-white"
                  : "bg-gray-100 text-gray-800 hover:bg-gray-200"
              }`}
            >
              <MdEmojiFoodBeverage className="mr-2" /> Mint
            </button>
          </div>
        </div>
      </section>

      {/* Crop Overview */}
      <section className="py-6 px-6">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
          <div className="md:flex">
            <div className="md:shrink-0">
              <img
                className="h-48 w-full object-cover md:h-full md:w-48"
                src={crop.image}
                alt={crop.name}
              />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {crop.name}
              </h2>
              <p className="text-gray-700 mb-4">{crop.introduction}</p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                <div className="flex items-center">
                  <FaSun className="text-amber-500 mr-2" />
                  <div>
                    <p className="text-xs text-gray-500">Sun</p>
                    <p className="text-sm font-medium">
                      {crop.sunRequirements}
                    </p>
                  </div>
                </div>

                <div className="flex items-center">
                  <FaWater className="text-blue-500 mr-2" />
                  <div>
                    <p className="text-xs text-gray-500">Water</p>
                    <p className="text-sm font-medium">
                      {crop.waterRequirements}
                    </p>
                  </div>
                </div>

                <div className="flex items-center">
                  <GiSpade className="text-brown-500 mr-2" />
                  <div>
                    <p className="text-xs text-gray-500">Difficulty</p>
                    <p className="text-sm font-medium">{crop.difficulty}</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <FaCalendarAlt className="text-emerald-500 mr-2" />
                  <div>
                    <p className="text-xs text-gray-500">Season</p>
                    <p className="text-sm font-medium">{crop.growingSeason}</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-emerald-50 p-3 rounded-lg">
                  <h3 className="text-sm font-medium mb-1">Time to Harvest</h3>
                  <p className="text-sm">{crop.daysToHarvest}</p>
                </div>

                <div className="bg-emerald-50 p-3 rounded-lg">
                  <h3 className="text-sm font-medium mb-1">Plant Spacing</h3>
                  <p className="text-sm">{crop.spacing}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Growing Instructions */}
      <section className="py-8 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Complete Growing Guide
          </h2>

          {/* Planting */}
          <div className="bg-white rounded-lg shadow-sm mb-4 overflow-hidden">
            <button
              className="w-full flex items-center justify-between p-4"
              onClick={() => toggleSection("planting")}
            >
              <span className="flex items-center font-medium text-lg">
                <FaSeedling className="text-emerald-600 mr-3" />
                Planting {crop.name}
              </span>
              <span>{expandedSection === "planting" ? "−" : "+"}</span>
            </button>

            {expandedSection === "planting" && (
              <div className="p-4 pt-0 border-t border-gray-100">
                <p className="text-gray-700 mb-4">{crop.planting}</p>

                <div className="bg-emerald-50 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Planting Checklist:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Check your local frost dates before planting</li>
                    <li>Prepare soil with compost or organic matter</li>
                    <li>Plant at recommended depth and spacing</li>
                    <li>Water thoroughly after planting</li>
                    <li>
                      For transplants, harden off before planting outdoors
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>

          {/* Care */}
          <div className="bg-white rounded-lg shadow-sm mb-4 overflow-hidden">
            <button
              className="w-full flex items-center justify-between p-4"
              onClick={() => toggleSection("care")}
            >
              <span className="flex items-center font-medium text-lg">
                <MdOutlineEco className="text-emerald-600 mr-3" />
                Care & Maintenance
              </span>
              <span>{expandedSection === "care" ? "−" : "+"}</span>
            </button>

            {expandedSection === "care" && (
              <div className="p-4 pt-0 border-t border-gray-100">
                <p className="text-gray-700 mb-4">{crop.care}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2 flex items-center">
                      <FaWater className="text-blue-600 mr-2" /> Watering Tips
                    </h4>
                    <ul className="text-sm space-y-1">
                      <li>Water at the base of plants to avoid wet foliage</li>
                      <li>
                        Water deeply and less frequently to encourage deep roots
                      </li>
                      <li>Morning watering is best to reduce evaporation</li>
                      <li>
                        Use mulch to retain moisture and reduce watering needs
                      </li>
                    </ul>
                  </div>

                  <div className="bg-amber-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2 flex items-center">
                      <FaSun className="text-amber-600 mr-2" /> Sun &
                      Temperature
                    </h4>
                    <ul className="text-sm space-y-1">
                      <li>Ensure plants receive required sunlight hours</li>
                      <li>
                        Protect from extreme heat with shade cloth if needed
                      </li>
                      <li>Cover during unexpected frost events</li>
                      <li>Consider microclimates in your garden</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Fertilizing */}
          <div className="bg-white rounded-lg shadow-sm mb-4 overflow-hidden">
            <button
              className="w-full flex items-center justify-between p-4"
              onClick={() => toggleSection("fertilizing")}
            >
              <span className="flex items-center font-medium text-lg">
                <GiPlantRoots className="text-emerald-600 mr-3" />
                Soil & Fertilizing
              </span>
              <span>{expandedSection === "fertilizing" ? "−" : "+"}</span>
            </button>

            {expandedSection === "fertilizing" && (
              <div className="p-4 pt-0 border-t border-gray-100">
                <p className="text-gray-700 mb-4">{crop.fertilizing}</p>

                <div className="bg-emerald-50 p-4 rounded-lg mb-4">
                  <h4 className="font-medium mb-2">Ideal Soil Conditions:</h4>
                  <p className="text-gray-700">{crop.soilRequirements}</p>
                </div>

                <div className="bg-emerald-50 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">
                    Organic Fertilizer Options:
                  </h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      Compost: Slow-release nutrients and improves soil
                      structure
                    </li>
                    <li>
                      Worm castings: Balanced nutrients and beneficial microbes
                    </li>
                    <li>
                      Fish emulsion: Quick nitrogen boost for leafy growth
                    </li>
                    <li>Bone meal: Phosphorus source for root development</li>
                    <li>
                      Kelp meal: Trace minerals and natural growth stimulants
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>

          {/* Pests & Diseases */}
          <div className="bg-white rounded-lg shadow-sm mb-4 overflow-hidden">
            <button
              className="w-full flex items-center justify-between p-4"
              onClick={() => toggleSection("pests")}
            >
              <span className="flex items-center font-medium text-lg">
                <FaBug className="text-emerald-600 mr-3" />
                Pest & Disease Management
              </span>
              <span>{expandedSection === "pests" ? "−" : "+"}</span>
            </button>

            {expandedSection === "pests" && (
              <div className="p-4 pt-0 border-t border-gray-100">
                <p className="text-gray-700 mb-4">{crop.pests_diseases}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h4 className="font-medium mb-2">Common Pests:</h4>
                    <p className="text-gray-700">{crop.pests}</p>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">Common Diseases:</h4>
                    <p className="text-gray-700">{crop.diseases}</p>
                  </div>
                </div>

                <div className="bg-emerald-50 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">
                    Organic Pest Control Methods:
                  </h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Hand-picking larger pests like caterpillars</li>
                    <li>Insecticidal soap for soft-bodied insects</li>
                    <li>
                      Companion planting to deter pests ({crop.companions})
                    </li>
                    <li>Beneficial insects like ladybugs and lacewings</li>
                    <li>Row covers to prevent pest access</li>
                    <li>Crop rotation to disrupt pest cycles</li>
                  </ul>
                </div>
              </div>
            )}
          </div>

          {/* Harvesting */}
          <div className="bg-white rounded-lg shadow-sm mb-4 overflow-hidden">
            <button
              className="w-full flex items-center justify-between p-4"
              onClick={() => toggleSection("harvesting")}
            >
              <span className="flex items-center font-medium text-lg">
                <FaCut className="text-emerald-600 mr-3" />
                Harvesting & Storage
              </span>
              <span>{expandedSection === "harvesting" ? "−" : "+"}</span>
            </button>

            {expandedSection === "harvesting" && (
              <div className="p-4 pt-0 border-t border-gray-100">
                <p className="text-gray-700 mb-4">{crop.harvesting}</p>

                <div className="bg-emerald-50 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">
                    Harvesting Best Practices:
                  </h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      Harvest in the morning when plants are most hydrated
                    </li>
                    <li>Use clean, sharp tools to minimize damage</li>
                    <li>Handle produce gently to prevent bruising</li>
                    <li>Harvest regularly to encourage continued production</li>
                    <li>
                      Look for visual cues of ripeness specific to your crop
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>

          {/* Pro Tips */}
          <div className="bg-white rounded-lg shadow-sm mb-4 overflow-hidden">
            <button
              className="w-full flex items-center justify-between p-4"
              onClick={() => toggleSection("tips")}
            >
              <span className="flex items-center font-medium text-lg">
                <MdHealthAndSafety className="text-emerald-600 mr-3" />
                Expert Growing Tips
              </span>
              <span>{expandedSection === "tips" ? "−" : "+"}</span>
            </button>

            {expandedSection === "tips" && (
              <div className="p-4 pt-0 border-t border-gray-100">
                <p className="text-gray-700 mb-4">{crop.tips}</p>

                <div className="bg-emerald-50 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">
                    Troubleshooting Common Issues:
                  </h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      <strong>Yellowing leaves:</strong> Could indicate
                      overwatering or nutrient deficiency
                    </li>
                    <li>
                      <strong>Stunted growth:</strong> Check for compacted soil
                      or insufficient nutrients
                    </li>
                    <li>
                      <strong>Poor fruit set:</strong> May be due to extreme
                      temperatures or lack of pollinators
                    </li>
                    <li>
                      <strong>Wilting despite moist soil:</strong> Possible root
                      damage or disease
                    </li>
                    <li>
                      <strong>Leggy seedlings:</strong> Insufficient light
                      during early growth
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Seasonal Calendar */}
      <section className="py-8 px-6 bg-emerald-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            <FaCalendarAlt className="inline-block mr-2" />
            Seasonal Growing Calendar
          </h2>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <p className="text-gray-700 mb-4">
              Follow this general timeline for growing {crop.name.toLowerCase()}{" "}
              in temperate climates. Adjust based on your specific climate zone
              and local frost dates.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-medium text-blue-800 mb-2">Spring</h3>
                <ul className="text-sm space-y-2">
                  <li className="flex items-start">
                    <span className="bg-blue-100 text-blue-800 rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">
                      1
                    </span>
                    <span>
                      Prepare soil with compost and organic amendments
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-100 text-blue-800 rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">
                      2
                    </span>
                    <span>
                      {crop.growingSeason.includes("Spring")
                        ? "Plant seeds or transplants"
                        : "Start seeds indoors"}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-100 text-blue-800 rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">
                      3
                    </span>
                    <span>Set up supports and irrigation systems</span>
                  </li>
                </ul>
              </div>

              <div className="bg-amber-50 p-4 rounded-lg">
                <h3 className="font-medium text-amber-800 mb-2">Summer</h3>
                <ul className="text-sm space-y-2">
                  <li className="flex items-start">
                    <span className="bg-amber-100 text-amber-800 rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">
                      1
                    </span>
                    <span>
                      {crop.growingSeason.includes("Summer")
                        ? "Main growing season"
                        : "Monitor for heat stress"}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-amber-100 text-amber-800 rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">
                      2
                    </span>
                    <span>Regular watering and pest monitoring</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-amber-100 text-amber-800 rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">
                      3
                    </span>
                    <span>
                      {crop.growingSeason.includes("Summer")
                        ? "Begin harvesting"
                        : "Provide shade if needed"}
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-orange-50 p-4 rounded-lg">
                <h3 className="font-medium text-orange-800 mb-2">Fall</h3>
                <ul className="text-sm space-y-2">
                  <li className="flex items-start">
                    <span className="bg-orange-100 text-orange-800 rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">
                      1
                    </span>
                    <span>
                      {crop.growingSeason.includes("Fall")
                        ? "Plant for fall harvest"
                        : "Final harvests"}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-orange-100 text-orange-800 rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">
                      2
                    </span>
                    <span>Collect seeds for next season</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-orange-100 text-orange-800 rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">
                      3
                    </span>
                    <span>Protect from early frosts if needed</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-medium text-gray-800 mb-2">Winter</h3>
                <ul className="text-sm space-y-2">
                  <li className="flex items-start">
                    <span className="bg-gray-200 text-gray-800 rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">
                      1
                    </span>
                    <span>Plan next year's garden</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-gray-200 text-gray-800 rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">
                      2
                    </span>
                    <span>Order seeds and supplies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-gray-200 text-gray-800 rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">
                      3
                    </span>
                    <span>
                      {crop.growingSeason.includes("Winter")
                        ? "Continue growing with protection"
                        : "Amend soil for spring planting"}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Companion Planting */}
      <section className="py-8 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            <FaLeaf className="inline-block mr-2" />
            Companion Planting Guide
          </h2>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <p className="text-gray-700 mb-4">
              Companion planting improves crop health, deters pests, and
              maximizes garden space. Here are the best plant companions for{" "}
              {crop.name.toLowerCase()}.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-emerald-50 p-4 rounded-lg">
                <h3 className="font-medium text-emerald-800 mb-2">
                  Good Companions
                </h3>
                <p className="text-sm mb-2">
                  These plants grow well with {crop.name.toLowerCase()}:
                </p>
                <ul className="text-sm space-y-1 list-disc pl-5">
                  {crop.companions.split(", ").map((companion, index) => (
                    <li key={index}>{companion}</li>
                  ))}
                </ul>
              </div>

              <div className="bg-red-50 p-4 rounded-lg">
                <h3 className="font-medium text-red-800 mb-2">
                  Poor Companions
                </h3>
                <p className="text-sm mb-2">
                  Keep these plants away from {crop.name.toLowerCase()}:
                </p>
                <ul className="text-sm space-y-1 list-disc pl-5">
                  {crop.name === "Tomatoes" ? (
                    <>
                      <li>Potatoes (can share diseases)</li>
                      <li>Corn (competes for nutrients)</li>
                      <li>Fennel (inhibits growth)</li>
                      <li>Brassicas like cabbage and broccoli</li>
                    </>
                  ) : crop.name === "Lettuce" ? (
                    <>
                      <li>Parsley (competes for space)</li>
                      <li>Broccoli (heavy feeder)</li>
                      <li>Celery (can stunt growth)</li>
                    </>
                  ) : (
                    <>
                      <li>Dill (can inhibit growth)</li>
                      <li>Other root vegetables (competes for space)</li>
                      <li>Anise (inhibits growth)</li>
                    </>
                  )}
                </ul>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-medium text-blue-800 mb-2">
                  Benefits of Companions
                </h3>
                <ul className="text-sm space-y-2">
                  <li className="flex items-start">
                    <span className="bg-blue-100 text-blue-800 rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">
                      ✓
                    </span>
                    <span>Pest deterrence through scent confusion</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-100 text-blue-800 rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">
                      ✓
                    </span>
                    <span>
                      Improved pollination and beneficial insect attraction
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-100 text-blue-800 rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">
                      ✓
                    </span>
                    <span>Enhanced flavor and productivity</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-100 text-blue-800 rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">
                      ✓
                    </span>
                    <span>Maximum use of garden space and resources</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-8 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="font-medium text-lg mb-2">
                When is the best time to plant {crop.name.toLowerCase()}?
              </h3>
              <p className="text-gray-700">
                {crop.name === "Tomatoes"
                  ? "Plant tomatoes after all danger of frost has passed and soil temperatures reach at least 60°F. In most regions, this is 1-2 weeks after the last frost date in spring."
                  : crop.name === "Lettuce"
                  ? "Lettuce can be planted as soon as the soil can be worked in early spring. For fall crops, plant 4-8 weeks before the first fall frost."
                  : "Plant carrots 2-3 weeks before the last spring frost for spring/summer harvest, or 10-12 weeks before the first fall frost for fall/winter harvest."}
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="font-medium text-lg mb-2">
                How do I know when {crop.name.toLowerCase()} are ready to
                harvest?
              </h3>
              <p className="text-gray-700">
                {crop.name === "Tomatoes"
                  ? "Tomatoes are ready when they've reached their full color (red, yellow, etc. depending on variety) and feel slightly soft when gently squeezed. They should come off the vine easily with a slight twist."
                  : crop.name === "Lettuce"
                  ? "Leaf lettuce can be harvested when leaves are about 4 inches tall. For head lettuce, harvest when heads feel firm and reach full size. Harvest before plants bolt (send up flower stalks)."
                  : "Carrots are typically ready when the shoulders reach about 3/4 to 1 inch in diameter. You can gently brush away soil to check size. Baby carrots can be harvested earlier."}
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="font-medium text-lg mb-2">
                How often should I water {crop.name.toLowerCase()}?
              </h3>
              <p className="text-gray-700">
                {crop.name === "Tomatoes"
                  ? "Tomatoes need consistent moisture, especially when fruiting. Provide 1-2 inches of water weekly, preferably delivered deeply and less frequently. Water at the base to avoid wetting the foliage."
                  : crop.name === "Lettuce"
                  ? "Lettuce has shallow roots and needs consistent moisture. Water when the top inch of soil feels dry, typically every 2-3 days in warm weather. Mulching helps retain moisture."
                  : "Carrots need consistent moisture during germination and root development. Water deeply once or twice a week, providing about 1 inch of water weekly. Avoid overwatering which can cause root splitting."}
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="font-medium text-lg mb-2">
                What are common mistakes when growing {crop.name.toLowerCase()}?
              </h3>
              <p className="text-gray-700">
                {crop.name === "Tomatoes"
                  ? "Common mistakes include: planting too early when soil is still cold, overcrowding plants, inconsistent watering (causes blossom end rot and fruit splitting), over-fertilizing with nitrogen, and not providing adequate support."
                  : crop.name === "Lettuce"
                  ? "Common mistakes include: planting in hot weather which causes bolting, not thinning seedlings properly, allowing soil to dry out, not harvesting outer leaves regularly, and planting too deeply."
                  : "Common mistakes include: not preparing loose soil deeply enough, sowing seeds too thickly and not thinning properly, inconsistent watering, and not protecting young seedlings from pests."}
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="font-medium text-lg mb-2">
                Can I grow {crop.name.toLowerCase()} in containers?
              </h3>
              <p className="text-gray-700">
                {crop.name === "Tomatoes"
                  ? "Yes, tomatoes grow well in containers. Use a minimum 5-gallon container for determinate varieties and 10+ gallons for indeterminate types. Ensure good drainage, consistent watering, and adequate support."
                  : crop.name === "Lettuce"
                  ? "Lettuce is ideal for container growing. Use containers at least 6 inches deep with good drainage. Shallow wide containers work well for growing multiple plants. Lettuce has shallow roots and thrives in pots on patios or balconies."
                  : "Carrots can be grown in containers that are at least 12 inches deep to accommodate root development. Choose shorter varieties like 'Paris Market' or 'Thumbelina' for container growing. Use loose, sandy potting mix for best results."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-8 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Additional Growing Resources
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-emerald-50 p-6 rounded-lg border border-emerald-100 hover:shadow-md transition">
              <MdOutlineEco className="text-3xl text-emerald-600 mb-3" />
              <h3 className="text-lg font-semibold mb-2">
                Organic Pest Solutions
              </h3>
              <p className="text-gray-700 mb-4">
                Natural methods to keep your crops healthy without harmful
                chemicals.
              </p>
              <button className="text-emerald-600 hover:text-emerald-800 font-medium">
                Read Guide →
              </button>
            </div>

            <div className="bg-emerald-50 p-6 rounded-lg border border-emerald-100 hover:shadow-md transition">
              <MdHealthAndSafety className="text-3xl text-emerald-600 mb-3" />
              <h3 className="text-lg font-semibold mb-2">Soil Health Guide</h3>
              <p className="text-gray-700 mb-4">
                Build rich, living soil for stronger plants and better harvests.
              </p>
              <button className="text-emerald-600 hover:text-emerald-800 font-medium">
                Read Guide →
              </button>
            </div>

            <div className="bg-emerald-50 p-6 rounded-lg border border-emerald-100 hover:shadow-md transition">
              <FaSeedling className="text-3xl text-emerald-600 mb-3" />
              <h3 className="text-lg font-semibold mb-2">Seed Starting 101</h3>
              <p className="text-gray-700 mb-4">
                Master the techniques for starting your plants from seed.
              </p>
              <button className="text-emerald-600 hover:text-emerald-800 font-medium">
                Read Guide →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Community CTA */}
      <section className="bg-gradient-to-br from-emerald-500 to-green-600 py-12 px-6 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">
            Join Our Gardening Community
          </h2>
          <p className="text-lg mb-6">
            Connect with fellow gardeners, share your experiences, and get
            advice from experts.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-emerald-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition font-medium">
              Join Community
            </button>
            <button className="bg-transparent border-2 border-white px-6 py-3 rounded-lg hover:bg-emerald-600 transition">
              Subscribe to Newsletter
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center mb-6">
            <FaSeedling className="text-emerald-500 text-2xl mr-2" />
            <span className="text-white text-xl font-bold">
              Organic Growing Guide
            </span>
          </div>

          <p className="text-center text-sm mb-6">
            Helping gardeners grow healthy, sustainable food since 2022
          </p>

          <div className="text-center">
            <p className="text-xs">
              © {new Date().getFullYear()} Organic Growing Guide. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
