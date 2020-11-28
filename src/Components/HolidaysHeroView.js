import React from "react";
import SelectSearch from "react-select-search";
import "./HolidaysHeroView.scss";

const fromCities = ["Karachi", "Islamabad", "Lahore", "Hyderabad", "Sukkur"];

export default function HolidaysHeroView() {
  return (
    <div id="holidaysHeroView">
      <div class="from">
        <div class="label">FROM CITY</div>
        {/* <input class="input" type="text" id="from"></input> */}
        <SelectSearch
          options={fromCities.map((c) => ({ value: c, name: c }))}
          search
          placeholder="Search"
        ></SelectSearch>
      </div>
      <div class="destination">
        <div class="label">DESTINATION</div>
        {/* <input class="input" type="text" id="to"></input> */}
        <SelectSearch
          options={fromCities.map((c) => ({ value: c, name: c }))}
          search
          placeholder="Search"
          emptyMessage={() => (
            <div
              style={{
                textAlign: "center",
                padding: "1rem",
                fontSize: "0.8rem",
              }}
            >
              Sorry we could not find that :(
            </div>
          )}
        ></SelectSearch>
      </div>
    </div>
  );
}
