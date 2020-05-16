import FindPlantButton from '../../Comps/Kozy/FindPlantButton';
import GlossaryHeader from '../../Comps/Aksel/GlossaryHeader';
import GlossaryTerm from '../../Comps/David/glossary_term';
import './glossarypage.css';
import React, {useState, useEffect} from "react";
import Router from 'next/router';
import '../../glossary_data'
import PlantsTreesResultTexts from '../../Comps/Aksel/PlantsTreesResultTexts'
import {glossary_data, ChangeData, glossary_counter, ChangeCounter } from '../../glossary_data';


const plant01 = require("../../Imgs/amaryllis.png");
const plant02 = require("../../Imgs/lucky_bamboo.png");
const plant03 = require("../../Imgs/calathea.png");
const plant04 = require("../../Imgs/aloe_vera.png");
const plant05 = require("../../Imgs/string_of_pearls.png");
const plant06 = require("../../Imgs/desert_gems_cacti.png");
const plant07 = require("../../Imgs/geranium.png");
const plant08 = require("../../Imgs/moth_orchid.png");
const plant09 = require("../../Imgs/lily_of_the_valley.png");
const plant10 = require("../../Imgs/kalanchoe.png");
const plant11 = require("../../Imgs/snake_plant.png");
const plant12 = require("../../Imgs/clivia.png");

function result(){
    ChangeCounter(0)
    Router.push("/GlossaryPlantsTrees")
//     document.querySelector("link[rel=import][href='../../Comps/Aksel/PlantsTreesResultTexts/index.js']")
// .import.querySelector(".plant_texts_description")
    // document.querySelector(".plant_texts_description")
    // document.querySelector(".plant_texts_description")
    // document.querySelector(".plant_texts_description")
}
function result1(){
    ChangeCounter(1) // command will change glossary_counter 
    Router.push("/GlossaryPlantsTrees") // then push
}
function result2(){
    ChangeCounter(2)
    Router.push("/GlossaryPlantsTrees")
}
function result3(){
    ChangeCounter(3)
    Router.push("/GlossaryPlantsTrees")
}
function result4(){
    ChangeCounter(4)
    Router.push("/GlossaryPlantsTrees")
}
function result5(){
    ChangeCounter(5)
    Router.push("/GlossaryPlantsTrees")
}
function result6(){
    ChangeCounter(6)
    Router.push("/GlossaryPlantsTrees")
}
function result7(){
    ChangeCounter(7)
    Router.push("/GlossaryPlantsTrees")
}
function result8(){
    ChangeCounter(8)
    Router.push("/GlossaryPlantsTrees")
}
function result9(){
    ChangeCounter(9)
    Router.push("/GlossaryPlantsTrees")
}
function result10(){
    ChangeCounter(10)
    Router.push("/GlossaryPlantsTrees")
}
function result11(){
    ChangeCounter(11)
    Router.push("/GlossaryPlantsTrees")
}

const GlossaryPage = () => {

    useEffect(()=>{
        setTimeout(()=>{
            document.querySelector(".plant_glossary_effect").style.opacity = 100;
        },50)
    }, []);

return<div>
    <div className="plant_glossary_effect">
    <GlossaryTerm title="Amaryllis" placeholder={plant01} onClick={result}></GlossaryTerm>
    <GlossaryTerm title="Lucky Bamboo" placeholder={plant02} onClick={result1}></GlossaryTerm>
    <GlossaryTerm title="Calathea" placeholder={plant03} onClick={result2}></GlossaryTerm>
    <GlossaryTerm title="Aloe Vera" placeholder={plant04} onClick={result3}></GlossaryTerm>
    <GlossaryTerm title="String of Pearls" placeholder={plant05} onClick={result4}></GlossaryTerm>
    <GlossaryTerm title="Desert Gems Cacti" placeholder={plant06} onClick={result5}></GlossaryTerm>
    <GlossaryTerm title="Geranium" placeholder={plant07} onClick={result6}></GlossaryTerm>
    <GlossaryTerm title="Moth Orchid" placeholder={plant08} onClick={result7}></GlossaryTerm>
    <GlossaryTerm title="Lily of the Valley" placeholder={plant09} onClick={result8}></GlossaryTerm>
    <GlossaryTerm title="Kalanchoe" placeholder={plant10} onClick={result9}></GlossaryTerm>
    <GlossaryTerm title="Snake Plant" placeholder={plant11} onClick={result10}></GlossaryTerm>
    <GlossaryTerm title="Clivia" placeholder={plant12} onClick={result11}></GlossaryTerm>
    </div>
    <div className="glossary_spacer"></div>
    <GlossaryHeader></GlossaryHeader>
    <FindPlantButton></FindPlantButton>
</div>
}
export default GlossaryPage;