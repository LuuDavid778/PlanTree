import React from 'react';
import './tutorialtext.css';


const TutorialText = ({Headertext, Desctext}) =>{ 
    return (
        <div className="tut_text_cont">
            <div className="tutorial__texts">
                <div className="tutorial__texts__header">{Headertext}</div>
                <div className="tutorial__texts__description">{Desctext}</div>
            </div>
</div>

)
}

TutorialText.defaultProps = {
Headertext: "Header text",
Desctext: "Description text",
}

export default TutorialText;