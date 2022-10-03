import './Pallate.scss';
import ColorBox from "../ColorBox/ColorBox";
import { useState } from 'react';
import Navbar from '../Navbar/Navbar';

const Pallate = (props) => {
    const [darkness, setDarkness] = useState(500);
    const [colorType, setcolorType] = useState('hex');
    const colors = props.pallate.colors[darkness];
    console.log(colors);
    //************/ will handle the darkness level of the color************
    function changeDarkness(value) {
        setDarkness(value);
    }
    //****************** */ will handle the MUI selctor**************
        function colorTypeHandler(e) {
            console.log(e);
            setcolorType(e);
        }
    return(
        
        <div className="pallete-main">
            <Navbar colorTypeHandler={colorTypeHandler}  darkness={darkness} changeDarkness= {changeDarkness}></Navbar>
            <div className="colors-container">
            {colors.map((color) => (
                // console.log(color.hex)
        <ColorBox backgroundColor={color} colorType={colorType}/>
      ))}
            </div>
        </div>
    )
}

export default Pallate;