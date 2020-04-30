import TutorialTop from '../../Comps/Kozy/TutorialTop';
import TutorialMiddle02_06 from '../../Comps/Aksel/TutorialMiddle02_06'; 
import ProgressCircles from '../../Comps/Kozy/ProgressCircles';
import CustomButton from '../../Comps/Kozy/CustomButton';
import Link from 'next/link'
import Router from 'next/router';
import '../TutorialPage01/tutorialpage.css';
import TutorialText from '../../Comps/Aksel/TutorialText';

const progress_circles3 = require("../../Imgs/progress_circles3.svg");
const tutimg03 = require("../../Imgs/two_plants.svg");

function Tutorial_4(){
    Router.push("/TutorialPage04")
}

const TutorialPage03 = () => <div>
    <TutorialTop></TutorialTop>
    <TutorialMiddle02_06 tutimg={tutimg03}></TutorialMiddle02_06>
    <ProgressCircles img={progress_circles3}></ProgressCircles>
    <div className = "button_div">
    <CustomButton text = "Next" onClick={Tutorial_4}></CustomButton>
    </div>
    <TutorialText Headertext="What kind of plant are you looking for?" Desctext="Deside if you're looking for a planting flower or a tree."></TutorialText>
</div>

export default TutorialPage03;