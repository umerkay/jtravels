import React, { useState } from "react";
import "../App.css";
import "./HeroSection.scss";
import ModuleSelector from "./ModuleSelector";
import { modules } from "../staticData";

function HeroSection() {
  const [module, setModule] = useState(modules[0]);

  return (
    <div className="hero">
      <div className="hero-container">
        <div id="hero-text">Enjoy Your Trip With Us</div>
        <div id="hero-search">
          <div className="search-select">
            <ModuleSelector
              module={module}
              setModule={setModule}
              id="hero-module-select"
            ></ModuleSelector>
          </div>
          <div class="module-search">{module.heroView}</div>
          <button class="btn primary">SEARCH</button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
