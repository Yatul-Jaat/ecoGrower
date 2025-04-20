import { GoogleGenAI } from "@google/genai";

// Initialize the Google Generative AI with your API key
const ai = new GoogleGenAI({
  apiKey: "AIzaSyB0G19SLfjjZiSKHTzF280YiVXsVLQOpAI",
});

/**
 * Get farming information about a specific crop in the requested language
 * @param {string} message - The user's message or query
 * @param {string} language - The language to return the response in (English or Hindi)
 * @returns {Promise<string>} - HTML formatted response
 */
async function main(message, language = "English") {
  try {
    // Extract crop name and potential query type from the message
    const cleanedMessage = message.toLowerCase().trim();
    let crop = cleanedMessage;
    let queryType = "growing";
    
    // Check if the message contains specific question types
    if (cleanedMessage.includes("how to grow") || cleanedMessage.includes("how do i grow")) {
      crop = cleanedMessage.replace(/how to grow|how do i grow/gi, "").trim();
      queryType = "growing";
    } else if (cleanedMessage.includes("pests") || cleanedMessage.includes("diseases")) {
      crop = cleanedMessage.replace(/pests|diseases/gi, "").trim();
      queryType = "pests";
    } else if (cleanedMessage.includes("harvest") || cleanedMessage.includes("harvesting")) {
      crop = cleanedMessage.replace(/harvest|harvesting/gi, "").trim();
      queryType = "harvesting";
    } else if (cleanedMessage.includes("benefits") || cleanedMessage.includes("nutrition")) {
      crop = cleanedMessage.replace(/benefits|nutrition/gi, "").trim();
      queryType = "benefits";
    } else if (cleanedMessage.includes("water") || cleanedMessage.includes("watering")) {
      crop = cleanedMessage.replace(/water|watering/gi, "").trim();
      queryType = "watering";
    } else if (cleanedMessage.includes("companion") || cleanedMessage.includes("plant together")) {
      crop = cleanedMessage.replace(/companion|plant together/gi, "").trim();
      queryType = "companion";
    }
    
    // Build a more comprehensive prompt based on query type
    let prompt;
    
    switch (queryType) {
      case "growing":
        prompt = `
        Provide a comprehensive guide for growing ${crop} organically in ${language}.
        
        Format your response as HTML with this structure:
        <div class="text-gray-800">
          <h2 class="text-lg font-bold text-emerald-700 mb-2">Growing ${crop} Organically</h2>
          
          <p class="mb-3">[Brief introduction about the crop - one paragraph]</p>
          
          <h3 class="font-semibold text-emerald-600 mt-3">When to Plant</h3>
          <p class="mb-2">[planting season information]</p>
          
          <h3 class="font-semibold text-emerald-600 mt-3">Soil Requirements</h3>
          <p class="mb-2">[soil information]</p>
          
          <h3 class="font-semibold text-emerald-600 mt-3">Planting Process</h3>
          <ul class="list-disc pl-5 mb-3">
            <li class="mb-1">[step 1]</li>
            <li class="mb-1">[step 2]</li>
            <li class="mb-1">[step 3]</li>
          </ul>
          
          <h3 class="font-semibold text-emerald-600 mt-3">Care & Maintenance</h3>
          <p class="mb-2">[care information]</p>
          
          <h3 class="font-semibold text-emerald-600 mt-3">Organic Tips</h3>
          <ul class="list-disc pl-5 mb-2">
            <li class="mb-1">[organic tip 1]</li>
            <li class="mb-1">[organic tip 2]</li>
          </ul>
        </div>
        `;
        break;
      case "pests":
        prompt = `
        Provide information about common pests and organic solutions for ${crop} in ${language}.
        
        Format your response as HTML with this structure:
        <div class="text-gray-800">
          <h2 class="text-lg font-bold text-emerald-700 mb-2">Managing Pests for ${crop} Organically</h2>
          
          <p class="mb-3">[Brief introduction about common pest issues - one paragraph]</p>
          
          <h3 class="font-semibold text-emerald-600 mt-3">Common Pests</h3>
          <ul class="list-disc pl-5 mb-3">
            <li class="mb-2">
              <span class="font-medium">[Pest name 1]:</span> [description and symptoms]
            </li>
            <li class="mb-2">
              <span class="font-medium">[Pest name 2]:</span> [description and symptoms]
            </li>
          </ul>
          
          <h3 class="font-semibold text-emerald-600 mt-3">Organic Solutions</h3>
          <ul class="list-disc pl-5 mb-3">
            <li class="mb-2">
              <span class="font-medium">[Solution 1]:</span> [description]
            </li>
            <li class="mb-2">
              <span class="font-medium">[Solution 2]:</span> [description]
            </li>
          </ul>
          
          <h3 class="font-semibold text-emerald-600 mt-3">Prevention Tips</h3>
          <ul class="list-disc pl-5 mb-2">
            <li class="mb-1">[tip 1]</li>
            <li class="mb-1">[tip 2]</li>
          </ul>
        </div>
        `;
        break;
      case "harvesting":
        prompt = `
        Provide guidance on harvesting ${crop} organically in ${language}.
        
        Format your response as HTML with this structure:
        <div class="text-gray-800">
          <h2 class="text-lg font-bold text-emerald-700 mb-2">Harvesting ${crop}</h2>
          
          <p class="mb-3">[Brief introduction about harvesting - one paragraph]</p>
          
          <h3 class="font-semibold text-emerald-600 mt-3">When to Harvest</h3>
          <p class="mb-2">[timing information]</p>
          
          <h3 class="font-semibold text-emerald-600 mt-3">How to Harvest</h3>
          <ul class="list-disc pl-5 mb-3">
            <li class="mb-1">[step 1]</li>
            <li class="mb-1">[step 2]</li>
          </ul>
          
          <h3 class="font-semibold text-emerald-600 mt-3">Storage Recommendations</h3>
          <p class="mb-2">[storage information]</p>
          
          <h3 class="font-semibold text-emerald-600 mt-3">Expected Yield</h3>
          <p class="mb-2">[yield information for organic growing]</p>
        </div>
        `;
        break;
      case "benefits":
        prompt = `
        Provide information about the nutritional benefits of ${crop} in ${language}.
        
        Format your response as HTML with this structure:
        <div class="text-gray-800">
          <h2 class="text-lg font-bold text-emerald-700 mb-2">Benefits of ${crop}</h2>
          
          <p class="mb-3">[Brief introduction about the crop benefits - one paragraph]</p>
          
          <h3 class="font-semibold text-emerald-600 mt-3">Nutritional Profile</h3>
          <ul class="list-disc pl-5 mb-3">
            <li class="mb-1">[nutrient 1] - [benefit]</li>
            <li class="mb-1">[nutrient 2] - [benefit]</li>
          </ul>
          
          <h3 class="font-semibold text-emerald-600 mt-3">Health Benefits</h3>
          <ul class="list-disc pl-5 mb-3">
            <li class="mb-1">[benefit 1]</li>
            <li class="mb-1">[benefit 2]</li>
          </ul>
          
          <h3 class="font-semibold text-emerald-600 mt-3">Culinary Uses</h3>
          <p class="mb-2">[uses in cooking]</p>
        </div>
        `;
        break;
      case "watering":
        prompt = `
        Provide watering guidance for ${crop} in organic farming in ${language}.
        
        Format your response as HTML with this structure:
        <div class="text-gray-800">
          <h2 class="text-lg font-bold text-emerald-700 mb-2">Watering ${crop}</h2>
          
          <p class="mb-3">[Brief introduction about watering needs - one paragraph]</p>
          
          <h3 class="font-semibold text-emerald-600 mt-3">Water Requirements</h3>
          <p class="mb-2">[general water needs]</p>
          
          <h3 class="font-semibold text-emerald-600 mt-3">Watering Schedule</h3>
          <ul class="list-disc pl-5 mb-3">
            <li class="mb-1">[seedling stage]</li>
            <li class="mb-1">[growing stage]</li>
            <li class="mb-1">[mature plant]</li>
          </ul>
          
          <h3 class="font-semibold text-emerald-600 mt-3">Water Conservation Tips</h3>
          <ul class="list-disc pl-5 mb-2">
            <li class="mb-1">[tip 1]</li>
            <li class="mb-1">[tip 2]</li>
          </ul>
        </div>
        `;
        break;
      case "companion":
        prompt = `
        Provide information about companion planting for ${crop} in organic gardening in ${language}.
        
        Format your response as HTML with this structure:
        <div class="text-gray-800">
          <h2 class="text-lg font-bold text-emerald-700 mb-2">Companion Planting for ${crop}</h2>
          
          <p class="mb-3">[Brief introduction about companion planting - one paragraph]</p>
          
          <h3 class="font-semibold text-emerald-600 mt-3">Good Companions</h3>
          <ul class="list-disc pl-5 mb-3">
            <li class="mb-2">
              <span class="font-medium">[Plant 1]:</span> [benefit explanation]
            </li>
            <li class="mb-2">
              <span class="font-medium">[Plant 2]:</span> [benefit explanation]
            </li>
          </ul>
          
          <h3 class="font-semibold text-emerald-600 mt-3">Plants to Avoid</h3>
          <ul class="list-disc pl-5 mb-3">
            <li class="mb-2">
              <span class="font-medium">[Plant 1]:</span> [reason to avoid]
            </li>
            <li class="mb-2">
              <span class="font-medium">[Plant 2]:</span> [reason to avoid]
            </li>
          </ul>
          
          <h3 class="font-semibold text-emerald-600 mt-3">Planting Arrangement Tips</h3>
          <p class="mb-2">[arrangement suggestions]</p>
        </div>
        `;
        break;
      default:
        prompt = `
        Provide information about ${crop} for organic farming in ${language}.
        
        Format your response as HTML with this structure:
        <div class="text-gray-800">
          <h2 class="text-lg font-bold text-emerald-700 mb-2">About ${crop}</h2>
          
          <p class="mb-3">[Brief introduction about the crop - one paragraph]</p>
          
          <h3 class="font-semibold text-emerald-600 mt-3">Growing Conditions</h3>
          <p class="mb-2">[growing conditions summary]</p>
          
          <h3 class="font-semibold text-emerald-600 mt-3">Key Growing Tips</h3>
          <ul class="list-disc pl-5 mb-3">
            <li class="mb-1">[tip 1]</li>
            <li class="mb-1">[tip 2]</li>
            <li class="mb-1">[tip 3]</li>
          </ul>
          
          <h3 class="font-semibold text-emerald-600 mt-3">Organic Growing Benefits</h3>
          <p class="mb-2">[benefits summary]</p>
        </div>
        `;
    }

    // If the message is more general or a greeting
    if (cleanedMessage.includes("hello") || cleanedMessage.includes("hi ") || 
        cleanedMessage.includes("hey") || cleanedMessage === "hi") {
      prompt = `
      Respond to a greeting about organic farming in ${language}.
      
      Format your response as HTML:
      <div class="text-gray-800">
        <p class="mb-2">Hello! I'm your organic farming assistant. I can help you with:</p>
        <ul class="list-disc pl-5 mb-3">
          <li class="mb-1">How to grow specific crops organically</li>
          <li class="mb-1">Pest management without chemicals</li>
          <li class="mb-1">Harvesting and storage tips</li>
          <li class="mb-1">Nutritional benefits of crops</li>
          <li class="mb-1">Watering advice</li>
          <li class="mb-1">Companion planting suggestions</li>
        </ul>
        <p>What would you like to know about today?</p>
      </div>
      `;
    }

    // Generate content using Gemini API
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: prompt,
    });

    // Process the response
    const responseText = response.text;
    
    // Extract the content between the div tags if present
    let finalData = responseText;
    if (responseText.includes("<div") && responseText.includes("</div>")) {
      const startIndex = responseText.indexOf("<div");
      const endIndex = responseText.lastIndexOf("</div>") + 6;
      finalData = responseText.substring(startIndex, endIndex);
    }
    
    return finalData;
  } catch (error) {
    console.error("Error generating content:", error);
    return `<div class="text-red-600 font-semibold">
              Sorry, I couldn't find information about "${message}". 
              <p class="mt-2">Please try a different crop or question about organic farming.</p>
            </div>`;
  }
}

export default main;