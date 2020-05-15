import WaterDrop from "../Comps/Aksel/WaterDropImg";
import GlossaryPlantImg from "../Comps/Aksel/GlossaryImg";
import TrowelImg from "../Comps/Aksel/GlossaryCare";
import SunlightImg from "../Comps/Aksel/GlossarySunlight";
import PlantsTreesImg from "../Comps/Aksel/PlantsTreesImg";

export const Img01 = require("../Imgs/amaryllis.png");
export const Img02 = require("../Imgs/lucky_bamboo.png");
export const Img03 = require("../Imgs/calathea.png");
export const Img04 = require("../Imgs/aloe_vera.png");
export const Img05 = require("../Imgs/string_of_pearls.png");
export const Img06 = require("../Imgs/desert_gems_cacti.png");
export const Img07 = require("../Imgs/geranium.png");
export const Img08 = require("../Imgs/moth_orchid.png");
export const Img09 = require("../Imgs/lily_of_the_valley.png");
export const Img10 = require("../Imgs/kalanchoe.png");
export const Img11 = require("../Imgs/snake_plant.png");
export const Img12 = require("../Imgs/clivia.png");
export const Img13 = require("../Imgs/areca_palm.png");
export const Img14 = require("../Imgs/aspidistra_elatior.png");
export const Img15 = require("../Imgs/fiddle_leaf_fig_tree.png");
export const Img16 = require("../Imgs/yucca_tree.png");
export const Img17 = require("../Imgs/norfolk_tree.png");
export const Img18 = require("../Imgs/madagascar_dragon_tree.png");
export const Img19 = require("../Imgs/hoya_tree.png");
export const Img20 = require("../Imgs/stromanthe_triostar.png");
export const Img21 = require("../Imgs/rubber_fig_plant.png");
export const Img22 = require("../Imgs/zamioculcas_zamiifolia.png");
export const Img23 = require("../Imgs/parlour_palm.png");
export const Img24 = require("../Imgs/pothos_plant.png");

export var Terminology_counter = 0;
export var glossary_counter = 0;

export var terminology_data = [
    {
        name:"Annuals",
        desc:"An annual plant is a plant that completes its life cycle, from germination to the production of seeds, within one growing season, and then dies. The length of growing seasons and period in which they take place vary according to geographical location, and may not correspond to the four traditional seasonal divisions of the year. With respect to the traditional seasons annual plants are generally categorized into summer annuals and winter annuals. Summer annuals germinate during spring or early summer and mature by autumn of the same year. Winter annuals germinate during the autumn and mature during the spring or summer of the following calendar year."
    },
    {
        name:"Biennials",
        desc:"A biennial plant is a flowering plant that takes two years to complete its biological life cycle. In the first year, the plant undergoes primary growth, in which its leaves, stems, and roots (vegetative structures) develop. Usually, the stem of the plant remains short and the leaves are low to the ground, forming a rosette. After the first year, the plant enters a period of dormancy for the colder months. Many biennials require a cold treatment, or vernalization, before they will flower. During the next spring or summer, the stem of the biennial plant elongates greatly, or 'bolts'. The plant then flowers, producing fruits and seeds before it finally dies. There are far fewer biennials than either perennial plants or annual plants.A biennial plant is a flowering plant that takes two years to complete its biological life cycle. In the first year, the plant undergoes primary growth, in which its leaves, stems, and roots (vegetative structures) develop. Usually, the stem of the plant remains short and the leaves are low to the ground, forming a rosette. After the first year, the plant enters a period of dormancy for the colder months. Many biennials require a cold treatment, or vernalization, before they will flower. During the next spring or summer, the stem of the biennial plant elongates greatly, or 'bolts'. The plant then flowers, producing fruits and seeds before it finally dies. There are far fewer biennials than either perennial plants or annual plants."
    },
    {
        name:"Direct Sow",
        desc:"Direct seeding or direct sowing means that you start planting seeds in the garden, rather than buying small plants or starting seeds indoors earlier and transplanting them outside."
    },
    {
        name:"Heat Tolerance",
        desc:"Heat tolerance is the ability of a living organism to physiologically adjust to a heat stress exposure. For plants, it's how much heat they are able to withstand."
    },
    {
        name:"Self Sow",
        desc:"Self-seeding (or self-sowing) garden plants drop their pods, capsules or seeds at the end of the season. In most cases, the seeds need nothing more than the soil they fall onto, relying on natural seasonal changes to germinate and grow."
    },
    {
        name:"Terrestrial Plants",
        desc:"A terrestrial plant is a plant that grows on, in, or from land. Other types of plants are aquatic (living in water), epiphytic (living on trees) and lithophytic (living in or on rocks)."
    }
]

export var glossary_data = [
    {
        image: Img01, 
        name: "Amaryllis",
        water: <div><p>Water once a week</p></div>,
        care: "Very easy to care for" + <br/> + <TrowelImg/>,
        sunlight: "Prefers lots of light" + <br/> + <SunlightImg/> + <SunlightImg/> + <SunlightImg/>,
        desc: "No matter where you live, you can grow amaryllis. It's most commonly grown as a houseplant; the bulbs bloom around the holidays, making them perfect partners for poinsettias, Norfolk Island pines, and other holiday favorites. You'll typically see amaryllis in shades of red, but look around and you may be able to find stunners in shades of pink, apricot, orange, white, and even green.",
        facts: <div>- Comes in green, orange, pink, and red <br/> - Purifies the air</div>,
    },
    {
        image: Img02, 
        name: "Lucky Bamboo",
        water: "Water once a week" + <br/> + <WaterDrop/> + <WaterDrop/> + <WaterDrop/>,
        care: "Very easy to care for" + <br/> + <TrowelImg/>,
        sunlight: "Prefers a medium amount of light" + <br/> + <SunlightImg/> + <SunlightImg/>,
        desc: "Lucky bamboo is a wonderful gift plant that adds a bold note to indoor decor with its often intricately arranged stems. It's a slow-growing foliage houseplant that's easy to care for in a low- or medium-light spot. You can find lucky bamboo available in an almost endless variety of arrangements, including heart shapes, twists, curls, and more. There's even lore about how many stems are in the arrangements!",
        facts: <div>- A symbol of good luck and prosperity<br/>- Harmful to cats and dogs</div>,
    },
    {
        image: Img03, 
        name: "Calathea",
        water: "Water once a week" + <br/> + <WaterDrop/> + <WaterDrop/> + <WaterDrop/>,
        care: "Some-what easy to take care of" + <br/> + <TrowelImg/> + <TrowelImg/>,
        sunlight: "Prefers a low amount of light" + <br/> + <SunlightImg/>,
        desc: "A bold and beautiful houseplant, the calathea looks beautiful. There are lots of varieties of calathea, but one of the most common has luscious, dark green leaves that have scalloped edges and silver brush marks on the top of the leaves. Underneath, the leaves are a lovely shade of burgundy purple. Each one is a living work of art!",
        facts: <div>- Comes in green, pink, purple, and red<br/>- Purifies the air</div>,
    },
    {
        image: Img04, 
        name: "Aloe Vera",
        water: "Water once every 3 weeks" + <br/> + <WaterDrop/>,
        care: "Very easy to take care of" + <br/> + <TrowelImg/>,
        sunlight: "Prefers lots of light" + <br/> + <SunlightImg/> + <SunlightImg/> + <SunlightImg/>,
        desc: "Aloes are good indoor plants if you're busy and have a bright spot in your home. These houseplants have a bold texture that works particularly well with modern and contemporary decorating schemes, but they also fit in well if your tastes run more Mediterranean, eclectic, or exotic.",
        facts: <div>- Most types of aloe vera don't have a stem<br/>- Yellow flowers appear on long spikes during the spring and summer</div>,
    },
    {
        image: Img05, 
        name: "String of Pearls",
        water: "Water once every 3 weeks" + <br/> + <WaterDrop/>,
        care: "Very easy to take care of" + <br/> + <TrowelImg/>,
        sunlight: "Prefers a medium amount of light" + <br/> + <SunlightImg/> + <SunlightImg/>,
        desc: "String of pearls is an interesting group of easy-to-care for succulent house plants often grown in hanging baskets. These indoor plants have earned a reputation for being a cinch to care for because if they get enough light, they're practically no-fail plants that need only occasional watering.",
        facts: <div>- Poisonous or animals<br/>- Purifies the air</div>,
    },
    {
        image: Img06, 
        name: "Desert Gems Cacti",
        water: "Water once every 3 weeks" + <br/> + <WaterDrop/>,
        care: "Very easy to take care of" + <br/> + <TrowelImg/>,
        sunlight: "Prefers a low amount of light" + <br/> + <SunlightImg/>,
        desc: "Desert gems cacti -- some of the most colorful cactus around -- are easy-to-grow houseplants that add a bold dash of color to your home decor. Available in jewel-tone shades of topaz pink, emerald green, amethyst purple, fire-opal orange, and sapphire blue, Desert Gems cacti are small indoor plants perfect for decorating desks and tabletops. While they're stunning on their own, we love mixing these colorful cacti house plants together in fun arrangements. You can also dress up Desert Gems cacti by growing them in colorful containers to match or contrast their vibrant hues.",
        facts: <div>- Colour is dyed; you can buy blue, green, orange, pink purple, or red<br/>- Purifies the air</div>,
    },
    {
        image: Img07, 
        name: "Geranium",
        water: "Overwatering can cause root rot; water once top 1 inch feels dry" + <br/> + <WaterDrop/>,
        care: "Require just a bit of basic care to thrive" + <br/> + <TrowelImg/> + <TrowelImg/>,
        sunlight: "Place in a sunny window" + <br/> + <SunlightImg/> + <SunlightImg/> + <SunlightImg/>,
        desc: "American gardeners have had a love affair with geraniums for decades. These colorful annuals are a cinch to grow and look just as good on the border as they do in pots, planters, and window boxes. But, geraniums have a big secret. They aren't really geraniums after all, but members of the pelargonium family. True geraniums are actually perennial in nature and are sometimes called cranesbill. Nomenclature aside, the plants we know and love as geraniums are truly wonderful plants that come in a variety of forms including: zonals, ivies, and interspecifics. All are available in a host of colors and bi-colors. Besides their flowers, zonal geraniums are prized for their pretty patterned foliage and upright form. Ivies make great basket plants because their trailing foliage and gorgeous blooms look terrific tumbling over the edge. And don't forget interspecific varieties.",
        facts: <div>- Roots contain compounds that are effective in treatment of excessive bleeding<br/>- Roots can also relieve symptoms of diarrhea and irritable bowel syndrome</div>,
    },
    {
        image: Img08, 
        name: "Moth Orchid",
        water: "Water once it begins to dry out, usally every 7-10 days" + <br/> + <WaterDrop/> + <WaterDrop/>,
        care: "Easy to care for" + <br/> + <TrowelImg/>,
        sunlight: "Place in a moderately bright windowsill" + <br/> + <SunlightImg/> + <SunlightImg/>,
        desc: "Moth orchids (also called Phalaenopsis orchids) are among the most stylish and sophisticated plants you can grow in your home or office. They make fantastic houseplants -- even for beginners -- and their blooms can last for months, making phalaenopsis orchids an excellent gift. Most have attractive butterfly-shaped (or moth-shaped) flowers, in a wide range of colors, from pinks and purples to apricot, orange, and salmon, to lemon yellow to pure white. The blooms appear on elegant spikes above the flat leaves that appear in a fan shape.",
        facts: <div>- Removes xylene from the air (found in paint)<br/>- A perfect gift since they're so low maintnence</div>,
    },
    {
        image: Img09, 
        name: "Lily of the Valley",
        water: "Water once every 3 weeks" + <br/> + <WaterDrop/>,
        care: "Easy to care for" + <br/> + <TrowelImg/>,
        sunlight: "Place in bright indirect light" + <br/> + <SunlightImg/> + <SunlightImg/>,
        desc: "The herbaceous perennial known as lily of the valley (Convallaria majalis) produces fragrant, white, bell-shaped flowers that hang off gracefully bending stems. The small, spring flowers combined with lily of the valley's verdant green, sword-shaped leaves make the plant a living contrast of textures and colours.",
        facts: <div>- Also known as the 'May Lily' as it blossoms in May<br/>- They emit a strong, sweet smell</div>,
    },
    {
        image: Img10, 
        name: "Kalanchoe",
        water: "Water once every 2-3 weeks; or once the top 2 inches feel dry" + <br/> + <WaterDrop/>,
        care: "Easy to care for" + <br/> + <TrowelImg/>,
        sunlight: "Place in bright light" + <br/> + <SunlightImg/> + <SunlightImg/> + <SunlightImg/>,
        desc: "Kalanchoe plant is an excellent choice if you’re looking for a low maintenance houseplant that gives you bright flowers as well as pretty greenery. They’re grown in a wide range of colors; most of them vibrant hues like yellow, pink, magenta, orange and red. Kalanchoe plants bloom for a long time, too, plus they actually help purify indoor air. In short, it’s a wonderful plant!",
        facts: <div>- Some species of kalanchoes are toxic for cats.<br/>- You can prevent your pet from chewing kalanchoe leaves by sprinkling cayenne pepper over the plant</div>,
    },
    {
        image: Img11, 
        name: "Snake Plant",
        water: "Once every 2 weeks" + <br/> + <WaterDrop/> + <WaterDrop/>,
        care: "Easy to care for" + <br/> + <TrowelImg/>,
        sunlight: "Prefers indirect sunlight" + <br/> + <SunlightImg/> + <SunlightImg/>,
        desc: "Snake Plant are evergreen perennials that can grow anywhere from eight inches to 12 feet high. Their sword-like leaves are approximately two feet long. The foliage is stiff, broad, and upright, in a dark green colour variegated with white and yellow striping. They are famous for their ability to survive in the most unsuitable growing conditions.",
        facts: <div>- Great at purifing the air<br/>- Extremely effective at absorbing harsh chemicals like carbon monoxide, benzene, and formaldehyde</div>,
    },
    {
        image: Img12, 
        name: "Clivia",
        water: "Once every 2 weeks" + <br/> + <WaterDrop/> + <WaterDrop/>,
        care: "Easy to care for" + <br/> + <TrowelImg/>,
        sunlight: "Prefers bright indirect sunlight" + <br/> + <SunlightImg/> + <SunlightImg/>,
        desc: "Flowers are one of the best antidotes to the icy winds of winter and growing a houseplant that buds and blooms inside while all is dormant outside are particularly satisfying. Clivia is an easy to grow houseplant with strappy leaves and tall stocks of flowers that burst into citrus-hued orange or yellow bloom in late winter. Evergreen, it grows from roots rather than a bulb like it’s cousin, the amaryllis. It takes a bit of work to force your clivia into bloom, but once you get into the rhythm, it’s really simple. It’ll bloom in March or April and then follow the advice below to ensure blooms next year.",
        facts: <div>- Able to grow indoors and outdoors<br/>- Able to retain their foliage all year round</div>,
    },
    {
        image: Img13, 
        name: "Areca Palm",
        water: "Water once a week" + <br/> + <WaterDrop/> + <WaterDrop/> + <WaterDrop/>,
        care: "Some-what easy to take care of" + <br/> + <TrowelImg/> + <TrowelImg/>,
        sunlight: "Prefers a medium amount of light" + <br/> + <SunlightImg/> + <SunlightImg/>,
        desc: "It is hard to believe the areca palm (Dypsis lutescens) was once an endangered species. Drive down almost any street in a subtropical or warm climate, and you are likely to see dozens of these tall, attractive and clumping palms that look a lot like bamboo. The palms have smooth, sometimes golden trunks that are reminiscent of bamboo culms. Their fronds are narrow and full, almost like bamboo leaves.",
        facts: <div>- Can grow enormous (30ft tall) if left unattended<br/>- Was once endangered</div>,
    },
    {
        image: Img14, 
        name: "Aspidistra elatior",
        water: "Water once a week" + <br/> + <WaterDrop/> + <WaterDrop/> + <WaterDrop/>,
        care: "Very easy to take care of" + <br/> + <TrowelImg/>,
        sunlight: "Prefers a low amount of light" + <br/> + <SunlightImg/>,
        desc: "Aspidistra is an attractive and opulent leaf ornamental plant, aspidistra elatior is the only subspecies which is used as an indoor plant. There is no connection to actual palms, however. Its beauty lies in its dark green stalked and shining leaves which it displays openly. It is well-known for its low standards and easily forgives small mistakes in tending.",
        facts: <div>- Often known as the 'Cast iron plant'<br/>- Originates from China and Japan</div>,
    },
    {
        image: Img15, 
        name: "Fiddle Leaf Fig Tree",
        water: "Water once a week" + <br/> + <WaterDrop/> + <WaterDrop/> + <WaterDrop/>,
        care: "Some-what easy to take care of" + <br/> + <TrowelImg/> + <TrowelImg/>,
        sunlight: "Prefers lots of light" + <br/> + <SunlightImg/> + <SunlightImg/> + <SunlightImg/>,
        desc: "Create a bold, dramatic look in your home with fiddle leaf ficus (also called fiddle leaf fig, or Ficus lyrata, if you prefer botanical names).  One of the trendiest houseplants available, it’s loved for its bold, dramatic texture. It sports big leaves in a rich shade of dark green that add a lush, tropical look to any room you grow it in.",
        facts: <div>- Poisonous to animals<br/>- Purifies the air</div>,
    },
    {
        image: Img16, 
        name: "Yucca Tree",
        water: "Water once every 3 weeks" + <br/> + <WaterDrop/>,
        care: "Very easy to take care of" + <br/> + <TrowelImg/>,
        sunlight: "Prefers lots of light" + <br/> + <SunlightImg/> + <SunlightImg/> + <SunlightImg/>,
        desc: "An old-fashioned house plant that's just as common now as it was a generation ago, yucca cane is wonderfully easy to grow and an excellent choice if you're just starting out with houseplants. It shows off clusters of rich green sword-like leaves on thick, woody trunks. The upright habit and spiky texture make it a fantastic complement to other traditional house plants such as dieffenbachia and palms.",
        facts: <div>- Does best when fertilized once or twice a year<br/>- They can grow up to 10ft tall</div>,
    },
    {
        image: Img17, 
        name: "Norfolk Pine",
        water: "Water once every 3 weeks" + <br/> + <WaterDrop/>,
        care: "Very easy to take care of" + <br/> + <TrowelImg/>,
        sunlight: "Prefers a medium amount of light" + <br/> + <SunlightImg/> + <SunlightImg/>,
        desc: "An easy-care houseplant, Norfolk pine is a festive holiday plant you can enjoy all year long! During the holidays, its needled branches look right at home decorated as a Christmas tree. After the holidays pass, remove the decorations and enjoy its classic look (and air-purifying powers) anywhere in your home.",
        facts: <div>- Purifies the air<br/>- Often used during the winter holidays</div>,
    },
    {
        image: Img18, 
        name: "Madagascar Dragon Tree",
        water: "Water once every 3 weeks" + <br/> + <WaterDrop/>,
        care: "Very easy to take care of" + <br/> + <TrowelImg/>,
        sunlight: "Prefers a low amount of light" + <br/> + <SunlightImg/>,
        desc: "Madagascar dragon tree, also called red-edge dracaena, is one of the most popular houseplants around. It bears narrow green leaves banded in red or pink on top of slender stems. Its upright habit makes the Madagascar dragon tree a useful houseplant to grow against a blank wall, to provide privacy in front of a window, or at the end of a sofa or chair as it ages and becomes tree-like. When it's young, the Madagascar dragon tree adds beautiful texture to tabletops, desks, and other surfaces. It's often included in dish gardens because of its grassy look.",
        facts: <div>- Purifies the air<br/>- The top can be cut off to sprout new branches</div>,
    },
    {
        image: Img19,
        name: "Hoya Tree",
        water: "Water once a week" + <br/> + <WaterDrop/> + <WaterDrop/> + <WaterDrop/>,
        care: "Very easy to take care of" + <br/> + <TrowelImg/>,
        sunlight: "Place in high humidity area" + <br/> + <SunlightImg/> + <SunlightImg/> + <SunlightImg/>,
        desc: "Grow your easy-care hoya in low, medium, or bright light. It tolerates low and medium light, but doesn't typically bloom in these conditions. Like most flowering houseplants, the more light hoya gets, the more flowers it will produce." + <br/> + <br/> + "Water hoya when the potting mix dries out. Don't worry if you forget to water it once or twice -- this houseplant doesn't mind. Its thick leaves and stems help the plant store water for cases just like that. Do take care not to overwater it; hoya would rather be too dry than too wet and can suffer from root rot if the potting mix stays wet for extended periods.",
        facts: <div>- Also known as the 'porcelain flower' or 'wax plant'<br/>- Removes air pollution from your home</div>,
    },
    {
        image: Img20, 
        name: "Stromanthe Triostar",
        water: "Water once a week" + <br/> + <WaterDrop/> + <WaterDrop/> + <WaterDrop/>,
        care: "Very easy to take care of" + <br/> + <TrowelImg/>,
        sunlight: "Place in bright indirect sunlight" + <br/> + <SunlightImg/> + <SunlightImg/>,
        desc: "The thin, long leaves of the plant give it a distinct look. These leaves are typically a dark green color with pale veins, while the undersides are often purplish red.",
        facts: <div>- Rarely blossoms, especially when grown indoors<br/>- If flowers do show up, they should appear between March and April</div>,
    },
    {
        image: Img21, 
        name: "Rubber Fig Plant",
        water: "Water once a week" + <br/> + <WaterDrop/> + <WaterDrop/> + <WaterDrop/>,
        care: "Very easy to take care of" + <br/> + <TrowelImg/>,
        sunlight: "Place in bright indirect sunlight" + <br/> + <SunlightImg/> + <SunlightImg/>,
        desc: "Rubber plants earned their name thanks to their sap, which is sometimes used to make rubber. The rubber plant’s leaves also have a shiny and rubbery appearance. These plants will grow tall and produce beautiful leaves if you give them proper care.",
        facts: <div>- Kills airborne bacteria<br/>- Can reduce mold and bacteria in a room by as much as 60%</div>,
    },
    {
        image: Img22, 
        name: "Zamioculcas Zamiifolia",
        water: "Water once every 2-3 weeks" + <br/> + <WaterDrop/>,
        care: "Fairly easy to take care of" + <br/> + <TrowelImg/> + <TrowelImg/>,
        sunlight: "Prefers moderate levels of light" + <br/> + <SunlightImg/> + <SunlightImg/>,
        desc: "These beauties, which grow in tall stalks of deep green, rubbery leaves, actually like to be left alone. Though they prefer moderate levels of sunlight, they can tolerate low light, too, so they're often the go-to choice for offices. 'These plants prefer to stay on the dry side, and seem to thrive on neglect,' says Kathie Hayden, plant information service manager at Chicago Botanic Garden.",
        facts: <div>- Poisonous to pets<br/>- Always wash your hands after touching</div>,
    },
    {
        image: Img23, 
        name: "Parlour Palm",
        water: "Sensitive to overwatering; water once top 1 inch feels dry" + <br/> + <WaterDrop/>,
        care: "Fairly easy to take care of" + <br/> + <TrowelImg/> + <TrowelImg/>,
        sunlight: "Prefers low levels of light" + <br/> + <SunlightImg/>,
        desc: "This attractive little plant was first discovered in Central America and brought back to the United States, where it immediately became a popular indoor palm. It gained a near-instant following for several good reasons. It's adapted to relatively low light, can handle lower temperatures, and grows in attractive clumps with light-textured foliage cloaking thin trunks.",
        facts: <div>- Has been popular since Victorian times<br/>- Was a plant commonly found growing in home Parlors (and that's how it got its common name)</div>,
    },
    {
        image: Img24, 
        name: "Pothos Plant",
        water: "Water once soil is completely dry" + <br/> + <WaterDrop/>,
        care: "Very easy to take care of" + <br/> + <TrowelImg/>,
        sunlight: "Tolerates low light, but grows well in medium light" + <br/> + <SunlightImg/> + <SunlightImg/>,
        desc: "A perfect houseplant for beginners, pothos is one of the easiest you can grow even if you are a person who forgets to water your plants. -- and one of the most popular. This hardy indoor plant features dark green leaves splashed and marbled in shades of yellow, cream, or white.",
        facts: <div>- Purifies the air<br/>- Can even tolerate fluorescent light</div>,
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

export function ChangeCounter(d,l){
    glossary_counter = d;
}

export function TermChangeCounter(c,k){
    Terminology_counter = c;
}