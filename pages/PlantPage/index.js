
import './plantpage.css';
import PlantTopbar from "../../Comps/David/plantpage_topbar";
import PlantPageQuizCard from "../../Comps/Kozy/PlantPageQuizCard";
import CustomButtom from "../../Comps/Kozy/CustomButton";
import HamburgerMenu from "../../Comps/David/hamburger_menu";
import Link from 'next/link'
import  React, {useState, useEffect} from 'react';
import Router from 'next/router';
import {data, ChangeData} from "../../data" 
import {toggleStates, ChangeState} from '../../togglestates'



// function makeSelection(n){ 
//     console.log(n)
//     if(n === 1 )
//     ChangeData({
//         Question_1: "House"
//     })
//     else if (n === 2) {
//         ChangeData({
//             Question_1: "Apartment"
//         })
//     }

//  console.log(data.Question_1)
// }



function nextPage() {
    
    if (data.Question_1 === "") {
    } else {
        
    Router.push("/PlantPage2")   
    }
}


const AptCard = require('../../Imgs/apt_icon.svg');
const PlantPage = () => {  

    var buttonstate = 0; 
    
    const [idA, idAToggle] = useState("")
    const [idB, idBToggle] = useState("")
    const [borderA, borderAToggle] = useState("")
    const [borderB, borderBToggle] = useState("")
    const [buttonColor, buttonChange] = useState("#B8B8B8")

function toggleCardA() {
    if (toggleStates.selectedstateA1 === false){
        buttonstate = 0
        toggleButton()
    idBToggle("")
    idAToggle("animate")
    borderBToggle("3px solid transparent")
    borderAToggle("#7FA53E solid 3px")
      data.Question_1 = "House";
      ChangeData(data);
    console.log(data)
    toggleStates.selectedstateB1 = false;
    toggleStates.selectedstateA1 = true; 
    ChangeState(toggleStates);
    } else if (toggleStates.selectedstateA1 === true) {
        buttonstate = 1
        toggleButton()
        borderBToggle("3px solid transparent")
        borderAToggle("3px solid transparent")
        idAToggle("")
        toggleStates.selectedstateA1 = false; 
        ChangeState(toggleStates);
        data.Question_1 = "";
        ChangeData(data);
        console.log(data)
    }
}
 function toggleCardB() {
    if (toggleStates.selectedstateB1 === false){
        buttonstate = 0
        toggleButton()
           borderBToggle("#7FA53E solid 3px")
           borderAToggle("3px solid transparent")
        idAToggle("")
      idBToggle("animate")
     data.Question_1 = "Apartment";
     ChangeData(data);
     console.log(data)
     toggleStates.selectedstateA1 = false;
    toggleStates.selectedstateB1 = true; 
    ChangeState(toggleStates);
    console.log(toggleStates)
    } else if (toggleStates.selectedstateB1 === true) {
        buttonstate = 1
        toggleButton()
        borderBToggle("3px solid transparent")
        borderAToggle("3px solid transparent")
        idBToggle("")
        toggleStates.selectedstateB1 = false;
        ChangeState(toggleStates);
        data.Question_1 = "";
        ChangeData(data);
        console.log(data)   
    }
}

function checkSelection() {
    if (toggleStates.selectedstateA1 === true){
        buttonstate = 0
        toggleButton()
    idBToggle("")
    idAToggle("animate")
    borderBToggle("3px solid transparent")
    borderAToggle("#7FA53E solid 3px")
      data.Question_1 = "House";
      ChangeData(data);
    console.log(data)
    ChangeState(toggleStates);
    }

    if (toggleStates.selectedstateB1 === true){
        buttonstate = 0
        toggleButton()
           borderBToggle("#7FA53E solid 3px")
           borderAToggle("3px solid transparent")
        idAToggle("")
      idBToggle("animate")
     data.Question_1 = "Apartment";
     ChangeData(data);
     console.log(data)
    ChangeState(toggleStates);
    console.log(toggleStates)
    } 
}
    useEffect(()=>{
        setTimeout(()=> {
            checkSelection()
        },0)

    },[]);

    useEffect(()=>{
        setTimeout(()=> {
            document.querySelector(".plant_page_transition-wrap").style.opacity = "100%" 
        },100)

        setTimeout(()=> {
            document.querySelector(".plant_page_card_container").style.opacity = "100%" 
        },500)

        setTimeout(()=> {
            document.querySelector(".plant_page_card_button").style.opacity = "100%" 
        },1100)


    },[]);
 
    function toggleButton() {
        if (buttonstate === 0) {
            buttonChange("#7FA53E")
            buttonstate = 1;
        } else if (buttonstate === 1)
    buttonChange("#B8B8B8")
    buttonstate = 0;
    }
    
    // we will have to "return <div>" due to react not being able to use html (line 57)
    return <div className = "plant_page"> <div className ="plant_page_transition-wrap"><PlantTopbar></PlantTopbar> 
    <div className="plant_page_card_container">

        
        <div className = "selection1">
        <PlantPageQuizCard border = {borderA} id = {idA} onclick = {toggleCardA}></PlantPageQuizCard>        
        </div>

        <div className="spacer"></div>
        <div className = "selection2">
        <PlantPageQuizCard border = {borderB} id = {idB} onclick = {toggleCardB} icon={AptCard} text={"Apartment"}></PlantPageQuizCard>
        </div>
    </div>

    <div className="plant_page_card_button">
        <span onClick = {nextPage}>
        <CustomButtom bgColor = {buttonColor} width="180px" text="Next"></CustomButtom>
        </span>
    
    </div>
    
</div>
</div>
}


export default PlantPage;



// onClick = {()=>{
         
            
//     if (selectedstateA === false){
//         document.querySelector(".selection2").style.border = ""
//         document.querySelector(".selection1").style.border = "#7FA53E solid 3px"
//         selectedstateA = true 
//         selectedstateB = false 
//     } else if (selectedstateA === true) {
//         document.querySelector(".selection1").style.border = ""
//         selectedstateA = false
//     }
// }}