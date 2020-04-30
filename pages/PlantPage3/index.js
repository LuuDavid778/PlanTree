
import './plantpage.css';
import PlantTopbar from "../../Comps/David/plantpage_topbar";
import PlantPageQuizCard from "../../Comps/Kozy/PlantPageQuizCard";
import CustomButtom from "../../Comps/Kozy/CustomButton";
import HamburgerMenu from "../../Comps/Kozy/HamburgerMenu";
import Link from 'next/link'
import  React, {useState} from 'react';
import Router from 'next/router';


function Next() {
    Router.push("/PreResultPage")     
}

function Back() {
    Router.push("/PlantPage2")   
}



const progress_stage3 = require("../../Imgs/progress_stage3.svg")
const progressbar3 = require("../../Imgs/progress_bar3.svg")

const ShortCard= require('../../Imgs/short_weeks.svg');
const LongCard = require('../../Imgs/long_weeks.svg');
const NextArrow = require('../../Imgs/next_arrow_white.svg');


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


const PlantPage = () =>  <div>
    <PlantTopbar progress = {progressbar3} progress_stage = {progress_stage3} question = "What kind of plant do you want?"></PlantTopbar>
    <div className="plant_page_card_container">
        <div onClick = {cardSelectA} id = "testA">
        <PlantPageQuizCard icon={ShortCard}  ></PlantPageQuizCard>
        </div>
        <div onClick = {cardSelectB}  id = "testB">
        <PlantPageQuizCard   icon={LongCard}></PlantPageQuizCard>
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