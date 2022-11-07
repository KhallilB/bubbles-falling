import React, { useEffect, useState, useRef } from 'react';
import './bubblesFalling.css';

const BubblesFalling = () => {
    let [started, setStarted]  = useState(false);
    let [bubbles, setBubbles] = useState([]);
    let [ended, setEnded] = useState([]);
    const bubbleRef = useRef([]);

    const bubbleNum = 20;

    const updateAnimation = (ref) => {
        ref.className = 'bubble-gone'
    }

    useEffect(() => {
        if (!started) {
            let bubbles = [];
            for (let i=1; i<=bubbleNum; i++) {
                bubbles.push(
                    <div 
                        className={"bubble x" + i} 
                        id={i} 
                        key={i} 
                        onAnimationEnd={() => {
                            setEnded(ended => [...ended, i])
                            updateAnimation(bubbleRef.current[i])
                        }}
                        ref={el => (bubbleRef.current[i] = el)}
                        onClick={() => document.getElementById(i).style.opacity = "0"}
                    >
                        Bubbles
                    </div>)
            }
    
            setBubbles(bubbles)
            setStarted(true)
        }

        if(ended.length === bubbles.length && started) {
            setBubbles([])
            setEnded([])
            setStarted(false)
        };
    }, [setBubbles, bubbles, ended, started])
    
    return (
        <div className='container'>
            { bubbles.map((item, index) => {
                return (item)
            })}
        </div>
    )
}

export default BubblesFalling;
