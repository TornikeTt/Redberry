const EmailValidation = (props) => { 
    const { 
        EmailError,
        setEmailError,
        EmailStatus,
        setEmailStatus,
    } = props

    const Email_Identification_Hendler = (e)  => { 
        let EmailValue = e.target.value;
        let Email_Value_Length = EmailValue.split("").length


        let EmailTest = /([-!#-'*+/-8=?A-Z^-~]+(\.[-!#-'*+/-9=?A-Z^-~]+)*|"([]!#-[^-~ \t]|(\\[\t -~]))+")(@redberry.ge)/
        let EmailAnswer = EmailTest.test(EmailValue);

        console.log(EmailAnswer)
        if ( EmailAnswer === false ) { 
            setEmailError("თქვენს მიერ შეყვანილი მეილი არასწორია" +
            " გთხოვთ დარეგისტრირდეთ რედბერის მეილით (youremail@redberry.ge) ");
            setEmailStatus(false);
        } else if( EmailAnswer === true ) { 
            setEmailError("");
            setEmailStatus(true);
        }

        if( Email_Value_Length <= 0) { 
            setEmailError("მეილის ველის შევსება სავალდებულოა");
            setEmailStatus(false);
        }
    };

    const Email_input_Style_Hendler = () => { 
        switch(EmailStatus) { 
            case "":
                return ""
            case false: 
                return { 
                    style: { 
                        borderStyle: "solid",
                        borderColor: "hsl(0, 100%, 74%)",
                        borderWidth: 2,
                    },
                    img : <img src="./images/error.png" alt="error icone" />
                }
            case true: 
                return {
                    style: { 
                        borderStyle: "solid",
                        borderColor: "lime",
                        borderWidth: 2,
                    },
                    img: <img src="./images/accept.png" alt="accept icone" />
                }
        }
    }
    return ( 
        <>
            <label for="email"> ემაილი*</label>
            <div className="div_input">
                <input 
                    style = {Email_input_Style_Hendler().style}
                    type="email" 
                    id="email" 
                    placeholder="fb@redberry.ge"
                    onChange = { Email_Identification_Hendler }
                    autoComplete="off"
                />
                {Email_input_Style_Hendler().img}
            </div>
            <p> {EmailError} </p>
        </>
    )
}

export default EmailValidation
