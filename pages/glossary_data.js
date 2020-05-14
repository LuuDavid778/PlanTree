import WaterDrop from "../Comps/Aksel/WaterDropImg";
import GlossaryPlantImg from "../Comps/Aksel/GlossaryImg";
import TrowelImg from "../Comps/Aksel/GlossaryCare";
import SunlightImg from "../Comps/Aksel/GlossarySunlight";

const Img01 = require("../Imgs/hoya_tree.png");
const Img02 = require("../Imgs/stromanthe_triostar.png");
const Img03 = require("../Imgs/rubber_fig_plant.png");
const Img04 = require("../Imgs/pothos_plant.png");
const Img05 = require("../Imgs/zamioculcas_zamiifolia.png");
const Img06 = require("../Imgs/zamioculcas_zamiifolia.png");
const Img07 = require("../Imgs/zamioculcas_zamiifolia.png");
const Img08 = require("../Imgs/zamioculcas_zamiifolia.png");
const Img09 = require("../Imgs/zamioculcas_zamiifolia.png");
const Img10 = require("../Imgs/zamioculcas_zamiifolia.png");
const Img11 = require("../Imgs/zamioculcas_zamiifolia.png");
const Img12 = require("../Imgs/zamioculcas_zamiifolia.png");
const Img13 = require("../Imgs/zamioculcas_zamiifolia.png");
const Img14 = require("../Imgs/zamioculcas_zamiifolia.png");
const Img15 = require("../Imgs/zamioculcas_zamiifolia.png");
const Img16 = require("../Imgs/zamioculcas_zamiifolia.png");
const Img17 = require("../Imgs/zamioculcas_zamiifolia.png");
const Img18 = require("../Imgs/zamioculcas_zamiifolia.png");
const Img19 = require("../Imgs/zamioculcas_zamiifolia.png");
const Img20 = require("../Imgs/zamioculcas_zamiifolia.png");
const Img21 = require("../Imgs/zamioculcas_zamiifolia.png");
const Img22 = require("../Imgs/zamioculcas_zamiifolia.png");
const Img23 = require("../Imgs/zamioculcas_zamiifolia.png");
const Img24 = require("../Imgs/zamioculcas_zamiifolia.png");

export var glossary_counter = 0;

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
        image: <GlossaryPlantImg GlossaryImg={Img02}></GlossaryPlantImg>, 
        name: "Stromanthe Triostar",
        water: "Water once a week" + <br/> + <WaterDrop/> + <WaterDrop/> + <WaterDrop/>,
        care: "Very easy to take care of" + <br/> + <TrowelImg/>,
        sunlight: "Place in bright indirect sunlight" + <br/> + <SunlightImg/> + <SunlightImg/>,
        desc: "The thin, long leaves of the plant give it a distinct look. These leaves are typically a dark green color with pale veins, while the undersides are often purplish red.",
        facts: "- Rarely blossoms, especially when grown indoors" + "- If flowers do show up, they should appear between March and April",
    },
    {
        image: <GlossaryPlantImg GlossaryImg={Img03}></GlossaryPlantImg>, 
        name: "Rubber Fig Plant",
        water: "Water once a week" + <br/> + <WaterDrop/> + <WaterDrop/> + <WaterDrop/>,
        care: "Very easy to take care of" + <br/> + <TrowelImg/>,
        sunlight: "Place in bright indirect sunlight" + <br/> + <SunlightImg/> + <SunlightImg/>,
        desc: "Rubber plants earned their name thanks to their sap, which is sometimes used to make rubber. The rubber plant’s leaves also have a shiny and rubbery appearance. These plants will grow tall and produce beautiful leaves if you give them proper care.",
        facts: "- Kills airborne bacteria" + "- Can reduce mold and bacteria in a room by as much as 60%",
    },
    {
        image: <GlossaryPlantImg GlossaryImg={Img04}></GlossaryPlantImg>, 
        name: "Pothos Plant",
        water: "Water once soil is completely dry" + <br/> + <WaterDrop/>,
        care: "Very easy to take care of" + <br/> + <TrowelImg/>,
        sunlight: "Tolerates low light, but grows well in medium light" + <br/> + <SunlightImg/> + <SunlightImg/>,
        desc: "A perfect houseplant for beginners, pothos is one of the easiest you can grow even if you are a person who forgets to water your plants. -- and one of the most popular. This hardy indoor plant features dark green leaves splashed and marbled in shades of yellow, cream, or white.",
        facts: "- Purifies the air" + "- Can even tolerate fluorescent light",
    },
    {
        image: <GlossaryPlantImg GlossaryImg={Img05}></GlossaryPlantImg>, 
        name: "Zamioculcas Zamiifolia",
        water: "Water once every 2-3 weeks" + <br/> + <WaterDrop/>,
        care: "Fairly easy to take care of" + <br/> + <TrowelImg/> + <TrowelImg/>,
        sunlight: "Prefers moderate levels of light" + <br/> + <SunlightImg/> + <SunlightImg/>,
        desc: "These beauties, which grow in tall stalks of deep green, rubbery leaves, actually like to be left alone. Though they prefer moderate levels of sunlight, they can tolerate low light, too, so they're often the go-to choice for offices. 'These plants prefer to stay on the dry side, and seem to thrive on neglect,' says Kathie Hayden, plant information service manager at Chicago Botanic Garden.",
        facts: "- Poisonous to pets" + "- Always wash your hands after touching",
    },
    {
        image: <GlossaryPlantImg GlossaryImg={Img06}></GlossaryPlantImg>, 
        name: "Parlour Palm",
        water: "Sensitive to overwatering; water once top 1 inch feels dry" + <br/> + <WaterDrop/>,
        care: "Fairly easy to take care of" + <br/> + <TrowelImg/> + <TrowelImg/>,
        sunlight: "Prefers low levels of light" + <br/> + <SunlightImg/>,
        desc: "This attractive little plant was first discovered in Central America and brought back to the United States, where it immediately became a popular indoor palm. It gained a near-instant following for several good reasons. It's adapted to relatively low light, can handle lower temperatures, and grows in attractive clumps with light-textured foliage cloaking thin trunks.",
        facts: "- Has been popular since Victorian times" + "- Was a plant commonly found growing in home Parlors (and that's how it got its common name)",
    },
    {
        image: <GlossaryPlantImg GlossaryImg={Img07}></GlossaryPlantImg>, 
        name: "Geranium",
        water: "Overwatering can cause root rot; water once top 1 inch feels dry" + <br/> + <WaterDrop/>,
        care: "Require just a bit of basic care to thrive" + <br/> + <TrowelImg/> + <TrowelImg/>,
        sunlight: "Place in a sunny window" + <br/> + <SunlightImg/> + <SunlightImg/> + <SunlightImg/>,
        desc: "American gardeners have had a love affair with geraniums for decades. These colorful annuals are a cinch to grow and look just as good on the border as they do in pots, planters, and window boxes. But, geraniums have a big secret. They aren't really geraniums after all, but members of the pelargonium family. True geraniums are actually perennial in nature and are sometimes called cranesbill. Nomenclature aside, the plants we know and love as geraniums are truly wonderful plants that come in a variety of forms including: zonals, ivies, and interspecifics. All are available in a host of colors and bi-colors. Besides their flowers, zonal geraniums are prized for their pretty patterned foliage and upright form. Ivies make great basket plants because their trailing foliage and gorgeous blooms look terrific tumbling over the edge. And don't forget interspecific varieties.",
        facts: "- Roots contain compounds that are effective in treatment of excessive bleeding" + "- Roots can also relieve symptoms of diarrhea and irritable bowel syndrome.",
    },
    {
        image: <GlossaryPlantImg GlossaryImg={Img08}></GlossaryPlantImg>, 
        name: "Moth Orchid",
        water: "Water once it begins to dry out, usally every 7-10 days" + <br/> + <WaterDrop/> + <WaterDrop/>,
        care: "Easy to care for" + <br/> + <TrowelImg/>,
        sunlight: "Place in a moderately bright windowsill" + <br/> + <SunlightImg/> + <SunlightImg/>,
        desc: "Moth orchids (also called Phalaenopsis orchids) are among the most stylish and sophisticated plants you can grow in your home or office. They make fantastic houseplants -- even for beginners -- and their blooms can last for months, making phalaenopsis orchids an excellent gift. Most have attractive butterfly-shaped (or moth-shaped) flowers, in a wide range of colors, from pinks and purples to apricot, orange, and salmon, to lemon yellow to pure white. The blooms appear on elegant spikes above the flat leaves that appear in a fan shape.",
        facts: "- Removes xylene from the air (found in paint)" + "- A perfect gift since they're so low maintnence",
    },
    {
        image: <GlossaryPlantImg GlossaryImg={Img09}></GlossaryPlantImg>, 
        name: "Lily of the Valley",
        water: "Water once every 3 weeks" + <br/> + <WaterDrop/>,
        care: "Easy to care for" + <br/> + <TrowelImg/>,
        sunlight: "Place in bright indirect light" + <br/> + <SunlightImg/> + <SunlightImg/>,
        desc: "The herbaceous perennial known as lily of the valley (Convallaria majalis) produces fragrant, white, bell-shaped flowers that hang off gracefully bending stems. The small, spring flowers combined with lily of the valley's verdant green, sword-shaped leaves make the plant a living contrast of textures and colours.",
        facts: "- Also known as the 'May Lily' as it blossoms in May" + "- They emit a strong, sweet smell",
    },
    {
        image: <GlossaryPlantImg GlossaryImg={Img10}></GlossaryPlantImg>, 
        name: "Kalanchoes",
        water: "Water once every 2-3 weeks; or once the top 2 inches feel dry" + <br/> + <WaterDrop/>,
        care: "Easy to care for" + <br/> + <TrowelImg/>,
        sunlight: "Place in bright light" + <br/> + <SunlightImg/> + <SunlightImg/> + <SunlightImg/>,
        desc: "Kalanchoe plant is an excellent choice if you’re looking for a low maintenance houseplant that gives you bright flowers as well as pretty greenery. They’re grown in a wide range of colors; most of them vibrant hues like yellow, pink, magenta, orange and red. Kalanchoe plants bloom for a long time, too, plus they actually help purify indoor air. In short, it’s a wonderful plant!",
        facts: "- Some species of kalanchoes are toxic for cats." + "- You can prevent your pet from chewing kalanchoe leaves by sprinkling cayenne pepper over the plant.",
    },
    {
        image: <GlossaryPlantImg GlossaryImg={Img11}></GlossaryPlantImg>, 
        name: "Snake Plant",
        water: "Once every 2 weeks" + <br/> + <WaterDrop/> + <WaterDrop/>,
        care: "Easy to care for" + <br/> + <TrowelImg/>,
        sunlight: "Prefers indirect sunlight" + <br/> + <SunlightImg/> + <SunlightImg/>,
        desc: "Snake Plant are evergreen perennials that can grow anywhere from eight inches to 12 feet high. Their sword-like leaves are approximately two feet long. The foliage is stiff, broad, and upright, in a dark green colour variegated with white and yellow striping. They are famous for their ability to survive in the most unsuitable growing conditions.",
        facts: "- Great at purifing the air" + "- Extremely effective at absorbing harsh chemicals like carbon monoxide, benzene, and formaldehyde",
    },
    {
        image: <GlossaryPlantImg GlossaryImg={Img12}></GlossaryPlantImg>, 
        name: "Clivia",
        water: "Once every 2 weeks" + <br/> + <WaterDrop/> + <WaterDrop/>,
        care: "Easy to care for" + <br/> + <TrowelImg/>,
        sunlight: "Prefers bright indirect sunlight" + <br/> + <SunlightImg/> + <SunlightImg/>,
        desc: "Flowers are one of the best antidotes to the icy winds of winter and growing a houseplant that buds and blooms inside while all is dormant outside are particularly satisfying. Clivia is an easy to grow houseplant with strappy leaves and tall stocks of flowers that burst into citrus-hued orange or yellow bloom in late winter. Evergreen, it grows from roots rather than a bulb like it’s cousin, the amaryllis. It takes a bit of work to force your clivia into bloom, but once you get into the rhythm, it’s really simple. It’ll bloom in March or April and then follow the advice below to ensure blooms next year.",
        facts: "- Able to grow indoors and outdoors" + "- Able to retain their foliage all year round",
    },
    {
        image: <GlossaryPlantImg GlossaryImg={Img13}></GlossaryPlantImg>, 
        name: "Amaryllis",
        water: "Water once a week" + <br/> + <WaterDrop/> + <WaterDrop/> + <WaterDrop/>,
        care: "Very easy to care for" + <br/> + <TrowelImg/>,
        sunlight: "Prefers lots of light" + <br/> + <SunlightImg/> + <SunlightImg/> + <SunlightImg/>,
        desc: "No matter where you live, you can grow amaryllis. It's most commonly grown as a houseplant; the bulbs bloom around the holidays, making them perfect partners for poinsettias, Norfolk Island pines, and other holiday favorites. You'll typically see amaryllis in shades of red, but look around and you may be able to find stunners in shades of pink, apricot, orange, white, and even green.",
        facts: "- Comes in green, orange, pink, and red" + "- Purifies the air",
    },
    {
        image: <GlossaryPlantImg GlossaryImg={Img14}></GlossaryPlantImg>, 
        name: "Lucky Bamboo",
        water: "Water once a week" + <br/> + <WaterDrop/> + <WaterDrop/> + <WaterDrop/>,
        care: "Very easy to care for" + <br/> + <TrowelImg/>,
        sunlight: "Prefers a medium amount of light" + <br/> + <SunlightImg/> + <SunlightImg/>,
        desc: "Lucky bamboo is a wonderful gift plant that adds a bold note to indoor decor with its often intricately arranged stems. It's a slow-growing foliage houseplant that's easy to care for in a low- or medium-light spot. You can find lucky bamboo available in an almost endless variety of arrangements, including heart shapes, twists, curls, and more. There's even lore about how many stems are in the arrangements!",
        facts: "- A symbol of good luck and prosperity" + "- Harmful to cats and dogs",
    },
    {
        image: <GlossaryPlantImg GlossaryImg={Img15}></GlossaryPlantImg>, 
        name: "Calathea",
        water: "Water once a week" + <br/> + <WaterDrop/> + <WaterDrop/> + <WaterDrop/>,
        care: "Some-what easy to take care of" + <br/> + <TrowelImg/> + <TrowelImg/>,
        sunlight: "Prefers a low amount of light" + <br/> + <SunlightImg/>,
        desc: "A bold and beautiful houseplant, the calathea looks beautiful. There are lots of varieties of calathea, but one of the most common has luscious, dark green leaves that have scalloped edges and silver brush marks on the top of the leaves. Underneath, the leaves are a lovely shade of burgundy purple. Each one is a living work of art!",
        facts: "- Comes in green, pink, purple, and red" + "- Purifies the air",
    },
    {
        image: <GlossaryPlantImg GlossaryImg={Img16}></GlossaryPlantImg>, 
        name: "Aloe Vera",
        water: "Water once every 3 weeks" + <br/> + <WaterDrop/>,
        care: "Very easy to take care of" + <br/> + <TrowelImg/>,
        sunlight: "Prefers lots of light" + <br/> + <SunlightImg/> + <SunlightImg/> + <SunlightImg/>,
        desc: "Aloes are good indoor plants if you're busy and have a bright spot in your home. These houseplants have a bold texture that works particularly well with modern and contemporary decorating schemes, but they also fit in well if your tastes run more Mediterranean, eclectic, or exotic.",
        facts: "- Most types of aloe vera don't have a stem" + "- Yellow flowers appear on long spikes during the spring and summer",
    },
    {
        image: <GlossaryPlantImg GlossaryImg={Img17}></GlossaryPlantImg>, 
        name: "String of Pearls",
        water: "Water once every 3 weeks" + <br/> + <WaterDrop/>,
        care: "Very easy to take care of" + <br/> + <TrowelImg/>,
        sunlight: "Prefers a medium amount of light" + <br/> + <SunlightImg/> + <SunlightImg/>,
        desc: "String of pearls is an interesting group of easy-to-care for succulent house plants often grown in hanging baskets. These indoor plants have earned a reputation for being a cinch to care for because if they get enough light, they're practically no-fail plants that need only occasional watering.",
        facts: "- Poisonous or animals" + "- Purifies the air",
    },
    {
        image: <GlossaryPlantImg GlossaryImg={Img18}></GlossaryPlantImg>, 
        name: "Desert Gems Cacti",
        water: "Water once every 3 weeks" + <br/> + <WaterDrop/>,
        care: "Very easy to take care of" + <br/> + <TrowelImg/>,
        sunlight: "Prefers a low amount of light" + <br/> + <SunlightImg/>,
        desc: "Desert gems cacti -- some of the most colorful cactus around -- are easy-to-grow houseplants that add a bold dash of color to your home decor. Available in jewel-tone shades of topaz pink, emerald green, amethyst purple, fire-opal orange, and sapphire blue, Desert Gems cacti are small indoor plants perfect for decorating desks and tabletops. While they're stunning on their own, we love mixing these colorful cacti house plants together in fun arrangements. You can also dress up Desert Gems cacti by growing them in colorful containers to match or contrast their vibrant hues.",
        facts: "- Colour is dyed; you can buy blue, green, orange, pink purple, or red" + "- Purifies the air",
    },
    {
        image: <GlossaryPlantImg GlossaryImg={Img19}></GlossaryPlantImg>, 
        name: "Fiddle Leaf Fig Tree",
        water: "Water once a week" + <br/> + <WaterDrop/> + <WaterDrop/> + <WaterDrop/>,
        care: "Some-what easy to take care of" + <br/> + <TrowelImg/> + <TrowelImg/>,
        sunlight: "Prefers lots of light" + <br/> + <SunlightImg/> + <SunlightImg/> + <SunlightImg/>,
        desc: "Create a bold, dramatic look in your home with fiddle leaf ficus (also called fiddle leaf fig, or Ficus lyrata, if you prefer botanical names).  One of the trendiest houseplants available, it’s loved for its bold, dramatic texture. It sports big leaves in a rich shade of dark green that add a lush, tropical look to any room you grow it in.",
        facts: "- Poisonous to animals" + "- Purifies the air",
    },
    {
        image: <GlossaryPlantImg GlossaryImg={Img20}></GlossaryPlantImg>, 
        name: "Areca Palm",
        water: "Water once a week" + <br/> + <WaterDrop/> + <WaterDrop/> + <WaterDrop/>,
        care: "Some-what easy to take care of" + <br/> + <TrowelImg/> + <TrowelImg/>,
        sunlight: "Prefers a medium amount of light" + <br/> + <SunlightImg/> + <SunlightImg/>,
        desc: "It is hard to believe the areca palm (Dypsis lutescens) was once an endangered species. Drive down almost any street in a subtropical or warm climate, and you are likely to see dozens of these tall, attractive and clumping palms that look a lot like bamboo. The palms have smooth, sometimes golden trunks that are reminiscent of bamboo culms. Their fronds are narrow and full, almost like bamboo leaves.",
        facts: "- Can grow enormous (30ft tall) if left unattended" + "- Was once endangered",
    },
    {
        image: <GlossaryPlantImg GlossaryImg={Img21}></GlossaryPlantImg>, 
        name: "Aspidistra elatior",
        water: "Water once a week" + <br/> + <WaterDrop/> + <WaterDrop/> + <WaterDrop/>,
        care: "Very easy to take care of" + <br/> + <TrowelImg/>,
        sunlight: "Prefers a low amount of light" + <br/> + <SunlightImg/>,
        desc: "Aspidistra is an attractive and opulent leaf ornamental plant, aspidistra elatior is the only subspecies which is used as an indoor plant. There is no connection to actual palms, however. Its beauty lies in its dark green stalked and shining leaves which it displays openly. It is well-known for its low standards and easily forgives small mistakes in tending.",
        facts: "- Often known as the 'Cast iron plant'" + "- Originates from China and Japan",
    },
    {
        image: <GlossaryPlantImg GlossaryImg={Img22}></GlossaryPlantImg>, 
        name: "Yucca Tree",
        water: "Water once every 3 weeks" + <br/> + <WaterDrop/>,
        care: "Very easy to take care of" + <br/> + <TrowelImg/>,
        sunlight: "Prefers lots of light" + <br/> + <SunlightImg/> + <SunlightImg/> + <SunlightImg/>,
        desc: "An old-fashioned house plant that's just as common now as it was a generation ago, yucca cane is wonderfully easy to grow and an excellent choice if you're just starting out with houseplants. It shows off clusters of rich green sword-like leaves on thick, woody trunks. The upright habit and spiky texture make it a fantastic complement to other traditional house plants such as dieffenbachia and palms.",
        facts: "- Does best when fertilized once or twice a year" + "- They can grow up to 10ft tall",
    },
    {
        image: <GlossaryPlantImg GlossaryImg={Img23}></GlossaryPlantImg>, 
        name: "Norfolk Pine",
        water: "Water once every 3 weeks" + <br/> + <WaterDrop/>,
        care: "Very easy to take care of" + <br/> + <TrowelImg/>,
        sunlight: "Prefers a medium amount of light" + <br/> + <SunlightImg/> + <SunlightImg/>,
        desc: "An easy-care houseplant, Norfolk pine is a festive holiday plant you can enjoy all year long! During the holidays, its needled branches look right at home decorated as a Christmas tree. After the holidays pass, remove the decorations and enjoy its classic look (and air-purifying powers) anywhere in your home.",
        facts: "- Purifies the air" + "- Often used during the winter holidays",
    },
    {
        image: <GlossaryPlantImg GlossaryImg={Img24}></GlossaryPlantImg>, 
        name: "Madagascar Dragon Tree",
        water: "Water once every 3 weeks" + <br/> + <WaterDrop/>,
        care: "Very easy to take care of" + <br/> + <TrowelImg/>,
        sunlight: "Prefers a low amount of light" + <br/> + <SunlightImg/>,
        desc: "Madagascar dragon tree, also called red-edge dracaena, is one of the most popular houseplants around. It bears narrow green leaves banded in red or pink on top of slender stems. Its upright habit makes the Madagascar dragon tree a useful houseplant to grow against a blank wall, to provide privacy in front of a window, or at the end of a sofa or chair as it ages and becomes tree-like. When it's young, the Madagascar dragon tree adds beautiful texture to tabletops, desks, and other surfaces. It's often included in dish gardens because of its grassy look.",
        facts: "- Purifies the air" + "- The top can be cut off to sprout new branches",
    },
]

if (process.browser){
    var sessiondata = sessionStorage.getItem("glossary_data");
    ChangeData(JSON.parse(sessiondata));
}
export function ChangeData(d, n){
    glossary_data.n = d;
    sessionStorage.setItem("glossary_data",JSON.stringify(glossary_data));

}

export function ChangeCounter(c,k){
    glossary_counter = c;
}