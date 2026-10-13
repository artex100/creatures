import {useState} from 'react';

function Creature(props) {

    // 680 550
function randInt(max) {
    return Math.floor(Math.random() * max)
}
    
const [isAwake, setAwake] = useState(false);

    const style = {
        position: 'absolute',
        left: props.x + 'px',
        top: props.y + 'px',
        textAlign: 'center',
        imageRendering: 'pixelated'
    };

    return (
    <div style={style}>
        <img
            src={isAwake ? props.awakeImageUrl : props.sleepImageUrl}
            // src={props.sleepImageUrl}
            alt={props.name}
            width="120"
            onClick={() => setAwake(!isAwake)}
            style={{ cursor: 'pointer' }}
        />
        <p>{props.name} on {isAwake ? 'hereillä' : 'unessa'}, age {props.age}</p>
    </div>
); 
}

export default Creature;
