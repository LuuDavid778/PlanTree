import FindPlantButton from '../../Comps/Kozy/FindPlantButton';
import GlossaryHeaderTerminology from '../../Comps/Aksel/GlossaryHeaderTerminology';
import GlossaryTerm from '../../Comps/David/glossary_term';
import './terminologyglossarypage.css';

const TerminologyGlossaryPage = () => <div>
    <GlossaryTerm></GlossaryTerm>
    <GlossaryTerm></GlossaryTerm>
    <GlossaryTerm></GlossaryTerm>
    <GlossaryTerm></GlossaryTerm>
    <GlossaryTerm></GlossaryTerm>
    <GlossaryTerm></GlossaryTerm>
    <GlossaryTerm></GlossaryTerm>
    <GlossaryTerm></GlossaryTerm>
    <GlossaryTerm></GlossaryTerm>
    <div className="glossary_spacer"></div>
    <GlossaryHeaderTerminology></GlossaryHeaderTerminology>
    <FindPlantButton></FindPlantButton>
</div>

export default TerminologyGlossaryPage;