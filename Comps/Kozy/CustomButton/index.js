import React from 'react';
import "./custombutton.css";

const CustomButton = ({text, bgColor}) => <div>
    <div className="CustomButton__container">
        <div class="CustomButton" onclick="advance_tutorial_page()" style={{backgroundColor: bgColor}}>{text}</div>
    </div>
</div>

CustomButton.defaultProps = {
    text: "Default text",
    bgColor: "#7FA53E"
}

export default CustomButton;


