
import './plantpage.css';
import PlantTopbar from "../../Comps/David/plantpage_topbar";
import PlantPageQuizCard from "../../Comps/Kozy/PlantPageQuizCard";
import CustomButtom from "../../Comps/Kozy/CustomButton";
import Link from 'next/link'
import  React, {useEffect, useState} from 'react';
import Router from 'next/router';

function Next() {
    Router.push("/PlantPage3")   
}

function Back() {
    Router.push("/PlantPage")   
}


const progress_stage2 = require("../../Imgs/progress_stage2.svg")
const progressbar2 = require("../../Imgs/progress_bar2.svg")

const FlowerCard = require('../../Imgs/flowering_icon.svg');
const TreeCard = require('../../Imgs/tree_icon.svg');




const PlantPage = () =>  {
    useEffect(()=>{
        setTimeout(()=> {
            document.querySelector(".plant_page02_transition-wrap").style.opacity = "100%" 
        },100)

    },[]);


return <div className="plant_page02_transition-wrap">
    <PlantTopbar progress = {progressbar2} progress_stage = {progress_stage2} question = "What kind of plant do you want?"></PlantTopbar>
    <div className="plant_page_card_container">
        <div>
        <PlantPageQuizCard icon={FlowerCard}  text={"Flowering Plant"}></PlantPageQuizCard>
        </div>
        <div className="spacer"></div>
        <div>
        <PlantPageQuizCard   icon={TreeCard} text={"Tree"}></PlantPageQuizCard>
        </div>
    </div>

    <div className="plant_page_card_button">
        <div onClick = {Back}  className = "buttonA">
        <CustomButtom width="120px" text="Back" fontSize="16pt"></CustomButtom>
        </div>
        <div className="spacer"></div>
      <div className = "buttonB"  onClick = {Next}>
        <CustomButtom width="120px" text="Next" fontSize="16pt"></CustomButtom>
        </div>
    </div>
    <div className="plant_page_card_arrow">
    </div>
    
</div>

}

export default PlantPage;