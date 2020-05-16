import TutorialTop from '../../Comps/Kozy/TutorialTop';
import TutorialMiddle02_06 from '../../Comps/Aksel/TutorialMiddle02_06';
import ProgressCircles from '../../Comps/Kozy/ProgressCircles';
import CustomButton from '../../Comps/Kozy/CustomButton';
import Link from 'next/link'
import Router from 'next/router';
import './tutorialpage02.css';
import TutorialText from '../../Comps/Aksel/TutorialText';
import  React, {useEffect} from 'react';
import TutorialTitle from "../../Comps/Aksel/TutorialTitle";

const progress_circles2 = require("../../Imgs/progress_circles2.svg");

function Tutorial_3(){
    Router.push("/TutorialPage03")
}

const TutorialPage02 = () => {

    useEffect(()=>{
        setTimeout(()=>{
            document.querySelector(".tutorial_effect_2").style.opacity = 100;
        },50)
    }, []);

<<<<<<< HEAD
    },[]);

return <div className="tutorial02_transition_wrap">
     <TutorialTitle></TutorialTitle>
=======
return<div>
    <TutorialTitle></TutorialTitle>
>>>>>>> b8289ab306843ce9e6d2efe3fc80f9002df75ceb
    <TutorialTop></TutorialTop>
    <TutorialMiddle02_06></TutorialMiddle02_06>
    <ProgressCircles img={progress_circles2}></ProgressCircles>
    <div className = "button_div_page02">
    <CustomButton text = "Back" onclick={BackTo01} width="120px" bgColor="#6A8838" fontSize="14pt"></CustomButton>
    <div className="button_spacer02"></div>
    <CustomButton text = "Next" onclick={Tutorial_3} width="120px" fontSize="14pt"></CustomButton>
    </div>
    <TutorialText Headertext="What type of house do you live in?" Desctext="Depending on what type of house you live in, a plant will have different growing conditions."></TutorialText>
</div>
}
export default TutorialPage02;