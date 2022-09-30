import 'rc-slider/assets/index.css';
import './Pallate.scss';
import ColorBox from "../ColorBox/ColorBox";
import { useState } from 'react';
import Slider from 'rc-slider';
const Pallate = (props) => {
    const [darkness, setDarkness] = useState(500);
    const colors = props.pallate.colors[darkness];
    console.log(colors);
    function changeDarkness(value) {
        setDarkness(value);
    }
    return(
        
        <div className="pallete-main">
            <div className='slider-container'>
            <Slider defaultValue={darkness} min={100} max={900} step={100} onChange={changeDarkness}></Slider>
            </div>
            <div className="colors-container">
            {colors.map((color) => (
                // console.log(color.hex)
        <ColorBox backgroundColor={color}/>
      ))}
            </div>
        </div>
    )
}

export default Pallate;