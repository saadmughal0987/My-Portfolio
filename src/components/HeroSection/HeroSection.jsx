import React, { useContext, useState, useEffect } from "react";
import { DarkModeContext } from "../../Context/DarkModeContext";
import {
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaMoon,
  FaSun,
} from "react-icons/fa";
import { SiVercel } from "react-icons/si";
import "./HeroSection.css";

export default function HeroSection() {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  const words = [
    "Web Developer",
    "Photographer",
    "Software Engineer",
    "Programmer",
    "Coder",
  ];
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [pause, setPause] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let typeSpeed = 120;

    if (pause) return;

    if (deleting) typeSpeed = 100;

    const timeout = setTimeout(() => {
      if (!deleting) {
        setText(currentWord.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);

        if (charIndex + 1 === currentWord.length) {
          setPause(true);
          setTimeout(() => setPause(false), 1000);
          setDeleting(true);
        }
      } else {
        setText(currentWord.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);

        if (charIndex - 1 === 0) {
          setDeleting(false);
          setWordIndex((wordIndex + 1) % words.length);
        }
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, wordIndex, pause]);

  return (
    <div
      className={`h-screen flex items-center justify-center transition-colors duration-300 overflow-hidden hero ${
        darkMode ? "bg-[#111111] text-white" : "bg-[#f8f8f8] text-black"
      }`}
    >
      <div className="flex flex-col md:flex-row items-center gap-10 w-full h-full justify-center">
        <div className="flex-shrink-0">
          <img
            src="/assets/hero1.jpg"
            alt="profile"
            className="w-56 h-56 md:w-80 md:h-80 object-cover rounded-full shadow-lg"
          />
        </div>

        <div className="text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-3">
            MUHAMMAD SAAD
          </h1>

          <h2 className="text-lg md:text-xl font-semibold mb-4 mt-5">
            {text}
            <span className="blinking-cursor">|</span>
          </h2>

          <p className="text-gray-500 max-w-md mb-6 mx-auto md:mx-0">
            Hi, I'm Muhammad Saad – a creative web developer and designer
            passionate about crafting seamless digital experiences. I love
            turning ideas into visually appealing and functional web solutions.
          </p>

          <div className="flex justify-center md:justify-start gap-5 text-xl mt-7 ">
            <a
              href="https://www.instagram.com/_.saad.2004._/?next=%2F"
              target="_blank"
              rel="noopener noreferrer"
              className=" transition-transform transform hover:-translate-y-1 duration-300"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.linkedin.com/in/m-saad-dev/"
              target="_blank"
              rel="noopener noreferrer"
              className=" transition-transform transform hover:-translate-y-1 duration-300"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:yourmail@gmail.com"
              className=" transition-transform transform hover:-translate-y-1 duration-300"
            >
              <FaEnvelope />
            </a>

            <a
              href="https://github.com/saadmughal0987"
              target="_blank"
              rel="noopener noreferrer"
              className="  transition-transform transform hover:-translate-y-1 duration-300"
            >
              <FaGithub />
            </a>

            <a
              href="https://vercel.com/saad-nadeems-projects-8eab1481"
              target="_blank"
              rel="noopener noreferrer"
              className=" transition-transform transform hover:-translate-y-1 duration-300"
            >
              <SiVercel />
            </a>
          </div>
        </div>
      </div>

      <button
        onClick={toggleDarkMode}
        className={`absolute top-1/2 -translate-y-1/2 right-0 p-3 rounded-l-full shadow-md transition pl-5 pr-5 ${
          darkMode ? "bg-[#414141]" : "bg-gray-300"
        }`}
      >
        {darkMode ? (
          <FaSun className="text-white" size={23} />
        ) : (
          <FaMoon className="text-black" size={23} />
        )}
      </button>
    </div>
  );
}
