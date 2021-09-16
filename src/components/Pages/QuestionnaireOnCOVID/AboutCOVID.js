const AboutCOVID = () => {
    return ( 
        <div className="aboutCovid">
            <form className="aboutCovid_Questions">
                <h4> გქვს გადატანილი Covid-19?* </h4> 
                <fieldset>
                    <div>
                        <input type="radio" name="radio"  id="yes"/>
                        <label for="yes">კი</label>
                    </div>
                    <div>
                        <input type="radio" name="radio" id="no" />
                        <label for="no" >არა</label>
                    </div>
                    <div>
                        <input type="radio" name="radio" id="other" />
                        <label for="other">ახლა მაქვს </label>
                    </div>
                </fieldset>
            </form>

            <div className="aboutCovid_Image">
                <img src="images/aboutCovidImage.png" alt="cold man image" />
            </div>
        </div>
    )
}



export default AboutCOVID
