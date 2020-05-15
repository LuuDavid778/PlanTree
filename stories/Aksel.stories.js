import React from 'react';
import TutorialMiddle01 from '../Comps/Aksel/TutorialMiddle01';
import BackandNextButtons from '../Comps/Aksel/BackandNextButtons';
import ResultScreenTitle from '../Comps/Aksel/ResultScreenTitle';
import ResultScreenImg from '../Comps/Aksel/ResultScreenImg';
import ResultScreenQuickFacts from '../Comps/Aksel/ResultScreenQuickFacts';
import GlossaryHeader from '../Comps/Aksel/GlossaryHeader';

export default {
    title: 'Aksel',
  };

  export const MyTutorialMiddle = () => <TutorialMiddle01 />
  export const MyBackandNextButtons = () => <BackandNextButtons />
  export const MyResultScreenTitle = () => <ResultScreenTitle />
  export const MyResultScreenImg = () => <ResultScreenImg />
  export const MyResultScreenQuickFacts = () => <ResultScreenQuickFacts />
  export const MyGlossaryHeader = () => <GlossaryHeader />