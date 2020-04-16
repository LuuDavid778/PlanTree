import React from 'react';
import "./hamburgermenu.css";

const HamburgerIcon = require('../../../Imgs/hamburger_menu.svg');
const HomeIcon = require('../../../Imgs/home_icon.svg');
const TutorialIcon = require('../../../Imgs/white_tutorial_icon.svg');
const FindPlantIcon = require('../../../Imgs/find_plant_icon.svg');
const GlossaryIcon = require('../../../Imgs/white_glossary_icon.svg');
const TreeIcon = require('../../../Imgs/tree_icon.svg');
const FlowerIcon = require('../../../Imgs/flower_icon.svg');
const TermsIcon = require('../../../Imgs/terms_icon.svg');




const HamburgerMenu = () => <div>
    <div className="hamburger_menu__cont">
    <img src={HamburgerIcon} className="hamburger_menu__menu_icon"></img>
        <div className="hamburger_menu__main">
            <div className="hamburger_menu_individuals">
                <div className="hamburger_menu__icon"><img src={HomeIcon}></img></div>
                <div className="hamburger_menu__texts">Home</div>
            </div>
            <div className="hamburger_menu_individuals">
                <div className="hamburger_menu__icon"><img src={TutorialIcon}></img></div>
                <div className="hamburger_menu__texts">Tutorial</div>
            </div>
            <div className="hamburger_menu_individuals">
                <div className="hamburger_menu__icon"><img src={FindPlantIcon}></img></div>
                <div className="hamburger_menu__texts">Find Your Plant</div>
            </div>
            <div className="hamburger_menu_individuals">
                <div className="hamburger_menu__icon"><img src={GlossaryIcon}></img></div>
                <div className="hamburger_menu__texts">Glossary</div>
            </div>
        </div>
        <div className="hamburger_menu__glossary_sub">
            <div className="hamburger_menu_individuals">
                <img src={TreeIcon}></img>
                <div className="hamburger_menu__texts">Trees</div>
            </div>
            <div className="hamburger_menu_individuals">
                <img src={FlowerIcon}></img>
                <div className="hamburger_menu__texts">Flowering Plants</div>
            </div>
            <div className="hamburger_menu_individuals">
                <img src={TermsIcon}></img>
                <div className="hamburger_menu__texts">Terminology</div>
            </div>
        </div>
    </div>
</div>

export default HamburgerMenu;

