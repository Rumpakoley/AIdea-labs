import { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "motion/react";
import Navbar from "./components/Navbar";
import CustomCursor from "./components/CustomCursor";
import Preloader from "./components/Preloader";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";

export default function App() {
  const [appLoaded, setAppLoaded] = useState(false);
  const location = useLocation();

  return (
    <main className={`relative min-h-screen bg-navy overflow-x-hidden cursor-none ${!appLoaded ? 'h-screen overflow-hidden' : ''}`}>
      <Preloader onComplete={() => setAppLoaded(true)} />
      <CustomCursor />
      <Navbar />
      
      <AnimatePresence mode="wait">
        {/* @ts-ignore - React Router v7 types missing key prop in React 19 */}
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </AnimatePresence>
    </main>
  );
}
