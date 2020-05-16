import React from 'react';
import './ResultScreenQuickFacts.css';

const ResultScreenQuickFacts1 = ({quickFact1}) => <div className="quickFact_box_container">
    <div className="quickFact_box">
        <img src={quickFact1}></img>
</div>
</div>


ResultScreenQuickFacts1.defaultProps = {
    text: "Keep out of direct sunlight",
    displaya: "none",
    displayb: "block",
    displayc: "none"
}
export default ResultScreenQuickFacts1;