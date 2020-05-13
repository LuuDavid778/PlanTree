
import './plantpage.css';
import PlantTopbar from "../../Comps/David/plantpage_topbar";
import PlantPageQuizCard from "../../Comps/Kozy/PlantPageQuizCard";
import CustomButtom from "../../Comps/Kozy/CustomButton";
import HamburgerMenu from "../../Comps/David/hamburger_menu";
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

// FIRST STEP TO CREATING page-load transition, import useEffect from react (line 8)
// Make sure you use curly brackets for the page const because you will be using
// javascript within the page. 
const AptCard = require('../../Imgs/apt_icon.svg');
const NextArrow = require('../../Imgs/next_arrow_white.svg');
const PlantPage = () => {  // curly bracket should be inserted beginning and end
    // useEffect will basically use any javascript provided in it's parameters when the page is 
    // fully loaded, such as the one provided below.
    // in the CSS, opacity of the "plant_page_transition-wrap" is set to 0%
    // and this javascript function sets it to 100%
    const [idA, idAToggle] = useState("")
    const [idB, idBToggle] = useState("")
    useEffect(()=>{
        setTimeout(()=> {
            document.querySelector(".plant_page_transition-wrap").style.opacity = "100%" 
        },100)

    },[]);
    // we will have to "return <div>" due to react not being able to use html (line 57)
    return <div className = "plant_page"> <div className ="plant_page_transition-wrap"><PlantTopbar></PlantTopbar> 
    <div className="plant_page_card_container">

        
        <div className = "selection1">
        <PlantPageQuizCard id = {idA} onclick = {()=>{
            if (selectedstateA === false){
            idAToggle("animate")
              data.Question_1 = "House";
              ChangeData(data);
            console.log(data)
            selectedstateA = true; 
            } else if (selectedstateA === true) {
                idAToggle("")
                selectedstateA = false;
                
            }
            
        }}></PlantPageQuizCard>        
        </div>

        <div className="spacer"></div>
        <div className = "selection2">
        <PlantPageQuizCard id = {idB} onclick = {()=>{
              idBToggle("animate")
             data.Question_1 = "Apartment";
             ChangeData(data);
            console.log(data)
        }}icon={AptCard} text={"Apartment"}></PlantPageQuizCard>
        </div>
    </div>

    <div className="plant_page_card_button">
        <span onClick = {nextPage}>
        <CustomButtom width="180px" text="Next"></CustomButtom>
        </span>
    
    </div>
    <div className="plant_page_card_arrow">
    <img src={NextArrow}></img>
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