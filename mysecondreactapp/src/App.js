import React from "react";

function Picture() {
  return (
    <img
      className="octopus"
      src="https://content.codecademy.com/courses/React/react_photo-octopus.jpg"
      alt="octopus"
    />
  );
}

function Profile() {
  return (
    <>
      <Picture />
      <div className="octopusinfo">
        <h1>Name: Octavia</h1>
        <h2>Species: Octopus</h2>
        <h2>Class: Cephalopoda</h2>
      </div>
    </>
  );
}

export default Profile;
