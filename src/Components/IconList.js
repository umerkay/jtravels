import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const iconListStyles = {
  display: "flex",
  gap: "0.3em",
};
const iconStyles = {
  width: "2em",
  textAlign: "center",
};

export default function IconList({ icons }) {
  /*
        icons: array of icon
        icon: [faIcon, display string]
    */
  return (
    <div class="icon-list" style={iconListStyles}>
      {icons.map((icon) => (
        <div className="_icon" style={iconStyles}>
          <FontAwesomeIcon icon={icon[0]}></FontAwesomeIcon>
          <span style={{ fontSize: "0.6em" }}>{icon[1]}</span>
        </div>
      ))}
    </div>
  );
}
