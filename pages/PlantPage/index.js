
import './plantpage.css';
import PlantTopbar from "../../Comps/David/plantpage_topbar";
import PlantPageQuizCard from "../../Comps/Kozy/PlantPageQuizCard";
import CustomButtom from "../../Comps/Kozy/CustomButton";
import HamburgerMenu from "../../Comps/David/hamburger_menu";
import Link from 'next/link'
import  React, {useState, useEffect} from 'react';
import Router from 'next/router';

function ClickPreResult() {
    Router.push("/PlantPage2")   
}

// FIRST STEP TO CREATING page-load transition, import useEffect from react (line 8)
// Make sure you use curly brackets for the page const because you will be using
// javascript within the page. 
const AptCard = require('../../Imgs/apt_icon.svg');
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
    return <div> <div className ="plant_page_transition-wrap"><PlantTopbar></PlantTopbar> 
    <div className="plant_page_card_container">
        <div onClick = {cardSelectA} id = "testA">
        <PlantPageQuizCard   ></PlantPageQuizCard>
        </div>
        <div className="spacer"></div>
        <div onClick = {cardSelectB}  id = "testB">
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