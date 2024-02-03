import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "@/components/navbar";

function RootLayout() {
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
