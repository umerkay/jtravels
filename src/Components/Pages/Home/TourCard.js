import {
  faBriefcase,
  faMoneyBillWaveAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import "./TourCard.scss";

export default function TourCard({ tour }) {
  if (tour)
    return (
      <div className="tourCard">
        <img src={tour.img} className="img" />
        <div className="info">
          <div className="title">{tour.destination.city}</div>
          <div className="cost">
            {" "}
            <FontAwesomeIcon
              className="icon"
              icon={faMoneyBillWaveAlt}
            ></FontAwesomeIcon>{" "}
            Starting from {tour.minimumCost}
          </div>
          <div className="packNo">
            <FontAwesomeIcon
              className="icon"
              icon={faBriefcase}
            ></FontAwesomeIcon>{" "}
            {tour.totalCount} Packages
          </div>
          <Link className="btn" to="/">
            Explore Packages
          </Link>
        </div>
      </div>
    );
  else
    return (
      <div className="tourCard">
        <img alt="" className="img" />
        <div className="info">
          <div className="title">
            <div class="placeholder-text"></div>
          </div>
          <div className="cost">
            <div class="placeholder-text"></div>
          </div>
          <div className="packNo">
            <div class="placeholder-text"></div>
          </div>
          <Link className="btn" to="/">
            <div class="placeholder-text"></div>
          </Link>
        </div>
      </div>
    );
}
