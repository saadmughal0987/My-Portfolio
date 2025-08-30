import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import HomePage from "./pages/HomePage/HomePage";

import { DarkModeProvider } from "./Context/DarkModeContext";
import DarkModeWrapper from "./Context/DarkModeWrapper";

function App() {
  return (
    <DarkModeProvider>
      <DarkModeWrapper>
        <BrowserRouter>
          <div style={{ display: "flex" }}>
            <Sidebar />

            <div style={{ flex: 1, padding: "20px" }}>
              <Routes>
                {/* Default redirect from "/" to "/home" */}
                <Route path="/" element={<Navigate to="/home" replace />} />

                <Route path="/home" element={<HomePage />} />
                <Route path="/about" element={<h1>About Page</h1>} />
                <Route path="/services" element={<h1>Services Page</h1>} />
                <Route path="/contact" element={<h1>Contact Page</h1>} />

                {/* Agar galat route likhe to 404 */}
                <Route path="*" element={<h1>404 - Page Not Found</h1>} />
              </Routes>
            </div>
          </div>
        </BrowserRouter>
      </DarkModeWrapper>
    </DarkModeProvider>
  );
}

export default App;
