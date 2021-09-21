const NameValidation = (props) => {
    const { NameError ,setNameError , NameStatus, setNameStatus } = props

    const Name_Identification_Hendler = (e) => { 
        let nameValue = e.target.value // take name field value
        let nameValueLengt = nameValue.split("").length // Check how many letters

        /*  nameTest and nameAnswer variables working
            * every time when user typing somthing in the name field 
                Regular Expression pattern check if there are digit or symbols
            * if there are symbols or digit "nameAnswer" return true 
                which mean that The user is failed to verify
            * so if nameAnswer return false that mean we have only letters in
                the name input field
        */ 

        let nameTest = /(\d|[~`!@#£€$¢¥§%°^&*()\-_+={}[\]|\\/:;"'<>,.?])/gi
        let nameAnswer = nameTest.test(nameValue);
        
        
        if ( nameValueLengt <= 0 ) { 
            setNameError("სახელის ველის შევსება სავალდებულოა ")
        } else if (nameValueLengt > 255) { 
            setNameError("სახელის ველი უნდა შედგებოდეს მაქსიმუმ 255 სიმბოლოსგან")
            setNameStatus(false)
        } else { 
            if( nameAnswer === true ) { 
                setNameError("სახელის ველი უნდა შეიცავდეს მხოლოდ  ალფაბეტის სიმბოლოებს")
                setNameStatus(false);
            } else if( nameValueLengt <= 2) { 
                setNameError("სახელის ველი უნდა შედგებოდეს მინიმუმ 3 სიმბოლოგან")
                setNameStatus(false)
            } else if( nameValueLengt >= 3) { 
                setNameError("")
                setNameStatus(true)
            } 
        }
    }


    const Name_input_Style_Hendler = () => { 
        switch(NameStatus) { 
            case "":
                return ""
                break;
            case false: 
                return { 
                    style: { 
                        borderStyle: "solid",
                        borderColor: "hsl(0, 100%, 74%)",
                        borderWidth: 2,
                    },
                    img : <img src="./images/error.png" alt="error icone" />
                }
                break;
            case true: 
                return {
                    style: { 
                        borderStyle: "solid",
                        borderColor: "lime",
                        borderWidth: 2,
                    },
                    img: <img src="./images/accept.png" alt="accept icone" />
                }
                break;
        }
    }

    return ( 
    <>
        <label for="name">სახელი*</label>
        <div className="div_name">
            <input 
                style = {Name_input_Style_Hendler().style}
                type="text" 
                id="name" 
                placeholder="იოსებ" 
                onChange={Name_Identification_Hendler}
                autoComplete="off"
            />
            {Name_input_Style_Hendler().img}
        </div>
        <p> { NameError } </p>
    </>
    )
}



export default NameValidation
