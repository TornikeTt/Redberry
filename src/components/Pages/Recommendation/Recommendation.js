const Recommendation = () => { 
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

                <form>
                    <h4> რა სიხშირით შეიძლება გვქონდეს საერთო არაფორმალური 
                        ონლაინ შეხვედრები, სადაც ყველა სურვილისამებრ 
                        ჩაერთვება?*</h4>

                    <fieldset>
                        <div>
                            <input type="radio" name="radio" id="OnceWeek"/>
                            <label for="OnceWeek">კვირაში ერთხელ</label>
                        </div>

                        <div>
                            <input type="radio" name="radio" id="twiceWeek"/>
                            <label for="twiceWeek">კვირაში ორჯერ</label>
                        </div>

                        <div>
                            <input type="radio" name="radio" id="Fortnightly"/>
                            <label for="Fortnightly">ორ კვირაში ერთხელ</label>
                        </div>

                        <div>
                            <input type="radio" name="radio" id="onceMonth"/>
                            <label for="onceMonth">თვეში ერთხელ</label>
                        </div>
                    </fieldset>
                    
                    <h4> კვირაში რამდენი დღე ისურვებდი ოფისიდან მუშაობას?*</h4>
                    
                    <fieldset>
                        <div>
                            <input type="radio" name="radioTwo" id="zero"/>
                            <label for="zero">0</label>
                        </div>

                        <div>
                            <input type="radio" name="radioTwo" id="one"/>
                            <label for="one">1</label>
                        </div>

                        <div>
                            <input type="radio" name="radioTwo" id="two"/>
                            <label for="two">2</label>
                        </div>

                        <div>
                            <input type="radio" name="radioTwo" id="three"/>
                            <label for="three">3</label>
                        </div>

                        <div>
                            <input type="radio" name="radioTwo" id="four"/>
                            <label for="four">4</label>
                        </div>

                        <div>
                            <input type="radio" name="radioTwo" id="five"/>
                            <label for="five">5</label>
                        </div>
                    </fieldset>
                    
                    <h4> რას ფიქრობ ფიზიკურ შეკრებებზე? </h4>
                    <textarea></textarea>

                    <h4>რას ფიქრობ არსებულ გარემოზე: რა მოგწონს, 
                        რას დაამატებდი, რას შეცვლიდი?</h4>
                    <textarea></textarea>

                    <input type="submit" className="submit" value="დასრულება"/>
                </form>
            </div>

            <div className="Recommendation_Image">
                <img src="images/bike.png" alt="men on bike" />
            </div>

        </div>
            
    )
}

export default Recommendation
