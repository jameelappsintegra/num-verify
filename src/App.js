import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [number, setnumber] = useState(null);

  useEffect(() => {
    fetch(
      "http://apilayer.net/api/validate?access_key=3eece2042c90e054c219c77fd5453008&number=14158586273&country_code=IN&format=1"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        console.log(data.country_code);
      })
      .then((data) => setnumber(data));
  }, []);

  return (
    <div className="App">
      <div className="card text-center m-3">
        <h5 className="card-header">Simple GET Request</h5>
        <div className="card-body">Total react packages: {number}</div>
      </div>
    </div>
  );
}

export default App;
