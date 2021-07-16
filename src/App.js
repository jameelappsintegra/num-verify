import React, { useState } from "react";
import "./App.css";
import InputFiels from "./components/InputField/InputField";
import NumVerify from "./components/NumVerify/NumVerify";

function App() {
  const [value, setValue] = useState(null);

  const changeName = (name) => {
    setValue(name);
    console.log(value);
  };

  return (
    <div className="container">
      <NumVerify number={9629729742} />
      <InputFiels onChangeName={(e) => changeName(e.target.value)} />
    </div>
  );
}

export default App;
