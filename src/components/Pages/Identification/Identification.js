import React, { useState } from "react";

const Identification = (props) => { 
    const [ NameError , setNameError ] = useState("")
    const [ NameStatus , setNameStatus] = useState("");

    const Name_Identification_Hendler = (e) => { 
        let nameValue = e.target.value
        let nameValueLengt = nameValue.split("").length

        let nameTest = /(\d|[~`!@#£€$¢¥§%°^&*()\-_+={}[\]|\\/:;"'<>,.?])/gi
        let nameAnswer = nameTest.test(nameValue);


        
        if( nameAnswer === true ) { 
            setNameError("სახელის ველი უნდა შეიცავდეს მხოლოდ  ალფაბეტის სიმბოლოებს")
            setNameStatus(false);
        } else if( nameValueLengt <= 2) { 
            setNameError("სახელის ველი უნდა შედგებოდეს მინიმუმ 3 სიმბოლოგან")
            setNameStatus(false)
            if( nameValueLengt === 0) { 
                setNameError("სახელის ველის შევსება სავალდებულოა ")
            }
        } else if( nameValueLengt >= 3) { 
            setNameError("")
            setNameStatus(true)
        } 

        if( nameValueLengt > 225 ) { 
            setNameError("სახელის ველი უნდა შედგებოდეს მაქსიმუმ 255 სიმბოლოსგან")
            setNameStatus(false)
        }
    }


    const Error_Style_Hendler = () => { 
        switch(NameStatus) { 
            case "":
                return ""
            case false: 
                return { 
                    className: "inputError",
                    img : <img src="./images/error.png" alt="error icone" />
                }
            case true: 
                return <img src="./images/accept.png" alt="accept icone" />
        }
    }



    return ( 
        <main className="identification_Main">
            <div className="leftSide">
                <form>
                    <label for="name">სახელი*</label>
                    <div className="div_name">
                        <input 
                            className={Error_Style_Hendler().className}
                            type="text" 
                            id="name" 
                            placeholder="იოსებ" 
                            onChange={Name_Identification_Hendler}
                            autocomplete="off"
                        />
                        {Error_Style_Hendler().img}
                    </div>
                    <p> { NameError } </p>

                    <label for="lastName"> გვარი*</label>
                    <div className="div_lastName">
                        <input 
                            type="text" 
                            id="lastName" 
                            placeholder="ჯუღაშვილი" 
                        />
                        <img src="./images/error.png" alt="error" />
                    </div>

                    <label for="email"> ემაილი*</label>
                    <div className="div_input">
                        <input 
                            type="email" 
                            id="email" 
                            placeholder="fb@redberry.ge"
                        />
                        <img src="./images/error.png" alt="error" />
                    </div>

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
