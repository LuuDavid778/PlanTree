import TutorialTop from '../../Comps/Kozy/TutorialTop';
import TutorialMiddle02_06 from '../../Comps/Aksel/TutorialMiddle02_06'; 
import ProgressCircles from '../../Comps/Kozy/ProgressCircles';
import CustomButton from '../../Comps/Kozy/CustomButton';
import Link from 'next/link'
import Router from 'next/router';
import '../TutorialPage02/tutorialpage02.css';
import TutorialText from '../../Comps/Aksel/TutorialText';
import  React, {useEffect} from 'react';

const progress_circles4 = require("../../Imgs/progress_circles4.svg");
const tutimg04 = require("../../Imgs/watering_can.svg");

function Tutorial_5(){
    Router.push("/TutorialPage05")
}

function BackTo03() {
    Router.push("/TutorialPage03")   
}

const TutorialPage04 = () => {

    useEffect(()=>{
        setTimeout(()=> {
            document.querySelector(".tutorial04_transition_wrap").style.opacity = "100%" 
        },100);
        
        setTimeout(()=> {
            document.querySelector(".button_div_page02").style.opacity = "100%" 
        },800)

    },[]);

return <div className="tutorial04_transition_wrap">
    <TutorialTop></TutorialTop>
    <TutorialMiddle02_06 tutimg={tutimg04}></TutorialMiddle02_06>
    <ProgressCircles img={progress_circles4}></ProgressCircles>
    <div className = "button_div_page02">
    <CustomButton text = "Back" onclick={BackTo03} width="120px" bgColor="#6A8838" fontSize="14pt"></CustomButton>
    <div className="button_spacer02"></div>
    <CustomButton text = "Next" onclick={Tutorial_5} width="120px" fontSize="14pt"></CustomButton>
    </div>
    <TutorialText Headertext="How often do you want to water your plant?" Desctext="Some plants require frequent watering while others require less. We will recommend you a plant based on your watering preference."></TutorialText>
</div>
}
export default TutorialPage04;