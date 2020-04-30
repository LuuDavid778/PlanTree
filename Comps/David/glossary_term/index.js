import React from 'react'
import '../glossary_term/term.css'

const rightarrow = require("../../../Imgs/right_arrow.svg")
const imgplaceholder = require("../../../Imgs/trowel.svg")
const GlossaryTerm = ({title, placeholder, onClick})=> <div className="glossaryTerm_container">

<div className = "term_cont" onClick={onClick}>
<div className = "term_leftsect">
    <img class = "term_img" src = {placeholder}></img>
    <h2>{title}</h2>
</div>
<div className = "term_rightsect">
    <img className = "term_arrow" src = {rightarrow}></img>
</div>
</div>

</div>

GlossaryTerm.defaultProps = {
    title: "Plant/Term Name",
    placeholder: imgplaceholder
}

export default GlossaryTerm;