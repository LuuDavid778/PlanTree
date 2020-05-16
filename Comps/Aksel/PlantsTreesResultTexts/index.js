import React from 'react';
import "./plantstreesresulttexts.css"
const PlantsTreesResultTexts = ({textcolor,backgroundColor,innerText, Facts}) => {

return <div className="result_texts_cont" style={{color:textcolor, backgroundColor:backgroundColor}}>
    <div className="plant_texts_description">{innerText}
    <br/>
    <br/>
    <b>Facts</b>
    {Facts}
</div>
</div>
}
PlantsTreesResultTexts.defaultProps = {
    textcolor: "#2C2A2A",
    backgroundColor: ''
}

export default PlantsTreesResultTexts;