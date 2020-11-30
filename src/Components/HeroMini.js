import React, { useState } from "react";
import ModuleSelector from "./ModuleSelector";
import "./HeroSection.scss";
import { modules } from "../staticData";

export default function HeroMini() {
  const [module, setModule] = useState(
    modules.find((m) => m.display === "Holidays")
  );

  return (
    <div className="hero mini">
      <div id="hero-search">
        <div className="search-select">
          <ModuleSelector
            module={module}
            setModule={setModule}
            id="hero-module-select"
          ></ModuleSelector>
        </div>
        <div class="module-search">{module.heroView}</div>
      </div>
    </div>
  );
}
