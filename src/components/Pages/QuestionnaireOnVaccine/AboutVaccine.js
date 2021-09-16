const AboutVaccine = () => { 
    return ( 
        <div className="AboutVaccine">
            <form className="AboutVaccine_Questions">
                <h4> უკვე აცრილი ხარ?*</h4>
                <fieldset>
                    <div>
                        <input type="radio" id="yes" name="radio"/>
                        <label for="yes">კი</label>
                    </div>

                    <div>
                        <input type="radio" id="no" name="radio"/>
                        <label for="no">არა</label>
                    </div>
                </fieldset>
            </form>

            <div className="AboutVaccine_Image">
                <img src="images/doctor.png" alt="doctor image" />
            </div>

        </div>
    );
};



export default AboutVaccine
