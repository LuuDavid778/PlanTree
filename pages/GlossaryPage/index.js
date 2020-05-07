import FindPlantButton from '../../Comps/Kozy/FindPlantButton';
import GlossaryHeader from '../../Comps/Aksel/GlossaryHeader';
import GlossaryTerm from '../../Comps/David/glossary_term';
import './glossarypage.css';
import React, {useState, useEffect} from "react";

const GlossaryPage = () => {

    useEffect(()=>{
        setTimeout(()=>{
            document.querySelector(".plant_glossary_effect").style.opacity = 100;
        },50)
    }, []);

return<div>
    <div className="plant_glossary_effect">
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
    <GlossaryHeader></GlossaryHeader>
    <FindPlantButton></FindPlantButton>
</div>
}
export default GlossaryPage;