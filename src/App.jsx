import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import About from "./components/About";
import Input from "./components/Input";
import CropPage from "./components/CropPage";
import CropGrowingGuide from "./components/CropGrowingGuide";
import SoilGuide from "./components/SoilGuide";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="grow" element={<CropGrowingGuide />} />
          <Route path="crops" element={<CropPage />} />
          <Route path="soil" element={<SoilGuide />} />
          <Route path="crop" element={<Input />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
