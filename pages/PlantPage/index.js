
import './plantpage.css';
import PlantTopbar from "../../Comps/David/plantpage_topbar";
import PlantPageQuizCard from "../../Comps/Kozy/PlantPageQuizCard";
import CustomButtom from "../../Comps/Kozy/CustomButton";
import HamburgerMenu from "../../Comps/Kozy/HamburgerMenu";

const AptCard = require('../../Imgs/apartment.svg');
const NextArrow = require('../../Imgs/next_arrow_white.svg');

const PlantPage=() =>  <div>
    <div>

    </div>
    <HamburgerMenu></HamburgerMenu>
    <PlantTopbar></PlantTopbar>
    <div className="plant_page_card_container">
        <PlantPageQuizCard className="plant_page_card"></PlantPageQuizCard>
        <PlantPageQuizCard icon={AptCard}></PlantPageQuizCard>
    </div>
    <div className="plant_page_card_button">
        <CustomButtom width="180px" text="Next"></CustomButtom>
    </div>
    <div className="plant_page_card_arrow">
    <img src={NextArrow}></img>
    </div>
    
</div>


export default PlantPage;