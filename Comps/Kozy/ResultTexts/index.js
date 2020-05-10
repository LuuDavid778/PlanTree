import React from 'react';
import "./resulttexts.css";

const ResultTexts = ({textcolor,backgroundColor}) => <div className="result_texts__cont" style={{color:textcolor, backgroundColor:backgroundColor}}>
  
    <div className="plant_texts__discription">Areca palm is a medium sized exotic looking plant that can reach a height of 6-8 feet; outdoors it may be as tall as 25 feet. The Areca palm gets its nickname, the Butterfly palm, because its long feathery fronds (leaves) arch upwards off multiple reed- like stems, resembling butterfly wings.</div>

    
    <div className="interesting_facts">
    <h3>Interesting Facts!</h3>
    <h4>• Cleaner air and non-toxic for pets</h4>
    <div className="plant_texts__interesting_facts">All plants clean air borne toxins for us to breath in healthier oxygen, but palms (including the dypsis lutescens) 
    was named as one of the best air purifying plants, after a scientific clean air study was completed by Wolverton and Nasa.
    
    ASPCA (American Society for the Prevention of Cruelty to Animals) state this plant is non-toxic to cats and dogs if ingested.</div>

    </div>
    
</div>

ResultTexts.defaultProps = {
    textcolor: "white",
    backgroundColor: ''
}

export default ResultTexts;