console.log("JS is running")

const lifeOfPet = document.getElementsByClassName("life-of-pet-text")


const petBio = document.getElementsByClassName("pet-bio")


const ageCount = document.querySelector(".age-count")


const petStatus = document.querySelector(".pet-status")


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


let hungerCount = 1;
let sleepinessCount = 1;
let boredomCount = 1;
let ageCounter = 1;

function feedPet() {
    hungerCount = 1;
    hungerLevel.innerHTML = `Hunger: ${hungerCount}`
}

function napTime() {
    sleepinessCount = 1;
    sleepinessLevel.innerHTML = `Sleepiness: ${sleepinessCount}`
}

function playWithPet() {
    // buttonClicked *= 0;
    boredomCount =1;
    boredomLevel.innerHTML = `Boredom: ${boredomCount}`
}


const hungerInterval = setInterval(countHungerUp, 2000)
const boredomInterval = setInterval(countBoredomUp, 1500)
const sleepyInterval = setInterval(countSleepinessUp, 2500)
const ageInterval = setInterval(countAgeUp, 5000)

function countAgeUp () {
    if (ageCounter>=1){
        ageCount.innerHTML = `Age: ${ageCounter++}`
    } 
}

function countHungerUp () {
    if (hungerCount>=1 && hungerCount < 11){
        hungerLevel.innerHTML = `Hunger: ${hungerCount++}`
    } else if (hungerCount > 9){
        petStatus.innerText = `Lucky's Status: DEAD!`
        boredomLevel.innerHTML = `Boredom: ${boredomCount*=0}`
        sleepinessLevel.innerHTML = `Sleepiness: ${sleepinessCount*=0}`
        hungerLevel.innerHTML = `Hunger: ${hungerCount*=0}`
        ageCount.innerHTML = `Age: ${ageCounter*=0}`
    }
}

function countBoredomUp () {
    if (boredomCount>=1 && boredomCount < 11){
        boredomLevel.innerHTML = `Boredom: ${boredomCount++}`
    } else if (boredomCount > 9){
        petStatus.innerText = `Lucky's Status: DEAD!`
        ageCounter === 0
        boredomLevel.innerHTML = `Boredom: ${boredomCount*=0}`
        sleepinessLevel.innerHTML = `Sleepiness: ${sleepinessCount*=0}`
        hungerLevel.innerHTML = `Hunger: ${hungerCount*=0}`
        ageCount.innerHTML = `Age: ${ageCounter*=0}`
    }
}

function countSleepinessUp () {
    if (sleepinessCount >= 1 && sleepinessCount < 11){
        sleepinessLevel.innerHTML = `Sleepiness: ${sleepinessCount++}`
    } else if (sleepinessCount > 9){
        petStatus.innerText = `Lucky's Status: DEAD!`
        boredomLevel.innerHTML = `Boredom: ${boredomCount*=0}`
        sleepinessLevel.innerHTML = `Sleepiness: ${sleepinessCount*=0}`
        hungerLevel.innerHTML = `Hunger: ${hungerCount*=0}`
        ageCount.innerHTML = `Age: ${ageCounter*=0}`
    }
}

// function petStatusUpdate () {
//     if (sleepinessCount >=5 && sleepinessCount<9) {
//         petStatus.innerText = `Lucky's Status: Tired`
//     }
// }



// function deathFunction () {
//     if (hungerCount === 10 || boredomCount === 10 || sleepinessCount === 10){
//         console.log("pet has died")
//     } else {
//         console.log("pet is alive")
//     }
// }

// const boredomInterval = setInterval(countBoredomUp, 3000)
// let bordomeCount =0;

// function countBoredomUp () {
//     if (bordomeCount>=0){
//         boredomLevel.innerHTML = `Boredom: ${bordomeCount++}`
//     } 
// }

//     // if (buttonClicked >= 0){
//     //     buttonClicked = buttonClicked++
//     // } else {
//     //     buttonClicked = -1
//     // }
// }