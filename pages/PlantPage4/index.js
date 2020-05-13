
import './plantpage.css';
import PlantTopbar from "../../Comps/David/plantpage_topbar";
import PlantPageQuizCard from "../../Comps/Kozy/PlantPageQuizCard";
import CustomButtom from "../../Comps/Kozy/CustomButton";
import Link from 'next/link'
import  React, {useState, useEffect} from 'react';
import Router from 'next/router';

import {data, ChangeData} from "../data" 
function Next() {
    Router.push("/PreResultPage")     
    console.log(data)

}

function Back() {
    Router.push("/PlantPage2")   
}


const progress_stage4 = require("../../Imgs/progress_stage4.svg")
const progressbar4 = require("../../Imgs/progress_bar4.svg")

const ShortCard= require('../../Imgs/short_weeks_icon.svg');
const LongCard = require('../../Imgs/long_weeks_icon.svg');
const NextArrow = require('../../Imgs/next_arrow_white.svg');

function OutputAnswer(){
    if (data.Question_1 === "House" && data.Question_2 === "Tree" && data.Question_3 === "ShortWeeks"){
        data.result = "Areca Palm"
        console.log(data)
    }
    }

const PlantPage = () =>  <div>
    <PlantTopbar progress = {progressbar4} progress_stage = {progress_stage4} question = "How often do you want to water your plant?"></PlantTopbar>
    <div className="plant_page_card_container">
        <div>
        <PlantPageQuizCard></PlantPageQuizCard>
        </div>
        <div className="spacer"></div>
        <div>
        <PlantPageQuizCard></PlantPageQuizCard>
        </div>
    </div>

    <div className="plant_page_card_button">
        <div onClick = {Back}  className = "buttonA">
        <CustomButtom width="120px" text="Back" ></CustomButtom>
        </div>
        <div className="spacer"></div>
      <div className = "buttonB"  onClick = {Next}>
        <CustomButtom onClick = {OutputAnswer} width="120px" text="Next"></CustomButtom>
        </div>
    </div>
    <div className="plant_page_card_arrow">
    </div>


        


    
</div>


export default PlantPage;