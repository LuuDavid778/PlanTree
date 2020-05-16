import React, {useState} from 'react';
import './terminologytopbar.css'
import Router from 'next/router';
import HamburgerMenu from '../../David/glossary_hamburger'
import { glossary_data, glossary_counter } from "../../../pages/glossary_data";

const BackArrow = require('../../../Imgs/back_arrow.svg');

function HomePage(){
        Router.push("/TerminologyGlossaryPage")
}
const TerminologyTopBar = () => {
const [right, setRight,] = useState("300pt")
return<div>
    <img src={BackArrow} onClick = {HomePage} className="back_arrow_styling"></img>
    <HamburgerMenu right ={right}></HamburgerMenu>
</div>
}
export default TerminologyTopBar; 