import React from 'react';
import './GlossaryHeaderTree.css';
import Router from 'next/router';

const information = require('../../../Imgs/information.svg');
const glossary = require('../../../Imgs/glossary.svg');

function ClickHeadTutorial(){
    Router.push("/TutorialPage01")
}

function onClick1(){
    Router.push("/TreeGlossaryPage");
}

function onClick2(){
    Router.push("/GlossaryPage");
}

function onClick3(){
    Router.push("/TerminologyGlossaryPage");
}

const GlossaryHeaderTree = () => <div className="glossaryHeader_container">
    <link href="https://fonts.googleapis.com/css2?family=Assistant&family=Poppins&display=swap" rel="stylesheet"></link>
    <div className="glossaryHeader_bot">
        <div className="glossary_button_container">
            <p className="tree_glossary_button_text tree_glossary_button_text_1" onClick={onClick1}>Trees</p>
            <p className="tree_glossary_button_text tree_glossary_button_text_2" onClick={onClick2}>Flowering Plant</p>
            <p className="tree_glossary_button_text tree_glossary_button_text_3" onClick={onClick3}>Terminology</p>
        </div>
    </div>
    <div className="glossaryHeader_top">
        <div className="glossary_icon_container">
            <img className="glossary_icon" src={glossary}></img>
            Glossary
        </div>
        <div onClick = {ClickHeadTutorial} className="information_icon_container">
            <img className="information_icon" src={information}></img>
            Tutorial
        </div>
    </div>
</div>

export default GlossaryHeaderTree;