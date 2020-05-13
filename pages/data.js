// Context, Reducer, redux



export var data = {
    Question_1: "",
    Question_2: "",
    Question_3: "",
    Question_4: "",
    resultplant:"Insert Plant Name here.",
    resultplantimg:"https://placekeanu.com/200/200",
    resultdesc:"Insert Plant Description here.",
    resultintfacts:`Insert Interesting Facts here.`
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
    if(data.Question_1 === "House" && data.Question_2 === "Tree" && data.Question_3 === "ShortWeeks") {
        data.resultplant = "Test work"
        data.resultplantimg = "https://placekeanu.com/200/200/y"
        data.resultdesc = "Test worked"
        data.resultintfacts = "Test worked"
    } else if (data.Question_1 === "Apartment" && data.Question_2 === "FloweringPlant" && data.Question_3 === "LongWeeks"){
        data.resultplant = "Hi Kozy"
        data.resultplantimg = "https://i.imgur.com/TO4PnO3.png"
        data.resultdesc = "You are cute!"
        data.resultintfacts = "I got it working!"
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
}

    export function ChangeData(d, n){
        data.n = d;

    
    }
    
    
    