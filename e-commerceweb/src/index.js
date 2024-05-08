import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Product from "./App";
import NavBar from "./nav";
import SearchForm from "./SearchForm";
import Greeting from "./greeting";
import Button from "./Button";
import SupportText from "./Support";
import FooterList from "./list";
import Toggle from "./toggle";

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(
  <React.StrictMode>
    <NavBar
      links={[
        "Home",
        "Contact",
        "About",
        "Services",
        "Login",
        "Registration",
        "",
        <SearchForm />,
      ]}
    />
    <Greeting name="Elpedia" pw={true} />
    <div id="products">
      <Product name="Apple Watch" cost={219.59} link="'apple.jpg'" />
      <Product name="Apple Watch" cost={219.59} link="apple.jpg" />
      <Product name="Apple Watch" cost={219.59} link="../images/apple.jpg" />
      <Product name="Apple Watch" cost={219.59} link="../images/apple.jpg" />
      <Product name="Apple Watch" cost={219.59} link="../images/apple.jpg" />
      <Product name="Apple Watch" cost={219.59} link="apple.jpg" />
      <Product name="Apple Watch" cost={219.59} link="../images/apple.jpg" />
      <Product name="Apple Watch" cost={219.59} link="../images/apple.jpg" />
      <Product name="Apple Watch" cost={219.59} link="../images/apple.jpg" />
      <Product name="Apple Watch" cost={219.59} link="'apple.jpg'" />
      <Product name="Apple Watch" cost={219.59} link="apple.jpg" />
      <Product name="Apple Watch" cost={219.59} link="../images/apple.jpg" />
      <Product name="Apple Watch" cost={219.59} link="../images/apple.jpg" />
      <Product name="Apple Watch" cost={219.59} link="../images/apple.jpg" />
      <Product name="Apple Watch" cost={219.59} link="apple.jpg" />
      <Product name="Apple Watch" cost={219.59} link="../images/apple.jpg" />
      <Product name="Apple Watch" cost={219.59} link="../images/apple.jpg" />
      <Product name="Apple Watch" cost={219.59} link="../images/apple.jpg" />
    </div>
    <div className="order-div">
      <Button/>
      <SupportText className="support-text" />
    </div>
    <FooterList heading="Contact">
      <li>059 796 1103</li>
      <li>604 779 8924</li>
      <li>024 122 1967</li>
    </FooterList>
    <FooterList heading="Contact">
      <li>024 122 1967</li>
    </FooterList>
    <FooterList heading="Contact">
      <li>059 796 1103</li>
      <li>604 779 8924</li>
      <li>024 122 1967</li>
    </FooterList>
    <FooterList heading="Contact">
      <li>059 796 1103</li>
    </FooterList>
    <Toggle/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
