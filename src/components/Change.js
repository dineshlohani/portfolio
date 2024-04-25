import { React, useContext } from "react";
import About from "./about/about";
import "../App.css";
import { ThemeContext } from "../components/contex";
import Contact from "./contact/contact";
import ProductList from "./productList/productList";
import Toggle from "../components/toggle/toggle";
import Intro from "../components/intro/intro";

function Change() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  console.log(theme, "dm");
  return (
    <>
      <div
        style={{
          backgroundColor: darkMode ? "black" : "white",
          color: darkMode && "white",
        }}
      >
        <Toggle />
        <Intro />
        <About />
        <ProductList />
        <Contact />
      </div>
    </>
  );
}

export default Change;
