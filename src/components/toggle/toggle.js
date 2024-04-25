import React, { useContext } from "react";
import { ThemeContext } from "../contex";
import Sun from "../../img/sun.png";
import Moon from "../../img/moon.png";
import "../toggle/toggle.css";
export default function SwitchButton() {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
  
    const onClick = () => {
      if (darkMode)
        theme.dispatch({ type: "LIGHTMODE" });
      else
        theme.dispatch({ type: "DARKMODE" });
    };
  
    return (
      <div className="t">
        <img src={Sun} alt="" className="t-icon" />
        <img src={Moon} alt="" className="t-icon" />
        <button className="button" onClick={onClick} style={{ right: theme.state.darkMode ? 0 : 25 }}>
      </button>
      </div>
    );
  }