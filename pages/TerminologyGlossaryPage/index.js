import FindPlantButton from '../../Comps/Kozy/FindPlantButton';
import GlossaryHeaderTerminology from '../../Comps/Aksel/GlossaryHeaderTerminology';
import GlossaryTerm from '../../Comps/David/glossary_term';
import './terminologyglossarypage.css';
import Router from 'next/router';
import React, {useState, useEffect} from "react";
import {glossary_data, ChangeData, glossary_counter, ChangeCounter, TermChangeCounter} from '../../glossary_data'

function Term1() {
    TermChangeCounter(0)
    Router.push("/TerminologyDefinition")
}
function Term2() {
    TermChangeCounter(1)
    Router.push("/TerminologyDefinition")
}
function Term3() {
    TermChangeCounter(2)
    Router.push("/TerminologyDefinition")
}
function Term4() {
    TermChangeCounter(3)
    Router.push("/TerminologyDefinition")
}
function Term5() {
    TermChangeCounter(4)
    Router.push("/TerminologyDefinition")
}
function Term6() {
    TermChangeCounter(5)
    Router.push("/TerminologyDefinition")
}

const TerminologyGlossaryPage = () => {

    useEffect(()=>{
        setTimeout(()=>{
            document.querySelector(".glossary_effect_term").style.opacity = 100;
        },50)
    }, []);

return<div>
    <div className="glossary_effect_term">
    <GlossaryTerm title="Annuals" onClick={Term1}></GlossaryTerm>
    <GlossaryTerm title="Biennials" onClick={Term2}></GlossaryTerm>
    <GlossaryTerm title="Direct Sow" onClick={Term3}></GlossaryTerm>
    <GlossaryTerm title="Heat Tolerance" onClick={Term4}></GlossaryTerm>
    <GlossaryTerm title="Self Sow" onClick={Term5}></GlossaryTerm>
    <GlossaryTerm title="Terrestrial Plants" onClick={Term6}></GlossaryTerm>
    </div>
    <div className="glossary_spacer"></div>
    <GlossaryHeaderTerminology></GlossaryHeaderTerminology>
    <FindPlantButton></FindPlantButton>
</div>
}
export default TerminologyGlossaryPage;