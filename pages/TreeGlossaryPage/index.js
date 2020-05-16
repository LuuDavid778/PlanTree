import FindPlantButton from '../../Comps/Kozy/FindPlantButton';
import GlossaryHeaderTree from '../../Comps/Aksel/GlossaryHeaderTree';
import GlossaryTerm from '../../Comps/David/glossary_term';
import './treeglossarypage.css';
import Router from 'next/router'
import { route } from 'next/dist/next-server/server/router';
import React, {useState, useEffect} from "react";
import {glossary_data, ChangeData, glossary_counter, ChangeCounter } from '../glossary_data';

const tree13 = require("../../Imgs/areca_palm.png");
const tree14 = require("../../Imgs/aspidistra_elatior.png");
const tree15 = require("../../Imgs/fiddle_leaf_fig_tree.png");
const tree16 = require("../../Imgs/yucca_tree.png");
const tree17 = require("../../Imgs/norfolk_tree.png");
const tree18 = require("../../Imgs/madagascar_dragon_tree.png");
const tree19 = require("../../Imgs/hoya_tree.png");
const tree20 = require("../../Imgs/stromanthe_triostar.png");
const tree21 = require("../../Imgs/rubber_fig_plant.png");
const tree22 = require("../../Imgs/zamioculcas_zamiifolia.png");
const tree23 = require("../../Imgs/parlour_palm.png");
const tree24 = require("../../Imgs/pothos_plant.png");


function result12(){
    ChangeCounter(12)
    Router.push("/GlossaryPlantsTrees")
}
function result13(){
    ChangeCounter(13)
    Router.push("/GlossaryPlantsTrees")
}
function result14(){
    ChangeCounter(14)
    Router.push("/GlossaryPlantsTrees")
}
function result15(){
    ChangeCounter(15)
    Router.push("/GlossaryPlantsTrees")
}
function result16(){
    ChangeCounter(16)
    Router.push("/GlossaryPlantsTrees")
}
function result17(){
    ChangeCounter(17)
    Router.push("/GlossaryPlantsTrees")
}
function result18(){
    ChangeCounter(18)
    Router.push("/GlossaryPlantsTrees")
}
function result19(){
    ChangeCounter(19)
    Router.push("/GlossaryPlantsTrees")
}
function result20(){
    ChangeCounter(20)
    Router.push("/GlossaryPlantsTrees")
}
function result21(){
    ChangeCounter(21)
    Router.push("/GlossaryPlantsTrees")
}
function result22(){
    ChangeCounter(22)
    Router.push("/GlossaryPlantsTrees")
}
function result23(){
    ChangeCounter(23)
    Router.push("/GlossaryPlantsTrees")
}


const TreeGlossaryPage = () => {

    useEffect(()=>{
        setTimeout(()=>{
            document.querySelector(".glossary_effect_tree").style.opacity = 100;
        },50)
    }, []);

return<div>
    <div className="glossary_effect_tree">
    <GlossaryTerm title="Areca Palm" placeholder={tree13} onClick={result12}></GlossaryTerm>
    <GlossaryTerm title="Aspidistra Elatior" placeholder={tree14} onClick={result13}></GlossaryTerm>
    <GlossaryTerm title="Fiddle Leaf Fig Tree" placeholder={tree15} onClick={result14}></GlossaryTerm>
    <GlossaryTerm title="Yucca Tree" placeholder={tree16} onClick={result15}></GlossaryTerm>
    <GlossaryTerm title="Norfolk Tree" placeholder={tree17} onClick={result16}></GlossaryTerm>
    <GlossaryTerm title="Madagascar Dragon Tree" placeholder={tree18} onClick={result17}></GlossaryTerm>
    <GlossaryTerm title="Hoya Tree" placeholder={tree19} onClick={result18}></GlossaryTerm>
    <GlossaryTerm title="Stromanthe Triostar" placeholder={tree20} onClick={result19}></GlossaryTerm>
    <GlossaryTerm title="Rubber Fig Plant" placeholder={tree21} onClick={result20}></GlossaryTerm>
    <GlossaryTerm title="Zamioculcas Zamiifolia" placeholder={tree22} onClick={result21}></GlossaryTerm>
    <GlossaryTerm title="Parlour Palm" placeholder={tree23} onClick={result22}></GlossaryTerm>
    <GlossaryTerm title="Pothos Plant" placeholder={tree24} onClick={result23}></GlossaryTerm>
    </div>
    <div className="glossary_spacer"></div>
    <GlossaryHeaderTree></GlossaryHeaderTree>
    <FindPlantButton></FindPlantButton>
</div>
}
export default TreeGlossaryPage;