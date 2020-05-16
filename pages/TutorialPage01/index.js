import TutorialTop from '../../Comps/Kozy/TutorialTop';
import TutorialMiddle01 from '../../Comps/Aksel/TutorialMiddle01';
import ProgressCircles from '../../Comps/Kozy/ProgressCircles';
import CustomButton from '../../Comps/Kozy/CustomButton';
import Link from 'next/link'
import Router from 'next/router';
import './tutorialpage.css'
import { route } from 'next/dist/next-server/server/router';
import React, {useState, useEffect} from "react";

function Tutorial_2(){
    Router.push("/TutorialPage02")
}

const TutorialPage01 = () => {

    useEffect(()=>{
        setTimeout(()=>{
            document.querySelector(".tutorial_effect_1").style.opacity = 100;
        },50)
    }, []);

return<div className="tutorial_effect_1">
    <TutorialTop></TutorialTop>
    <TutorialMiddle01></TutorialMiddle01>
    <ProgressCircles></ProgressCircles>
    <div className = "button_div">
    <CustomButton text = "Next" onclick={Tutorial_2} fontSize="16pt"></CustomButton>
    </div>
</div>
}
export default TutorialPage01;