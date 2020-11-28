import React, { useEffect, useState } from "react";
import "../../App.css";
import Cards from "../Cards";
import HeroSection from "../HeroSection";
import Footer from "../Footer";
import { fakeFetch } from "../../fakeFetch";
import PackageCard from "../PackageCard";
import "./Home.scss";
import SelectSearch from "react-select-search";

function Home() {
  const [packages, setPackages] = useState([null, null, null]);
  const [filter, setFilter] = useState(null);
  useEffect(() => {
    fakeFetch`/api/packages`.then((res) => setPackages(res.data));
  }, []);

  return (
    <>
      <HeroSection />

      <div class="bodySection">
        <div class="flexbox">
          <h1 style={{ flexGrow: 5 }}>Popular Destinations</h1>
          {/* <select
            name="filter"
            id=""
            onChange={(e) =>
              setFilter(e.target.value === "all" ? null : e.target.value)
            }
          >
            <option value="all">All</option>
            <option value="domestic">Domestic</option>
            <option value="international">International</option>
          </select> */}
          <div style={{ flexGrow: 1, minWidth: 200, fontSize: "1.5rem" }}>
            <SelectSearch
              options={["domestic", "international"].map((i) => ({
                value: i,
                name: i.charAt(0).toUpperCase() + i.slice(1),
              }))}
              onChange={(v) => setFilter(v)}
              multiple
              printOptions="on-focus"
              placeholder="Filter"
            ></SelectSearch>
          </div>
        </div>

        <div class="packageCards">
          {packages
            .filter((p) => !filter || shouldShow(p, filter))
            .map((holPackage, n) => (
              <PackageCard
                key={holPackage?.destination.city || n}
                holPackage={holPackage}
              ></PackageCard>
            ))}
        </div>
        <div class="spacer"></div>
        <h1>Special Offers</h1>

        <div class="packageCards">
          {packages.map((holPackage, n) => (
            <PackageCard
              key={holPackage?.destination.city || n}
              holPackage={holPackage}
            ></PackageCard>
          ))}
        </div>
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
