
import './PreResultPage.css'
import PreresultTopbar from '../../Comps/Kozy/PreresultTopBar'
import PlantName from '../../Comps/David/result_selection_header'
import ResultSelection from '../../Comps/David/result_selection'
import BottomNav from '../../Comps/Kozy/BottomNav'
import CustomButtom from '../../Comps/Kozy/CustomButton'
import Link from 'next/link'
import Router from 'next/router';
import  {useState, useEffect} from 'react';
import { data } from '../../data'

const HouseIcon = require('../../Imgs/house_icon.svg');
const ApartmentIcon = require('../../Imgs/apt_icon.svg');
const FlowerCard = require('../../Imgs/flowering_icon.svg');
const TreeCard = require('../../Imgs/tree_icon.svg');
const ShortCard= require('../../Imgs/short_weeks_icon.svg');
const LongCard = require('../../Imgs/long_weeks_icon.svg');
const HotTemp = require('../../Imgs/hot.svg');
const WarmTemp = require('../../Imgs/warm.svg');
const ColdTemp = require('../../Imgs/cold.svg');


const selectioncard2 = require("../../Imgs/house_card.svg")
const selectioncard3 = require("../../Imgs/short_weeks.svg")
const selectioncard4 = require("../../Imgs/cold.svg")

const progressbar5 = require("../../Imgs/progress_bar5.svg")




const PreResultPage = () => {
    const [building, setBuilding] = useState("")
    const [plant, setPlant] = useState("")
    const [plantText, setPlantText] = useState("")
    const [frequency, setFrequency] = useState("")
    const [frequencyText, setFrequencyText] = useState("")
    const [temperature, setTemp] = useState("")


function checkPreresults() {
if(data.Question_1 === "House") {
    setBuilding(HouseIcon)

}  else if (data.Question_2 === "Apartment") {
    setBuilding(ApartmentIcon)
} 

if (data.Question_2 === "FloweringPlant") {
    setPlant(FlowerCard)
    setPlantText("Flowering Plant")
} else if (data.Question_2 === "Tree") {
    setPlant(TreeCard)
    setPlantText("Tree")
}

if (data.Question_3 === "ShortWeeks") {
    setFrequency(ShortCard)
    setFrequencyText("1-2 Weeks")
}
 else if (data.Question_3 === "LongWeeks") {
     setFrequency(LongCard)
     setFrequencyText("2-3 Weeks")
 }

 if (data.Question_4 === "Hot") {
     setTemp(HotTemp)
 } else if (data.Question_4 === "Warm") {
     setTemp(WarmTemp)
 } else if (data.Question_4 === "Cold") {
     setTemp(ColdTemp)
 }





}

    useEffect(()=>{
        setTimeout(()=> {
            checkPreresults() 
        },0)

        setTimeout(()=> {
            document.querySelector(".PreResultPage_cont").style.opacity = "100%" 
        },100)

        setTimeout(()=> {
            document.querySelector(".selections").style.opacity = "100%" 
        },900)

    },[]);

return <div className = "PreResultPage_cont">  
<PreresultTopbar id = "test" question = "Completed!" progress = {progressbar5} display = "none"></PreresultTopbar>
<PlantName></PlantName> 

<div className = "selections">
<ResultSelection icon = {building} text = {data.Question_1}></ResultSelection>
<ResultSelection  icon = {plant} text = {plantText} question="What kind of plant do you want?"></ResultSelection>
<ResultSelection icon = {frequency} text = {frequencyText} question="How often do you want to water your plant?"></ResultSelection>
<div className = "last">
<ResultSelection icon = {temperature} text = {data.Question_4} question="What's the temperature like in your area?"></ResultSelection>
</div>

</div>
<div className = "navbar" >
<BottomNav></BottomNav>

</div>


</div>
}

export default PreResultPage; 