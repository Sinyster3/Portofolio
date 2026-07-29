import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Showcase from "./pages/Showcase";
import Contact from "./pages/Contact";
import ProjectDetail from "./pages/ProjectDetail";

// Halaman utama (Landing Page)
function HomePage() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Showcase />
      <Contact />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Halaman utama */}
        <Route path="/" element={<HomePage />} />

        {/* Halaman Detail Project */}
        <Route path="/project/:id" element={<ProjectDetail />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;