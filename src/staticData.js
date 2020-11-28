import React from "react";
import HolidaysHeroView from "./Components/HolidaysHeroView";
import {
  faBus,
  faHotel,
  faPlane,
  faStar,
  faStarAndCrescent,
  faTrain,
  faUmbrellaBeach,
} from "@fortawesome/free-solid-svg-icons";

export const modules = [
  {
    display: "Holidays",
    heroView: <HolidaysHeroView></HolidaysHeroView>,
    Icon: faUmbrellaBeach,
  },
  { display: "Busses", heroView: React.Component, Icon: faBus },
  { display: "Trains", heroView: React.Component, Icon: faTrain },
  { display: "Flights", heroView: React.Component, Icon: faPlane },
  { display: "Hotels", heroView: React.Component, Icon: faHotel },
  { display: "Umrah", heroView: React.Component, Icon: faStarAndCrescent },
];
