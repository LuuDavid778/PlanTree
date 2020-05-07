import FindPlantButton from '../../Comps/Kozy/FindPlantButton';
import GlossaryHeaderTree from '../../Comps/Aksel/GlossaryHeaderTree';
import GlossaryTerm from '../../Comps/David/glossary_term';
import './treeglossarypage.css';
import Router from 'next/router'
import { route } from 'next/dist/next-server/server/router';
import React, {useState, useEffect} from "react";

const tree1 = require("../../Imgs/aspidistra_elatior.png");
const tree2 = require("../../Imgs/dwarf_juniper_tree.png");

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
    <GlossaryTerm title="Areca Palm" placeholder={tree1} onClick={result01}></GlossaryTerm>
    <GlossaryTerm title="Dwarf Juniper Tree" placeholder={tree2} onClick={result01}></GlossaryTerm>
    <GlossaryTerm></GlossaryTerm>
    <GlossaryTerm></GlossaryTerm>
    <GlossaryTerm></GlossaryTerm>
    <GlossaryTerm></GlossaryTerm>
    <GlossaryTerm></GlossaryTerm>
    <GlossaryTerm></GlossaryTerm>
    <GlossaryTerm></GlossaryTerm>
    </div>
    <div className="glossary_spacer"></div>
    <GlossaryHeaderTree></GlossaryHeaderTree>
    <FindPlantButton></FindPlantButton>
</div>
}
export default TreeGlossaryPage;