import "./Pallate-list.scss";
import mycolors from "../../mycolors";
import SmallPallateBox from "../Small-pallate-box/SmallPallateBox";
import MainNavbar from "../Main-Navbar/MainNavbar";
const PallateList = () => {
  return (
    <div className="Main-navbar">
      <MainNavbar />
      <div className="main">
        <div className="list-container">
          <ul>
            {mycolors.map((color) => (
              <li>
                <SmallPallateBox colorList={color} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div class="color-background-ball-container">
        <div class="circle"></div>
      </div>
    </div>
  );
};

export default PallateList;
