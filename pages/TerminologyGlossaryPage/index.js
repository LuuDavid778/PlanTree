import FindPlantButton from '../../Comps/Kozy/FindPlantButton';
import GlossaryHeaderTerminology from '../../Comps/Aksel/GlossaryHeaderTerminology';
import GlossaryTerm from '../../Comps/David/glossary_term';
import './terminologyglossarypage.css';
import Router from 'next/dist/next-server/lib/router/router';
import React, {useState, useEffect} from "react";


const TerminologyGlossaryPage = () => {

    useEffect(()=>{
        setTimeout(()=>{
            document.querySelector(".glossary_effect_term").style.opacity = 100;
        },50)
    }, []);

return<div>
    <div className="glossary_effect_term">
    <GlossaryTerm></GlossaryTerm>
    <GlossaryTerm></GlossaryTerm>
    <GlossaryTerm></GlossaryTerm>
    <GlossaryTerm></GlossaryTerm>
    <GlossaryTerm></GlossaryTerm>
    <GlossaryTerm></GlossaryTerm>
    <GlossaryTerm></GlossaryTerm>
    <GlossaryTerm></GlossaryTerm>
    <GlossaryTerm></GlossaryTerm>
    </div>
    <div className="glossary_spacer"></div>
    <GlossaryHeaderTerminology></GlossaryHeaderTerminology>
    <FindPlantButton></FindPlantButton>
</div>
}
export default TerminologyGlossaryPage;