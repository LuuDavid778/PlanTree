import TutorialTop from '../../Comps/Kozy/TutorialTop';
import TutorialMiddle02_06 from '../../Comps/Aksel/TutorialMiddle02_06'; 
import ProgressCircles from '../../Comps/Kozy/ProgressCircles';
import CustomButton from '../../Comps/Kozy/CustomButton';
import Link from 'next/link'
import Router from 'next/router';
import '../TutorialPage02/tutorialpage02.css';
import TutorialText from '../../Comps/Aksel/TutorialText';
import  React, {useEffect} from 'react';


const progress_circles3 = require("../../Imgs/progress_circles3.svg");
const tutimg03 = require("../../Imgs/two_plants.svg");

function Tutorial_4(){
    Router.push("/TutorialPage04")
}

function BackTo02() {
    Router.push("/TutorialPage02")   
}

const TutorialPage03 = () => {

    useEffect(()=>{
        setTimeout(()=> {
            document.querySelector(".tutorial03_transition_wrap").style.opacity = "100%" 
        },100);

        setTimeout(()=> {
            document.querySelector(".button_div_page02").style.opacity = "100%" 
        },800)

    },[]);

return <div className="tutorial03_transition_wrap">
    <TutorialTop></TutorialTop>
    <TutorialMiddle02_06 tutimg={tutimg03}></TutorialMiddle02_06>
    <ProgressCircles img={progress_circles3}></ProgressCircles>
    <div className = "button_div_page02">
    <CustomButton text = "Back" onClick={BackTo02} width="120px" bgColor="#6A8838" fontSize="14pt"></CustomButton>
    <div className="button_spacer02"></div>
    <CustomButton text = "Next" onClick={Tutorial_4} width="120px" fontSize="14pt"></CustomButton>
    </div>
    <TutorialText Headertext="What kind of plant are you looking for?" Desctext="Deside if you're looking for a planting flower or a tree."></TutorialText>
</div>

}

export default TutorialPage03;