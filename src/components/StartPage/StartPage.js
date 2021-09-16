import React , {useState} from "react";
import { useSpring , animated } from "react-spring";

const StartPage = (props) => { 
    const { start , setStart } = props
    const [ showText, setShowText ] = useState(false);
    
    const Main_Logo_style = useSpring( { 
        delay: 1000,
        config: { 
            duration: 1500,
        },
        
        from: { 
            y: 0,
            width: "100%",
            height: "100%",
            borderRadius: "0%",
        },

        to: { 
            width: "7%",
            height: "13%",
            borderRadius: "50%",
            y: -100,
        },
        onRest: () => setShowText(true)
    });

    const buttonStyle = useSpring( { 
        /* 
            1. when "Main_Logo_style" working "showText" is false which means
            "pause" return true, so button animation doesn't start.

            2. when "Main_Logo_style" stop, it's will change "showText" state
            from false to true, after that "pause" return false, that means
            animation start and button will appear.
        */
        pause: showText ? false : true,
        config: { 
            duration: 1000,
        },
        from: {opacity: 0 ,y: -100},
        to: {opacity: 1, y: -70},
    })

    return ( 
        <div className="StartPage">
            <animated.img 
                src= { 
                    showText ? 
                        "images/StartPage Logo.png" : 
                        "images/StartPage image.png"
                }
                alt="logo" 
                style={Main_Logo_style}
            />

            { 
                showText 
                    && 
                <animated.button
                    style={buttonStyle}
                    onClick={() => setStart(false)}
                >
                    კითხვარის დაწყება 
                </animated.button> 
            }

        </div>
    );
}



export default StartPage
