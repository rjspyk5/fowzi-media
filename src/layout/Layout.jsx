import React from "react";
import { Outlet } from "react-router";
import { Navbar } from "../components/shared/Navbar/Navbar";
import { Footer } from "../components/shared/Footer/Footer";

export const Layout = () => {
  return (
    <div>
      <div className="lg:mx-28 mx-3 md:mx-10">
      <Navbar />
      </div>

    <div className="min-h-screen">
        <Outlet/>
    </div>
      <Footer />
    </div>
  );
};
