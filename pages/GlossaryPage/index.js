import FindPlantButton from '../../Comps/Kozy/FindPlantButton';
import GlossaryHeader from '../../Comps/Aksel/GlossaryHeader';
import GlossaryTerm from '../../Comps/David/glossary_term';
import './glossarypage.css';

const GlossaryPage = () => <div>
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
    <GlossaryHeader></GlossaryHeader>
    <FindPlantButton></FindPlantButton>
</div>

export default GlossaryPage;