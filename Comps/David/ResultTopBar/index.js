import React from 'react'
import './ResultTopBar.css'
import Router from 'next/router';
import HamburgerMenu from '../../David/hamburger_menu'
const HorizontalLogo = require('../../../Imgs/horizontal_logo.svg');

function HomePage(){
Router.push("/")
}
const ResultTopbar = () => <div>
      
    <HamburgerMenu></HamburgerMenu>
    <img src={HorizontalLogo} onClick = {HomePage} className="tutorial__logo"></img>
</div>

export default ResultTopbar; 