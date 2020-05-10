
import './plantpage.css';
import PlantTopbar from "../../Comps/David/plantpage_topbar";
import PlantPageQuizCard from "../../Comps/Kozy/PlantPageQuizCard";
import CustomButtom from "../../Comps/Kozy/CustomButton";
import Link from 'next/link'
import  React, {useState} from 'react';
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




const PlantPage = () =>  

<div>
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
        <CustomButtom width="131px" text="Back" ></CustomButtom>
        </div>
      <div className = "buttonB"  onClick = {Next}>
        <CustomButtom width="131px" text="Next"></CustomButtom>
        </div>
    </div>
    <div className="plant_page_card_arrow">
    </div>
    
</div>



export default PlantPage;