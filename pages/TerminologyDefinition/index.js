import PlantsTreesResultCard from '../../Comps/Aksel/PlantsTreesResultCard'
import GlossaryPlantsTreesTopBar from "../../Comps/Aksel/GlossaryPlantsTreesTopBar";
import TerminologyTitle from "../../Comps/Aksel/TerminologyTitle"
import TerminologyTexts from "../../Comps/Aksel/TerminologyTexts"
import { terminology_data, Terminology_counter } from '../glossary_data';
import React, {useState, useEffect} from 'react'

const TerminologyDefinition = () => {
    const [TerminologyName, changeTitle,] = useState("")
    const [TerminologyWords, changeText,] = useState("")
    function changeTermPage(){
        changeTitle(terminology_data[Terminology_counter].name)
        changeText(terminology_data[Terminology_counter].desc)
    }
    useEffect(()=>{
        setTimeout(()=>{
            changeTermPage()
        },0)
    }, []);


    return<div>
        <PlantsTreesResultCard></PlantsTreesResultCard>
        <GlossaryPlantsTreesTopBar></GlossaryPlantsTreesTopBar>
        <TerminologyTitle Title={TerminologyName}></TerminologyTitle>
        <TerminologyTexts innerText={TerminologyWords}></TerminologyTexts>

    </div>
}

export default TerminologyDefinition;