import TutorialTop from '../../Comps/Kozy/TutorialTop';
import TutorialMiddle01 from '../../Comps/Aksel/TutorialMiddle01';
import ProgressCircles from '../../Comps/Kozy/ProgressCircles';
import CustomButton from '../../Comps/Kozy/CustomButton';
import Link from 'next/link'
import Router from 'next/router';
import './tutorialpage.css'
import { route } from 'next/dist/next-server/server/router';

function Tutorial_2(){
    Router.push("/TutorialPage02")
}

const TutorialPage01 = () => <div>
    <TutorialTop></TutorialTop>
    <TutorialMiddle01></TutorialMiddle01>
    <ProgressCircles></ProgressCircles>
    <div className = "button_div">
    <CustomButton text = "Next" onClick={Tutorial_2} fontSize="16pt"></CustomButton>
    </div>
</div>

export default TutorialPage01;