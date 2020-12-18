import {
  faCar,
  faDesktop,
  faHotel,
  faUmbrellaBeach,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Link } from "react-router-dom";
import IconList from "../../IconList";
import "./DiscountPackageCard.scss";

export default function DiscountPackageCard({ info }) {
  if (info)
    return (
      <div className="discCard">
        <img src={info.img} className="img" />
        <div className="info">
          <div className="title">{info.category}</div>
          <div className="money">
            <div className="discount">{info.discount}</div>
            <div className="cost">
              <div class="oldprice">{info.oldprice}</div>
              <div class="newprice">{info.newprice}</div>
            </div>
          </div>
          <IconList
            icons={[
              [faHotel, "Hotels"],
              [faDesktop, "Visa"],
              [faCar, "Transfer"],
              [faUmbrellaBeach, "Activity"],
            ]}
          ></IconList>
          <Link className="btn" to="/">
            Explore Packages
          </Link>
        </div>
      </div>
    );
  else
    return (
      <div className="discCard">
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
