import Icon from "../logo";
import MainNavbar from "../Main-Navbar/MainNavbar";
import Navbar from "../Navbar/Navbar";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <MainNavbar />
      <div className="home-wrapper">
        <div className="sub-home-wrapper">
          <div className="left"></div>
          <div className="right">
            <h1 className="header">Pikk-A Color!</h1>
            <h3 className="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation
            </h3>
            <button class="button-53" role="button">
              Explore
            </button>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="circle"></div>
      </div>
    </div>
  );
};

export default Home;
