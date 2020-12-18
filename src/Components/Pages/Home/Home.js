import React, { useContext, useEffect, useState } from "react";
import "../../../App.css";
import HeroSection from "../../Hero/HeroSection";
import Footer from "../../Footer";
import { fakeFetch } from "../../../fakeFetch";
import PackageCard from "../../PackageCard";
import "./Home.scss";
import SelectSearch from "react-select-search";
import HolPackages from "../../HolPackages";
import TourCard from "./TourCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { StateStore } from "../../../Store";
import DiscountPackageCard from "./DiscountPackageCard";
import OurServices from "./OurServices";

function Home() {
  const [packages, setPackages] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);
  const [tours, setTours] = useState(Array(9).fill(null));

  const [discCards, setDiscCards] = useState(Array(9).fill(null));
  const [category, setCategory] = useState(null);

  useEffect(() => {
    fakeFetch`/api/packages`.then((res) => setPackages(res.data));
    fakeFetch`/api/tours`.then((res) => setTours(res.data));
    fakeFetch`/api/disccards`.then((res) => setDiscCards(res.data));
  }, []);

  return (
    <>
      <HeroSection />

      <div class="bodySection">
        <OurServices></OurServices>

        <div class="flexbox">
          <h1 style={{ flexGrow: 5 }}>Tours</h1>
          <div style={{ flexGrow: 1, minWidth: 200, fontSize: "1.5rem" }}>
            <SelectSearch
              options={["domestic", "international", "all"].map((i) => ({
                value: i,
                name: i.charAt(0).toUpperCase() + i.slice(1),
              }))}
              value={"all"}
              onChange={(v) => setCategory(v)}
              printOptions="on-focus"
              placeholder="Filter"
            ></SelectSearch>
          </div>
        </div>
        <div className="h-sub">Find out the most interesting places</div>

        <Carousel responsive={buildRespObj(8, 4.5, 3.5, 2.4, 1.6)}>
          {tours.map((tour) => (
            <TourCard tour={tour}></TourCard>
          ))}
        </Carousel>

        <div class="spacer"></div>
        <h1>Special Offers</h1>
        <div className="h-sub">Hurry up! Limited Discounts</div>

        <Carousel responsive={buildRespObj(6.5, 3.5, 2.5, 2.1, 1.2)}>
          {discCards.map((discCard) => (
            <DiscountPackageCard info={discCard}></DiscountPackageCard>
          ))}
        </Carousel>

        <div class="spacer"></div>
        <h1>Upcoming Events</h1>

        <Carousel responsive={buildRespObj(6.5, 3.5, 2.5, 2.1, 1.2)}>
          {discCards.map((discCard) => (
            <DiscountPackageCard info={discCard}></DiscountPackageCard>
          ))}
        </Carousel>
      </div>

      <Footer />
    </>
  );
}

function shouldShow(pkg, filters) {
  if (filters.length === 0) return true;
  for (let c of pkg.categories) {
    if (filters.includes(c)) return true;
  }
}

export default Home;

function buildRespObj(a, b, c, d, e) {
  return {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: a,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: b,
    },
    tablet: {
      breakpoint: { max: 960, min: 720 },
      items: c,
    },
    mobile2: {
      breakpoint: { max: 720, min: 600 },
      items: d,
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: e,
    },
  };
}
