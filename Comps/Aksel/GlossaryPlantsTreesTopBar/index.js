import React from 'react'
import './GlossaryPlantsTreesTopBar.css'
import Router from 'next/router';
import HamburgerMenu from '../../David/hamburger_menu'
const BackArrow = require('../../../Imgs/back_arrow.svg');

function HomePage(){
Router.push("/")
}
const GlossaryPlantsTreesTopBar = () => <div>
      
    <HamburgerMenu></HamburgerMenu>
    <img src={BackArrow} onClick = {HomePage} className="back_arrow_styling"></img>
</div>

export default GlossaryPlantsTreesTopBar; 