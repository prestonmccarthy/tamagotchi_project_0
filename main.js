console.log("JS is running")

const lifeOfPet = document.getElementsByClassName("life-of-pet-text")


const petBio = document.getElementsByClassName("pet-bio")


const ageCount = document.getElementsByClassName("age-count")


const petStatus = document.getElementsByClassName("pet-status")


const petName = document.getElementsByClassName("pet-name-input")


const boredomLevel = document.querySelector(".boredom-level")


const hungerLevel = document.querySelector(".hunger-level")


const sleepinessLevel = document.querySelector(".sleepiness-level")


const playBtn = document.getElementById("play-button")


const hungerButton = document.querySelector(".feed-button")


const sleepBtn = document.getElementById("nap-button")

// function feedPet () {
//     petFed *= 0;
//     hungerLevel.innerHTML = `Hunger: ${petFed}`
//     console.log(hungerLevel)
//     // console.log(event)
//     // //store the current text content of the p tag 
//     // let display = parseInt(hungerLevel.textContent) // parseInt - convert a non integer value into an integer 
//     // //parseInt("3") => 3
//     // // console.log(display)
//     // display-=1
//     // hungerLevel.textContent = display
//     // console.log(numberDisplay)
//     // every time increaseNumber is called the value will be different - increaseNumber is a wrapper for some behavior
//     // on click - change the dom from 0 > 1 > 2 > etc. 
// } 

// // hungerBtn.addEventListener("click", decreaseNumber)
// hungerBtn.addEventListener(`click`, feedPet)


let buttonClicked = 0;
function feedPet() {
    buttonClicked *= 0;
    hungerLevel.innerHTML = `Hunger: ${buttonClicked}`
}

function napTime() {
    buttonClicked *= 0;
    sleepinessLevel.innerHTML = `Sleepiness: ${buttonClicked}`
}

function playWithPet() {
    buttonClicked *= 0;
    boredomLevel.innerHTML = `Boredom: ${buttonClicked}`
}