import TutorialTop from '../../Comps/Kozy/TutorialTop';
import TutorialMiddle02_06 from '../../Comps/Aksel/TutorialMiddle02_06'; 
import ProgressCircles from '../../Comps/Kozy/ProgressCircles';
import CustomButton from '../../Comps/Kozy/CustomButton';
import Link from 'next/link'
import Router from 'next/router';
import '../TutorialPage01/tutorialpage.css';
import TutorialText from '../../Comps/Aksel/TutorialText';
import  React, {useEffect} from 'react';
import TutorialTitle from '../../Comps/Aksel/TutorialTitle';

const progress_circles6 = require("../../Imgs/progress_circles6.svg");
const tutimg06 = require("../../Imgs/leaf_card.svg");

function BackTo05() {
    Router.push("/TutorialPage05")   
}

function startQuiz (){
    Router.push("/PlantPage")
}
const TutorialPage06 = () => {
    useEffect(()=>{
        setTimeout(()=> {
            document.querySelector(".tutorial06_transition_wrap").style.opacity = "100%" 
        },100);

        setTimeout(()=> {
            document.querySelector(".button_div_page02").style.opacity = "100%" 
        },800)

    },[]);

return <div className="tutorial06_transition_wrap">
    <TutorialTitle></TutorialTitle>
    <TutorialTop></TutorialTop>
    <TutorialMiddle02_06 tutimg={tutimg06}></TutorialMiddle02_06>
    <ProgressCircles img={progress_circles6}></ProgressCircles>
    <div className = "button_div_page02">
    <CustomButton text = "Back" width="120px" bgColor="#6A8838" fontSize="14pt" onclick={BackTo05}></CustomButton>
    <div className="button_spacer02"></div>
  <span onClick = {startQuiz}><CustomButton text = "Get started" width="120px" fontSize="13pt"></CustomButton></span>
    </div>
    <TutorialText Headertext="View your results and start growing!" Desctext="After you've answered all the questions, we'll provide you the best suited plant or tree. You'll then be able to learn more about the plant and how to grow it."></TutorialText>
</div>
}
export default TutorialPage06;