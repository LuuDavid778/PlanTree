import React, {useState} from 'react';
import './GlossaryPlantsTreesTopBar.css'
import Router from 'next/router';
import HamburgerMenu from '../../David/glossary_hamburger'
import { glossary_data, glossary_counter } from "../../../pages/glossary_data";

const BackArrow = require('../../../Imgs/back_arrow.svg');

function HomePage(){

    if (glossary_counter <= 11){
        Router.push("/GlossaryPage")
    } else {
        Router.push("/TreeGlossaryPage")
    }
}
const GlossaryPlantsTreesTopBar = () => {
    const [right, setRight,] = useState("300pt")
    return <div>   
    <HamburgerMenu right ={right}></HamburgerMenu>
    <img src={BackArrow} onClick = {HomePage} className="back_arrow_styling"></img>
    
</div>
}
export default GlossaryPlantsTreesTopBar; 