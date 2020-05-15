import React from 'react'
import '../resultpage_plantname/plantname.css'
import { data } from '../../../data'

const PlantName = ({PlantName, className}) => <div>
<h1 className = {className}>{data.resultplant}</h1>
</div>


PlantName.defaultProps = {
    PlantName: "insert plant name",
    className: "rs_plantname"
}

export default PlantName;