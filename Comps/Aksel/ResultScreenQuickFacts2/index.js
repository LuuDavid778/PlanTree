import React from 'react';
import './ResultScreenQuickFacts.css';

const ResultScreenQuickFacts2 = ({quickFact2}) => <div className="quickFact_box_container">
    <div className="quickFact_box">
        <img src={quickFact2}></img>
</div>
</div>


ResultScreenQuickFacts2.defaultProps = {
    text: "Keep out of direct sunlight",
    displaya: "none",
    displayb: "block",
    displayc: "none"
}
export default ResultScreenQuickFacts2;