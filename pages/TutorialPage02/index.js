import TutorialTop from '../../Comps/Kozy/TutorialTop';
import TutorialMiddle02_06 from '../../Comps/Aksel/TutorialMiddle02_06';
import ProgressCircles from '../../Comps/Kozy/ProgressCircles';
import CustomButton from '../../Comps/Kozy/CustomButton';
import Link from 'next/link'
import Router from 'next/router';
import '../TutorialPage01/tutorialpage.css';
import TutorialText from '../../Comps/Aksel/TutorialText';

const progress_circles2 = require("../../Imgs/progress_circles2.svg");


function Tutorial_3(){
    Router.push("/TutorialPage03")
}

const TutorialPage02 = () => <div>
    <TutorialTop></TutorialTop>
    <TutorialMiddle02_06></TutorialMiddle02_06>
    <ProgressCircles img={progress_circles2}></ProgressCircles>
    <div className = "button_div">
    <CustomButton text = "Next" onClick={Tutorial_3}></CustomButton>
    </div>
    <TutorialText Headertext="What type of house do you live in?" Desctext="Some plants need to be kept indoors, while others prefer the outside."></TutorialText>
</div>

export default TutorialPage02;