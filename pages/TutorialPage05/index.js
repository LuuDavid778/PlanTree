import TutorialTop from '../../Comps/Kozy/TutorialTop';
import TutorialMiddle02_06 from '../../Comps/Aksel/TutorialMiddle02_06'; 
import ProgressCircles from '../../Comps/Kozy/ProgressCircles';
import CustomButton from '../../Comps/Kozy/CustomButton';
import Link from 'next/link'
import Router from 'next/router';
import '../TutorialPage01/tutorialpage.css';
import TutorialText from '../../Comps/Aksel/TutorialText';
import  React, {useEffect} from 'react';
import TutorialTitle from '../../Comps/Aksel/TutorialTitle'

const progress_circles5 = require("../../Imgs/progress_circles5.svg");
const tutimg05 = require("../../Imgs/thermometer.svg");

function Tutorial_6(){
    Router.push("/TutorialPage06")
}

function BackTo04() {
    Router.push("/TutorialPage04")   
}


const TutorialPage05 = () => {

    useEffect(()=>{
        setTimeout(()=> {
            document.querySelector(".tutorial05_transition_wrap").style.opacity = "100%" 
        },100);

        setTimeout(()=> {
            document.querySelector(".button_div_page02").style.opacity = "100%" 
        },800)

    },[]);

return <div className="tutorial05_transition_wrap">
  <TutorialTitle></TutorialTitle>
    <TutorialTop></TutorialTop>
    <TutorialMiddle02_06 tutimg={tutimg05}></TutorialMiddle02_06>
    <ProgressCircles img={progress_circles5}></ProgressCircles>
    <div className = "button_div_page02">
    <CustomButton text = "Back" onclick={BackTo04} width="120px" bgColor="#6A8838" fontSize="14pt"></CustomButton>
    <div className="button_spacer02"></div>
    <CustomButton text = "Next" onclick={Tutorial_6} width="120px" fontSize="14pt"></CustomButton>
    </div>
    <TutorialText Headertext="What's the temperature like in your area?" Desctext="Temperature is a key factor in plant growth and development, so it's crucial that plants are grown in the right temperature."></TutorialText>
</div>
}
export default TutorialPage05;