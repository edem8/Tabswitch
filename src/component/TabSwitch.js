import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function TabSwitch() {
  const [Text, setText] = useState("REQUEST");

  const handler1 = () => {
    setText("..HOME..");
  };

  const handler2 = () => {
    setText("REQUEST");
  };

  if (Text === "..HOME..") {
    return (
      <NavLink to="/" onClick={handler2}>
        {Text}
      </NavLink>
    );
  }
  return (
    <NavLink to="request" onClick={handler1}>
      {Text}
    </NavLink>
  );
}
export default TabSwitch;
