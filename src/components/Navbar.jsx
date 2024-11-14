import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import "../assets/css/navbar.css";

const Navbar = () => {
  const [isToggled, setIsToggled] = useState(false);
  const navData = [
    { title: "Company Form", link: "/" },
    { title: "Invoices", link: "/invoice-list" },
  ];

  const handleToggleMenu = () => {
    setIsToggled(!isToggled);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top shadow">
      <div className="container-fluid">
        <div className="navbar-toggler" style={{ border: "none !important" }}>
          <FiMenu
            className="d-flex justify-content-end"
            onClick={handleToggleMenu}
          />
        </div>
        <div
          className={`offcanvas offcanvas-end ${isToggled ? "show" : ""}`}
          tabIndex="-1"
        >
          <div className="offcanvas-header justify-content-end">
            <FiX onClick={handleToggleMenu} />
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-start flex-grow-1 pe-3">
              {navData.map((value, index) => (
                <li className="nav-item" key={index}>
                  <a className="nav-link" href={value.link}>
                    {value.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
