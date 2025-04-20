import React from "react";
import {useNavigate} from 'react-router-dom'
function Component1() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="text-center my-10">
        <p className="text-3xl sm:text-2xl md:text-3xl font-bold text-gray-900 leading-tight mb-2">
          Why Choose Organic Farming?
        </p>
        <p>
          Discover the benefits of sustainable and organic farming practices
        </p>
      </div>
      <div className="flex p-5 gap-3">
        <div>
          <div className="text-center">
            <div className="flex items-center justify-center rounded-full bg-emerald-100 p-4 w-16 h-16 mx-auto">
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
                className="lucide lucide-leaf h-8 w-8 text-emerald-600"
              >
                <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path>
                <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path>
              </svg>
            </div>
            <h3 className="mt-4 text-xl font-semibold text-gray-900">
              Sustainable Practices
            </h3>
            <p className="mt-2 text-gray-600">
              Implement eco-friendly farming methods that protect our
              environment for future generations.
            </p>
          </div>
        </div>
        <div>
          <div className="text-center">
            <div className="flex items-center justify-center rounded-full bg-emerald-100 p-4 w-16 h-16 mx-auto">
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
                className="lucide lucide-leaf h-8 w-8 text-emerald-600"
              >
                <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path>
                <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path>
              </svg>
            </div>
            <h3 className="mt-4 text-xl font-semibold text-gray-900">
              Natural Growth
            </h3>
            <p className="mt-2 text-gray-600">
              Grow crops naturally without harmful pesticides or artificial
              fertilizers.
            </p>
          </div>
        </div>
        <div>
          <div className="text-center">
            <div className="flex items-center justify-center rounded-full bg-emerald-100 p-4 w-16 h-16 mx-auto">
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
                className="lucide lucide-leaf h-8 w-8 text-emerald-600"
              >
                <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path>
                <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path>
              </svg>
            </div>
            <h3 className="mt-4 text-xl font-semibold text-gray-900">
              Water Conservation
            </h3>
            <p className="mt-2 text-gray-600">
              Utilize smart irrigation systems and water management techniques.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col  p-10 justify-center items-center text-center bg-emerald-600">
        <h3 className="text-3xl sm:text-2xl md:text-3xl font-bold text-white leading-tight mb-2-4 text-xl font-semibold text-white">
          Ready to Start Your Organic Journey?
        </h3>

        <p className="mt-4 text-lg text-emerald-100 mb-10">
          Join our community today and learn from experienced organic farmers.
        </p>
        <button onClick={
            ()=>{
              navigate("/login")
            }

        } className="flex  bg-white rounded-xl px-8 py-3 text-emerald-600">
          Get Started Now
          <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-arrow-right ml-2 h-5 w-5"
        >
          <path d="M5 12h14"></path>
          <path d="m12 5 7 7-7 7"></path>
        </svg>
        </button>
       
      </div>
    </div>
  );
}

export default Component1;
