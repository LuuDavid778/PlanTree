import TutorialTop from '../../Comps/Kozy/TutorialTop';
import TutorialMiddle02_06 from '../../Comps/Aksel/TutorialMiddle02_06'; 
import ProgressCircles from '../../Comps/Kozy/ProgressCircles';
import CustomButton from '../../Comps/Kozy/CustomButton';
import Link from 'next/link'
import Router from 'next/router';
import '../TutorialPage01/tutorialpage.css';
import TutorialText from '../../Comps/Aksel/TutorialText';

const progress_circles4 = require("../../Imgs/progress_circles4.svg");
const tutimg04 = require("../../Imgs/watering_can.svg");

function Tutorial_5(){
    Router.push("/TutorialPage05")
}

const TutorialPage04 = () => <div>
    <TutorialTop></TutorialTop>
    <TutorialMiddle02_06 tutimg={tutimg04}></TutorialMiddle02_06>
    <ProgressCircles img={progress_circles4}></ProgressCircles>
    <div className = "button_div">
    <CustomButton text = "Next" onClick={Tutorial_5}></CustomButton>
    </div>
    <TutorialText Headertext="How often do you want to water your plant?" Desctext="Some plants may require frequent watering while others will require less. We'll recommend you a plant based on these watering preferences."></TutorialText>
</div>

export default TutorialPage04;