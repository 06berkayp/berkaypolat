import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "@/components/navbar";

function RootLayout() {
  return (
    <div>
      <nav>
        <Navbar />
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default RootLayout;
