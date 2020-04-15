import React from 'react';
import './middle.css';

const TutorialMiddle = () =>{ 
    return ( <div>
            {/* texts for the tutorial */}
        <div class="tutorial__texts">
            <div class="tutorial__texts__header">Answer the following questions</div>
            <div class="tutorial__texts__description">By answering these series of questions, PlanTree will help you find the plant you desire!</div>
        </div>
</div>
    )
}

TutorialMiddle.defaultProps = {
    middle:"Middle"
}

export default TutorialMiddle;