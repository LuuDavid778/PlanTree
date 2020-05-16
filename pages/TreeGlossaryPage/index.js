import FindPlantButton from '../../Comps/Kozy/FindPlantButton';
import GlossaryHeaderTree from '../../Comps/Aksel/GlossaryHeaderTree';
import GlossaryTerm from '../../Comps/David/glossary_term';
import './treeglossarypage.css';
import Router from 'next/router'
import { route } from 'next/dist/next-server/server/router';
import React, {useState, useEffect} from "react";

const tree01 = require("../../Imgs/areca_palm.png");
const tree02 = require("../../Imgs/aspidistra_elatior.png");
const tree03 = require("../../Imgs/fiddle_leaf_fig_tree.png");
const tree04 = require("../../Imgs/yucca_tree.png");
const tree05 = require("../../Imgs/norfolk_tree.png");
const tree06 = require("../../Imgs/madagascar_dragon_tree.png");
const tree07 = require("../../Imgs/hoya_tree.png");
const tree08 = require("../../Imgs/stromanthe_triostar.png");
const tree09 = require("../../Imgs/rubber_fig_plant.png");
const tree10 = require("../../Imgs/zamioculcas_zamiifolia.png");
const tree11 = require("../../Imgs/parlour_palm.png");
const tree12 = require("../../Imgs/pothos_plant.png");


function result01(){
    Router.push("/ResultPage")
}

const TreeGlossaryPage = () => {

    useEffect(()=>{
        setTimeout(()=>{
            document.querySelector(".glossary_effect_tree").style.opacity = 100;
        },50)
    }, []);

return<div>
    <div className="glossary_effect_tree">
    <GlossaryTerm title="Areca Palm" placeholder={tree01} onClick={result01}></GlossaryTerm>
    <GlossaryTerm title="Aspidistra Elatior" placeholder={tree02} onClick={result01}></GlossaryTerm>
    <GlossaryTerm title="Fiddle Leaf Fig Tree" placeholder={tree03} onClick={result01}></GlossaryTerm>
    <GlossaryTerm title="Yucca Tree" placeholder={tree04} onClick={result01}></GlossaryTerm>
    <GlossaryTerm title="Norfolk Tree" placeholder={tree05} onClick={result01}></GlossaryTerm>
    <GlossaryTerm title="Madagascar Dragon Tree" placeholder={tree06} onClick={result01}></GlossaryTerm>
    <GlossaryTerm title="Hoya Tree" placeholder={tree07} onClick={result01}></GlossaryTerm>
    <GlossaryTerm title="Stromanthe Triostar" placeholder={tree08} onClick={result01}></GlossaryTerm>
    <GlossaryTerm title="Rubber Fig Plant" placeholder={tree09} onClick={result01}></GlossaryTerm>
    <GlossaryTerm title="Zamioculcas Zamiifolia" placeholder={tree10} onClick={result01}></GlossaryTerm>
    <GlossaryTerm title="Parlour Palm" placeholder={tree11} onClick={result01}></GlossaryTerm>
    <GlossaryTerm title="Pothos Plant" placeholder={tree12} onClick={result01}></GlossaryTerm>
    </div>
    <div className="glossary_spacer"></div>
    <GlossaryHeaderTree></GlossaryHeaderTree>
    <FindPlantButton></FindPlantButton>
</div>
}
export default TreeGlossaryPage;