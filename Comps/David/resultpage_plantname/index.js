import React from 'react'
import '../resultpage_plantname/plantname.css'

const PlantName = ({PlantName. className}) => <div>
<h1 className = {className}>{PlantName}</h1>
</div>


PlantName.defaultProps = {
    PlantName: "insert plant name",
    className: "rs_plantname"
}

export default PlantName;