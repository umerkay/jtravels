import React from "react";
import HolidaysHeroView from "./Components/Hero/HolidaysHeroView";
import {
  faBus,
  faCar,
  faHotel,
  faPlane,
  faStarAndCrescent,
  faTrain,
  faUmbrellaBeach,
} from "@fortawesome/free-solid-svg-icons";
import CarsHeroView from "./Components/Hero/CarsHeroView";

export const modules = [
  {
    display: "Holidays",
    heroView: <HolidaysHeroView></HolidaysHeroView>,
    Icon: faUmbrellaBeach,
    searchMessage: ({ dest }) => `Holidays in ${dest}`,
  },
  {
    display: "Cars",
    heroView: <CarsHeroView></CarsHeroView>,
    Icon: faCar,
    bodyView: [
      /* components */
    ],
  },
  { display: "Trains", heroView: React.Component, Icon: faTrain },
  { display: "Flights", heroView: React.Component, Icon: faPlane },
  { display: "Hotels", heroView: React.Component, Icon: faHotel },
  { display: "Umrah", heroView: React.Component, Icon: faStarAndCrescent },
];
