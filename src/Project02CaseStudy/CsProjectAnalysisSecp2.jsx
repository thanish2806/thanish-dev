import { useNavigate } from "react-router-dom";
import "./CsProjectAnalysisSecp2.css";
import NanalCafeUI from "../assets/Nanalcafe-Ui/nanalcafe-ui.png";
import NanalCafePages from "../assets/Nanalcafe-Ui/nanalcafe-ui-pages.png";

function CsProjectAnalysisSec() {
  const navigate = useNavigate();

  function navigateToNextWork() {
    navigate("/skillnest-casestudy");
  }

  return (
    <section className="project-analysis-section">
      <div className="section-mask"></div>

      <h4 className="casestudy-section-subtitle">Analysis &amp; Preparation</h4>
      <h2 className="casestudy-section-title">Branding</h2>

      <div className="casestudy-section-inner-container">
        <div className="single-work-text-content is-left single-work-first-anim-blocks">
          <h3 className="casestudy-section-content-title">
            A Warm and Inviting Design
          </h3>
          <div className="casestudy-section-content-separator"></div>
          <div className="casestudy-section-content-desc">
            <p>
              As the <strong>Front-end Developer & UI Designer</strong>, I
              created the entire interface for the NanalCafe website. The focus
              was on enhancing the user experience and creating a visually
              appealing platform for showcasing the cafe’s dishes.
            </p>
            <p>
              One key highlight was implementing the{" "}
              <strong>infinite autoplay slider</strong>
              for dishes and designing a smooth, responsive navigation for both
              desktop and mobile users.
            </p>
          </div>
        </div>

        <div className="casestudy-section-ui-image-container">
          <img src={NanalCafeUI} alt="NanalCafe User Interface Example" />
        </div>
      </div>

      {/* Color Palette */}
      <div className="casestudy-section-color-palette-section">
        {[
          { color: "#f2f2ef", name: "$ Soft Ivory" },
          { color: "#fe6d73", name: "$ Coral Pink" },
          { color: "#262626", name: "$ Rich Black" },
          { color: "#f3d127", name: "$ Golden Glow" },
          { color: "#61e56a", name: "$ Spring Mint" },
        ].map((palette, idx) => (
          <div key={idx} className="color-palette-container">
            <div
              className="color-palette"
              style={{ backgroundColor: palette.color }}
            ></div>
            <h5 className="color-palette-name">{palette.name}</h5>
          </div>
        ))}
      </div>

      {/* Fonts */}
      <div className="casestudy-section-fonts-block">
        <div className="casestudy-section-font-style-1">
          <h2 className="title-font-style-1">Heading Font</h2>
          <p>Code. Create. Repeat — 24/7 innovation starts here.</p>
        </div>
        <div className="casestudy-section-font-style-2">
          <h2 className="title-font-style-2">Body Font</h2>
          <p>Code. Create. Repeat — 24/7 innovation starts here.</p>
        </div>
      </div>

      {/* UI Components */}
      <div className="casestudy-section-ui-container">
        <h4 className="casestudy-section-subtitle">UI &amp; Components</h4>
        <h2 className="casestudy-section-title">Interactive Elements</h2>
        <div className="single-work-ui-image">
          <img src={NanalCafePages} alt="NanalCafe Slider Component" />
        </div>
        {/* <a
          class="button buynow"
          target="_blank"
          href="https://thanishta5.gumroad.com/l/resturantdesign"
        >
          <svg
            viewBox="0 0 16 16"
            class="bi bi-cart-check"
            height="24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
            fill="#fff"
          >
            <path d="M11.354 6.354a.5.5 0 0 0-.708-.708L8 8.293 6.854 7.146a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"></path>
            <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
          </svg>
          <p class="text">Buy the Template</p>
        </a> */}
      </div>

      {/* Next Project Link */}
      <div
        className="next-work-container"
        onClick={navigateToNextWork}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            navigateToNextWork();
          }
        }}
        aria-label="Navigate to Skill Nest Case Study"
      >
        <div className="next-work">
          <h5 className="next-work-lead">Next Work</h5>
          <h4 className="next-work-title">Skill Nest - Platform Case Study</h4>
          <div className="casestudy-section-content-separator"></div>
          <div className="next-work-arrow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 476.213 476.213"
              aria-hidden="true"
            >
              <path d="M405.606 167.5l-21.212 21.213 34.393 34.393H0v30h418.787L384.394 287.5l21.212 21.213 70.607-70.607"></path>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CsProjectAnalysisSec;
