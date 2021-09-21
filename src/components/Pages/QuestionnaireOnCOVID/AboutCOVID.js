import React, {useState} from "react";
import SecondQuestions from "./SecondQuestions";
import ThirdQuestions from "./ThirdQuestions";

const AboutCOVID = (props) => {
    // The second set of questions   ----------------- START
    const [ Second_Questions , setSecond_Questions] = useState("");
    // The second set of questions   ----------------- END

    // The third set of questions ------------------- START
    const [ Third_Questions , setThird_Questions ] = useState("");
    const [ TestDate_Error , setTestDate_Error ] = useState("")
    const [ antibodies_Error , setAntibodies_Error ] = useState("")
    // The third set of questions ------------------- END

    const [ FirstQuestion_Status, setFirstQuestion_Status ] = useState(false)
    const [ Third_1_Questions_Status , setThird_1_Questions_Status ] = useState(false)
    const [ Third_2_Question_Status, setThird_2_Question_Status ] = useState(false)

    if( FirstQuestion_Status === true ||
        Third_1_Questions_Status === true && Third_2_Question_Status === true ||
        Third_Questions === 1.2 && Third_1_Questions_Status === true ) {
        props.setNextPage(true)
    } else {
        props.setNextPage(false)
    }

    const Questions_Hendler = (e) => {
        let value = e.target.value;
        switch(value) {
            case "yes":
                setSecond_Questions(1); // show Second Questions

                //if use choose "yes" next page button not working
                setFirstQuestion_Status(false)
                setThird_1_Questions_Status(false)
                setThird_2_Question_Status(false)
                //if use choose "yes" next page button not working
                break;
            case "no":
                setSecond_Questions(2) // show Nothing
                setThird_Questions("") // dont show Third part Questions when
                // user will choose "no"
                setTestDate_Error("") // if user after take message Error in
                // Third part Questions, will choose "no" the message will be
                // delete
                setFirstQuestion_Status(true) // if user choose "no" next page
                // button is will working
                break;
            case "HaveItNow":
                setSecond_Questions(3) // show Nothing
                setThird_Questions("") // don't show Third part Questions when
                // use will choose "have it now"
                setTestDate_Error("") // if user after take message Error in
                // Third part Questions, will choose "have it now" the
                // message will be delete
                setFirstQuestion_Status(true) // if use choose "have it now"
                // next page button will working
                break;
            case "Second_Yes":
                setThird_Questions(1.1) // show Third Questions
                setTestDate_Error("") // restart every time
                setAntibodies_Error("") // restart every time
                // default user can't go next page before fill all input
                setThird_1_Questions_Status(false)
                setThird_2_Question_Status(false)
                // default user can't go next page before fill all input
                break;
            case "Second_No":
                setThird_Questions(1.2) // show Third Questions another options
                setTestDate_Error("") // restart every time

                // default user can't go next page before fill all input
                setThird_1_Questions_Status(false)
                setThird_2_Question_Status(false)
                // default user can't go next page before fill all input
                break;
        }
    }

    return (
        <div className="aboutCovid">
            <form className="aboutCovid_Questions" onChange={Questions_Hendler}>
                <h4> გქვს გადატანილი Covid-19?* </h4>
                <fieldset>
                    <div>
                        <input
                            type="radio"
                            name="radio"
                            id="yes"
                            value="yes" />
                        <label for="yes">კი</label>
                    </div>
                    <div>
                        <input
                            type="radio"
                            name="radio"
                            id="no"
                            value="no" />
                        <label for="no" >არა</label>
                    </div>
                    <div>
                        <input
                            type="radio"
                            name="radio"
                            id="other"
                            value="HaveItNow" />
                        <label for="other">ახლა მაქვს</label>
                    </div>
                </fieldset>

                <SecondQuestions
                    Second_Questions = { Second_Questions }
                    setSecond_Questions = { setSecond_Questions }
                />

                <ThirdQuestions
                    Third_Questions = { Third_Questions }
                    setThird_Questions = { setThird_Questions }
                    TestDate_Error = { TestDate_Error }
                    setTestDate_Error = { setTestDate_Error }
                    antibodies_Error = { antibodies_Error }
                    setAntibodies_Error = { setAntibodies_Error }
                    setThird_1_Questions_Status = { setThird_1_Questions_Status }
                    setThird_2_Question_Status = { setThird_2_Question_Status }
                />
            </form>

            <div className="aboutCovid_Image">
                <img src="images/aboutCovidImage.png" alt="cold man image" />
            </div>
        </div>
    )
}



export default AboutCOVID
