import useScrollAnimation from "./Hooks/useScrollAnimation";
import "./OpenSourceSection.css";

function OpenSourceSection() {
  const containerRef = useScrollAnimation();
  return (
    <div className="opensource-section" ref={containerRef}>
      <div className="heading-container">
        <p className="heading-1">Experiments & Open Source</p>
        <p className="heading-2">Web is fun.</p>
      </div>
      <div className="element-container-main">
        <div className="element-container-cover-1"></div>
        <div className="element-container-cover-2"></div>
        <div className="element-container">
          <div className="loader-container">
            <div className="loader-sub-container">
              <div className="motion-circle c1"></div>
              <div className="motion-circle c2"></div>
              <div className="motion-circle c3"></div>
              <div className="motion-circle c4"></div>
            </div>
            <div className="element-title-section">
              <div className="element-title-container">
                <h2 className="element-title-02">
                  CSS3 preloader + Preloader Page
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="element-container">
          <div className="loader-container">
            <div className="loader-sub-container">
              <div className="book-table-button">
                <div className="book-table">
                  <h1>Reserve Your Table</h1>
                </div>
                <div className="button-ball">
                  <h1>Now!</h1>
                </div>
              </div>
            </div>
            <div className="element-title-section">
              <div className="element-title-container">
                <h2 className="element-title-02">
                  Animated Button with hover and active
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OpenSourceSection;
