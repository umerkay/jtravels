import React, { useEffect, useState } from "react";
import "../../App.css";
import Cards from "../Cards";
import HeroSection from "../HeroSection";
import Footer from "../Footer";
import { fakeFetch } from "../../fakeFetch";
import PackageCard from "../PackageCard";
import "./Home.scss";
import SelectSearch from "react-select-search";
import HolPackages from "../HolPackages";

function Home() {
  const [packages, setPackages] = useState([null, null, null]);
  const [category, setCategory] = useState(null);
  useEffect(() => {
    fakeFetch`/api/packages`.then((res) => setPackages(res.data));
  }, []);

  return (
    <>
      <HeroSection />

      <div class="bodySection">
        <div class="flexbox">
          <h1 style={{ flexGrow: 5 }}>Popular Destinations</h1>
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

        <div class="packageCards">
          <HolPackages
            packages={packages}
            filters={[{ key: "categories", value: category }]}
          ></HolPackages>
        </div>
        <div class="spacer"></div>
        <h1>Special Offers</h1>
        <HolPackages packages={packages}></HolPackages>
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
