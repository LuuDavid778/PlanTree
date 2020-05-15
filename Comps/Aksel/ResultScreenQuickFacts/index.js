import React from 'react';
import './ResultScreenQuickFacts.css';

const ResultScreenQuickFacts = ({quickFact}) => <div className="quickFact_box_container">
    <link href="https://fonts.googleapis.com/css2?family=Assistant&family=Poppins&display=swap" rel="stylesheet"></link>
    <div className="quickFact_box">
        {quickFact}
</div>
</div>


ResultScreenQuickFacts.defaultProps = {
    text: "Keep out of direct sunlight",
    icona: sunlight,
    iconb: sunlight,
    iconc: sunlight,
    displaya: "none",
    displayb: "block",
    displayc: "none"
}
export default ResultScreenQuickFacts;