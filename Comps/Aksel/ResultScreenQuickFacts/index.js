import React from 'react';
import './ResultScreenQuickFacts.css';

const ResultScreenQuickFacts = ({quickFact}) => <div className="quickFact_box_container">
    <link href="https://fonts.googleapis.com/css2?family=Assistant&family=Poppins&display=swap" rel="stylesheet"></link>
    <div className="quickFact_box">
        {quickFact}
</div>
</div>

export default ResultScreenQuickFacts;