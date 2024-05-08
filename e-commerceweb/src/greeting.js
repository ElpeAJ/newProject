import React from 'react';


function Greeting(props){
  if (props.pw === true){
  return <h1 className='welcome'>Welcome {props.name}! We missed you!</h1>;
  } else {
    return (
      <h1 className="welcome">
        Hi there login or sign up <a href="../pages/login.html">here</a>
      </h1>
    );
  }
}

export default Greeting;