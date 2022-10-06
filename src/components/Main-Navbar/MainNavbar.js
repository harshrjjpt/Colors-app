import "rc-slider/assets/index.css";
import "./MainNavbar.scss";
import Icon from "../logo";
import { Link } from "react-router-dom";
const MainNavbar = (props) => {
  return (
    <div className="navbar">
      <div className="left">
        <div className="logo-container">
          <div>
            <Icon></Icon>
          </div>
        </div>
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

export default MainNavbar;
