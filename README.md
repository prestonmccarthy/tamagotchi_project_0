Preston McCarthy Tamagotchi Game:
1. Wireframe is attached.
2. User Guide:
    - User will open page and the counters begin counting up (Hunger, Boredom, Sleepiness, Age)
    - User will have the option to name their pet by typing in the name and clicking "Name Pet"
    - Counters will reduce to "1" when clicked. This will allow the user to keep their pet alive.
    - if any counter (aside from Age) reaches 10, all counter values will reset to "0" and Pet Status will update to "Dead"
3. App Functionality:
    - I wanted to spend a bit more time working on the styling, but getting the JS to work for this was my priority, so I added some basic styling to give the page a little flair, but overall, I would love to have a bit more time to work on making this more of a sleek design.
    - All JS works for the purposes of this project.
4. Challenges:
    - I found that selecting some objects with the getElementsBy method didn't work like the querySelector method, so I had to play around with swapping those two out from time to time.
    - I'm still having difficulty getting the game to not continue playing after the pet has died. If the user clicks any of the buttons under the counters after the pet has died, the clicked counter will reset and start counting again, but the pet will still be dead.
    - I also had difficulty nesting my functions so I wasn't repeating myself a lot. Observe pasted functions below.
5. Words of Wisdom:
    - Have fun with this project, as this can be difficult to do one your own, but as long as you make it fun, it'll be more of an enjoyable experience.

6. - [ ] User Story
    - [ ] 1. Page will open and user will see a picture of pet
        - [ ] Image will shake when hovering mouse over 
    - [ ] 2. As time goes on, a counter for the following will count up
            - [ ] Boredom increases by 1
            - [ ] Hunger increases by 1
            - [ ] Sleepiness will increase by 1
            - [ ] Age will increase by 1
    - [ ] 3. User will have the option to click one of four buttons
        - [ ] “Feed Me” - to reset hunger to 1
        - [ ] “Play With Me”- to reset boredom to 1
        - [ ] “Time To Sleep” - to reset sleepiness to 1
        - [ ] “Name Pet” - User can add name and click “Name Pet” to display pet name.
    - [ ] 4. If hunger/sleepiness/boredom reach level 10, tamagotchi will die and game will end.

    7. Function Code Snippets:
    <!-- console.log("JS is running")

const lifeOfPet = document.getElementsByClassName("life-of-pet-text")
const petBio = document.getElementsByClassName("pet-bio")
const ageCount = document.querySelector(".age-count")
let petName = document.querySelector(".pet-name-text")
const submitButton = document.querySelector(".submit-button")
const petStatus = document.querySelector(".pet-status")
const boredomLevel = document.querySelector(".boredom-level")
const hungerLevel = document.querySelector(".hunger-level")
const sleepinessLevel = document.querySelector(".sleepiness-level")
const playBtn = document.getElementById("play-button")
const hungerButton = document.querySelector(".feed-button")
const sleepBtn = document.getElementById("nap-button")

let hungerCount = 1;
let sleepinessCount = 1;
let boredomCount = 1;
let ageCounter = 1;


function namePet() {
    let nameInput = document.querySelector("#name-input");
    petName.innerHTML = `My Name is: ${nameInput.value}`
}

function feedPet() {
    hungerCount = 1;
    hungerLevel.innerHTML = `Hunger: ${hungerCount}`
}

function napTime() {
    sleepinessCount = 1;
    sleepinessLevel.innerHTML = `Sleepiness: ${sleepinessCount}`
}

function playWithPet() {
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
        petStatus.innerText = `Pet Status: DEAD!`
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
        petStatus.innerText = `Pet Status: DEAD!`
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
        petStatus.innerText = `Pet Status: DEAD!`
        boredomLevel.innerHTML = `Boredom: ${boredomCount*=0}`
        sleepinessLevel.innerHTML = `Sleepiness: ${sleepinessCount*=0}`
        hungerLevel.innerHTML = `Hunger: ${hungerCount*=0}`
        ageCount.innerHTML = `Age: ${ageCounter*=0}`
    }
} -->