import React from "react";
import PackageCard from "./PackageCard";

export default function HolPackages({ packages, filters }) {
  return (
    <>
      {packages
        .filter((p) => !p || !filters || shouldShow(p, filters))
        .map((holPackage, n) => (
          <PackageCard
            key={holPackage?.id}
            holPackage={holPackage}
          ></PackageCard>
        ))}
    </>
  );
}

const shouldShow = (p, filters) => {
  for (let filter of filters) {
    if (filter.value && filter.value !== "all") {
      if (filter.value instanceof Function && !filter.value(p)) {
        return false;
      } else if (p[filter.key] instanceof Array) {
        if (!p[filter.key].includes(filter.value)) {
          return false;
        }
      } else {
        if (p[filter.key] !== filter.value) {
          return false;
        }
      }
    }
  }
  return true;
};
