import React from "react";
import Navbar from "./Navbar";

export default function DefaultLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
