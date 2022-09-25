import './ColorBox.scss';
import CopyToClipboard from 'react-copy-to-clipboard';
const ColorBox = (props) => {
    return(
        <CopyToClipboard text={props.backgroundColor.color}>
        <div style={{background: props.backgroundColor.color}} className="color-box">
        <h1>{props.backgroundColor.name}</h1>
        <button className='copy'>COPY</button>
        <span className='see-more'>See More</span>
        </div>
        </CopyToClipboard>
    );
}

export default ColorBox;