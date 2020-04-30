import StartPageImg from "../Comps/David/startpage_img";
import CustomButtom from "../Comps/Kozy/CustomButton";
import Link from 'next/link'
import Router from 'next/router';
import './startpage.css';
import './app.css';



const StartPage=() =><div className="start_page_container">
<div className="start_page_logo">
<StartPageImg></StartPageImg>
</div>
<div className ="star_page_button_container">
    <Link href="./TutorialPage01"><a><CustomButtom className ="star_page_button" text={"Tutorial"} bgColor={"#92BC4A"}></CustomButtom></a></Link>
    <CustomButtom className ="star_page_button" text={"Get Started"}></CustomButtom>

</div>
</div>


export default StartPage;