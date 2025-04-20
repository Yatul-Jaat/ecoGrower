import React, { useState, useRef, useEffect } from "react";
import { FaPaperPlane } from "react-icons/fa";
import main from "../hooks/Chat.js";
import parse from "html-react-parser";

const Input = () => {
  const [message, setMessage] = useState("");
  const [language, setLanguage] = useState("English");
  const [chatHistory, setChatHistory] = useState([
    {
      type: "bot",
      content: "<div class='font-semibold text-emerald-700'>Hello! I'm your organic farming assistant. What crop would you like to know about today?</div>"
    }
  ]);
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef(null);
  const inputRef = useRef(null);

  // Auto-scroll to the latest message
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatHistory]);

  // Focus input when chat opens
  useEffect(() => {
    // Short timeout to ensure the component is rendered
    const timer = setTimeout(() => {
      inputRef.current?.focus();
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    
    if (!message.trim()) return;
    
    // Add user message to chat
    setChatHistory([...chatHistory, { type: "user", content: message }]);
    
    // Set loading state
    setLoading(true);
    
    try {
      // Get AI response
      const response = await main(message, language);
      
      // Add bot response to chat
      setChatHistory(prev => [
        ...prev,
        { 
          type: "bot", 
          content: response
        }
      ]);
    } catch (error) {
      // Handle error
      setChatHistory(prev => [
        ...prev,
        { 
          type: "bot", 
          content: "<div class='text-red-600 font-semibold'>I'm sorry, I couldn't get information about that. Please try another crop or organic farming question.</div>"
        }
      ]);
    } finally {
      setLoading(false);
      setMessage("");
    }
  };

  // Render chat message
  const renderMessage = (msg, index) => {
    if (msg.type === "user") {
      return (
        <div key={index} className="flex justify-end mb-4">
          <div className="bg-emerald-100 text-gray-800 p-3 rounded-lg max-w-xs md:max-w-md">
            <p>{msg.content}</p>
          </div>
        </div>
      );
    } else {
      return (
        <div key={index} className="flex justify-start mb-4">
          <div className="bg-white border-2 border-emerald-200 p-3 rounded-lg max-w-xs md:max-w-md">
            {parse(msg.content || "")}
          </div>
        </div>
      );
    }
  };

  return (
    <div className="flex flex-col h-full">
      {/* Language toggle */}
      <div className="bg-emerald-700 px-4 py-2 flex justify-end">
        <div className="flex space-x-2">
          <button 
            onClick={() => setLanguage("English")} 
            className={`px-3 py-1 rounded-md text-sm ${
              language === "English" 
                ? "bg-white text-emerald-700" 
                : "bg-emerald-700 text-white border border-white"
            }`}
          >
            English
          </button>
          <button 
            onClick={() => setLanguage("Hindi")} 
            className={`px-3 py-1 rounded-md text-sm ${
              language === "Hindi" 
                ? "bg-white text-emerald-700" 
                : "bg-emerald-700 text-white border border-white"
            }`}
          >
            Hindi
          </button>
        </div>
      </div>
      
      {/* Chat container */}
      <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
        <div>
          {chatHistory.map(renderMessage)}
          {loading && (
            <div className="flex justify-start mb-4">
              <div className="bg-white border-2 border-emerald-200 p-3 rounded-lg">
                <div className="flex space-x-2">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-emerald-600 rounded-full animate-bounce delay-75"></div>
                  <div className="w-2 h-2 bg-emerald-600 rounded-full animate-bounce delay-150"></div>
                </div>
              </div>
            </div>
          )}
          <div ref={chatEndRef} />
        </div>
      </div>
      
      {/* Input area */}
      <div className="border-t border-gray-200 bg-white p-4">
        <form onSubmit={handleSendMessage} className="flex items-center gap-2">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Ask about a crop or organic farming..."
            className="flex-1 border-2 border-emerald-200 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            disabled={loading}
            ref={inputRef}
          />
          <button
            type="submit"
            disabled={loading}
            className="bg-emerald-600 text-white p-3 rounded-lg hover:bg-emerald-700 transition"
          >
            <FaPaperPlane />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Input;