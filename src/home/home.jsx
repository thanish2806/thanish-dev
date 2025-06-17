import React, { useState, useEffect } from "react";
import Header from "./header";
import Mainmenu from "./mainmenu";
import Projects from "./projects";
import Footer from "./footer";
import "./home.css";
import Navbar from "./navbar";

function Home() {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  // Mouse move event handler
  const handleMouseMove = (e) => {
    setMouseX(e.clientX);
    setMouseY(e.clientY);
  };

  useEffect(() => {
    // Add event listener
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="home" onMouseMove={handleMouseMove}>
      <Navbar />
      <Header />

      {/* Background logo with animation */}
      <img
        src="./images/my-logo-icon.png"
        className="background-logo"
        alt="Logo"
        style={{
          transform: `translate(${mouseX / 80}px, ${mouseY / 80}px)`,
        }}
      />

      {/* Dynamic text movement */}
      <div
        className="animated-text"
        style={{
          transform: `translate(${mouseX / 100}px, ${mouseY / 100}px)`,
        }}
      ></div>

      <Projects />
      <Footer />
    </div>
  );
}

export default Home;
