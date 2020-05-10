
import './PreResultPage.css'
import PlantTopbar from '../../Comps/David/plantpage_topbar/'
import PlantName from '../../Comps/David/result_selection_header'
import ResultSelection from '../../Comps/David/result_selection'
import BottomNav from '../../Comps/Kozy/BottomNav'
import CustomButtom from '../../Comps/Kozy/CustomButton'
import Link from 'next/link'
import Router from 'next/router';
import  {useEffect} from 'react';
import { data } from '../data'

const selectioncard2 = require("../../Imgs/tree.svg")
const selectioncard3 = require("../../Imgs/short_weeks.svg")
const selectioncard4 = require("../../Imgs/cold.svg")

const progressbar5 = require("../../Imgs/progress_bar5.svg")

function ClickResult() {
    Router.push("/ResultPage")
}


const PreResultPage = () => {

    useEffect(()=>{
        setTimeout(()=> {
            document.querySelector(".PreResultPage_cont").style.opacity = "100%" 
        },100)

    },[]);

return <div className = "PreResultPage_cont">  
<PlantTopbar id = "test" question = "Completed!" progress = {progressbar5} display = "none"></PlantTopbar>
<PlantName></PlantName> 
<span onClick = {ClickResult}>
<div className = "PreResultPage_button">
<CustomButtom text ="View Results" width = "150px" height = "30px" fontSize = "13pt" ></CustomButtom>
    </div>
    </span>
<div className = "selections">
<ResultSelection text = {data.Question_1}></ResultSelection>
<ResultSelection  ></ResultSelection>
<ResultSelection ></ResultSelection>
<ResultSelection ></ResultSelection>

</div>
<div className = "navbar" >
<BottomNav></BottomNav>

</div>


</div>
}

export default PreResultPage; 