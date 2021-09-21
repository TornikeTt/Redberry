import React , {useState} from "react"

const AboutVaccine = (props) => {
    const [ showSecond_Questions , setShow_Questions ] = useState("")
    const [ Status , setStatus ] = useState(false)

    const Questions_Hendler = (e) => {
        let value = e.target.value;
        switch(value) {
            case "yes":
                setShow_Questions(1)
                setStatus(false)
                break;
            case "no":
                setShow_Questions(2)
                setStatus(false)
                break;
            case "1.1":
                setShow_Questions(1)
                setStatus(true)
                break;
            case "1.2":
                setShow_Questions(1)
                setStatus(true)
                break;
            case "1.3":
                setShow_Questions(1.3)
                setStatus(true)
                break;
            case "2.1":
                setStatus(true)
                break;
            case "2.2":
                setStatus(true)
                break;
            case "2.3":
                setShow_Questions(2.3)
                setStatus(true)
                break;
        }
    }


    if( Status === true) {
        props.setNextPage(true)
    } else {
        props.setNextPage(false)
    }

    const add_Question_Part = () => {
        if ( showSecond_Questions === 1.3 ) {
            return (
                <div className="addThirdPart">
                    <p>რომ აღარ გადადო, <br/>ბარემ ეხლავე დარეგისტრირდი </p>
                    <a href="https://booking.moh.gov.ge">
                        https://booking.moh.gov.ge/  </a>
                </div>
            )
        } else if(showSecond_Questions === 2.3 ) {
            return (
                <div className="addThirdPart">
                    <p>ახალი პროტოკოლით კოვიდის
                    გადატანიდან 1 თვის შემდეგ შეგიძლიათ ვაქცინის გაკეთება.</p>
                    <br/>
                    <p> რეგისტრაციის ლინკი  </p>
                    <a href="https://booking.moh.gov.ge">
                        [https://booking.moh.gov.ge/]  </a>
                </div>
            )
        }
    }

    // Second Questions  ------------ START
    const Second_Questions_hendler = () => {
        if ( showSecond_Questions === 1 || showSecond_Questions === 1.3) {
           return (
               <>
                <h4> აირჩიე რომელ ეტაპზე ხარ*</h4>
                <fieldset>
                    <div>
                        <input
                            type="radio"
                            id="start"
                            name="Secondradio"
                            value="1.1" />
                        <label for="start">პირველი დოზა და
                        დარეგისტრირებული ვარ მეორეზე</label>
                    </div>

                    <div>
                        <input
                            type="radio"
                            id="done"
                            name="Secondradio"
                            value="1.2" />
                        <label for="done">სრულად ვაქცინირებული ვარ</label>
                    </div>

                    <div>
                        <input
                            type="radio"
                            id="Process"
                            name="Secondradio"
                            value="1.3" />
                        <label for="Process">პირველი დოზა და არ
                        დავრეგისტრირებულვარ მეორეზე</label>
                    </div>
                </fieldset>
                   {add_Question_Part()}
               </>
           )
        }
    }
    // Second Questions  ------------- END

    const Third_Question_Hendler = () => {
        if(showSecond_Questions === 2 || showSecond_Questions === 2.3)  {
            return (
                <>
                <h4> რას ელოდები?*</h4>
                <fieldset>
                    <div>
                        <input
                            type="radio"
                            id="registration"
                            name="thirdRadio"
                            value="2.1" />
                        <label for="registration">დარეგისტრირებული ვარ და
                        ველოდები თარიღს</label>
                    </div>

                    <div>
                        <input
                            type="radio"
                            id="noWay"
                            name="thirdRadio"
                            value="2.2" />
                        <label for="noWay">არ ვგეგმავ</label>
                    </div>

                    <div>
                        <input
                            type="radio"
                            id="goingto"
                            name="thirdRadio"
                            value="2.3" />
                        <label for="goingto">გადატანილი მაქვს და ვგეგმავ აცრას</label>
                    </div>
                </fieldset>
                    {add_Question_Part()}
                </>
            )
        }
    }


    return (
        <div className="AboutVaccine">
            <form className="AboutVaccine_Questions" onChange={Questions_Hendler}>
                <h4> უკვე აცრილი ხარ?*</h4>
                <fieldset>
                    <div>
                        <input type="radio" id="yes" name="radio" value="yes"/>
                        <label for="yes">კი</label>
                    </div>

                    <div>
                        <input type="radio" id="no" name="radio" value="no" />
                        <label for="no">არა</label>
                    </div>
                </fieldset>
                { Second_Questions_hendler() }
                { Third_Question_Hendler() }
            </form>

            <div className="AboutVaccine_Image">
                <img src="images/doctor.png" alt="doctor image" />
            </div>

        </div>
    );
};



export default AboutVaccine
