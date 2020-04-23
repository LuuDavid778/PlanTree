import TutorialTop from '../../Comps/Kozy/TutorialTop';
import TutorialMiddle from '../../Comps/Aksel/TutorialMiddle';
import ProgressCircles from '../../Comps/Kozy/ProgressCircles';
import CustomButton from '../../Comps/Kozy/CustomButton';
import Link from 'next/link'
import Router from 'next/router';
import './tutorialpage.css'

const TutorialPage = () => <div>
    <TutorialTop></TutorialTop>
    <TutorialMiddle></TutorialMiddle>
    <ProgressCircles></ProgressCircles>
    <div className = "button_div">
    <Link href = "./PlantPage"><a><CustomButton text = "Next"></CustomButton></a></Link>
    </div>
</div>

export default TutorialPage;