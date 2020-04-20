import React from 'react';
import './GlossaryHeader.css';

const information = require('../../../Imgs/information.svg');
const glossary = require('../../../Imgs/glossary.svg');

const GlossaryHeader = () => <div>
    <link href="https://fonts.googleapis.com/css2?family=Assistant&family=Poppins&display=swap" rel="stylesheet"></link>
    <div className="glossaryHeader_bot">
        <div className="glossary_button_container">
            <p className="glossary_button_text glossary_button_text_1">Trees</p>
            <p className="glossary_button_text glossary_button_text_2">Flowering Plant</p>
            <p className="glossary_button_text glossary_button_text_3">Terminology</p>
        </div>
    </div>
    <div className="glossaryHeader_top">
        <div className="glossary_icon_container">
            <img className="glossary_icon" src={glossary}></img>
            Glossary
        </div>
        <div className="information_icon_container">
            <img className="information_icon" src={information}></img>
            Tutorial
        </div>
    </div>
</div>

export default GlossaryHeader;