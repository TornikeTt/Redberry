import React , {useState} from "react"
import './App.scss';
import StartPage from "./components/StartPage//StartPage.js";
import Identification from "./components/SecondPage/Identification.js"

function App() {
    const [ page , setPage ] = useState(1)

    const PageView = () => { 
        if( page === 1) { 
            return <StartPage page={page} setPage={setPage}/>
        } else if( page === 2) { 
            return <Identification />
        }
    }

    return (
        <div className="App">
            { PageView() }
        </div>
    );
}

export default App;
