import "rc-slider/assets/index.css";
import "./Navbar.scss";
import Slider from "rc-slider";
import Icon from "../logo";
import { MenuItem, Select } from "@material-ui/core";
import { useState } from "react";
import { Link } from "react-router-dom";
const Navbar = (props) => {
  const [colorType, setcolorType] = useState("hex");

  function selectorHandler(e) {
    setcolorType(e.target.value);
    props.colorTypeHandler(e.target.value);
  }

  return (
    <div className="navbar">
      <div className="left">
        <div className="logo-container">
          <div>
            <Icon></Icon>
          </div>
        </div>
        <div className="slider-container">
          <span>Level: {props.darkness}</span>
          <Slider
            defaultValue={props.darkness}
            min={100}
            max={900}
            step={100}
            onChange={props.changeDarkness}
          ></Slider>
        </div>
      </div>
      <div className="selector-container">
        <Select value={colorType} onChange={selectorHandler}>
          <MenuItem value="hex">hex</MenuItem>
          <MenuItem value="rgb">rgb</MenuItem>
          <MenuItem value="rgba">rgba</MenuItem>
        </Select>
      </div>
      <div className="right">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/pallate-list">Trending</Link>
          </li>
          <li>
            <Link to="/pallate">Brands</Link>
          </li>
        </ul>
        <div className="hamburger-container">
          <img
            className="hamburger"
            src="https://www.freeiconspng.com/thumbs/menu-icon/menu-icon-24.png"
            alt="HamburgerIcon"
            width="40"
            height="40"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
