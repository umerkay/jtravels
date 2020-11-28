import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./PackageCard.scss";

export default function PackageCard({ holPackage }) {
  if (holPackage)
    return (
      <div class="holPackage">
        <div class="left">
          <div class="image">
            <img src={holPackage.img} alt="" />
          </div>
          <div class="rating">
            {[...Array(holPackage.rating)].map((n) => (
              <FontAwesomeIcon icon={faStar} key={n}></FontAwesomeIcon>
            ))}
          </div>
        </div>
        <div class="right">
          <div class="city">{holPackage.destination.city}</div>
          <div class="country">{holPackage.destination.country}</div>

          <div class="desc">{holPackage.description}</div>
        </div>
      </div>
    );
  else
    return (
      <div class="holPackage">
        <div class="left">
          <div class="image">{/* <img src={holPackage.img} alt="" /> */}</div>
          <div class="rating">
            {/* {[...Array(holPackage.rating)].map((n) => (
        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
      ))} */}
          </div>
        </div>
        <div class="right">
          <div class="city">
            <span class="placeholder-text"></span>
          </div>
          <div class="country">
            <span class="placeholder-text"></span>
          </div>

          <div class="desc" style={{ minWidth: "200px", height: "3rem" }}>
            <span style={{ height: "3rem" }} class="placeholder-text"></span>
          </div>
        </div>
      </div>
    );
}
