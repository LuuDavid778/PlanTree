import React from 'react'
import '../glossary_term/term.css'

const rightarrow = require("../../../Imgs/right_arrow.svg")
const placeholder = require("../../../Imgs/trowel.svg")
const GlossaryTerm = ({title})=> <div>

<div className = "term_cont">
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
    title: "Plant/Term Name"
}

export default GlossaryTerm;