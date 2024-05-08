import React, { useState } from "react";

function Toggle() {
  const [toggle, setToggle] = useState();

  return (
    <div>
      <p>The toggle is {toggle}</p>
      <button className="add-space" onClick={() => setToggle("On")}></button>
      <button className="add-space" onClick={() => setToggle("Off")}></button>
    </div>
  );
}

export default Toggle;
