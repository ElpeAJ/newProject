import React from "react";

function Button(props) {
  function handleClick() {
    return alert("Got you covered");
  }
  return (
    <button className="order" onClick={handleClick}>
      {props.value}
    </button>
  );
}

Button.defaultProps = {
  value: 'Just a Click away'
};

export default Button;
