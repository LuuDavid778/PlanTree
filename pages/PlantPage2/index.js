
import '../../pages/PlantPage2/plantpage.css'
import PlantTopbar from "../../Comps/David/plantpage_topbar";
import PlantPageQuizCard from "../../Comps/Kozy/PlantPageQuizCard";
import CustomButtom from "../../Comps/Kozy/CustomButton";
import Link from 'next/link'
import  React, {useState, useEffect} from 'react';
import Router from 'next/router';

import {data, ChangeData} from "../data" 




var selectedstateA = false
var selectedstateB = false
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
    Router.push("/PlantPage3")  
    console.log("all data consoled", data) 
}

function Back() {
    selectedstateB = false;
    selectedstateA = false;
    Router.push("/PlantPage")   
}


const progress_stage2 = require("../../Imgs/progress_stage2.svg")
const progressbar2 = require("../../Imgs/progress_bar2.svg")

const FlowerCard = require('../../Imgs/flowering_icon.svg');
const TreeCard = require('../../Imgs/tree_icon.svg');




const PlantPage = () =>  {


    const [idA, idAToggle] = useState("")
    const [idB, idBToggle] = useState("")
    const [borderA, borderAToggle] = useState("")
    const [borderB, borderBToggle] = useState("")

    useEffect(()=>{
        setTimeout(()=> {
            document.querySelector(".plant_page02_transition-wrap").style.opacity = "100%" 
        },100)

        setTimeout(()=> {
            document.querySelector(".plant_page_card_container").style.opacity = "100%" 
        },500)

        setTimeout(()=> {
            document.querySelector(".plant_page_card_button").style.opacity = "100%" 
        },1100)

    },[]);


return <div className="plant_page02_transition-wrap">
    <PlantTopbar progress = {progressbar2} progress_stage = {progress_stage2} question = "What kind of plant do you want?"></PlantTopbar>
    <div className="plant_page_card_container">
        <div>





        <PlantPageQuizCard border = {borderA} id = {idA} onclick = {()=>{
              if (selectedstateA === false){
                idBToggle("")
                idAToggle("animate")
                borderBToggle("3px solid transparent")
                borderAToggle("#7FA53E solid 3px")
                  data.Question_2 = "FloweringPlant";
                  ChangeData(data);
                console.log(data)
                selectedstateB = false;
                selectedstateA = true; 
                } else if (selectedstateA === true) {
                    borderBToggle("3px solid transparent")
                    borderAToggle("3px solid transparent")
                    idAToggle("")
                    selectedstateA = false;
                    data.Question_2 = "";
                    ChangeData(data);
                    console.log(data)
                }
        }} icon={FlowerCard}  text={"Flowering Plant"}></PlantPageQuizCard>
        </div>
        <div className="spacer2"></div>
        <div>
        <PlantPageQuizCard border = {borderB} id = {idB} onclick = {()=>{
               if (selectedstateB === false){
                borderBToggle("#7FA53E solid 3px")
                borderAToggle("3px solid transparent")
             idAToggle("")
           idBToggle("animate")
          data.Question_2 = "Tree";
          ChangeData(data);
          console.log(data)
          selectedstateA = false;
         selectedstateB = true; 
         } else if (selectedstateB === true) {
             borderBToggle("3px solid transparent")
             borderAToggle("3px solid transparent")
             idBToggle("")
             selectedstateB = false;
             data.Question_2 = "";
             ChangeData(data);
             console.log(data)   
         }
        }} icon={TreeCard} text={"Tree"}></PlantPageQuizCard>
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