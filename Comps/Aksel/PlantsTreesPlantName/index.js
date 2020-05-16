import React from 'react'
import "./plantstreesplantname.css";

const PlantsTreesPlantName = ({PlantName, className}) => <div>
<h1 className = {className}>{PlantName}</h1>
</div>


PlantsTreesPlantName.defaultProps = {
    PlantName: "insert plant name",
    className: "rs_plantnamegloss"
}

export default PlantsTreesPlantName;