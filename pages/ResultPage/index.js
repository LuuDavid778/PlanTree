import ResultScreenTitle from '../../Comps/Aksel/ResultScreenTitle'
import ResultScreenImg from '../../Comps/Aksel/ResultScreenImg'
import ResultScreenQuickFacts from '../../Comps/Aksel/ResultScreenQuickFacts'
import ResultTexts from '../../Comps/Kozy/ResultTexts'
import ResultTopBar from '../../Comps/David/ResultTopBar'
import ResultCard from '../../Comps/David/ResultCard'
import PlantName from '../../Comps/David/resultpage_plantname'
import './ResultPage.css'

const ResultPage = () => <div className = "ResultPage_cont">
<ResultTopBar></ResultTopBar>
<ResultScreenImg></ResultScreenImg>
<ResultScreenTitle></ResultScreenTitle>


<div> 
<ResultCard>
</ResultCard>
</div>

<PlantName></PlantName>
<div className = "ResultScreen_qf_cont">
    <div class = "ResultScreen_qf_boxes">
<ResultScreenQuickFacts></ResultScreenQuickFacts>
</div>
<div class = "ResultScreen_qf_boxes">
<ResultScreenQuickFacts></ResultScreenQuickFacts>
</div>
<ResultScreenQuickFacts></ResultScreenQuickFacts>
</div>

<ResultTexts></ResultTexts>
</div>


export default ResultPage; 