import React from "react";
import { Outlet } from "react-router";
import { Navbar } from "../components/shared/Navbar/Navbar";
import { Footer } from "../components/shared/Footer/Footer";

export const Layout = () => {
  return (
    <div>
      <Navbar />

    <div className="min-h-screen">
        <Outlet/>
    </div>
      <Footer />
    </div>
  );
};
