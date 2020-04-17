import React from 'react'
import '../resultpage_plantname/plantname.css'

const PlantName = ({PlantName}) => <div>
<h1 className = "rs_plantname">{PlantName}</h1>
</div>


PlantName.defaultProps = {
    PlantName: "insert plant name"
}

export default PlantName;