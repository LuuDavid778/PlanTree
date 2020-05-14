import PlantsTreesImg from "../../Comps/Aksel/PlantsTreesImg";
import GlossaryPlantsTreesTopBar from "../../Comps/Aksel/GlossaryPlantsTreesTopBar";
import PlantsTreesResultCard from '../../Comps/Aksel/PlantsTreesResultCard'
import PlantsTreesPlantName from '../../Comps/Aksel/PlantsTreesPlantName'
import PlantsTreesResultTexts from '../../Comps/Aksel/PlantsTreesResultTexts'
import ResultScreenQuickFacts from '../../Comps/Aksel/ResultScreenQuickFacts'
import "../glossary_data";
import "./GlossaryPlantsTrees.css"
import { glossary_data, glossary_counter } from "../glossary_data";


// Defining it just for now so it can show something
const GlossaryPlantsTreesImg = require("../../Imgs/desert_gems_cacti.png")

const GlossaryPlantsTrees = () => {

    if (glossary_counter === 0){
        {innerText} = glossary_data[0].desc; 
    }

return <div>
<GlossaryPlantsTreesTopBar></GlossaryPlantsTreesTopBar>
<PlantsTreesImg src={GlossaryPlantsTreesImg}></PlantsTreesImg>

<PlantsTreesResultCard></PlantsTreesResultCard>

<PlantsTreesPlantName></PlantsTreesPlantName>
<div className="Quick_Facts_Container">
<ResultScreenQuickFacts></ResultScreenQuickFacts>
<br></br>
<ResultScreenQuickFacts></ResultScreenQuickFacts>
<br></br>
<ResultScreenQuickFacts></ResultScreenQuickFacts>
</div>

<PlantsTreesResultTexts innerText={innerText}></PlantsTreesResultTexts>
</div>
}
export default GlossaryPlantsTrees;