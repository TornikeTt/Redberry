import React, { useState } from "react";
import Identification from "./Identification/Identification";
import AboutCOVID from "./QuestionnaireOnCOVID/AboutCOVID";
import AboutVaccine from "./QuestionnaireOnVaccine/AboutVaccine";
import Recommendation from "./Recommendation/Recommendation";

const Pages = ({SetControl}) => {
    const [ page , setPage ] = useState(1)
    const [ nextPage , setNextPage ] = useState(false)

    const PageView = () => {
        if( page === 1) {
            return <Identification
            setNextPage ={ setNextPage } />
        } else if ( page === 2 ) {
            return <AboutCOVID
                setNextPage = { setNextPage } />
        } else if( page === 3 ) {
            return <AboutVaccine
                setNextPage = { setNextPage } />
        } else if( page === 4 ) {
            return <Recommendation SetControl={SetControl} />
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
                        <button
                            onClick={ () => setPage(page - 1)}
                        > &lt;</button>
                        :
                        ""
                }

                {
                    page >= 4?
                        ""
                        :
                    <button
                        style = {
                            nextPage ?
                                {opacity: 1}
                                :
                                {opacity:0.3}
                        }
                        onClick={
                            nextPage ?
                                () => setPage(page + 1)
                                :
                                () => setPage(page)
                        }
                        title={ nextPage ?
                                "გადადით შემდეგ გვერდზე"
                            :
                                "გთხოვთ შეავსოთ ზემოთ მოცემული ველები"
                        }> &gt; </button>
                }
            </footer>
        </div>
    );
};


export default Pages
