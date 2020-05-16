import React, {useState} from 'react';
import './GlossaryHeaderTerminology.css';
import Router from 'next/router';
import HamburgerMenu from '../../David/glossary_hamburger'

const information = require('../../../Imgs/information.svg');
const glossary = require('../../../Imgs/glossary.svg');

function onClick1(){
    Router.push("/TreeGlossaryPage");
}

function onClick2(){
    Router.push("/GlossaryPage");
}

function onClick3(){
    Router.push("/TerminologyGlossaryPage");
}

function ClickHeadTutorial(){
    Router.push("/TutorialPage01")
}

const GlossaryHeaderTree = () => {
    const [right, setRight] = useState("300pt")

return <div className="glossaryHeader_container">
    <link href="https://fonts.googleapis.com/css2?family=Assistant&family=Poppins&display=swap" rel="stylesheet"></link>
    <div className="glossaryHeader_bot">
        <div className="glossary_button_container">
            <p className="terminology_glossary_button_text terminology_glossary_button_text_1" onClick={onClick1}>Trees</p>
            <p  className="terminology_glossary_button_text terminology_glossary_button_text_2" onClick={onClick2} >Flowering Plant</p>
            <p className="terminology_glossary_button_text terminology_glossary_button_text_3" onClick={onClick3}>Terminology</p>
        </div>
    </div>
    <div className="glossaryHeader_top">
    <HamburgerMenu right = {right}></HamburgerMenu>
        <div className="glossary_icon_container">
            <img className="glossary_icon" src={glossary}></img>
            Glossary
        </div>
    </div>
</div>
}
export default GlossaryHeaderTree;