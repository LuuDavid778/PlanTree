import React from 'react';
import "./TerminologyTexts.css";
import { glossary_data, glossary_counter } from '../../../glossary_data'


const TerminologyTexts = ({innerText}) => {

return <div className="result_texts_cont_term">
    <div className="plant_texts_description">{innerText}
    </div>
</div>
}

export default TerminologyTexts;