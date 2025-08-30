import { useState, useContext } from "react";
import {
  FaHome,
  FaUser,
  FaCog,
  FaBriefcase,
  FaNewspaper,
  FaEnvelope,
  FaBars,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { DarkModeContext } from "../../Context/DarkModeContext";
import "./Sidebar.css";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const { darkMode } = useContext(DarkModeContext);

  const toggleMenu = () => setIsOpen(!isOpen);
  const handleLinkClick = () => setIsOpen(false);

  const links = [
    { to: "/home", icon: <FaHome />, label: "Home" },
    { to: "/about", icon: <FaUser />, label: "About" },
    { to: "/service", icon: <FaCog />, label: "Service" },
    { to: "/portfolio", icon: <FaBriefcase />, label: "Portfolio" },
    { to: "/news", icon: <FaNewspaper />, label: "News" },
    { to: "/contact", icon: <FaEnvelope />, label: "Contact" },
  ];

  return (
    <>
      {/* Mobile Header */}
      <div
        className={`md:hidden flex justify-between items-center p-4 fixed top-0 left-0 w-full z-20 ${
          darkMode ? "bg-[#323232] text-white" : "bg-white text-black"
        }`}
      >
        <h1 className="font-manufacturing font-bold text-xl">SAAD</h1>
        <button onClick={toggleMenu}>
          <FaBars size={24} />
        </button>
      </div>

      <aside
        className={`fixed top-0 left-0 h-full w-64 flex flex-col justify-between p-6 z-30 transform
          ${
            darkMode
              ? "bg-[#000000] text-white shadow-none"
              : "bg-white text-black shadow-md"
          }
          ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0 transition-transform duration-300`}
      >
        <h1 className="font-bold text-2xl mb-10">SAAD</h1>

        <nav className="flex flex-col gap-6">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={handleLinkClick}
              className={({ isActive }) => {
                if (darkMode) {
                  return `flex items-center gap-3 ${
                    isActive ? "text-white" : "text-gray-400 hover:text-white"
                  }`;
                } else {
                  return `flex items-center gap-3 ${
                    isActive ? "text-black" : "text-gray-600 hover:text-black"
                  }`;
                }
              }}
            >
              {link.icon} {link.label}
            </NavLink>
          ))}
        </nav>

        <div
          className="text-sm mt-10"
          style={{ color: darkMode ? "#ccc" : "#555" }}
        >
          <p>© 2025 Saad</p>
          <p>
            Created by <span className="italic font-bold">M-Saad</span>
          </p>
        </div>
      </aside>
    </>
  );
}
