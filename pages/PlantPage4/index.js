import "../PlantPage4/plantpage.css"
import PlantTopbar from "../../Comps/David/plantpage_topbar";
import PlantPageQuizCardTemp from "../../Comps/Kozy/PlantPageQuizCardTemp";
import CustomButtom from "../../Comps/Kozy/CustomButton";
import Link from 'next/link'
import  React, {useEffect, useState} from 'react';
import Router from 'next/router';
import { checkResults } from '../data';
import {data, ChangeData} from "../data" 


var selectedstateA = false
var selectedstateB = false
var selectedstateC = false

function Next() {
    if (data.Question_4 === "") {
    } else {
    {checkResults}
    Router.push("/PreResultPage")   
    selectedstateA = false;
    selectedstateB = false;
    }
   
      
}

function Back() {
    selectedstateB = false;
    selectedstateA = false;
    selectedstateC = false;
    Router.push("/PlantPage3")   
}



const progress_stage4 = require("../../Imgs/progress_stage4.svg")
const progressbar4 = require("../../Imgs/progress_bar4.svg")

const HotTemp = require('../../Imgs/hot.svg');
const WarmTemp = require('../../Imgs/warm.svg');
const ColdTemp = require('../../Imgs/cold.svg');



const PlantPage = () =>  {

    const [idA, idAToggle] = useState("")
    const [idB, idBToggle] = useState("")
    const [idC, idCToggle] = useState("")
    const [borderA, borderAToggle] = useState("")
    const [borderB, borderBToggle] = useState("")
    const [borderC, borderCToggle] = useState("")
        useEffect(()=>{
            setTimeout(()=> {
                document.querySelector(".plant_page04_transition-wrap").style.opacity = "100%" 
            },100)

            setTimeout(()=> {
                document.querySelector(".plant_page_card_container").style.opacity = "100%" 
            },500)
    
            setTimeout(()=> {
                document.querySelector(".plant_page4_card_button").style.opacity = "100%" 
            },1100)
    
        },[]);
    
return <div className="plant_page04_transition-wrap">
    <PlantTopbar progress = {progressbar4} progress_stage = {progress_stage4} question = "What’s the temperature like in your area?"></PlantTopbar>
    <div className="plant_page_card_container">
        <div>
        <PlantPageQuizCardTemp id = {idA} border = {borderA} onclick = {()=>{

if (selectedstateA === false){
    idCToggle("")
    idBToggle("")
    idAToggle("animate")
    borderBToggle("3px solid transparent")
    borderCToggle("3px solid transparent")
    borderAToggle("#7FA53E solid 3px")
  data.Question_4 = "Hot";
  selectedstateA = true;
  selectedstateB = false;
  selectedstateC = false;
  ChangeData(data);
console.log(data)
} else if (selectedstateA === true) {
    borderBToggle("3px solid transparent")
    borderCToggle("3px solid transparent")
    borderAToggle("3px solid transparent")
    idAToggle("")
    selectedstateA = false;
    data.Question_4 = "";
    ChangeData(data);
    console.log(data)
}



        }}icon={HotTemp} text={"Hot"} />
        </div>
        <div className="spacer4"></div>
        <div>
        <PlantPageQuizCardTemp  id ={idB} border = {borderB} onclick = {()=>{
 if (selectedstateB === false){
    idCToggle("")
    idAToggle("")
    idBToggle("animate")
    borderCToggle("3px solid transparent")
    borderAToggle("3px solid transparent")
    borderBToggle("#7FA53E solid 3px")
  data.Question_4 = "Warm";
  selectedstateB = true;
  selectedstateA = false;
  selectedstateC = false;
  ChangeData(data);
console.log(data)
} else if (selectedstateB === true) {
    borderBToggle("3px solid transparent")
    borderCToggle("3px solid transparent")
    borderAToggle("3px solid transparent")
    idBToggle("")
    selectedstateB = false;
    data.Question_4 = "";
    ChangeData(data);
    console.log(data)
}


        }}icon={WarmTemp} text={"Warm"} />
        </div>
        <div className="spacer4"></div>
        <div>
        <PlantPageQuizCardTemp  id ={idC} border = {borderC} onclick ={()=>{
             if (selectedstateC === false){
                idBToggle("")
                idAToggle("")
                idCToggle("animate")
                borderBToggle("3px solid transparent")
                borderAToggle("3px solid transparent")
                borderCToggle("#7FA53E solid 3px")
              data.Question_4 = "Cold";
              selectedstateB = false;
              selectedstateA = false;
              selectedstateC = true;
              ChangeData(data);
            console.log(data)
            } else if (selectedstateC === true) {
                borderBToggle("3px solid transparent")
                borderCToggle("3px solid transparent")
                borderAToggle("3px solid transparent")
                idCToggle("")
                selectedstateC = false;
                data.Question_4 = "";
                ChangeData(data);
                console.log(data)
            }

            
        }}icon={ColdTemp} text={"Cold"} />
        </div>
    </div>

    <div className="plant_page4_card_button">
        <div onClick = {Back}  className = "buttonA">
        <CustomButtom width="120px" text="Back" fontSize="16pt"></CustomButtom>
        </div>
        <div className="spacerB"></div>
      <div className = "buttonB"  onClick = {Next}>
        <CustomButtom width="120px" text="Finish" fontSize="16pt"></CustomButtom>
        </div>
    </div>
    <div className="plant_page_card_arrow">
    </div>
    
</div>
 }

 export default PlantPage;
