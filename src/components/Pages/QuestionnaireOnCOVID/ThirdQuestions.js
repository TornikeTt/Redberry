const ThirdQuestions = (props) => { 
    const { 
        Third_Questions,
        setThird_Questions,
        TestDate_Error,
        setTestDate_Error,
        antibodies_Error,
        setAntibodies_Error,
        setThird_1_Questions_Status,
        setThird_2_Question_Status,
    } = props

    // date function we use to check if user fill input data correctly
    const date = (e) => { 
        let data_Value = e.target.value
        let data_Value_length = data_Value.split("").length

        let Test = /^\d{2,4}-\d{2}-\d{2}$/gi
        let Answer = Test.test(data_Value)
        
        if( data_Value_length > 0 ) { 
            if ( Answer === true )  { 
                setTestDate_Error("")
                setThird_1_Questions_Status(true) // This means that the user is verified 
            } else if ( Answer === false ) { 
                setTestDate_Error("ფორმატი აუცილებლად უნდა იყოს Date")
                setThird_1_Questions_Status(false)
            } 
        } else { 
            setTestDate_Error("თარიღის შეყვანა სავალდებულოა")
            setThird_1_Questions_Status(false)
        }
    }


    // antibodies_Check function use for to check if antibodies input is correctly
    let antibodies_Check = (e) => { 
        let antibodies_Value = e.target.value
        let antibodies_Value_length = antibodies_Value.split("").length
        let antibodies_Test = /^\d*$/gi
        let antibodies_Answer = antibodies_Test.test(antibodies_Value)

       if( antibodies_Value_length > 0 ) { 
           if( antibodies_Answer === true ) { 
                setAntibodies_Error("")
                setThird_2_Question_Status(true) // This means that the user is verified 
            } else if(antibodies_Answer === false ) { 
                setAntibodies_Error("მნიშვნელობა აუცილებლად უნდა" +
                "იყოს Number: შეიყვანეთ რიცხვითი მნიშნელობა")
                setThird_2_Question_Status(false)
            }
       } else { 
            setAntibodies_Error("ანტისხეულების რაოდენობის შეყვანა სავალდებულოა")
            setThird_2_Question_Status(false)
       }
    }

   if( Third_Questions === 1.1)  { 
        return ( 
            <>
                <h4> თუ გახსოვს, გთხოვ მიუთითე 
                    მიახლოებითი თარიღი და რაოდენობა ანტისხეულების 
                </h4> 
                <fieldset>
                    <div>
                        <input 
                            className="take"
                            type="date" 
                            name="date_of_test"  
                            placeholder="რიცხვი"
                            onChange={date}
                        />
                        <p> {TestDate_Error} </p>
                    </div>
                    <div>
                        <input 
                            className="take"
                            type="number" 
                            name="antibodies" 
                            placeholder="ანტისხეულების რაოდენობა"
                            onChange  = { antibodies_Check }
                        />
                        <p> { antibodies_Error } </p>
                    </div>
                </fieldset>
            </>
        )
       } else if( Third_Questions === 1.2 ) { 
            return ( 
                <>
                    <h4>მიუთითე მიახლოებითი პერიოდი (დღე/თვე/წელი), 
                        როდის გქონდა კოვიდ19 </h4> 
                    <fieldset>
                        <input 
                            className="take"
                            type="date" 
                            name="Secondradio"  
                            placeholder="(დღე/თვე/წელი)"
                            onChange = { date }
                        />
                    </fieldset>
                    <p> { TestDate_Error } </p>
                </>
            )
       } else { 
            return ""
       }
}


export default ThirdQuestions
