import React from 'react';

function FooterList(props){
  let listHeading = `${props.heading}`;
  if (props.children.length > 1){  // if (props.children instanceof array){} else{}
    listHeading += 's'};

  return (
    <div>
      <h3>{listHeading}</h3>
      <ul>{props.children}</ul>
    </div>
  );
}

export default FooterList;