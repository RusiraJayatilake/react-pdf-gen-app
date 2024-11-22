import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { GoSun, GoMoon } from "react-icons/go";
import Toggle from "react-toggle";
import "react-toggle/style.css";
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
      <div className="container">
        <div className="navbar-toggler" style={{ border: "none !important" }}>
          <FiMenu
            className="d-flex justify-content-start"
            onClick={handleToggleMenu}
            size={25}
          />
        </div>
        <div
          className={`offcanvas offcanvas-start ${isToggled ? "show" : ""}`}
          tabIndex="-1"
        >
          <div className="offcanvas-header justify-content-end">
            <FiX onClick={handleToggleMenu} size={25} />
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

        {/* Dark & Light Mode Toggles */}
        <div className="d-flex align-items-center gap-1">
          <GoSun size={18} />
          <Toggle icons={false} />
          <GoMoon size={18} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
