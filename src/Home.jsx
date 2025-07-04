
import Header from "./HeroSection";
import Mainmenu from "./mainmenu";
import Projects from "./projects";
import Footer from "./footer";
import "./home.css";


import HeroSection from "./HeroSection";

function Home() {
  

  return (
    <div className="home" >
      <HeroSection />

      {/* Background logo with animation */}
        
        {/* Dynamic text movement 
        
        <div
          className="animated-text"
          style={{
            transform: `translate(${mouseX / 100}px, ${mouseY / 100}px)`,
          }}
        ></div>
        */}
      

      <Projects />
      <Footer />
    </div>
  );
}

export default Home;
