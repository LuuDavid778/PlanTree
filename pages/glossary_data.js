import WaterDrop from "../Comps/Aksel/WaterDropImg";
import GlossaryPlantImg from "../Comps/Aksel/GlossaryImg";
import TrowelImg from "../Comps/Aksel/GlossaryCare";
import SunlightImg from "../Comps/Aksel/GlossarySunlight";

const Img01 = require("../Imgs/hoya_tree.png");

export var glossary_data = [
    {
        image: <GlossaryPlantImg GlossaryImg={Img01}></GlossaryPlantImg>,
        name: "Hoya Plant",
        water: "Water once a week" + <br/> + <WaterDrop/> + <WaterDrop/> + <WaterDrop/>,
        care: "Very easy to take care of" + <br/> + <TrowelImg/>,
        sunlight: "Place in high humidity area" + <br/> + <SunlightImg/> + <SunlightImg/> + <SunlightImg/>,
        desc: "Grow your easy-care hoya in low, medium, or bright light. It tolerates low and medium light, but doesn't typically bloom in these conditions. Like most flowering houseplants, the more light hoya gets, the more flowers it will produce." + <br/> + <br/> + "Water hoya when the potting mix dries out. Don't worry if you forget to water it once or twice -- this houseplant doesn't mind. Its thick leaves and stems help the plant store water for cases just like that. Do take care not to overwater it; hoya would rather be too dry than too wet and can suffer from root rot if the potting mix stays wet for extended periods.",
        facts: "- Also known as the 'porcelain flower' or 'wax plant'" + <br/> + "- Removes air pollution from your home"
    },
    {
        image: "", 
        name: "",
        water: "",
        care: "",
        sunlight: "",
        desc: "",
        facts: ""
    }
]