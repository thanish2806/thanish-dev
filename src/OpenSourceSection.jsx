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
          <div className="element-cover"></div>
          <div class="loader-container">
            <div class="motion-circle c1"></div>
            <div class="motion-circle c2"></div>
            <div class="motion-circle c3"></div>
            <div class="motion-circle c4"></div>
          </div>
        </div>
        <div className="element-container">
          <div className="element-cover"></div>
          <div class="book-table-button">
            <div class="book-table">
              <h1>Reserve Your Table</h1>
            </div>
            <div class="button-ball">
              <h1>Now!</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OpenSourceSection;
