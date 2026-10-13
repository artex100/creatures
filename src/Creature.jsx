
function Creature(props) {

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
                src={props.isAwake ? props.awakeImageUrl : props.sleepImageUrl}
                alt={props.name}
                width="120"
                onClick={() => props.onWake(props.id)}
                style={{ cursor: 'pointer' }}
            />
            <p>{props.name} on {props.isAwake ? 'hereillä' : 'unessa'}, age {props.age}</p>
        </div>
    );
}

export default Creature;
