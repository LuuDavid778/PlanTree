import React from 'react';
import "./PlantsTreesResultTexts.css";
import { glossary_data, glossary_counter } from "../glossary_data";

const PlantsTreesResultTexts = ({textcolor,backgroundColor,innerText}) => {

return <div className="result_texts_cont" style={{color:textcolor, backgroundColor:backgroundColor}}>
    <div className="plant_texts_description">{innerText}
</div>
</div>
}
PlantsTreesResultTexts.defaultProps = {
    textcolor: "#2C2A2A",
    backgroundColor: ''
}

export default PlantsTreesResultTexts;