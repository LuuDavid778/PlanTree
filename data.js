// Context, Reducer, redux
import React from 'react'

export const groweasy = require('./Imgs/groweasy.svg');
export const growmedium = require('./Imgs/growmedium.svg');
export const growhard = require('./Imgs/growhard.svg');
export const watereasy = require('./Imgs/watereasy.svg');
export const watermedium = require('./Imgs/watermedium.svg');
export const waterhard = require('./Imgs/waterhard.svg');
export const sunavoid = require('./Imgs/sunavoid.svg')
export const sundirect = require('./Imgs/sundirect.svg')
export const sunlight = require('./Imgs/sunlight.svg')

export var data = {
    Question_1: "",
    Question_2: "", 
    Question_3: "",
    Question_4: "",
    resultplant:"Insert Plant Name here.",
    resultplantimg:"https://placekeanu.com/200/200",
    resultdesc:"Insert Plant Description here.",
    resultintfacts:`Insert Interesting Facts here.`,
    card1:watereasy,
    card2:groweasy,
    card3:sunlight
    }
    
// export var data = {
//     questions: [
//         {
//             Question1: ""
//         },
//         {
//             Question2: ""
//         }
//     ]
// }

export function checkResults(){
    // Apartment starts here
    // Apartment FLOWERING PLANT SHORT WEEKS STARTS HERE 
    if(data.Question_1 === "Apartment" && data.Question_2 === "FloweringPlant" && data.Question_3 === "ShortWeeks" && data.Question_4 === "Hot") {
        data.resultplant = "Geranium"
        data.resultplantimg = "https://placekeanu.com/200/200/y"
        data.resultdesc = `American gardeners have had a love affair with geraniums for decades. These colorful annuals are a cinch to grow and look just as good on the border as they do in pots, planters, and window boxes. But, geraniums have a big secret. They aren't really geraniums after all, but members of the pelargonium family. True geraniums are actually perennial in nature and are sometimes called cranesbill. Nomenclature aside, the plants we know and love as geraniums are truly wonderful plants that come in a variety of forms including: zonals, ivies, and interspecifics. All are available in a host of colors and bi-colors. Besides their flowers, zonal geraniums are prized for their pretty patterned foliage and upright form. Ivies make great basket plants because their trailing foliage and gorgeous blooms look terrific tumbling over the edge. And don't forget interspecific varieties.`
        data.resultintfacts = `Root of geranium contains compounds that are effective in treatment of excessive bleeding, conjunctivitis, retinal disorders and hemorrhoids. Root also has antiseptic properties (prevents growth of harmful microorganisms) and ability to relieve symptoms of diarrhea and irritable bowel syndrome.`
        data.card1 = waterhard
        data.card2 = growmedium
        data.card3 = sunlight 
    } else if (data.Question_1 === "Apartment" && data.Question_2 === "FloweringPlant" && data.Question_3 === "ShortWeeks" && data.Question_4 === "Warm"){
        data.resultplant = "Moth Orchid"
        data.resultplantimg = "https://placekeanu.com/200/200/y"
        data.resultdesc = `Moth orchids (also called Phalaenopsis orchids) are among the most stylish and sophisticated plants you can grow in your home or office. They make fantastic houseplants -- even for beginners -- and their blooms can last for months, making phalaenopsis orchids an excellent gift. Most have attractive butterfly-shaped (or moth-shaped) flowers, in a wide range of colors, from pinks and purples to apricot, orange, and salmon, to lemon yellow to pure white. The blooms appear on elegant spikes above the flat leaves that appear in a fan shape.        `
        data.resultintfacts = `It might seem hard to believe that the beautiful, tropical appeal of an orchid could also serve a practical purpose in your home, but it’s true. Since orchids are particularly adept at removing xylene from the air, they make the perfect gift for someone who has recently painted or renovated a home. And you won’t have to worry about gifting a plant that’s difficult to take care of since orchids are so low maintenance.`
        data.card1 = waterhard
        data.card2 = groweasy
        data.card3 = sunlight 
    } else if (data.Question_1 === "Apartment" && data.Question_2 === "FloweringPlant" && data.Question_3 === "ShortWeeks" && data.Question_4 === "Cold"){
        data.resultplant = "Lily of the Valley"
        data.resultplantimg = "https://placekeanu.com/200/200/y"
        data.resultdesc = `The herbaceous perennial known as lily of the valley (Convallaria majalis) produces fragrant, white, bell-shaped flowers that hang off gracefully bending stems. The small, spring flowers combined with lily of the valley's verdant green, sword-shaped leaves make the plant a living contrast of textures and colours.`
        data.resultintfacts = `Lily of the valley is also known as "May Lily" because it blooms during the May and represents the birth flower of May. Flowers emit a strong, sweet scent which attracts bees, responsible for the pollination of this plant.`
        // Apartment FLOWERING PLANT SHORT WEEKS ENDS HERE
        // Apartment FLOWERING PLANT LONG WEEKS STARTS HERE 
        data.card1 = waterhard
        data.card2 = groweasy
        data.card3 = sunlight 
    } else if (data.Question_1 === "Apartment" && data.Question_2 === "FloweringPlant" && data.Question_3 === "LongWeeks" && data.Question_4 === "Hot"){
        data.resultplant = "Kalanchoes"
        data.resultplantimg = "https://placekeanu.com/200/200/y"
        data.resultdesc = `One of the most versatile succulents, kalanchoe is prized for its pretty foliage and boldly colored flowers. Kalanchoe is a low-maintenance standout in a sunny border or a container. Some varieties also make great gift plants because they can be purchased in full bloom throughout the winter months to be grown as houseplants. Kalanchoe grows 8 to 12 inches tall and has wide, oval-shaped shaped leaves that provide interest and color even when the plant is not in bloom. Flower colors include yellow, pink, red, or white. Hardy from zones 10-11.`
        data.resultintfacts = `Some species of kalanchoes are said to be toxic for cats. Ingestion by dogs and cats most often results in gastrointestinal irritation or upset. If you have pets in your house, you can prevent them from chewing kalanchoe leaves by sprinkling cayenne pepper over the plant. `
        data.card1 = watermedium
        data.card2 = groweasy
        data.card3 = sunlight 
    }else if (data.Question_1 === "Apartment" && data.Question_2 === "FloweringPlant" && data.Question_3 === "LongWeeks" && data.Question_4 === "Warm"){
        data.resultplant = "Snake Plants"
        data.resultplantimg = "https://placekeanu.com/200/200/y"
        data.resultdesc = `Snake Plant are evergreen perennials that can grow anywhere from eight inches to 12 feet high. Their sword-like leaves are approximately two feet long. The foliage is stiff, broad, and upright, in a dark green colour variegated with white and yellow striping. They are famous for their ability to survive in the most unsuitable growing conditions.`
        data.resultintfacts = `The snake plant is a well-known air purifying plant that is extremely effective in its ability to absorb harsh chemicals like carbon monoxide, benzene, formaldehyde and other harsh chemicals found in indoor air. The plant also produces oxygen, absorbs CO2 in the night and has proven to be beneficial for airborne allergies.` 
        data.card1 = watermedium
        data.card2 = groweasy
        data.card3 = sunlight 
    }else if (data.Question_1 === "Apartment" && data.Question_2 === "FloweringPlant" && data.Question_3 === "LongWeeks" && data.Question_4 === "Cold"){
        // Apartment FLOWERING PLANT LONG WEEKS ENDS HERE
        // Apartment TREE PLANT  SHORT WEEK STARTS HERE 
        data.resultplant = "Clivia"
        data.resultplantimg = "https://placekeanu.com/200/200/y"
        data.resultdesc = `Flowers are one of the best antidotes to the icy winds of winter and growing a houseplant that buds and blooms inside while all is dormant outside are particularly satisfying. Clivia is an easy to grow houseplant with strappy leaves and tall stocks of flowers that burst into citrus-hued orange or yellow bloom in late winter. Evergreen, it grows from roots rather than a bulb like it’s cousin, the amaryllis. It takes a bit of work to force your clivia into bloom, but once you get into the rhythm, it’s really simple. It’ll bloom in March or April and then follow the advice below to ensure blooms next year.`
        data.resultintfacts = `Clivia is a versatile houseplant that can be grown indoors and outdoors. Clivias are able to retain their foliage all year round, even in the midst of the winter season. Part of the reason why this houseplant is so versatile is its ability to adapt to different growing environments. `
        data.card1 = watermedium
        data.card2 = groweasy
        data.card3 = sunlight
    } else if (data.Question_1 === "Apartment" && data.Question_2 === "Tree" && data.Question_3 === "ShortWeeks" && data.Question_4 === "Hot"){
        data.resultplant = "Hoya Plant"
        data.resultplantimg = "https://placekeanu.com/200/200/y"
        data.resultdesc = `If you're looking for an exotic indoor plant that's very easy to grow, take a look at hoya (also sometimes called wax plant). This unique houseplant is a vine (but don't worry; it's not a fast-growing one!) that has thick, waxy leaves and clusters of star-shaped waxy flowers. It's among the most tolerant of all houseplants. Hoya is often sold in hanging baskets, but its lanky stems will trail from tall containers such as urns, too. Or, if you want to grow it upright, supply a trellis or totem and let hoya supply vertical interest to your home or office.`
        data.resultintfacts = `Hoya carnosa, known as the porcelain flower or wax plant, was also tested and demonstrated a good ability to remove all five common VOCs from the air. Grow several plants to maximize the removal of those air pollution from your home.`
        data.card1 = watereasy
        data.card2 = groweasy
        data.card3 = sunlight
    }   else if (data.Question_1 === "Apartment" && data.Question_2 === "Tree" && data.Question_3 === "ShortWeeks" && data.Question_4 === "Warm"){
    data.resultplant = " Stromanthe Triostar"
    data.resultplantimg = "https://placekeanu.com/200/200/y"
    data.resultdesc = `Stromanthe is a strikingly beautiful houseplant that never fails to catch the eye. It has an exotic look with its dark green leaves that are delightfully variegated with streaks of pink and cream. As if that's not enough, the backsides of the leaves are a lovely shade of pinkish-purple. As a young plant, stromanthe is an eye-catching addition to a coffee table or side table (or desk in the office).  As it grows (slowly -- very slowly!) becomes larger and better suited to use as a floor plant.`
    data.resultintfacts = `The Stromanthe triostar rarely blooms, especially when grown indoors. Stromanthe also makes a beautiful summer annual for shaded deck or patio planters. And in frost-free climates such as South Florida, it's a lovely evergreen perennial for shaded pots or gardens, overall this plant is great for purifying the air.`
    data.card1 = waterhard
    data.card2 = groweasy
    data.card3 = sunlight
} else if (data.Question_1 === "Apartment" && data.Question_2 === "Tree" && data.Question_3 === "ShortWeeks" && data.Question_4 === "Cold"){
    data.resultplant = "Rubber Fig Plant"
    data.resultplantimg = "https://placekeanu.com/200/200/y"
    data.resultdesc = `Rubber plants earned their name thanks to their sap, which is sometimes used to make rubber. The rubber plant’s leaves also have a shiny and rubbery appearance. These plants will grow tall and produce beautiful leaves if you give them proper care.`
    data.resultintfacts = `Because the plant is anti-bacterial, bacteria and mold spores float through the air, looking for places to grow. Soil is a natural place for these organisms to grow, but they can make rubber plants sick. Part of a rubber plant’s defense against these potential hazards kills these organisms while they are airborne. This process will not harm people or pets, but can reduce mold and bacteria in a room by as much as 50 or 60 percent.`
    data.card1 = waterhard
    data.card2 = groweasy
    data.card3 = sunlight  
} // Apartment TREE SHORT WEEK ENDS HERE
    // Apartment TREE LONG WEEK STARTS HERE   
else if (data.Question_1 === "Apartment" && data.Question_2 === "Tree" && data.Question_3 === "LongWeeks" && data.Question_4 === "Hot"){
    data.resultplant = "Pothos Plant"
    data.resultplantimg = "https://placekeanu.com/200/200/y"
    data.resultdesc = `A perfect houseplant for beginners, pothos is one of the easiest you can grow even if you are a person who forgets to water your plants. -- and one of the most popular. This hardy indoor plant features dark green leaves splashed and marbled in shades of yellow, cream, or white.`
    data.resultintfacts = `Not only can a pothos plant enliven your space with colour and texture, but they are also excellent at helping to purify the air and tolerant of fluorescent light, making them a popular choice for office environments. These plants can also help cleanse the air when grown in your home or office, as well.`
    data.card1 = watereasy
        data.card2 = groweasy
        data.card3 = sunlight
} else if (data.Question_1 === "Apartment" && data.Question_2 === "Tree" && data.Question_3 === "LongWeeks" && data.Question_4 === "Warm"){
    data.resultplant = "Zamioculcas Zamiifolia"
    data.resultplantimg = "https://placekeanu.com/200/200/y"
    data.resultdesc = `Looking for an easy-to-grow houseplant? Check out ZZ plant -- it's truly one of the toughest around, making it a perfect choice to add to your home or office. Whether you're able to give it steady care, travel a lot, or just get distracted by all the stresses of daily life, ZZ plant survives it all. Plus, it looks good: The plant features shiny, dark green leaves that look waxy (some people even think they're plastic). Haven't heard of ZZ plant? You're not alone; it deserves a lot more attention than it gets. It was discovered in Eastern Africa in the 1800s, but it wasn't until the 1990s that it really took off as a houseplant. While ZZ plant isn't exactly rare, it's still catching on -- so grow ZZ plant and you can be ahead of the trend. `
    data.resultintfacts = `ZZ’s major drawback is that all parts of the plant are poisonous. It’s toxic but not cancerous. Don’t eat it, keep it away from nibbling pets and overly curious children, and always wash your hands after handling it to avoid skin irritation. But despite all of this, the ZZ plant does a great job in purifiying the air for your environment.`
    data.card1 = watereasy
    data.card2 = groweasy
    data.card3 = sunlight
} else if (data.Question_1 === "Apartment" && data.Question_2 === "Tree" && data.Question_3 === "LongWeeks" && data.Question_4 === "Cold"){
    data.resultplant = "Parlour Palm"
    data.resultplantimg = "https://placekeanu.com/200/200/y"
    data.resultdesc = `This attractive little plant was first discovered in Central America and brought back to the United States, where it immediately became a popular indoor palm. It gained a near-instant following for several good reasons. It's adapted to relatively low light, can handle lower temperatures, and grows in attractive clumps with light-textured foliage cloaking thin trunks.`
    data.resultintfacts = `Popular since Victorian times, this was a plant commonly found growing in home Parlors (and that's how it got its common name). The Parlor was often considered the best room in the house and somewhere important guests would be entertained. Looking back it makes perfect sense that the Victorians would only try and grow the most hardy and robust looking plants. For minimal care and effort, they'd be rewarded with a room enhancing plant.`
    data.card1 =  watereasy
        data.card2 = groweasy
        data.card3 = sunavoid.svg
} 
// Apartment TREE LONG WEEK STARTS HERE 
// Apartment ENDS HERE 

// HOUSE STARTS HERE 
// HOUSE FLOWERING PLANT SHORT WEEKS  STARTS HERE 
else if (data.Question_1 === "House" && data.Question_2 === "FloweringPlant" && data.Question_3 === "ShortWeeks" && data.Question_4 === "Hot"){
    data.resultplant = "Amaryllis"
    data.resultplantimg = "https://placekeanu.com/200/200/y"
    data.resultdesc = `No matter where you live, you can grow amaryllis. It's most commonly grown as a houseplant; the bulbs bloom around the holidays, making them perfect partners for poinsettias, Norfolk Island pines, and other holiday favorites. You'll typically see amaryllis in shades of red, but look around and you may be able to find stunners in shades of pink, apricot, orange, white, and even green. Amaryllis grows from a bulb; the flowers pop up on a tall stem over the strappy leaves. Because the stem is so tall, it's helpful to have a heavy container that won't tip over. Look for beautiful containers in shades that will complement your amaryllis.`
    data.resultintfacts = `The amaryllis commonly means determination, beauty, and love. The Victorians associated amaryllis with strength and determination because of their height and sturdiness. Amaryllis can also mean success, and are commonly given as gifts of hard-won achievement. Purifies and cleans the air really well.`
    data.card1 = waterhard
    data.card2 = groweasy
    data.card3 = sundirect
} else if (data.Question_1 === "House" && data.Question_2 === "FloweringPlant" && data.Question_3 === "ShortWeeks" && data.Question_4 === "Warm"){
    data.resultplant = "Lucky Bamboo"
    data.resultplantimg = "https://placekeanu.com/200/200/y"
    data.resultdesc = `Lucky bamboo is a wonderful gift plant that adds a bold note to indoor decor with its often intricately arranged stems. It's a slow-growing foliage houseplant that's easy to care for in a low- or medium-light spot. You can find lucky bamboo available in an almost endless variety of arrangements, including heart shapes, twists, curls, and more. There's even lore about how many stems are in the arrangements!`
    data.resultintfacts = `The Lucky Bamboo has been used for 5,000 years in the practice of Feng Shui and originated in Southeast Asia. The plant is said to bring health, love, and luck to whoever possesses it.`
    data.card1 = waterhard
    data.card2 = groweasy
    data.card3 = sunlight
}  else if (data.Question_1 === "House" && data.Question_2 === "FloweringPlant" && data.Question_3 === "ShortWeeks" && data.Question_4 === "Cold"){
    data.resultplant = "Calathea"
    data.resultplantimg = "https://placekeanu.com/200/200/y"
    data.resultdesc = `A bold and beautiful houseplant, the calathea looks beautiful. There are lots of varieties of calathea, but one of the most common has luscious, dark green leaves that have scalloped edges and silver brush marks on the top of the leaves. Underneath, the leaves are a lovely shade of burgundy purple. Each one is a living work of art!`
    data.resultintfacts = `The Calathea is a genus that includes about twenty five species, this plant is said to be native to the tropical Americas and is known to be called the "prayer plant" or "zebra plant".`
    data.card1 = waterhard
    data.card2 = growmedium
    data.card3 = sunlight
} 
// HOUSE FLOWERING PLANT SHORT WEEKS ENDS HERE 
// HOUSE FLOWERING PLANTS LONG WEEKS STARTS HERE 
else if (data.Question_1 === "House" && data.Question_2 === "FloweringPlant" && data.Question_3 === "LongWeeks" && data.Question_4 === "Hot"){
    data.resultplant = "Aloe Vera"
    data.resultplantimg = "https://placekeanu.com/200/200/y"
    data.resultdesc = `Aloes are good indoor plants if you're busy and have a bright spot in your home. These houseplants have a bold texture that works particularly well with modern and contemporary decorating schemes, but they also fit in well if your tastes run more Mediterranean, eclectic, or exotic.`
    data.resultintfacts = `While aloes are traditionally thought of for their foliage when grown as indoor plants, they can bloom with tall stems of brightly colored flowers if they get enough light.  Aloe vera is the most common type of aloe, but there are plenty of other varieties available. Many have variegated foliage, which adds to their visual appeal.`
    data.card1 = watereasy
    data.card2 = groweasy
    data.card3 = sundirect
} else if (data.Question_1 === "House" && data.Question_2 === "FloweringPlant" && data.Question_3 === "LongWeeks" && data.Question_4 === "Warm"){
    data.resultplant = "String of Pearls"
    data.resultplantimg = "https://placekeanu.com/200/200/y"
    data.resultdesc = `String of pearls is an interesting group of easy-to-care for succulent house plants often grown in hanging baskets. These indoor plants have earned a reputation for being a cinch to care for because if they get enough light, they're practically no-fail plants that need only occasional watering.`
    data.resultintfacts = `In winter months, the plant has tiny white flowers with bright colored stamens. People often say the flowers smell like cinnamon. Overall this plant purifies well but is poisonous for animals to consume.`
    data.card1 = watereasy
    data.card2 = groweasy
    data.card3 = sunlight
} else if (data.Question_1 === "House" && data.Question_2 === "FloweringPlant" && data.Question_3 === "LongWeeks" && data.Question_4 === "Cold"){
    data.resultplant = "Desert Gems Cacti"
    data.resultplantimg = "https://placekeanu.com/200/200/y"
    data.resultdesc = `Desert gems cacti -- some of the most colorful cactus around -- are easy-to-grow houseplants that add a bold dash of color to your home decor. Desert Gems cacti are small indoor plants perfect for decorating desks and tabletops. While they're stunning on their own, we love mixing these colorful cacti house plants together in fun arrangements.`
    data.resultintfacts = `Desert Gems cacti have relatively soft spines, making them a lot less prickly than other cactus varieties. They're fun houseplants for older children to care for and nurture.`
    data.card1 = watereasy
    data.card2 = groweasy
    data.card3 = sunlight
}
// HOUSE FLOWERING PLANT LONG WEEK ENDS HERE
// HOUSE FLOWERING PLANT ENDS HER

// HOUSE TREE SHORT WEEK STARTS HERE 
else if (data.Question_1 === "House" && data.Question_2 === "Tree" && data.Question_3 === "ShortWeeks" && data.Question_4 === "Hot"){
    data.resultplant = "Fiddle Leaf Fig Tree"
    data.resultplantimg = "https://placekeanu.com/200/200/y"
    data.resultdesc = `Create a bold, dramatic look in your home with fiddle leaf ficus (also called fiddle leaf fig, or Ficus lyrata, if you prefer botanical names).  One of the trendiest houseplants available, it’s loved for its bold, dramatic texture. It sports big leaves in a rich shade of dark green that add a lush, tropical look to any room you grow it in.`
    data.resultintfacts = `Along with purifying and cleansing the air, this trendy houseplant has a milky-white sap that drips from the cuts after pruning. Use a rag or soft cloth to absorb the sap to prevent it from dripping on the floor.`
    data.card1 = waterhard
    data.card2 = growmedium
    data.card3 = sundirect
}
else if (data.Question_1 === "House" && data.Question_2 === "Tree" && data.Question_3 === "ShortWeeks" && data.Question_4 === "Warm"){
    data.resultplant = "Areca Palm"
    data.resultplantimg = "https://placekeanu.com/200/200/y"
    data.resultdesc = `Areca palm (Chrysalidocarpus lutescens) is one of the most widely used palms for bright interiors. It features feathery, arching fronds, each with up to 100 leaflets. These big, bold plants command attention.`
    data.resultintfacts =`Areca palm is one of the few palms that can tolerate trimming without serious harm, making it possible to keep mature plants indoors for their full lifespan of up to 10 years, making it the perfect plant to grow in consideration of absorbing the C02 in your environment.`
    data.card1 = waterhard
    data.card2 = growmedium
    data.card3 = sunlight
} 
else if (data.Question_1 === "House" && data.Question_2 === "Tree" && data.Question_3 === "ShortWeeks" && data.Question_4 === "Cold"){
    data.resultplant = "Aspidistra Elatior"
    data.resultplantimg = "https://placekeanu.com/200/200/y"
    data.resultdesc = `Aspidistra is an attractive and opulent leaf ornamental plant, aspidistra elatior is the only subspecies which is used as an indoor plant. There is no connection to actual palms, however. Its beauty lies in its dark green stalked and shining leaves which it displays openly. It is well-known for its low standards and easily forgives small mistakes in tending.`
    data.resultintfacts = `This plant was originated from China and Japan and is often known as the Cast iron plant because the plant is fairly undemanding and will survive through neglect that would easily kill a lesser plant.`
    data.card1 = waterhard
    data.card2 = groweasy
    data.card3 = sunlight
}
// HOUSE TREE SHORT WEEK ENDS HERE 
// HOUSE TREE LONG WEEK STARTS HERE

else if (data.Question_1 === "House" && data.Question_2 === "Tree" && data.Question_3 === "LongWeeks" && data.Question_4 === "Hot"){
    data.resultplant = "Yucca Tree"
    data.resultplantimg = "https://placekeanu.com/200/200/y"
    data.resultdesc = `An old-fashioned house plant that's just as common now as it was a generation ago, yucca cane is wonderfully easy to grow and an excellent choice if you're just starting out with houseplants. It shows off clusters of rich green sword-like leaves on thick, woody trunks. The upright habit and spiky texture make it a fantastic complement to other traditional house plants such as dieffenbachia and palms.`
    data.resultintfacts = `Over time, yucca cane develops into a bold tree that can reach several feet tall, making it a dramatic houseplant to add life and color to a blank wall, empty corners of a room, or act as a bold architectural accent. The plant can grow up to 10 feet tall and does best when fertilized once or twice a year.`
    data.card1 = watereasy
        data.card2 = groweasy
        data.card3 = sundirect
}


else if (data.Question_1 === "House" && data.Question_2 === "Tree" && data.Question_3 === "LongWeeks" && data.Question_4 === "Warm"){
    data.resultplant = "Norfolk Pine"
    data.resultplantimg = "https://placekeanu.com/200/200/y"
    data.resultdesc = `An easy-care houseplant, Norfolk pine is a festive holiday plant you can enjoy all year long! During the holidays, its needled branches look right at home decorated as a Christmas tree. After the holidays pass, remove the decorations and enjoy its classic look (and air-purifying powers) anywhere in your home.`
    data.resultintfacts = `Not many people know that the Norfolk pine actually does a great job purifying the air. It's usually most often used during the winter holidays and usually disregarded out of season.`
    data.card1 = watereasy
    data.card2 = groweasy
    data.card3 = sunlight
}
else if (data.Question_1 === "House" && data.Question_2 === "Tree" && data.Question_3 === "LongWeeks" && data.Question_4 === "Cold"){
    data.resultplant = "Madagascar Dragon Tree"
    data.resultplantimg = "https://placekeanu.com/200/200/y"
    data.resultdesc = ` Madagascar dragon tree, also called red-edge dracaena, is one of the most popular houseplants around. It bears narrow green leaves banded in red or pink on top of slender stems. Its upright habit makes the Madagascar dragon tree a useful houseplant to grow against a blank wall, to provide privacy in front of a window, or at the end of a sofa or chair as it ages and becomes tree-like.`
    data.resultintfacts = `When it's young, the Madagascar dragon tree adds beautiful texture to tabletops, desks, and other surfaces. It's often included in dish gardens because of its grassy look.`
    data.card1 = watereasy
    data.card2 = groweasy
    data.card3 = sunlight
}

}
export function restartResults(){
    data.Question_1 = ""
    data.Question_2 = ""
    data.Question_3 = ""
    data.Question_4 = ""
    data.resultplant = ""
     data.resultplantimg = ""
     data.resultdesc = ""
    data.resultintfacts = ""
    data.card1 = " "
        data.card2 = " "
        data.card3 = " "
}

    export function ChangeData(d, n){
        data.n = d;

    
    }
    
    
    