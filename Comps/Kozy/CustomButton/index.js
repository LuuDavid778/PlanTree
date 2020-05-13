import React from 'react';
import "./custombutton.css";

const CustomButton = ({text, bgColor, width, height, fontSize, onclick}) => <div>
    <div className="CustomButton__container">
        <div className="CustomButton" onClick={onclick} style={{backgroundColor: bgColor, width: width, height:height, fontSize: fontSize}} >{text}</div>
    </div>
</div>

CustomButton.defaultProps = {
    text: "Default text",
    bgColor: "#7FA53E",
    width: "300px",
    height: "50px",
    fontSize: "25px",
    onClick: "",
    
    
}

export default CustomButton;


