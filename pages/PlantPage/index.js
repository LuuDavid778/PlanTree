
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


const PlantPage = () =>  <div>
    <PlantTopbar></PlantTopbar>
    <div className="plant_page_card_container">
        <div onClick = {cardSelectA} id = "testA">
        <PlantPageQuizCard   ></PlantPageQuizCard>
        </div>
        <div onClick = {cardSelectB}  id = "testB">
        <PlantPageQuizCard   icon={AptCard}></PlantPageQuizCard>
        </div>
    </div>

    <div className="plant_page_card_button">
        <span onClick = {ClickPreResult}>
        <CustomButtom width="180px" text="Next"></CustomButtom>
        </span>
    
    </div>
    <div className="plant_page_card_arrow">
    <img src={NextArrow}></img>
    </div>
    
</div>



export default PlantPage;