
import './plantpage.css';
import PlantTopbar from "../../Comps/David/plantpage_topbar";
import PlantPageQuizCard from "../../Comps/Kozy/PlantPageQuizCard";
import CustomButtom from "../../Comps/Kozy/CustomButton";
import HamburgerMenu from "../../Comps/David/hamburger_menu";
import Link from 'next/link'
import  React, {useState, useEffect} from 'react';
import Router from 'next/router';
import {data, ChangeData} from "../data" 


function makeSelection(a){ 
    if(a = 1 )
    ChangeData({
        Question_1: "LMFAOXD"
    })
    else if (a = 2) {
        ChangeData({
            Question_1: "Apartment"
        })
    }

    document.querySelector(".selection_A").style.color = "red"
    console.log(data.Question_1)
}
function ClickPreResult() {
    Router.push("/PlantPage2")   
}

// FIRST STEP TO CREATING page-load transition, import useEffect from react (line 8)
// Make sure you use curly brackets for the page const because you will be using
// javascript within the page. 
const AptCard = require('../../Imgs/apt_icon.svg');
const NextArrow = require('../../Imgs/next_arrow_white.svg');
    





const PlantPage = () => {   // curly bracket should be inserted beginning and end
    // useEffect will basically use any javascript provided in it's parameters when the page is 
    // fully loaded, such as the one provided below.
    // in the CSS, opacity of the "plant_page_transition-wrap" is set to 0%
    // and this javascript function sets it to 100%
    useEffect(()=>{
        setTimeout(()=> {
            document.querySelector(".plant_page_transition-wrap").style.opacity = "100%" 
        },100)

    },[]);
    // we will have to "return <div>" due to react not being able to use html (line 57)
    return <div className = "plant_page"> <div className ="plant_page_transition-wrap"><PlantTopbar></PlantTopbar> 
    <div className="plant_page_card_container">
        <div className = "selection_A" onClick = {makeSelection}>
        <PlantPageQuizCard></PlantPageQuizCard>
        </div>
        <div className="spacer"></div>
        <div className = "selection_B" onClick = {makeSelection}>
        <PlantPageQuizCard   icon={AptCard} text={"Apartment"}></PlantPageQuizCard>
        </div>
    </div>

    <div className="plant_page_card_button">
        <span onClick = {ClickPreResult}>
        <CustomButtom width="180px" text="Next" fontSize="16pt"></CustomButtom>
        </span>
    
    </div>
    <div className="plant_page_card_arrow">
    <img src={NextArrow}></img>
    </div>
    
</div>
</div>
}


export default PlantPage;