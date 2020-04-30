import FindPlantButton from '../../Comps/Kozy/FindPlantButton';
import GlossaryHeaderTree from '../../Comps/Aksel/GlossaryHeaderTree';
import GlossaryTerm from '../../Comps/David/glossary_term';
import './treeglossarypage.css';

const tree1 = require("../../Imgs/aspidistra_elatior.png");
const tree2 = require("../../Imgs/dwarf_juniper_tree.png");

const TreeGlossaryPage = () => <div>
    <GlossaryTerm title="Aspidistra Elatior" placeholder={tree1}></GlossaryTerm>
    <GlossaryTerm title="Dwarf Juniper Tree" placeholder={tree2}>></GlossaryTerm>
    <GlossaryTerm></GlossaryTerm>
    <GlossaryTerm></GlossaryTerm>
    <GlossaryTerm></GlossaryTerm>
    <GlossaryTerm></GlossaryTerm>
    <GlossaryTerm></GlossaryTerm>
    <GlossaryTerm></GlossaryTerm>
    <GlossaryTerm></GlossaryTerm>
    <div className="glossary_spacer"></div>
    <GlossaryHeaderTree></GlossaryHeaderTree>
    <FindPlantButton></FindPlantButton>
</div>

export default TreeGlossaryPage;