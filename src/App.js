import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(
      "http://apilayer.net/api/validate?access_key=3eece2042c90e054c219c77fd5453008&number=14158586273&country_code=IN&format=1"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data);
      });
  }, []);
  if (data) {
    return (
      <>
        <h1>{data.number}</h1>;
      </>
    );
  } else {
    return <h1>Data is Loading...</h1>;
  }
}

export default App;
