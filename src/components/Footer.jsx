import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";

const Footer = () => {
  const footerData = [
    { icon: <FaGithub />, link: "#" },
    { icon: <FaLinkedinIn />, link: "#" },
  ];
  return (
    <>
      <div className="container">
        <footer className="py-4 my-4">
          <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            {footerData.map((value, index) => (
              <li className="nav-item" key={index}>
                <a
                  href={value.link}
                  className="nav-link px-2 text-dark"
                  style={{ fontSize: "22px" }}
                >
                  {value.icon}
                </a>
              </li>
            ))}
          </ul>
          <p className="text-center">
            &copy; {new Date().getFullYear()} CrystalLabs. All Rights Reserved.
          </p>
        </footer>
      </div>
    </>
  );
};

export default Footer;
