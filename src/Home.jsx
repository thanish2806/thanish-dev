import React, { useState } from "react";
import Navbar from "./Navbar.jsx";
import HeroSection from "./HeroSection.jsx";
import Projects from "./projects.jsx";
import OpenSourceSection from "./OpenSourceSection.jsx";
import Footer from "./footer.jsx";
import Mainmenu from "./mainmenu.jsx";
import "./home.css";

function Home() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMenu = () => setIsMenuVisible((prev) => !prev);
  const closeMenu = () => setIsMenuVisible(false);

  return (
    <div className="home-editorial-wrapper">
      <Navbar toggleMenu={toggleMenu} />
      <main className="home" id="main-content">
        <HeroSection toggleMenu={toggleMenu} />
        <Projects />
        <OpenSourceSection />
      </main>
      <Footer />

      {/* Global Dossier & Contact Modal */}
      <Mainmenu isVisible={isMenuVisible} onClose={closeMenu} />
    </div>
  );
}

export default Home;
