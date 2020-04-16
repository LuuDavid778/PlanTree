import React from 'react';
import StartPage from '../Comps/David/startpage_img'
import PlantTopbar from '../Comps/David/plantpage_topbar';
import ResultSelection from '../Comps/David/result_selection'
import ResultSelectionHeader from '../Comps/David/result_selection_header'
import PlantName from '../Comps/David/resultpage_plantname'
import GlossaryTerm from '../Comps/David/glossary_term'

export default {
    title: "David's Components",
    Component: null

}

export const Result_Page_Plant_Name = () => <PlantName PlantName = "Areca Palm"></PlantName>
export const Result_Selection = () => <ResultSelection></ResultSelection>
export const topbar = () => <PlantTopbar></PlantTopbar>
export const start_page = () => <StartPage></StartPage>
export const Result_Selection_Header = () => <ResultSelectionHeader></ResultSelectionHeader>
export const Glossary_Term = () => <GlossaryTerm></GlossaryTerm>