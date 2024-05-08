import React from 'react';

function NavBar(props){
  const navItems= props.links;
  const mapped = navItems.map(navItem =>{
    return <li>{navItem}</li>;
  })
  return (
    <nav className='nav-items'>{mapped}</nav>
  )
}

export default NavBar;