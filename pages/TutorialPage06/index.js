import TutorialTop from '../../Comps/Kozy/TutorialTop';
import TutorialMiddle02_06 from '../../Comps/Aksel/TutorialMiddle02_06'; 
import ProgressCircles from '../../Comps/Kozy/ProgressCircles';
import CustomButton from '../../Comps/Kozy/CustomButton';
import Link from 'next/link'
import Router from 'next/router';
import '../TutorialPage01/tutorialpage.css';
import TutorialText from '../../Comps/Aksel/TutorialText';

function Quiz1(){
    Router.push("/PlantPage")
}

const progress_circles6 = require("../../Imgs/progress_circles6.svg");
const tutimg06 = require("../../Imgs/leaf_card.svg");

const TutorialPage06 = () => <div>
    <TutorialTop></TutorialTop>
    <TutorialMiddle02_06 tutimg={tutimg06}></TutorialMiddle02_06>
    <ProgressCircles img={progress_circles6}></ProgressCircles>
    <div className = "button_div">
    <CustomButton text = "Get started" onClick={Quiz1}></CustomButton>
    </div>
    <TutorialText Headertext="View your results and see your plant!" Desctext="Once you've answered all the questions, PlanTree will pick a flowering plant or tree for you. You'll then be able to learn more about the plant and how to grow it."></TutorialText>
</div>

export default TutorialPage06;