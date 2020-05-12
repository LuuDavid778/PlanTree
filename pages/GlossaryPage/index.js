import FindPlantButton from '../../Comps/Kozy/FindPlantButton';
import GlossaryHeader from '../../Comps/Aksel/GlossaryHeader';
import GlossaryTerm from '../../Comps/David/glossary_term';
import './glossarypage.css';
import React, {useState, useEffect} from "react";

const plant01 = require("../../Imgs/air_plant.png");
const plant02 = require("../../Imgs/lucky_bamboo.png");
const plant03 = require("../../Imgs/mint.png");
const plant04 = require("../../Imgs/aloe_vera.png");
const plant05 = require("../../Imgs/string_of_pearls.png");
const plant06 = require("../../Imgs/peace_lily.png");
const plant07 = require("../../Imgs/geranium.png");
const plant08 = require("../../Imgs/moth_orchid.png");
const plant09 = require("../../Imgs/lily_of_the_valley.png");
const plant10 = require("../../Imgs/kalanchoe.png");
const plant11 = require("../../Imgs/snake_plant.png");
const plant12 = require("../../Imgs/clivia.png");

function result01(){
    Router.push("/ResultPage")
}

const GlossaryPage = () => {

    useEffect(()=>{
        setTimeout(()=>{
            document.querySelector(".plant_glossary_effect").style.opacity = 100;
        },50)
    }, []);

return<div>
    <div className="plant_glossary_effect">
    <GlossaryTerm title="Air Plant" placeholder={plant01} onClick={result01}></GlossaryTerm>
    <GlossaryTerm title="Lucky Bamboo" placeholder={plant02} onClick={result01}></GlossaryTerm>
    <GlossaryTerm title="Mint" placeholder={plant03} onClick={result01}></GlossaryTerm>
    <GlossaryTerm title="Aloe Vera" placeholder={plant04} onClick={result01}></GlossaryTerm>
    <GlossaryTerm title="String of Pearls" placeholder={plant05} onClick={result01}></GlossaryTerm>
    <GlossaryTerm title="Peace Lily" placeholder={plant06} onClick={result01}></GlossaryTerm>
    <GlossaryTerm title="Geranium" placeholder={plant07} onClick={result01}></GlossaryTerm>
    <GlossaryTerm title="Moth Orchid" placeholder={plant08} onClick={result01}></GlossaryTerm>
    <GlossaryTerm title="Lily of the Valley" placeholder={plant09} onClick={result01}></GlossaryTerm>
    <GlossaryTerm title="Kalanchoe" placeholder={plant10} onClick={result01}></GlossaryTerm>
    <GlossaryTerm title="Snake Plant" placeholder={plant11} onClick={result01}></GlossaryTerm>
    <GlossaryTerm title="Clivia" placeholder={plant12} onClick={result01}></GlossaryTerm>
    </div>
    <div className="glossary_spacer"></div>
    <GlossaryHeader></GlossaryHeader>
    <FindPlantButton></FindPlantButton>
</div>
}
export default GlossaryPage;