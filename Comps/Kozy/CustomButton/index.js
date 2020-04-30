import React from 'react';
import "./custombutton.css";

const CustomButton = ({text, bgColor, width, height, fontSize, onClick}) => <div>
    <div className="CustomButton__container">
        <div className="CustomButton" onClick={onClick} style={{backgroundColor: bgColor, width: width, height:height, fontSize: fontSize}} >{text}</div>
    </div>
</div>

CustomButton.defaultProps = {
    text: "Default text",
    bgColor: "#7FA53E",
    width: "350px",
    height: "50px",
    fontSize: "25px"
    
    
}

export default CustomButton;


