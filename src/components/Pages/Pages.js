import React, { useState } from "react";
import Identification from "./Identification/Identification";
import AboutCOVID from "./QuestionnaireOnCOVID/AboutCOVID";
import AboutVaccine from "./QuestionnaireOnVaccine/AboutVaccine";
import Recommendation from "./Recommendation/Recommendation";

const Pages = () => { 
    const [ page , setPage ] = useState(1)
    
    const PageView = () => { 
        if( page === 1) { 
            return <Identification />
        } else if ( page === 2 ) { 
            return <AboutCOVID />
        } else if( page === 3 ) { 
            return <AboutVaccine />
        } else if( page === 4 ) { 
            return <Recommendation />
        }
    }

    return ( 
        <div className="Pages">
            <header>
                <h1 className="redberry">REDBERRY</h1>
                <h1> {page} / 4 </h1>
            </header>

            <hr className="between_Header_Main_Tags"/>

            { PageView() }

            <footer>

                { 
                    page > 1 ? 
                        <img 
                            src="images/leftSide.png" 
                            alt="left side arrow"
                            onClick={ () => setPage(page - 1)}
                        /> 
                        :
                        ""
                }


                <img 
                    src="images/RightSide.png" 
                    alt="right side arrow" 
                    onClick={ () => setPage(page + 1)}
                />

            </footer>
        </div>
    );
};


export default Pages
