
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



var A = false 
var B = false 
function cardSelectA(){
    if (A === false ){
    B = false 
    document.getElementById("testB").style.backgroundColor = "";
    document.getElementById("testA").style.backgroundColor = "#7FA53E";

    A = true;
} else {
    document.getElementById("testA").style.backgroundColor = ""
    A = false;
}
}

function cardSelectB(){
    if (B === false ){
        A = false 
        document.getElementById("testA").style.backgroundColor = "";
    document.getElementById("testB").style.backgroundColor = "#7FA53E";
    B = true;
} else {
    document.getElementById("testB").style.backgroundColor = ""
    B = false;
}
}


const PlantPage = () =>  

<div>
    <PlantTopbar progress = {progressbar2} progress_stage = {progress_stage2} question = "What kind of plant do you want?"></PlantTopbar>
    <div className="plant_page_card_container">
        <div onClick = {cardSelectA} id = "testA">
        <PlantPageQuizCard icon={FlowerCard}  text={"Flowring Plant"}></PlantPageQuizCard>
        </div>
        <div className="spacer"></div>
        <div onClick = {cardSelectB}  id = "testB">
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