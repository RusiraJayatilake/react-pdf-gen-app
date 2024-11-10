import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="container" style={{ marginTop: "100px" }}>
        {children}
      </div>
      <Footer />
    </>
  );
};

export default Layout;
