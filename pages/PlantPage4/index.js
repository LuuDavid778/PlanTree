import './plantpage.css';
import PlantTopbar from "../../Comps/David/plantpage_topbar";
import PlantPageQuizCardTemp from "../../Comps/Kozy/PlantPageQuizCardTemp";
import CustomButtom from "../../Comps/Kozy/CustomButton";
import Link from 'next/link'
import  React, {useEffect} from 'react';
import Router from 'next/router';


function Next() {
    Router.push("/PreResultPage")     
}

function Back() {
    Router.push("/PlantPage3")   
}



const progress_stage4 = require("../../Imgs/progress_stage4.svg")
const progressbar4 = require("../../Imgs/progress_bar4.svg")

const HotTemp = require('../../Imgs/hot.svg');
const WarmTemp = require('../../Imgs/warm.svg');
const ColdTemp = require('../../Imgs/cold.svg');



const PlantPage = () =>  {

        useEffect(()=>{
            setTimeout(()=> {
                document.querySelector(".plant_page04_transition-wrap").style.opacity = "100%" 
            },100)
    
        },[]);
    
return <div className="plant_page04_transition-wrap">
    <PlantTopbar progress = {progressbar4} progress_stage = {progress_stage4} question = "What’s the temperature like in your area?"></PlantTopbar>
    <div className="plant_page_card_container">
        <div>
        <PlantPageQuizCardTemp icon={HotTemp} text={"Hot"} />
        </div>
        <div className="spacer"></div>
        <div>
        <PlantPageQuizCardTemp   icon={WarmTemp} text={"Warm"} />
        </div>
        <div className="spacer"></div>
        <div>
        <PlantPageQuizCardTemp   icon={ColdTemp} text={"Cold"} />
        </div>
    </div>

    <div className="plant_page4_card_button">
        <div onClick = {Back}  className = "buttonA">
        <CustomButtom width="120px" text="Back" fontSize="16pt"></CustomButtom>
        </div>
        <div className="spacer"></div>
      <div className = "buttonB"  onClick = {Next}>
        <CustomButtom width="120px" text="Finish" fontSize="16pt"></CustomButtom>
        </div>
    </div>
    <div className="plant_page_card_arrow">
    </div>
    
</div>
 }

 export default PlantPage;
