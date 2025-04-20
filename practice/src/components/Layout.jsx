import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Component1 from "./Component1";
import { Outlet, useLocation } from "react-router-dom";

function Layout() {
  const location = useLocation();

  const showComponent1 = location.pathname !== "/login";

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-grow">
        <Outlet /> 
      </main>
      {showComponent1 && <Component1 />}
      <Footer />
    </div>
  );
}

export default Layout;
