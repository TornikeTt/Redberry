const LastNameValidation = (props) => { 
    const { 
        lastName_Error , 
        setLastName_Error , 
        lastName_Status , 
        setLastName_Status 
    } = props

    const lastName_Identification_Hendler = (e) => { 
        let lastName_Value = e.target.value // take lastname field value 
        // Check how many letters
        let lastName_Value_Length = lastName_Value.split("").length         

        /*  lastName_Test  and lastName_Answer variables working
            * every time when user typing somthing in the lastname field 
                Regular Expression pattern check if there are digit or symbols
            * if there are symbols or digit "lastName_Answer" return true 
                which mean that The user is failed to verify
            * so if "lastName_Answer" return false that mean we have only
                letters in the lastname input field
        */ 

        let lastName_Test = /(\d|[~`!@#£€$¢¥§%°^&*()\-_+={}[\]|\\/:;"'<>,.?])/gi
        let lastName_Answer = lastName_Test.test(lastName_Value);

        if( lastName_Value_Length <= 0 ) { 
            setLastName_Error("გვარის ველის შევსება სავალდებულოა ")
        } else if( lastName_Value_Length > 225 ) { 
            setLastName_Error("გვარის ველი უნდა შედგებოდეს მაქსიმუმ 255 სიმბოლოსგან")
            setLastName_Status(false)
        } else { 
            if( lastName_Answer === true ) { 
                setLastName_Error("გვარის ველი უნდა შეიცავდეს მხოლოდ  ალფაბეტის სიმბოლოებს")
                setLastName_Status(false);
            } else if( lastName_Value_Length <= 2) { 
                setLastName_Error("გვარის ველი უნდა შედგებოდეს მინიმუმ 3 სიმბოლოგან")
                setLastName_Status(false)
            } else if( lastName_Value_Length >= 3) { 
                setLastName_Error("")
                setLastName_Status(true)
            } 
        }
    }

    const lastName_input_Style_Hendler = () => { 
        switch(lastName_Status) { 
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
            <label for="lastName"> გვარი*</label>
            <div className="div_lastName">
                <input 
                    style = {lastName_input_Style_Hendler().style}
                    type="text" 
                    id="lastName" 
                    placeholder="ჯუღაშვილი" 
                    onChange = {lastName_Identification_Hendler}
                    autoComplete="off"
                />
                { lastName_input_Style_Hendler().img }
            </div>
            <p> {lastName_Error} </p>
        </>
    )
}


export default LastNameValidation
