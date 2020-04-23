
import './PreResultPage.css'
import PlantTopbar from '../../Comps/David/plantpage_topbar/'
import PlantName from '../../Comps/David/result_selection_header'
import ResultSelection from '../../Comps/David/result_selection'
import BottomNav from '../../Comps/Kozy/BottomNav'

const progressbar5 = require("../../Imgs/progress_bar5.svg")
const PreResultPage = () => <div className = "PreResultPage_cont">  

<PlantTopbar id = "test" question = "Completed!" progress = {progressbar5} display = "none"></PlantTopbar>
<PlantName></PlantName> 
<div className = "selections">
<ResultSelection></ResultSelection>
<ResultSelection></ResultSelection>
<ResultSelection></ResultSelection>
<ResultSelection></ResultSelection>
</div>
<div className = "navbar" >
<BottomNav></BottomNav>
</div>
</div>


export default PreResultPage; 