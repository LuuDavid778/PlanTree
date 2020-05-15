import TutorialTop from '../../Comps/Kozy/TutorialTop';
import TutorialMiddle02_06 from '../../Comps/Aksel/TutorialMiddle02_06';
import ProgressCircles from '../../Comps/Kozy/ProgressCircles';
import CustomButton from '../../Comps/Kozy/CustomButton';
import Link from 'next/link'
import Router from 'next/router';
import './tutorialpage02.css';
import TutorialText from '../../Comps/Aksel/TutorialText';
import React, {useState, useEffect} from "react";
import TutorialTitle from "../../Comps/Aksel/TutorialTitle";
import "./TutorialPage02.css";

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

return<div>
    <TutorialTitle></TutorialTitle>
    <TutorialTop></TutorialTop>
    <div className="tutorial_effect_2">
        <TutorialMiddle02_06></TutorialMiddle02_06>
        <TutorialText Headertext="What type of house do you live in?" Desctext="Some plants need to be kept indoors, while others prefer the outside."></TutorialText>
    </div>
    <ProgressCircles img={progress_circles2}></ProgressCircles>
    <div className = "button_div_page02">
    <CustomButton text = "Back" onclick={BackTo01} width="120px" bgColor="#6A8838" fontSize="14pt"></CustomButton>
    <div className="button_spacer02"></div>
    <CustomButton text = "Next" onclick={Tutorial_3} width="120px" fontSize="14pt"></CustomButton>
    </div>
</div>
}
export default TutorialPage02;