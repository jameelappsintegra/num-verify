import React from "react";

const InputFiels = (props) => {
  return (
    <div>
      <input
        pattern="[0-9]*"
        placeholder="Telephone Number"
        value={props.name}
        onChange={props.onChangeName}
      />
      <button onClick={props.Check}>Check</button>
    </div>
  );
};

export default InputFiels;
