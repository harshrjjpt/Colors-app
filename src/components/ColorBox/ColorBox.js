import "./ColorBox.scss";
import { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
const ColorBox = (props) => {
  let copy = false;
  const copyChanger = () => {
    copy = !copy;
  };
  async function copyHandler() {
    await copyChanger();
    console.log(copy);
    await setTimeout(() => {
      copyChanger();
    }, 1500);
    console.log(copy);
  }
  let colorr = props.backgroundColor[props.colorType];
  return (
    <CopyToClipboard text={colorr} onCopy={copyHandler}>
      <div className="color-box-main">
        <div style={{ background: colorr }} className="color-box">
          <div
            style={{ background: colorr }}
            className={
              copy ? "copy-transition play-transition" : "copy-transition"
            }
          ></div>
          <h1>{props.backgroundColor.name}</h1>
          <button className="copy">COPY</button>
          <span className="see-more">See More</span>
        </div>
      </div>
    </CopyToClipboard>
  );
};

export default ColorBox;
