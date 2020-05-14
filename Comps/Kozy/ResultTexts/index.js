import React from 'react';
import "./resulttexts.css";
import '../../../pages/data'
import { data } from '../../../pages/data';
const ResultTexts = ({textcolor,backgroundColor}) => <div className="result_texts__cont" style={{color:textcolor, backgroundColor:backgroundColor}}>
  
    <div className="plant_texts__discription">{data.resultdesc}</div>

    
    <div className="interesting_facts">
    <h3>Interesting Facts!</h3>
    <div className="plant_texts__interesting_facts">{data.resultintfacts}</div>

    </div>
    
</div>

ResultTexts.defaultProps = {
    textcolor: "white",
    backgroundColor: ''
}

export default ResultTexts;