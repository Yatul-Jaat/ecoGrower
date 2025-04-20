export const soilTypes = [
  {
    id: "loam",
    name: "Loamy Soil",
    description:
      "A balanced mixture of sand, silt, and clay particles. Loamy soil is considered ideal for most plants due to its excellent moisture retention, drainage, and nutrient content.",
    benefits: [
      "Excellent moisture retention while allowing excess water to drain",
      "Good nutrient retention and availability",
      "Easy to work with and doesn't compact easily",
      "Supports healthy root development",
    ],
    bestPractices: [
      "Add compost annually to maintain organic matter levels",
      "Rotate crops to prevent nutrient depletion",
      "Minimal tilling to preserve soil structure",
    ],
    idealFor: ["Tomatoes", "Carrots", "Basil", "Most vegetables"],
  },
  {
    id: "clay",
    name: "Clay Soil",
    description:
      "Soil with a high percentage of clay particles. Clay soils hold water and nutrients well but can be heavy, compact easily, and have poor drainage.",
    benefits: [
      "Excellent nutrient retention",
      "Good water-holding capacity",
      "Provides stable structure for plant roots once properly amended",
    ],
    bestPractices: [
      "Add organic matter regularly to improve structure and drainage",
      "Avoid working when wet to prevent compaction",
      "Raised beds can help improve drainage",
      "Add gypsum to help break up clay particles",
    ],
    idealFor: ["Kale", "Leafy greens", "Late-season crops"],
  },
  {
    id: "sandy",
    name: "Sandy Soil",
    description:
      "Soil with a high percentage of sand particles. Sandy soils drain quickly, warm up fast in spring, but don't retain nutrients well.",
    benefits: [
      "Excellent drainage",
      "Warms up quickly in spring",
      "Good aeration for root growth",
      "Easy to work with in all conditions",
    ],
    bestPractices: [
      "Add plenty of organic matter to improve water retention",
      "Mulch heavily to prevent moisture loss",
      "More frequent watering but in smaller amounts",
      "May require more frequent fertilization",
    ],
    idealFor: ["Carrots", "Radishes", "Root vegetables", "Herbs"],
  },
  {
    id: "silty",
    name: "Silty Soil",
    description:
      "Soil with a high percentage of silt particles. Silty soils hold moisture well and are rich in nutrients but can become compacted.",
    benefits: [
      "Good water retention",
      "Rich in nutrients",
      "Typically fertile without much amendment",
    ],
    bestPractices: [
      "Add organic matter to improve structure",
      "Avoid walking on beds to prevent compaction",
      "Consider raised beds for better drainage",
      "Mulch to protect soil surface",
    ],
    idealFor: ["Most vegetables", "Moisture-loving plants"],
  },
];

// Soil amendments data
export const soilAmendments = [
  {
    name: "Compost",
    benefits:
      "Improves soil structure, adds nutrients, increases microbial activity",
    howToUse:
      "Mix 2-3 inches into top layer of soil annually or use as a 1-inch top dressing",
    bestFor: "All soil types, especially sandy or clay soils",
  },
  {
    name: "Worm Castings",
    benefits:
      "Rich in microbes and nutrients, improves soil structure, enhances plant immunity",
    howToUse:
      "Mix 1 part castings with 4 parts soil when planting, or use as top dressing",
    bestFor: "Seedlings, transplants, and container gardens",
  },
  {
    name: "Cover Crops",
    benefits:
      "Prevents erosion, adds organic matter, improves soil biology, fixes nitrogen",
    howToUse:
      "Plant in off-season or between crop rows, turn into soil before planting",
    bestFor: "Larger garden areas, crop rotation systems",
  },
  {
    name: "Leaf Mold",
    benefits:
      "Improves soil structure, retains moisture, supports beneficial fungi",
    howToUse: "Mix 2-3 inches into soil or use as mulch around plants",
    bestFor: "Woodland plants, moisture-loving crops",
  },
  {
    name: "Aged Manure",
    benefits: "Provides slow-release nutrients, adds organic matter",
    howToUse:
      "Apply 1-2 inches to soil surface in fall or early spring, wait at least 120 days before harvesting edibles",
    bestFor: "Heavy feeding crops, preparing beds for next season",
  },
  {
    name: "Bone Meal",
    benefits:
      "High in phosphorus and calcium, promotes root development and flowering",
    howToUse: "Mix 1-2 tablespoons per planting hole or 3 lbs per 100 sq ft",
    bestFor: "Root crops, fruiting vegetables, bulbs",
  },
];

// Crop soil requirements data
export const cropSoilRequirements = [
  {
    id: 1,
    crop: "Tomatoes",
    soilType: "Well-drained, loamy soil",
    ph: "6.0-6.8",
    organicMatter: "High",
    specificNeeds: [
      "Tomatoes thrive in soil rich in organic matter. Add compost before planting.",
      "Requires consistent moisture but will develop root rot in waterlogged soil.",
      "Benefits from calcium amendments to prevent blossom end rot.",
    ],
    amendments: [
      "Compost - 2-3 inches worked into soil",
      "Aged manure applied in fall before spring planting",
      "Crushed eggshells or garden lime for calcium",
    ],
    tips: "Mulch heavily to maintain even soil moisture. Avoid planting where nightshades have grown in the past 3 years.",
  },
  {
    id: 2,
    crop: "Spinach",
    soilType: "Rich, moist, well-drained soil",
    ph: "6.5-7.0",
    organicMatter: "High",
    specificNeeds: [
      "Spinach is a heavy feeder requiring nitrogen-rich soil.",
      "Prefers cool, moist soil conditions with excellent drainage.",
      "Benefits from loose, friable soil for easy root development.",
    ],
    amendments: [
      "Compost - 2-3 inches worked into top 6 inches of soil",
      "Alfalfa meal for nitrogen boost",
      "Worm castings mixed into planting area",
    ],
    tips: "Prepare beds at least two weeks before planting. Consider raised beds for better drainage in early spring.",
  },
  {
    id: 3,
    crop: "Carrots",
    soilType: "Sandy, loose, well-drained soil",
    ph: "6.0-6.8",
    organicMatter: "Medium",
    specificNeeds: [
      "Carrots require loose, stone-free soil to develop straight roots.",
      "Too much nitrogen causes forked roots; focus on phosphorus and potassium.",
      "Soil should be worked deeply (12+ inches) for long root development.",
    ],
    amendments: [
      "Well-aged compost (not fresh) mixed deeply into soil",
      "Sand to improve drainage in heavier soils",
      "Bone meal to promote root development",
    ],
    tips: "Sift top few inches of soil to remove stones and clumps. Avoid fresh manure which causes forking.",
  },
  {
    id: 4,
    crop: "Basil",
    soilType: "Rich, moist, well-drained soil",
    ph: "6.0-7.0",
    organicMatter: "Medium-High",
    specificNeeds: [
      "Basil prefers rich soil with consistent moisture.",
      "Good drainage is essential to prevent root diseases.",
      "Benefits from moderate fertility; too much nitrogen reduces essential oil content.",
    ],
    amendments: [
      "Compost mixed into top 6 inches of soil",
      "Worm castings for gentle nutrients",
      "Mulch to maintain soil moisture",
    ],
    tips: "Plant in warm soil for best results. Container-grown basil benefits from occasional compost tea feeding.",
  },
  {
    id: 5,
    crop: "Kale",
    soilType: "Rich, well-drained, moisture-retentive soil",
    ph: "6.0-7.5",
    organicMatter: "High",
    specificNeeds: [
      "Kale is a heavy feeder requiring nitrogen-rich soil.",
      "Benefits from soil that retains moisture without becoming waterlogged.",
      "Can tolerate heavier clay soils if well amended.",
    ],
    amendments: [
      "Compost - 3-4 inches worked into soil",
      "Aged manure applied several weeks before planting",
      "Alfalfa meal for nitrogen boost",
    ],
    tips: "Mulch heavily to keep soil cool and moist during hot weather. Side-dress with compost mid-season for continual harvests.",
  },
  {
    id: 6,
    crop: "Garlic",
    soilType: "Rich, well-drained loamy soil",
    ph: "6.0-7.0",
    organicMatter: "High",
    specificNeeds: [
      "Garlic needs well-drained but fertile soil to prevent bulb rot.",
      "High organic matter helps retain nutrients during long growing season.",
      "Benefits from loose soil to allow bulb expansion.",
    ],
    amendments: [
      "Compost worked into soil several weeks before planting",
      "Bone meal for phosphorus to promote bulb development",
      "Kelp meal for trace minerals",
    ],
    tips: "Prepare beds in fall for fall planting. Remove rocks and break up clumps for easier bulb development.",
  },
];

// Soil testing guide data
export const soilTestingGuide = {
  whyTest: [
    "Determines exact nutrient content and deficiencies",
    "Identifies pH level which affects nutrient availability",
    "Reveals soil structure and organic matter content",
    "Helps prevent over-fertilization and environmental harm",
    "Saves money by applying only needed amendments",
  ],
  howToTest: [
    "Collect samples from multiple areas at 6-8 inch depth",
    "Mix samples together for a representative sample",
    "Remove debris, roots, and stones",
    "Allow soil to dry naturally",
    "Send to local extension office or lab for analysis",
    "For quick results, use home test kits for basic parameters",
  ],
  whatToTest: [
    "pH level - affects nutrient availability",
    "Macro nutrients (N-P-K)",
    "Secondary nutrients (Ca, Mg, S)",
    "Micronutrients",
    "Organic matter percentage",
    "Soil texture",
  ],
};