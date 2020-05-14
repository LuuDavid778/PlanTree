
import '../../pages/PlantPage2/plantpage.css'
import PlantTopbar from "../../Comps/David/plantpage_topbar";
import PlantPageQuizCard from "../../Comps/Kozy/PlantPageQuizCard";
import CustomButtom from "../../Comps/Kozy/CustomButton";
import Link from 'next/link'
import  React, {useState, useEffect} from 'react';
import Router from 'next/router';
import {toggleStates, ChangeState} from '../togglestates'
import {data, ChangeData} from "../data" 


// function makeSelection(n){ 
//     console.log(n)
//     if(n === 1 )
//     ChangeData({
//         Question_2: "Flowering Plant"
//     })
//     else if (n === 2) {
//         ChangeData({
//             Question_2: "Tree"
//         })
//     }

//     console.log(data.Question_2)
// }



function Next() {
    if (data.Question_2 === "") {
    } else {
        
    Router.push("/PlantPage3")   
    }
}

function Back() {
    Router.push("/PlantPage")   
}


const progress_stage2 = require("../../Imgs/progress_stage2.svg")
const progressbar2 = require("../../Imgs/progress_bar2.svg")

const FlowerCard = require('../../Imgs/flowering_icon.svg');
const TreeCard = require('../../Imgs/tree_icon.svg');




const PlantPage = () =>  {
    var buttonstate = 0; 

    const [idA, idAToggle] = useState("")
    const [idB, idBToggle] = useState("")
    const [borderA, borderAToggle] = useState("")
    const [borderB, borderBToggle] = useState("")
    const [buttonColor, buttonChange] = useState("#B8B8B8")
    useEffect(()=>{
        setTimeout(()=> {
            document.querySelector(".plant_page02_transition-wrap").style.opacity = "100%" 
        },100)

    },[]);

    function toggleCardA() {
        if (toggleStates.selectedstateA2 === false){
            buttonstate = 0
            toggleButton()
        idBToggle("")
        idAToggle("animate")
        borderBToggle("3px solid transparent")
        borderAToggle("#7FA53E solid 3px")
          data.Question_2 = "FloweringPlant";
          ChangeData(data);
        console.log(data)
        toggleStates.selectedstateB2 = false;
        toggleStates.selectedstateA2 = true; 
        ChangeState(toggleStates);
        } else if (toggleStates.selectedstateA2 === true) {
            buttonstate = 1
            toggleButton()
            borderBToggle("3px solid transparent")
            borderAToggle("3px solid transparent")
            idAToggle("")
            toggleStates.selectedstateA2 = false; 
            ChangeState(toggleStates);
            data.Question_2 = "";
            ChangeData(data);
            console.log(data)
        }
    }
    function toggleCardB() {
        if (toggleStates.selectedstateB2 === false){
            buttonstate = 0
            toggleButton()
               borderBToggle("#7FA53E solid 3px")
               borderAToggle("3px solid transparent")
            idAToggle("")
          idBToggle("animate")
         data.Question_2 = "Tree";
         ChangeData(data);
         console.log(data)
         toggleStates.selectedstateA2 = false;
        toggleStates.selectedstateB2 = true; 
        ChangeState(toggleStates);
        console.log(toggleStates)
        } else if (toggleStates.selectedstateB2 === true) {
            buttonstate = 1
            toggleButton()
            borderBToggle("3px solid transparent")
            borderAToggle("3px solid transparent")
            idBToggle("")
            toggleStates.selectedstateB2 = false;
            ChangeState(toggleStates);
            data.Question_2 = "";
            ChangeData(data);
            console.log(data)   
        }
    }

    function checkSelection() {
        if (toggleStates.selectedstateA2 === true){
            buttonstate = 0
            toggleButton()
        idBToggle("")
        idAToggle("animate")
        borderBToggle("3px solid transparent")
        borderAToggle("#7FA53E solid 3px")
          data.Question_2 = "FloweringPlant";
          ChangeData(data);
        console.log(data)
        ChangeState(toggleStates);
        }
    
        if (toggleStates.selectedstateB2 === true){
            buttonstate = 0
            toggleButton()
               borderBToggle("#7FA53E solid 3px")
               borderAToggle("3px solid transparent")
            idAToggle("")
          idBToggle("animate")
         data.Question_2 = "Tree";
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

return <div className="plant_page02_transition-wrap">
    <PlantTopbar progress = {progressbar2} progress_stage = {progress_stage2} question = "What kind of plant do you want?"></PlantTopbar>
    <div className="plant_page_card_container">
        <div>





        <PlantPageQuizCard border = {borderA} id = {idA} onclick = {toggleCardA} icon={FlowerCard}  text={"Flowering Plant"}></PlantPageQuizCard>
        </div>
        <div className="spacer2"></div>
        <div>
        <PlantPageQuizCard border = {borderB} id = {idB} onclick = {toggleCardB}text={"Tree"}></PlantPageQuizCard>
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