import React from 'react';
import CustomButton from '../Comps/Kozy/CustomButton';
import ProgressCircles from '../Comps/Kozy/ProgressCircles';
import TutorialTop from '../Comps/Kozy/TutorialTop';
import PlantPageQuizCard from '../Comps/Kozy/PlantPageQuizCard';
import PlantPageQuizCardTemp from '../Comps/Kozy/PlantPageQuizCardTemp';
import ResultTexts from '../Comps/Kozy/ResultTexts';
import BottomNav from '../Comps/Kozy/BottomNav';
import FindPlantButton from '../Comps/Kozy/FindPlantButton';


export default {
    title: "Kozy's Components",
    component: CustomButton
}

export const Custom_Button = () => <CustomButton></CustomButton>;
export const Progress_Circle = () => <ProgressCircles></ProgressCircles>;
export const Tutorial_Top = () => <TutorialTop></TutorialTop>;
export const Plant_Page_Quiz_Card = () => <PlantPageQuizCard></PlantPageQuizCard>;
export const Plant_Page_Quiz_Card_Temp = () => <PlantPageQuizCardTemp></PlantPageQuizCardTemp>;
export const Result_Texts = () => <ResultTexts></ResultTexts>;
export const Bottom_Nav = () => <BottomNav></BottomNav>;
export const Find_Plant_Button = () => <FindPlantButton></FindPlantButton>;


