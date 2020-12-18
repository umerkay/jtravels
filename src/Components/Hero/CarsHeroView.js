import React, { useEffect, useState } from "react";
import DatePicker from "react-date-picker";
import { Link } from "react-router-dom";
import SelectSearch from "react-select-search";
import "./CarsHeroView.scss";

const fromCities = [
  "Karachi",
  "Islamabad",
  "Lahore",
  "Hyderabad",
  "Sukkur",
  "Goa",
];

export default function CarsHeroView() {
  const [formState, setFormState] = useState({});
  const [query, setQuery] = useState("");

  useEffect(() => {
    updateQuery();
  }, [formState]);

  function updateQuery() {
    setQuery(
      `/cars?from=${formState.from}&pickup=${formState.pickupDate}&dropoff=${formState.dropOffDate}`
    );
  }

  function updateForm(value, key) {
    setFormState({ ...formState, ...{ [key]: value } });
  }
  return (
    <div id="carsHeroView">
      <div className="from">
        <div className="label">PICKUP CITY</div>
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
        <div class="label">PICKUP DATE</div>
        <DatePicker
          className="inputDate"
          value={formState.pickupDate}
          minDate={new Date()}
          onChange={(v) => {
            updateForm(v, "pickupDate");
          }}
        ></DatePicker>
      </div>
      <div class="destination">
        <div class="label">DROPOFF DATE</div>
        <DatePicker
          className="inputDate"
          value={formState.dropOffDate}
          minDate={formState.pickupDate}
          onChange={(v) => {
            updateForm(v, "dropOffDate");
          }}
        ></DatePicker>
      </div>
      <span></span>
      <Link to={"/s" + query} className="link">
        <button class="btn primary">SEARCH</button>
      </Link>
    </div>
  );
}
