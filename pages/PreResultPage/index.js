
import './PreResultPage.css'
import PlantTopbar from '../../Comps/David/plantpage_topbar/'
import PlantName from '../../Comps/David/result_selection_header'
import ResultSelection from '../../Comps/David/result_selection'
import BottomNav from '../../Comps/Kozy/BottomNav'
import CustomButtom from '../../Comps/Kozy/CustomButton'
import Link from 'next/link'
import Router from 'next/router';

const selectioncard2 = require("../../Imgs/tree.svg")
const selectioncard3 = require("../../Imgs/short_weeks.svg")
const selectioncard4 = require("../../Imgs/cold.svg")

const progressbar5 = require("../../Imgs/progress_bar5.svg")
const PreResultPage = () => <div className = "PreResultPage_cont">  

<PlantTopbar id = "test" question = "Completed!" progress = {progressbar5} display = "none"></PlantTopbar>
<PlantName></PlantName> 
<div className = "PreResultPage_button">
    <Link href ="./ResultPage"><a>
<CustomButtom text ="View Results" width = "150px" height = "30px" fontSize = "13pt" ></CustomButtom>
</a>
</Link>
    </div>
<div className = "selections">
<ResultSelection></ResultSelection>
<ResultSelection image = {selectioncard2}  ></ResultSelection>
<ResultSelection image = {selectioncard3} ></ResultSelection>
<ResultSelection  image = {selectioncard4}></ResultSelection>

</div>
<div className = "navbar" >
<BottomNav></BottomNav>

</div>


</div>


export default PreResultPage; 