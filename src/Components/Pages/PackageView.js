import React, { useEffect, useState } from "react";
import { fakeFetch } from "../../fakeFetch";
import HeroMini from "../HeroMini";

export default function PackageView(props) {
  let id = props.match.params.id;
  const [holPackage, setHolPackage] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fakeFetch`/api/packages/${id}`.then((res) => setHolPackage(res.data));
  }, [id]);
  if (holPackage)
    return (
      <div class="packageView">
        <HeroMini></HeroMini>
      </div>
    );
  else return <div class="packageView">loading..</div>;
}
