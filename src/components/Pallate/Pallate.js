import './Pallate.scss';
import ColorBox from "../ColorBox/ColorBox";
const Pallate = (props) => {
    const colors = props.pallate.colors;
    console.log(colors);
    return(
        <div className="pallete-main">
            <div className="colors-container">
            {colors.map((color) => (
        <ColorBox backgroundColor={color}/>
      ))}
            </div>
        </div>
    )
}

export default Pallate;