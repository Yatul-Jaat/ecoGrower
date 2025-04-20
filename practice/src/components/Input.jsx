import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import useData from "../hooks/useData.js";

const Input = () => {
  const [crop, useCrop] = useState("");
  const [hello,setHello]=useState(false)
  const {useCropdata,cropdata}=useData()

  const handelInput = async (e) => {
    e.preventDefault();
    if (!crop) return;

    console.log(crop);

    if(crop){
        await useCropdata(crop)
         setHello(true)
    }

    useCrop("");
  };

  return (
    <>
      <main className=" px-6 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="p-4 md:p-7 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Identify the crop
            </h1>
            <div className="mt-4 sm:mt-6 text-lg h-12 text-[#009966] bg-lightgreen flex px-4 sm:px-6 rounded-2xl">
              <input
                type="text"
                value={crop}
                onChange={(e) => {
                  useCrop(e.target.value);
                }}
                placeholder="Search crop..."
                className="w-full"
              />
            </div>
            <div className="mt-8 flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 items-center justify-center md:justify-start">
              <button
                className="bg-emerald-600 px-8 py-3 text-white hover:text-[#009966] hover:bg-white rounded-lg flex items-center transition cursor-pointer justify-center gap-2 duration-300 border-2 border-[#009966] "
                onClick={handelInput}
              >
                <p>Search</p>
                <FaArrowRight />
              </button>
            </div>
          </div>
          <div className="relative px-4 sm:px-10 py-12">
            <img
              className="rounded-2xl shadow-2xl w-full max-w-sm sm:max-w-md md:max-w-lg mx-auto"
              src={hello?cropdata.main_image_path:"https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?auto=format&fit=crop&w=800&q=80"}
              alt="Organic Farming"
            />
          </div>
        </div>
      </main>
      <div className="flex  py-6 px-20 justify-center items-center">
        <div className="flex gap-4 justify-center flex-col w-4xl px-4 py-4 rounded-2xl border-2 border-[#009966] bg-lightgreen mb-10">
        <p className="font-semibold text-xl uppercase">Crop Name </p>
        <p className="pl-4">{hello? cropdata.name: "Crop Name"}</p>
        <p className="font-semibold text-xl uppercase">Scientific Name</p>
        <p className="pl-4">{hello? cropdata.binomial_name: "Scientific Name"}</p>
        <p className="font-semibold text-xl uppercase">Description</p>
        <p className="text-wrap">{hello? cropdata.description: "Description"}</p>
        <p className="font-semibold text-xl uppercase">Sun Requirements</p>
        <p className="pl-4">{hello? cropdata.sun_requirements: "Sun Requirements"}</p>
        <p className="font-semibold text-xl uppercase">Sowing Method</p>
        <p className="pl-4">{hello? cropdata.sowing_method :"Sowing Methods"}</p>
        </div>
      </div>
    </>
  );
};

export default Input;
