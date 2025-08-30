import React from "react";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Sidebar from "./components/Sidebar/Sidebar";
import HomePage from "./pages/HomePage/HomePage";

import { DarkModeProvider } from "./Context/DarkModeContext";
import DarkModeWrapper from "./Context/DarkModeWrapper";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* Default redirect from "/" to "/home" */}
        <Route path="/" element={<Navigate to="/home" replace />} />

        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<PageWrapper><h1>About Page</h1></PageWrapper>} />
        <Route path="/services" element={<PageWrapper><h1>Services Page</h1></PageWrapper>} />
        <Route path="/contact" element={<PageWrapper><h1>Contact Page</h1></PageWrapper>} />

        {/* Agar galat route likhe to 404 */}
        <Route path="*" element={<PageWrapper><h1>404 - Page Not Found</h1></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
}

// ✅ wrapper component for smooth animation
import { motion } from "framer-motion";
const PageWrapper = ({ children }) => (
  <motion.div
    initial={{ x: -100, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    exit={{ x: 100, opacity: 0 }}
    transition={{ duration: 0.5 }}
  >
    {children}
  </motion.div>
);

function App() {
  return (
    <DarkModeProvider>
      <DarkModeWrapper>
        <BrowserRouter>
          <div style={{ display: "flex" }}>
            <Sidebar />

            <div style={{ flex: 1, padding: "20px" }}>
              <AnimatedRoutes />
            </div>
          </div>
        </BrowserRouter>
      </DarkModeWrapper>
    </DarkModeProvider>
  );
}

export default App;
