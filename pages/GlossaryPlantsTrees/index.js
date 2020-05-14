import PlantsTreesImg from "../../Comps/Aksel/PlantsTreesImg";
import GlossaryPlantsTreesTopBar from "../../Comps/Aksel/GlossaryPlantsTreesTopBar";
import PlantsTreesResultCard from '../../Comps/Aksel/PlantsTreesResultCard'
import PlantsTreesPlantName from '../../Comps/Aksel/PlantsTreesPlantName'
import PlantsTreesResultTexts from '../../Comps/Aksel/PlantsTreesResultTexts'
import ResultScreenQuickFacts from '../../Comps/Aksel/ResultScreenQuickFacts'
import "../../pages/glossary_data"
import "./GlossaryPlantsTrees.css"
import { glossary_data, glossary_counter } from "../glossary_data";
import React, {useState, useEffect} from 'react'


// Defining it just for now so it can show something
const GlossaryPlantsTreesImg = require("../../Imgs/desert_gems_cacti.png")

const GlossaryPlantsTrees = () => {
    const [description, changeDesc,] = useState("")
    const [NameofPlant, changeName,] = useState("")
    const [PlantFact1, changeFact,] = useState("")
    function changePage() {
        if (glossary_counter === 0){
            changeDesc(glossary_data[glossary_counter].desc) 
            changeName(glossary_data[glossary_counter].name)
            changeFact(glossary_data[glossary_counter].water)
        } else if (glossary_counter === 1 ){
            changeDesc(glossary_data[glossary_counter].desc)
            changeName(glossary_data[glossary_counter].name)
        } else if (glossary_counter === 2 ){
            changeDesc(glossary_data[glossary_counter].desc)
            changeName(glossary_data[glossary_counter].name)
        } else if (glossary_counter === 3 ){
            changeDesc(glossary_data[glossary_counter].desc)
            changeName(glossary_data[glossary_counter].name)
        } else if (glossary_counter === 4 ){
            changeDesc(glossary_data[glossary_counter].desc)
            changeName(glossary_data[glossary_counter].name)
        } else if (glossary_counter === 5 ){
            changeDesc(glossary_data[glossary_counter].desc)
            changeName(glossary_data[glossary_counter].name)
        } else if (glossary_counter === 6 ){
            changeDesc(glossary_data[glossary_counter].desc)
            changeName(glossary_data[glossary_counter].name)
        } else if (glossary_counter === 7 ){
            changeDesc(glossary_data[glossary_counter].desc)
            changeName(glossary_data[glossary_counter].name)
        } else if (glossary_counter === 8 ){
            changeDesc(glossary_data[glossary_counter].desc)
            changeName(glossary_data[glossary_counter].name)
        } else if (glossary_counter === 9 ){
            changeDesc(glossary_data[glossary_counter].desc)
            changeName(glossary_data[glossary_counter].name)
        } else if (glossary_counter === 10 ){
            changeDesc(glossary_data[glossary_counter].desc)
            changeName(glossary_data[glossary_counter].name)
        } else if (glossary_counter === 11 ){
            changeDesc(glossary_data[glossary_counter].desc)
            changeName(glossary_data[glossary_counter].name)
        } else if (glossary_counter === 12 ){
            changeDesc(glossary_data[glossary_counter].desc)
            changeName(glossary_data[glossary_counter].name)
        } else if (glossary_counter === 13 ){
            changeDesc(glossary_data[glossary_counter].desc)
            changeName(glossary_data[glossary_counter].name)
        } else if (glossary_counter === 14 ){
            changeDesc(glossary_data[glossary_counter].desc)
            changeName(glossary_data[glossary_counter].name)
        } else if (glossary_counter === 15 ){
            changeDesc(glossary_data[glossary_counter].desc)
            changeName(glossary_data[glossary_counter].name)
        } else if (glossary_counter === 16 ){
            changeDesc(glossary_data[glossary_counter].desc)
            changeName(glossary_data[glossary_counter].name)
        } else if (glossary_counter === 17 ){
            changeDesc(glossary_data[glossary_counter].desc)
            changeName(glossary_data[glossary_counter].name)
        } else if (glossary_counter === 18 ){
            changeDesc(glossary_data[glossary_counter].desc)
            changeName(glossary_data[glossary_counter].name)
        } else if (glossary_counter === 19 ){
            changeDesc(glossary_data[glossary_counter].desc)
            changeName(glossary_data[glossary_counter].name)
        } else if (glossary_counter === 20 ){
            changeDesc(glossary_data[glossary_counter].desc)
            changeName(glossary_data[glossary_counter].name)
        } else if (glossary_counter === 21 ){
            changeDesc(glossary_data[glossary_counter].desc)
            changeName(glossary_data[glossary_counter].name)
        } else if (glossary_counter === 22 ){
            changeDesc(glossary_data[glossary_counter].desc)
            changeName(glossary_data[glossary_counter].name)
        } else if (glossary_counter === 23 ){
            changeDesc(glossary_data[glossary_counter].desc)
            changeName(glossary_data[glossary_counter].name)
        } else if (glossary_counter === 24 ){
            changeDesc(glossary_data[glossary_counter].desc)
            changeName(glossary_data[glossary_counter].name)
        }

      
    }
    useEffect(()=>{
        setTimeout(()=>{
            changePage()
        },0)
    }, []);

  
  
return <div>
<GlossaryPlantsTreesTopBar></GlossaryPlantsTreesTopBar>
<PlantsTreesImg src={GlossaryPlantsTreesImg}></PlantsTreesImg>

<PlantsTreesResultCard></PlantsTreesResultCard>

<PlantsTreesPlantName PlantName={NameofPlant}></PlantsTreesPlantName>
<div className="Quick_Facts_Container">
<ResultScreenQuickFacts quickFact={PlantFact1}></ResultScreenQuickFacts>
<br></br>
<ResultScreenQuickFacts></ResultScreenQuickFacts>
<br></br>
<ResultScreenQuickFacts></ResultScreenQuickFacts>
</div>

<PlantsTreesResultTexts innerText={description}></PlantsTreesResultTexts>
</div>
}
export default GlossaryPlantsTrees;