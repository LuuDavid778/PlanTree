import PlantsTreesImg from "../../Comps/Aksel/PlantsTreesImg";
import GlossaryPlantsTreesTopBar from "../../Comps/Aksel/GlossaryPlantsTreesTopBar";
import PlantsTreesResultCard from '../../Comps/Aksel/PlantsTreesResultCard'
import PlantsTreesPlantName from '../../Comps/Aksel/PlantsTreesPlantName'
import PlantsTreesResultTexts from '../../Comps/Aksel/PlantsTreesResultTexts'
import ResultScreenQuickFacts1 from '../../Comps/Aksel/ResultScreenQuickFacts'
import ResultScreenQuickFacts2 from '../../Comps/Aksel/ResultScreenQuickFacts2'
import ResultScreenQuickFacts3 from '../../Comps/Aksel/ResultScreenQuickFacts3'
import HamburgerMenu from '../../Comps/David/glossary_detail_hamburger'

import '../../glossary_data'
import "./GlossaryPlantsTrees.css"
import { glossary_data, glossary_counter } from "../../glossary_data";
import React, {useState, useEffect} from 'react'
import WaterDrop from "../../Comps/Aksel/WaterDropImg";

// Defining it just for now so it can show something

const GlossaryPlantsTrees = () => {
    const [description, ChangeDesc,] = useState("")
    const [NameofPlant, ChangeName,] = useState("")
    const [Water, ChangeWater,] = useState("")
    const [Difficulty, ChangeDifficulty,] = useState("")
    const [Sun, ChangeSun,] = useState("")
    const [PlantImg, ChangeImg,] = useState("")
    const [PlantFacts, ChangeFact,] = useState("")
    const [right, setRight,] = useState("300pt")
    
    function changePage(){
        ChangeDesc(glossary_data[glossary_counter].desc) 
        ChangeName(glossary_data[glossary_counter].name)
        ChangeImg(glossary_data[glossary_counter].image)
        ChangeWater(glossary_data[glossary_counter].water)
        ChangeSun(glossary_data[glossary_counter].sunlight)
        ChangeDifficulty(glossary_data[glossary_counter].care)
        ChangeFact(glossary_data[glossary_counter].facts)
    }
    useEffect(()=>{
        setTimeout(()=>{
            changePage()
        },0)
    }, []);

  
  
return <div>
<HamburgerMenu right ={right}></HamburgerMenu>
<GlossaryPlantsTreesTopBar></GlossaryPlantsTreesTopBar>
<PlantsTreesImg src={PlantImg}></PlantsTreesImg>

<PlantsTreesResultCard></PlantsTreesResultCard>

<PlantsTreesPlantName PlantName={NameofPlant}></PlantsTreesPlantName>
<div className="Quick_Facts_Container">
<ResultScreenQuickFacts1 quickFact1={Water}></ResultScreenQuickFacts1>
<br></br>
<ResultScreenQuickFacts2 quickFact2={Difficulty}></ResultScreenQuickFacts2>
<br></br>
<ResultScreenQuickFacts3 quickFact3={Sun}></ResultScreenQuickFacts3>
</div>

<PlantsTreesResultTexts innerText={description} Facts={PlantFacts}></PlantsTreesResultTexts>
</div>
}
export default GlossaryPlantsTrees;