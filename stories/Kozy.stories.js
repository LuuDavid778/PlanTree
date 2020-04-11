import React from 'react';
import CustomButton from '../Comps/Kozy/CustomButton';
import ProgressCircles from '../Comps/Kozy/ProgressCircles';

export default {
    title: "Custom Button",
    component: CustomButton
}

export const Custom_Button = () => <CustomButton></CustomButton>;
export const Progress_Circle = () => <ProgressCircles img={ProgressCircles2}></ProgressCircles>;

const ProgressCircles2 = require('../../../Imgs/progress_circles2.svg');
