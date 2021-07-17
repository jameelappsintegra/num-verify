import React, { useEffect, useState } from "react";

const NumVerify = (props) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(
      "http://apilayer.net/api/validate?access_key=660de625f59f45ea2cffa17b2a07a135&country_code=IN&format=1&number=" +
        props.number
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data);
      });
  }, []);
  console.log(data);

  if (data) {
    return (
      <>
        <h1>{data.number}</h1>
        <p>{data.carrier}</p>
        <p>{data.country_code}</p>
        <p>{data.country_name}</p>
        <p>{data.country_prefix}</p>
        <p>{data.international_format}</p>
        <p>{data.local_format}</p>
        <p>{data.line_type}</p>
        <p>{data.location}</p>
      </>
    );
  } else {
    return <h1>Data is Loading...</h1>;
  }
};

export default NumVerify;
