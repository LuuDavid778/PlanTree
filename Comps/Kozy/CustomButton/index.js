import React from 'react';
import "./custombutton.css";

const CustomButton = ({text, bgColor, width, height}) => <div>
    <div className="CustomButton__container">
        <div className="CustomButton" style={{backgroundColor: bgColor, width: width, height:height}} >{text}</div>
    </div>
</div>

CustomButton.defaultProps = {
    text: "Default text",
    bgColor: "#7FA53E",
    width: "350px",
    height: "50px"
    
    
}

export default CustomButton;


