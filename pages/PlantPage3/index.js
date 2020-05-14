
import './plantpage.css';
import PlantTopbar from "../../Comps/David/plantpage_topbar";
import PlantPageQuizCard from "../../Comps/Kozy/PlantPageQuizCard";
import CustomButtom from "../../Comps/Kozy/CustomButton";
import Link from 'next/link'
import  React, {useState, useEffect} from 'react';
import Router from 'next/router';

import {data, ChangeData} from "../data" 
function Next() {
    Router.push("/PlantPage4")     
    console.log(data)
}

function Back() {
    selectedstateB = false;
    selectedstateA = false;
    Router.push("/PlantPage2")   
}

var selectedstateA = false
var selectedstateB = false

const progress_stage3 = require("../../Imgs/progress_stage3.svg")
const progressbar3 = require("../../Imgs/progress_bar3.svg")

const ShortCard= require('../../Imgs/short_weeks_icon.svg');
const LongCard = require('../../Imgs/long_weeks_icon.svg');
const NextArrow = require('../../Imgs/next_arrow_white.svg');



const PlantPage = () =>  {
    const [idA, idAToggle] = useState("")
    const [idB, idBToggle] = useState("")
    const [borderA, borderAToggle] = useState("")
    const [borderB, borderBToggle] = useState("")
        useEffect(()=>{
            setTimeout(()=> {
                document.querySelector(".plant_page03_transition-wrap").style.opacity = "100%" 
            },100)
    
        },[]);
    
return <div className="plant_page03_transition-wrap">
    <PlantTopbar progress = {progressbar3} progress_stage = {progress_stage3} question = "How often do you want to water your plant?"></PlantTopbar>
    <div className="plant_page_card_container">
        <div>
        <PlantPageQuizCard border = {borderA} id = {idA} onclick = {()=>{
             if (selectedstateA === false){
                idBToggle("")
                idAToggle("animate")
                borderBToggle("3px solid transparent")
                borderAToggle("#7FA53E solid 3px")
                  data.Question_3 = "ShortWeeks";
                  ChangeData(data);
                console.log(data)
                selectedstateB = false;
                selectedstateA = true; 
                } else if (selectedstateA === true) {
                    borderBToggle("3px solid transparent")
                    borderAToggle("3px solid transparent")
                    idAToggle("")
                    selectedstateA = false;
                    data.Question_3 = "";
                    ChangeData(data);
                    console.log(data)
                }
        }} icon={ShortCard} text={"1-2 Weeks"} ></PlantPageQuizCard>
        </div>
        <div className="spacer2"></div>
        <div>
        <PlantPageQuizCard border = {borderB} id = {idB} onclick = {()=>{
            if (selectedstateB === false){
                borderBToggle("#7FA53E solid 3px")
                borderAToggle("3px solid transparent")
             idAToggle("")
           idBToggle("animate")
          data.Question_3 = "LongWeeks";
          ChangeData(data);
          console.log(data)
          selectedstateA = false;
         selectedstateB = true; 
         } else if (selectedstateB === true) {
             borderBToggle("3px solid transparent")
             borderAToggle("3px solid transparent")
             idBToggle("")
             selectedstateB = false;
             data.Question_3 = "";
             ChangeData(data);
             console.log(data)   
         }
        
        
        }}  icon={LongCard} text={"2-3 Weeks"}></PlantPageQuizCard>
        </div>
    </div>

    <div className="plant_page_card_button">
        <div onClick = {Back}  className = "buttonA">
        <CustomButtom width="120px" text="Back" fontSize="16pt"></CustomButtom>
        </div>
        <div className="spacerB"></div>
      <div className = "buttonB"  onClick = {Next}>
        <CustomButtom width="120px" text="Next" fontSize="16pt"></CustomButtom>
        </div>
    </div>
    <div className="plant_page_card_arrow">
    </div>  
</div>
 }

export default PlantPage;