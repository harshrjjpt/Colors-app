import "./SmallPallateBox.scss";
const SmallPallateBox = (props) => {
  const colorDetails = props.colorList;
  return (
    <div className="small-pallate-box">
      <div className="small-pallate-box-container">
        <h1 className="title">{colorDetails.paletteName}</h1>
        <h3 className="sub-title">Traditional colors</h3>
        <div className="ball-container">
          {colorDetails.colors.slice(0, 4).map((color) => (
            <div className="color-ball-box">
              <div
                style={{ backgroundColor: color["color"] }}
                className="color-ball"
              ></div>
              <span className="color-name">{color.name.substring(0, 10)}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SmallPallateBox;
