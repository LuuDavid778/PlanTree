var tutorial_page = 0;
var tutorial_array = [{
    picture: `<div class="tutorial_pg1_subtitle">What type of house do you live in?</div>
                    <div class="tutorial_pg1_imgContainer">
                    <img class="tutorial_pg1_img1" src="/Imgs/House.svg">
                    <img class="tutorial_pg1_img2" src="/Imgs/Hand.svg">
                    <img class="tutorial_pg1_img3" src="/Imgs/Apartment.svg">
                </div>`,
    description: `<div class="tutorial__texts__header">Answer the following questions</div>
                    <div class="tutorial__texts__description">By answering these series of questions, PlanTree will help you find the plant you desire!</div>`,
    tutorialProgress:`<img src="/Imgs/progress_circles1.svg">`,
    button: `<div class="tutorial_nextButton" onclick="change_tutorial_page()">Next</div>`
},

{
    picture:`<div class="tutorial_imgContainer_pg2-6">
    <img src="/Imgs/Buildings.svg">
</div>`,
    description:``,
    tutorialProgress:``,
    button:`<div class="tutorial_nextButton" onclick="change_tutorial_page()">Next</div>`
},

{
    picture:`<div class="tutorial_imgContainer_pg2-6">
    <img src="/Imgs/Two_plants.svg">
    </div>`,
    description:``,
    tutorialProgress:``,
    button:`<div class="tutorial_nextButton" onclick="change_tutorial_page()">Next</div>`
},

{
    picture:`<div class="tutorial_imgContainer_pg2-6">
    <img src="/Imgs/Watering_can.svg">
    </div>`,
    description:``,
    tutorialProgress:``,
    button:`<div class="tutorial_nextButton" onclick="change_tutorial_page()">Next</div>`
},

{
    picture:`<div class="tutorial_imgContainer_pg2-6">
    <img src="/Imgs/thermometer.svg">
    </div>`,
    description:``,
    tutorialProgress:``,
    button:`<div class="tutorial_nextButton" onclick="change_tutorial_page()">Next</div>`
},

{
    picture:`<div class="tutorial_imgContainer_pg2-6">
    <img src="/Imgs/Leaf_card.svg">
    </div>`,
    description:``,
    tutorialProgress:``,
    button:`<div class="tutorial_nextButton" onclick="change_tutorial_page()">Next</div>`
}
]

function advance_tutorial_page(){
    tutorial_page ++;
    console.log(tutorial_page);
    document.querySelector(".tutorial_imgContainer").innerHTML =tutorial_array[tutorial_page].picture;
    document.querySelector(".tutorial__texts").innerHTML =tutorial_array[tutorial_page].description;
    document.querySelector(".tutorial__progress__circles").innerHTML =tutorial_array[tutorial_page].tutorialProgress;
    document.querySelector(".tutorial_nextButton_container").innerHTML =tutorial_array[tutorial_page].button;
}