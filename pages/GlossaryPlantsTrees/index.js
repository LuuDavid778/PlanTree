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
    const [description, ChangeDesc,] = useState("")
    const [NameofPlant, ChangeName,] = useState("")
    const [Water, ChangeWater,] = useState("")
    const [PlantImg, ChangeImg,] = useState("")
    const [PlantFacts, ChangeFact,] = useState("")
    function changePage(){
        ChangeDesc(glossary_data[glossary_counter].desc) 
        ChangeName(glossary_data[glossary_counter].name)
        ChangeImg(glossary_data[glossary_counter].image)
        ChangeWater(glossary_data[glossary_counter].water)
        ChangeFact(glossary_data[glossary_counter].facts)
    }
    useEffect(()=>{
        setTimeout(()=>{
            changePage()
        },0)
    }, []);

  
  
return <div>
<GlossaryPlantsTreesTopBar></GlossaryPlantsTreesTopBar>
<PlantsTreesImg src={PlantImg}></PlantsTreesImg>

<PlantsTreesResultCard></PlantsTreesResultCard>

<PlantsTreesPlantName PlantName={NameofPlant}></PlantsTreesPlantName>
<div className="Quick_Facts_Container">
<ResultScreenQuickFacts quickFact={Water}></ResultScreenQuickFacts>
<br></br>
<ResultScreenQuickFacts></ResultScreenQuickFacts>
<br></br>
<ResultScreenQuickFacts></ResultScreenQuickFacts>
</div>

<PlantsTreesResultTexts innerText={description} Facts={PlantFacts}></PlantsTreesResultTexts>
</div>
}
export default GlossaryPlantsTrees;