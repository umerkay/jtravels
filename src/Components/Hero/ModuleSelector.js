import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { modules } from "../../staticData";
import "./ModuleSelector.scss";

export default function ModuleSelector({ module, setModule }) {
  return (
    <>
      {modules.map((thisModule) => {
        const { Icon, display } = thisModule;
        return (
          <div
            key={display}
            className={
              "module-icon" + (module.display === display ? " selected" : "")
            }
            onClick={() => setModule(thisModule)}
          >
            <FontAwesomeIcon className="icon" icon={Icon}></FontAwesomeIcon>
            <span>{display}</span>
          </div>
        );
      })}
    </>
  );
}
