import React, { useState } from "react";
import NameValidation from "./NameValidation";
import LastNameValidation from "./LastNameValidation";
import EmailValidation from "./EmailValidation";

const Identification = (props) => {
    // name validation --------------- START
    const [ NameError , setNameError ] = useState("") // use for error message
    const [ NameStatus , setNameStatus] = useState("");
    // name validation --------------- END

    // lastName validation --------------- START
    const [ lastName_Error , setLastName_Error ] = useState("")  // use for error message
    const [ lastName_Status , setLastName_Status] = useState("");
    // lastName validation --------------- END

    // Email validation --------- START
    const [ EmailError , setEmailError ] = useState("");
    const [ EmailStatus , setEmailStatus ] = useState("");
    // Email validation ------- END

    if(EmailStatus === true && lastName_Status === true && NameStatus === true) {
        props.setNextPage(true);
    } else {
        props.setNextPage(false);
    }

    return (
        <main className="identification_Main">
            <div className="leftSide">
                <form>
                    <NameValidation
                        NameError = { NameError }
                        setNameError = { setNameError }
                        NameStatus = { NameStatus }
                        setNameStatus = { setNameStatus }
                    />

                    <LastNameValidation
                        lastName_Error = { lastName_Error }
                        setLastName_Error = { setLastName_Error }
                        lastName_Status = { lastName_Status }
                        setLastName_Status = { setLastName_Status }
                    />

                    <EmailValidation
                        EmailError = { EmailError }
                        setEmailError = { setEmailError }
                        EmailStatus = { EmailStatus }
                        setEmailStatus = { setEmailStatus }
                    />
                </form>

                <div className="note">
                    <hr />
                    <p> *-ით მონიშნული ველების შევსება სავალდებულოა</p>
                </div>
            </div>

            <div className="rightSide">
                <img
                    src="images/SecondPage Image.png"
                    alt="two person image in second page"
                />
            </div>
        </main>
    )
}


export default Identification
