import React from "react";

function NavBar() {
  const pages = [
    "home",
    "blog",
    "pics",
    "bio",
    "art",
    "shop",
    "about",
    "contact",
  ];
  const navLinks = pages.map((page) => {
    return <a href={"/" + page}>{page}</a>;
  });

  return <nav className="nav">{navLinks}</nav>;
}
export default NavBar;

// &nbsp;
