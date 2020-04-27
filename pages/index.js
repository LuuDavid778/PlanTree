import StartPageImg from "../Comps/David/startpage_img";
import CustomButtom from "../Comps/Kozy/CustomButton";
import Link from 'next/link'
import Router from 'next/router';
import './startpage.css';
import './app.css';

function ClickTutorial(){
    Router.push("/TutorialPage")
}

function ClickStarted() {
    Router.push("/PlantPage")
}

const StartPage=() =><div className="start_page_container">
<div className="start_page_logo">
<StartPageImg></StartPageImg>
</div>
<div className ="star_page_button_container">
    <span onClick = {ClickTutorial} ><CustomButtom className ="star_page_button" text={"Tutorial"} bgColor={"#92BC4A"}></CustomButtom></span>
    <span onClick = {ClickStarted}><CustomButtom className ="star_page_button" text={"Get Started"}></CustomButtom></span>

</div>
</div>


export default StartPage;
