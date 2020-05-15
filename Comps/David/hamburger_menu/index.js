import React, {useState} from 'react';
import './app.css'
import Router from 'next/router';
import data, { restartResults } from "../../../data"

const HamburgerIcon = require('../../../Imgs/hamburger_menu.svg');
const HomeIcon = require('../../../Imgs/home_icon.svg');
const TutorialIcon = require('../../../Imgs/white_tutorial_icon.svg');
const FindPlantIcon = require('../../../Imgs/find_plant_icon.svg');
const GlossaryIcon = require('../../../Imgs/white_glossary_icon.svg');
const TreeIcon = require('../../../Imgs/tree_icon.svg');
const FlowerIcon = require('../../../Imgs/flower_icon.svg');
const TermsIcon = require('../../../Imgs/terms_icon.svg');


var menu_state = false;
const HamburgerMenu = ({}) => {
const [menu_position, setMenu] = useState("-100%")





return <div>
<img id = "hamburger_menu_icon_bar" onClick = {()=> {
        setMenu("0pt")
        menu_state = true;
   

}} src = {HamburgerIcon}></img>
<div className = "hamburger_menu_wrapper">
<div className = "hamburger_menu_cont" style = {{right:menu_position}}> 

<div className = "hamburger_menu_div">
<img id = "hamburger_menu_icon" onClick = {()=>{
setMenu("-100%")
menu_state = false; 


}}src = {HamburgerIcon}></img>
 <div className = "hamburger_menu_main">


<div className = "hamburger_menu_main_div" onClick = {()=>{
    Router.push("/")
}}>
    <img src = {HomeIcon}></img>
    <h2>Home</h2>
</div>

<div className = "hamburger_menu_main_div" onClick = {()=>{
    Router.push("/TutorialPage01")
}}>
    <img src = {TutorialIcon}></img>
    <h2>Tutorial</h2>
</div>

<div className = "hamburger_menu_main_div" onClick = {()=>{
   
Router.push("/PlantPage")

}}>
    <img src = {FindPlantIcon}></img>
    <h2>Find Your Plant</h2>
</div>

<div className = "hamburger_menu_main_div" onClick = {()=>{
Router.push("/GlossaryPage")
}}>
    <img src = {GlossaryIcon}></img>
    <h2>Glossary</h2>
</div>





 </div>
 <div></div>
<div>


</div>
</div>
</div>
</div>
</div>
}
HamburgerMenu.defaultProps = {
    right: "-100%",
}
export default HamburgerMenu;