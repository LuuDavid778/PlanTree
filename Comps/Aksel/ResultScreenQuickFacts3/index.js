import React from 'react';
import './ResultScreenQuickFacts.css';

const ResultScreenQuickFacts3 = ({quickFact3}) => <div className="quickFact_box_container">
    <div className="quickFact_box">
        <img src={quickFact3}></img>
</div>
</div>


ResultScreenQuickFacts3.defaultProps = {
    text: "Keep out of direct sunlight",
    displaya: "none",
    displayb: "block",
    displayc: "none"
}
export default ResultScreenQuickFacts3;