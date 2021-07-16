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
    <>
      <NumVerify number={14158586273} />
      <InputFiels onChangeName={(e) => changeName(e.target.value)} />
    </>
  );
}

export default App;
