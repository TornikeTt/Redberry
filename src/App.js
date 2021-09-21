import React , {useState} from "react"
import './App.scss';
import StartPage from "./components/StartPage//StartPage.js";
import Pages from "./components/Pages/Pages";
import Finish from "./components/Finish/Finish";

function App() {
    const [ Control , SetControl ] = useState("START")

    const Control_Disply = () => { 
        if(Control === "START") { 
            return <StartPage Control={Control} SetControl={SetControl}/>
        } else if(Control === "PAGES") {
            return <Pages SetControl={SetControl}/>
        } else { 
            return <Finish /> 
        }
    }

    return (
        <div className="App">
            { Control_Disply() }
        </div>
    );

}

export default App;
