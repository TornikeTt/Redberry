import React, {useState} from "react";

const Recommendation = ({SetControl}) => { 
    const [ Recommendation_1_Status , SetRecommendation_1_Status ] = useState(false);
    const [ Recommendation_2_Status, SetRecommendation_2_Status] = useState(false);

    const Questions_Hendler = (e) => { 
        let value = e.target.value
        switch(value) { 
            case "OnceWeek":
            case "twiceWeek":
            case "Fortnightly":
            case "onceMonth":
                SetRecommendation_1_Status(true)
                break;
            case "zero":
            case "one":
            case "two":
            case "three":
            case "four":
            case "five":
                SetRecommendation_2_Status(true)
                break;
        }
    }

    
    const sub = (e) => { 
        e.preventDefault();

        if( Recommendation_1_Status === true && Recommendation_2_Status === true) { 
           SetControl("Finish") 
        }
    }



    return ( 
        <div className="Recommendation">

            <div className="Recommendation_Questions">
                <p> რედბერის მთავარი ღირებულება ჩვენი გუნდის თითოეული წევრია. 
                    გარემო, რომელსაც ჩვენი თანამშრომლები ქმნით 
                    ბევრისთვის არის და ყოფილა წლების განმავლობაში ერთად 
                    მიზნებისთვის ბრძოლის მიზეზი, 
                    ბევრისთვის კი - ჩვენთან გადმოსვლის.
                </p>
                <br />

                <p>პანდემიის პერიოდში ერთმანეთსაც იშვიათად ვნახულობთ 
                    პირისპირ და ყოველდღიური კომუნიკაციაც გაიშვიათდა.</p> 

                <form onChange={Questions_Hendler}>
                    <h4> რა სიხშირით შეიძლება გვქონდეს საერთო არაფორმალური 
                        ონლაინ შეხვედრები, სადაც ყველა სურვილისამებრ 
                        ჩაერთვება?*</h4>

                    <fieldset>
                        <div>
                            <input 
                                type="radio" 
                                name="radio" 
                                id="OnceWeek"
                                value="OnceWeek"
                            />
                            <label for="OnceWeek">კვირაში ერთხელ</label>
                        </div>

                        <div>
                            <input 
                                type="radio" 
                                name="radio" 
                                id="twiceWeek" 
                                value="twiceWeek"
                            />
                            <label for="twiceWeek">კვირაში ორჯერ</label>
                        </div>

                        <div>
                            <input 
                                type="radio" 
                                name="radio" 
                                id="Fortnightly"
                                value="Fortnightly"
                            />
                            <label for="Fortnightly">ორ კვირაში ერთხელ</label>
                        </div>

                        <div>
                            <input 
                                type="radio" 
                                name="radio" 
                                id="onceMonth"
                                value="onceMonth"
                            />
                            <label for="onceMonth">თვეში ერთხელ</label>
                        </div>
                    </fieldset>
                    
                    <h4> კვირაში რამდენი დღე ისურვებდი ოფისიდან მუშაობას?*</h4>
                    
                    <fieldset>
                        <div>
                            <input 
                                type="radio" 
                                name="radioTwo" 
                                id="zero" 
                                value="zero"
                            />
                            <label for="zero">0</label>
                        </div>

                        <div>
                            <input 
                                type="radio" 
                                name="radioTwo" 
                                id="one" 
                                value="one"
                            />
                            <label for="one">1</label>
                        </div>

                        <div>
                            <input 
                                type="radio" 
                                name="radioTwo" 
                                id="two"
                                value="two"
                            />
                            <label for="two">2</label>
                        </div>

                        <div>
                            <input 
                                type="radio" 
                                name="radioTwo" 
                                id="three"
                                value="three"
                            />
                            <label for="three">3</label>
                        </div>

                        <div>
                            <input 
                                type="radio" 
                                name="radioTwo" 
                                id="four"
                                value="four"
                            />
                            <label for="four">4</label>
                        </div>

                        <div>
                            <input 
                                type="radio" 
                                name="radioTwo" 
                                id="five"
                                value="five"
                            />
                            <label for="five">5</label>
                        </div>
                    </fieldset>
                    
                    <h4> რას ფიქრობ ფიზიკურ შეკრებებზე? </h4>
                    <textarea></textarea>

                    <h4>რას ფიქრობ არსებულ გარემოზე: რა მოგწონს, 
                        რას დაამატებდი, რას შეცვლიდი?</h4>
                    <textarea></textarea>

                    <input 
                        type="submit" 
                        className="submit" 
                        value="დასრულება" 
                        onClick={sub}
                    />
                </form>
            </div>

            <div className="Recommendation_Image">
                <img src="images/bike.png" alt="men on bike" />
            </div>

        </div>
            
    )
}

export default Recommendation
