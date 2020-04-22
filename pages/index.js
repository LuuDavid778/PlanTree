import StartPageImg from "../Comps/David/startpage_img";
import CustomButtom from "../Comps/Kozy/CustomButton";
import './startpage.css';

const StartPage=() =>  <div className="start_page_container">
<div className="start_page_logo">
<StartPageImg></StartPageImg>
</div>
<div class="star_page_button_container">
    <CustomButtom class="star_page_button" text={"Tutorial"} bgColor={"#92BC4A"}></CustomButtom>
    <CustomButtom class="star_page_button" text={"Get Started"}></CustomButtom>
</div>
</div>


export default StartPage;