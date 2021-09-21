const SecondQuestions = (props) => { 
    const { 
        Second_Questions,
        setSecond_Questions,
    } = props

    if(Second_Questions === 1) { 
        return ( 
            <>
                <h4> შემთხვევით ანტისხეულების 
                    ტესტი ხომ არ გაქვს გაკეთებული?* 
                </h4> 
                <fieldset>
                    <div>
                        <input 
                            type="radio" 
                            name="SecondRadio"  
                            id="Second_yes" 
                            value="Second_Yes"
                        />
                        <label for="Second_yes">კი</label>
                    </div>
                    <div>
                        <input 
                            type="radio" 
                            name="SecondRadio" 
                            id="Second_no" 
                            value="Second_No" 
                        />
                        <label for="Second_no">არა</label>
                    </div>
                </fieldset>
            </>
        )
    } else { 
        return ""
    }
}

export default SecondQuestions
