import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="container" style={{ marginTop: "100px" }}>
        <div className="row justify-content-center align-items-center">
          {children}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
