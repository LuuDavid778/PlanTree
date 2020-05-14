
import '../../pages/PlantPage2/plantpage.css'
import PlantTopbar from "../../Comps/David/plantpage_topbar";
import PlantPageQuizCard from "../../Comps/Kozy/PlantPageQuizCard";
import CustomButtom from "../../Comps/Kozy/CustomButton";
import Link from 'next/link'
import  React, {useState, useEffect} from 'react';
import Router from 'next/router';
import {toggleStates, ChangeState} from '../togglestates'
import {data, ChangeData} from "../data" 



function Next() {
    if (data.Question_3 === "") {
    } else {
        
    Router.push("/PlantPage4")   
    }
}

function Back() {
    Router.push("/PlantPage2")   
}


const progress_stage3 = require("../../Imgs/progress_stage3.svg")
const progressbar3 = require("../../Imgs/progress_bar3.svg")

const ShortCard= require('../../Imgs/short_weeks_icon.svg');
const LongCard = require('../../Imgs/long_weeks_icon.svg');
const NextArrow = require('../../Imgs/next_arrow_white.svg');



const PlantPage = () =>  {
    
    var buttonstate = 0; 
    console.log(buttonstate)
    const [idA, idAToggle] = useState("")
    const [idB, idBToggle] = useState("")
    const [borderA, borderAToggle] = useState("")
    const [borderB, borderBToggle] = useState("")
    const [buttonColor, buttonChange] = useState("#B8B8B8")
    useEffect(()=>{
        setTimeout(()=> {
            document.querySelector(".plant_page03_transition-wrap").style.opacity = "100%" 
        },100)

    },[]);

    function toggleCardA() {
        if (toggleStates.selectedstateA3 === false){
            buttonstate = 0
            toggleButton()
        idBToggle("")
        idAToggle("animate")
        borderBToggle("3px solid transparent")
        borderAToggle("#7FA53E solid 3px")
          data.Question_3 = "ShortWeeks";
          ChangeData(data);
        console.log(data)
        toggleStates.selectedstateB3 = false;
        toggleStates.selectedstateA3 = true; 
        ChangeState(toggleStates);
        } else if (toggleStates.selectedstateA3 === true) {
            buttonstate = 1
            toggleButton()
            borderBToggle("3px solid transparent")
            borderAToggle("3px solid transparent")
            idAToggle("")
            toggleStates.selectedstateA3 = false; 
            ChangeState(toggleStates);
            data.Question_3 = "";
            ChangeData(data);
            console.log(data)
        }
    }
    function toggleCardB() {
        if (toggleStates.selectedstateB3 === false){
            buttonstate = 0
            toggleButton()
               borderBToggle("#7FA53E solid 3px")
               borderAToggle("3px solid transparent")
            idAToggle("")
          idBToggle("animate")
         data.Question_3 = "LongWeeks";
         ChangeData(data);
         console.log(data)
         toggleStates.selectedstateA3 = false;
        toggleStates.selectedstateB3 = true; 
        ChangeState(toggleStates);
        console.log(toggleStates)
        } else if (toggleStates.selectedstateB3 === true) {
            buttonstate = 1
            toggleButton()
            borderBToggle("3px solid transparent")
            borderAToggle("3px solid transparent")
            idBToggle("")
            toggleStates.selectedstateB3 = false;
            ChangeState(toggleStates);
            data.Question_3 = "";
            ChangeData(data);
            console.log(data)   
        }
    }

    function checkSelection() {
        if (toggleStates.selectedstateA3 === true){
            buttonstate = 0
            toggleButton()
        idBToggle("")
        idAToggle("animate")
        borderBToggle("3px solid transparent")
        borderAToggle("#7FA53E solid 3px")
          data.Question_3 = "ShortWeeks";
          ChangeData(data);
        console.log(data)
        ChangeState(toggleStates);
        }
    
        if (toggleStates.selectedstateB3 === true){
            buttonstate = 0
            toggleButton()
               borderBToggle("#7FA53E solid 3px")
               borderAToggle("3px solid transparent")
            idAToggle("")
          idBToggle("animate")
         data.Question_3 = "LongWeeks";
         ChangeData(data);
         console.log(data)
        ChangeState(toggleStates);
        console.log(toggleStates)
        } 
    }
function toggleButton() {
        if (buttonstate === 0) {
            buttonChange("#7FA53E")
            buttonstate = 1;
        } else if (buttonstate === 1)
    buttonChange("#B8B8B8")
    buttonstate = 0;
    }
    

        useEffect(()=>{
            setTimeout(()=> {
                checkSelection()
            },0)
    
        },[]);

        return <div className="plant_page03_transition-wrap">
        <PlantTopbar progress = {progressbar3} progress_stage = {progress_stage3} question = "How often do you want to water your plant?"></PlantTopbar>
        <div className="plant_page_card_container">
            <div>
            <PlantPageQuizCard border = {borderA} id = {idA} onclick = {toggleCardA} icon={ShortCard} text={"1-2 Weeks"} ></PlantPageQuizCard>
            </div>
            <div className="spacer2"></div>
            <div>
            <PlantPageQuizCard border = {borderB} id = {idB} onclick = {toggleCardB}  icon={LongCard} text={"2-3 Weeks"}></PlantPageQuizCard>
            </div>
        </div>
    
        <div className="plant_page_card_button">
            <div onClick = {Back}  className = "buttonA">
            <CustomButtom width="120px" text="Back" fontSize="16pt"></CustomButtom>
            </div>
            <div className="spacerB"></div>
          <div className = "buttonB"  onClick = {Next}>
            <CustomButtom bgColor = {buttonColor} width="120px" text="Next" fontSize="16pt"></CustomButtom>
            </div>
        </div>
        <div className="plant_page_card_arrow">
        </div>  
    </div>
     }
    

export default PlantPage;