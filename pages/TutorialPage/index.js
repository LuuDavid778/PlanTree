import TutorialTop from '../../Comps/Kozy/TutorialTop';
import TutorialMiddle from '../../Comps/Aksel/TutorialMiddle';
import ProgressCircles from '../../Comps/Kozy/ProgressCircles';
import CustomButton from '../../Comps/Kozy/CustomButton';
import Link from 'next/link'
import Router from 'next/router';
import './tutorialpage.css'


function ClickPlantPage(){
    Router.push("/PlantPage")
}

const TutorialPage = () => <div>
    <TutorialTop></TutorialTop>
    <TutorialMiddle></TutorialMiddle>
    <ProgressCircles></ProgressCircles>
    <div onClick = {ClickPlantPage} className = "button_div">
   <CustomButton text = "Next"></CustomButton>
    </div>
</div>

export default TutorialPage;