import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SelectSearch from "react-select-search";
import "./HolidaysHeroView.scss";

const fromCities = [
  "Karachi",
  "Islamabad",
  "Lahore",
  "Hyderabad",
  "Sukkur",
  "Goa",
];

export default function HolidaysHeroView() {
  const [formState, setFormState] = useState({});
  const [query, setQuery] = useState("");

  useEffect(() => {
    updateQuery();
  }, [formState]);

  function updateQuery() {
    setQuery(`/Holidays?from=${formState.from}&dest=${formState.dest}`);
  }

  function updateForm(value, key) {
    setFormState({ ...formState, ...{ [key]: value } });
  }

  return (
    <div id="holidaysHeroView">
      <div class="from">
        <div class="label">FROM CITY</div>
        <SelectSearch
          options={fromCities.map((c) => ({ value: c, name: c }))}
          search
          placeholder="Search"
          name="from"
          onChange={(v) => {
            updateForm(v, "from");
          }}
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
      <div class="destination">
        <div class="label">DESTINATION</div>
        <SelectSearch
          options={fromCities.map((c) => ({ value: c, name: c }))}
          search
          placeholder="Search"
          onChange={(v) => {
            updateForm(v, "dest");
          }}
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
      <Link to={"/s" + query}>
        <button class="btn primary">SEARCH</button>
      </Link>
    </div>
  );
}
