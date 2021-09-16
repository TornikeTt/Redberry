import React , {useState} from "react"
import './App.scss';
import StartPage from "./components/StartPage//StartPage.js";
import Pages from "./components/Pages/Pages";

function App() {
    const [ start , setStart ] = useState(true)

    return (
        <div className="App">
            { 
                start ? 
                    <StartPage start={start} setStart={setStart}/>
                    :
                    <Pages />
            }
        </div>
    );

}

export default App;
