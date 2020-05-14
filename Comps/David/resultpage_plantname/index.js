import React from 'react'
import '../resultpage_plantname/plantname.css'
import '../../../pages/data'
import { data } from '../../../pages/data'

const PlantName = ({PlantName, className}) => <div>
<h1 className = {className}>{data.resultplant}</h1>
</div>


PlantName.defaultProps = {
    PlantName: "insert plant name",
    className: "rs_plantname"
}

export default PlantName;