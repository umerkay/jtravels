import React, { useEffect, useState } from "react";
import { addUrlProps, UrlQueryParamTypes } from "react-url-query";
import { fakeFetch } from "../../fakeFetch";
import { modules } from "../../staticData";
import HeroMini from "../Hero/HeroMini";
import HolPackages from "../HolPackages";

const urlPropsQueryConfig = {
  from: { type: UrlQueryParamTypes.string },
  dest: { type: UrlQueryParamTypes.string },
};

function SearchView({ from, dest, module }) {
  const moduleObj = modules.find((m) => m.display === module);
  const [packages, setPackages] = useState([null, null, null]);
  useEffect(() => {
    fakeFetch`/api/packages`.then((res) => setPackages(res.data));
  }, []);

  return (
    <div>
      <HeroMini from={from} dest={dest}></HeroMini>
      <h1>{moduleObj.searchMessage({ dest })}</h1>
      <HolPackages
        packages={packages.filter((p) => !p || p.destination.city === dest)}
      ></HolPackages>
    </div>
  );
}

export default addUrlProps({ urlPropsQueryConfig })(SearchView);
