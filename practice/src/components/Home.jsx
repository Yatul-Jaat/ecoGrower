import React from "react";
import Input from "./Input";

function Home() {
  return (
    <>
      <Input />
      <main className="bg-lightgreen px-6 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="p-4 md:p-7 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Grow Organic, Live Healthy
            </h1>
            <p className="mt-4 sm:mt-6 text-lg text-gray-600">
              Join our community of sustainable farmers and make a positive
              impact on the environment while producing healthy, organic food.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 items-center justify-center md:justify-start">
              <button className="bg-emerald-600 px-8 py-3 text-white hover:bg-emerald-700 rounded-lg flex items-center transition duration-300">
                Join Now
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
                  className="lucide lucide-arrow-right ml-2 h-5 w-5"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </button>
              <button className="border-2 border-emerald-400 text-emerald-400 px-8 py-3 hover:border-emerald-700 rounded-lg flex items-center transition duration-300">
                Learn More
              </button>
            </div>
          </div>
          <div className="relative px-4 sm:px-10 py-12">
            <img
              className="rounded-2xl shadow-2xl w-full max-w-sm sm:max-w-md md:max-w-lg mx-auto"
              src="https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?auto=format&fit=crop&w=800&q=80"
              alt="Organic Farming"
            />
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;
