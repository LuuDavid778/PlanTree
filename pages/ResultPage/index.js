import ResultScreenTitle from '../../Comps/Aksel/ResultScreenTitle'
import ResultScreenImg from '../../Comps/Aksel/ResultScreenImg'
import ResultScreenQuickFacts from '../../Comps/Aksel/ResultScreenQuickFacts'
import ResultTexts from '../../Comps/Kozy/ResultTexts'
import ResultTopBar from '../../Comps/David/ResultTopBar'
import ResultCard from '../../Comps/David/ResultCard'
import PlantName from '../../Comps/David/resultpage_plantname'
import ResultRestart from '../../Comps/David/result_restart'
import './ResultPage.css'


const waterdrop = require("../../Imgs/water_drop.svg")
const trowel = require("../../Imgs/trowel.svg")
const ResultPage = () => <div className = "ResultPage_cont">
<ResultTopBar></ResultTopBar>
<ResultScreenImg></ResultScreenImg>
<ResultScreenTitle></ResultScreenTitle>

<ResultRestart></ResultRestart>

<div> 
<ResultCard>
</ResultCard>
</div>

<PlantName PlantName = "Areca Palm"></PlantName>
<div className = "ResultScreen_qf_cont">
    <div className = "ResultScreen_qf_boxes">
<ResultScreenQuickFacts icona ={waterdrop} iconb ={waterdrop} iconc ={waterdrop} displaya = "block" displayb = "block" displayc = "block" text = "Needs to be watered once/week"></ResultScreenQuickFacts>
</div>
<div className = "ResultScreen_qf_boxes">
<ResultScreenQuickFacts icona ={trowel} iconb ={trowel} iconc ={trowel} displaya = "block" displayb = "block" displayc = "block" text = "Quite hard to take care of"></ResultScreenQuickFacts>
</div>
<ResultScreenQuickFacts></ResultScreenQuickFacts>
</div>

<ResultTexts></ResultTexts>
</div>


export default ResultPage; 