import Creature from './Creature.jsx';
import {useState} from 'react';

function randInt(max) {
    return Math.floor(Math.random() * max)
}

const initialCreatures =[
        {
            id: 1, name: "Mr. Fresh", age: 3,
            sleepImageUrl: "/images/first_sleep.png",
            awakeImageUrl: "/images/first_awake.png",
            x: 120, y: 140
        },
        {
            id: 2, name: "Meimei", age: 5,
            sleepImageUrl: "/images/second_sleep.png",
            awakeImageUrl: "/images/second_awake.png",
            x: 300, y: 260
        },
        {
            id: 3, name: "Bingus", age: 2,
            sleepImageUrl: "/images/third_sleep.png",
            awakeImageUrl: "/images/third_awake.png",
            x: 550, y: 40
        },
        {
            id: 4, name: "Leipä", age: 4,
            sleepImageUrl: "/images/fourth_sleep.png",
            awakeImageUrl: "/images/fourth_awake.png",
            x: 150, y: 420
        },
        {
            id: 5, name: "Mista", age: 4,
            sleepImageUrl: "/images/fifth_sleep.png",
            awakeImageUrl: "/images/fifth_awake.png",
            x: 550, y: 590
        }
    ]

function CreatureField() {
    const [creatures, setCreatures] = useState(initialCreatures);

    const total = creatures.length;
    const awakeCount = creatures.filter(c => c.isAwake).length;
    const allAwake = awakeCount === total;
    const allAsleep = awakeCount === 0;

    function wake(c) {
        return { ...c, isAwake: true, x: randInt(680), y: randInt(680) };
    }

    function handleWake(id) {
        setCreatures(prev => prev.map(c => {
            if (c.id !== id) return c;
            return c.isAwake ? { ...c, isAwake: false } : wake(c);
        }));
    }

    function handleToggleAll() {
        setCreatures(prev => prev.map(c => {
            if (allAwake) return { ...c, isAwake: false };   
            return c.isAwake ? c : wake(c);                
        }));
    }

    let bgColor = '#6b8c66';           
    if (allAwake) bgColor = '#e8d27a';  
    else if (allAsleep) bgColor = '#2f3e5c'; 


    const fieldStyle = {
        position: 'relative',
        width: '800px',
        height: '800px',
        border: '2px solid #cd0202',
        margin: '20px auto',
        backgroundColor: bgColor 
    };


    const barStyle = {
        width: '800px',
        margin: '20px auto 0',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    };

    return (
        <>
            <div style={barStyle}>
                <span>{awakeCount} of {total} creatures awake</span>
                <button onClick={handleToggleAll}>
                    {allAwake ? 'Let all sleep' : 'Wake all'}
                </button>
            </div>
            <div style={fieldStyle}>
                {creatures.map(creature => (
                    <Creature
                        key={creature.id}
                        id={creature.id}
                        name={creature.name}
                        age={creature.age}
                        sleepImageUrl={creature.sleepImageUrl}
                        awakeImageUrl={creature.awakeImageUrl}
                        x={creature.x}
                        y={creature.y}
                        isAwake={creature.isAwake}
                        onWake={handleWake}
                    />
                ))}
            </div>
        </>
    );
}

export default CreatureField;
