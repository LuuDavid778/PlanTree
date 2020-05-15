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
import WaterDrop from "../../Comps/Aksel/WaterDropImg";


// Defining it just for now so it can show something
const GlossaryPlantsTreesImg = require("../../Imgs/desert_gems_cacti.png")

const GlossaryPlantsTrees = () => {
    const [description, changeDesc,] = useState("")
    const [NameofPlant, changeName,] = useState("")
    const [PlantFact1, changeFact,] = useState("")
    function changePage(){
        changeDesc(glossary_data[glossary_counter].desc) 
        changeName(glossary_data[glossary_counter].name)
        changeFact(glossary_data[glossary_counter].water)
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