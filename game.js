const alreadyDrawnNumbers = [ 88, 19, 72, 75, 29, 66, 8, 55, 75 ]

const playedNumbers = []
initGame()

let nextNumber = alreadyDrawnNumbers[playedNumbers.filter(nb=>!!nb).length]
const nextRandomNumberPlace = document.getElementById('nextRandomNumber')
nextRandomNumberPlace.innerText = nextNumber

const roundsPlayed = document.getElementById('numbersPlace')



function checkAllOptions(randomNumber){
    let availableOptions = 0

    let closestOver = 101
    let closestUnder = 0

    for (let i = 0; i < playedNumbers.length; i++){
        if(playedNumbers[i]){
            if(playedNumbers[i] < randomNumber){
            closestUnder = playedNumbers[i]
            } else {
            closestOver = playedNumbers[i]
            break
            }
        } 
    }

    const closestUnderIndex = playedNumbers.findIndex(a=>a===closestUnder)
    const closestOverIndex = playedNumbers.findIndex(a=>a===closestOver)
    
    for (let i = 0; i < playedNumbers.length; i++){
        const button = document.getElementById(`button-${i}`)
        if(button.innerText === ""){
            //Nothing has been placed
            if(closestUnderIndex === -1 && closestOverIndex === -1 ){
                availableOptions = availableOptions + 1
                button.disabled = false
                button.classList = "button button-to-rank button--available"
                continue
            }

            //All numbers placed are more than the next Number
            if(closestUnderIndex === -1){
                if(i < closestOverIndex){
                    availableOptions = availableOptions + 1
                    button.disabled = false
                    button.classList = "button button-to-rank button--available"
                } else {
                    button.disabled = true
                    button.classList = "button button-to-rank button--unavailable"
                }
                continue
            }

            //All numbers placed are less than the next Number
            if(closestOverIndex === -1){
                if(i > closestUnderIndex){
                    availableOptions = availableOptions + 1
                    button.disabled = false
                    button.classList = "button button-to-rank button--available"
                } else {
                    button.disabled = true
                    button.classList = "button button-to-rank button--unavailable"
                }
                continue
            }

            // Next number is between numbers placed
            if(i > closestUnderIndex && i < closestOverIndex){
                availableOptions = availableOptions + 1
                button.disabled = false
                button.classList = "button button-to-rank button--available"
            } else {
                button.disabled = true
                button.classList = "button button-to-rank button--unavailable"
            }
        }
    }

    return availableOptions > 0
}

function getRandomNumber(){
    const canStillPlay = checkAllOptions(alreadyDrawnNumbers[playedNumbers.filter(nb=>!!nb).length])
    if(canStillPlay){
        return alreadyDrawnNumbers[playedNumbers.filter(nb=>!!nb).length]
    } else {
        document.body.style.backgroundColor = "#9A3B3B"
        return alreadyDrawnNumbers[playedNumbers.filter(nb=>!!nb).length]
    }

}

function initButtons(){
    const buttonList = document.getElementById('buttonList')

    for (let counter = 0; counter < 9; counter = counter + 1){
        let button = document.createElement("button")
        button.className = "button button-to-rank button--available"
        button.id = `button-${counter}`
        button.dataset.index = counter
        button.innerText = ""
        buttonList.appendChild(button)
    }
}

function initTurns(){
    for (let counter = 0; counter < 9; counter = counter + 1){
        playedNumbers.push(undefined)
    }
}

function initGame(){
    initButtons()
    initTurns()
}


function getNextRound() {
    nextNumber = getRandomNumber()

    nextRandomNumberPlace.innerText = nextNumber
    roundsPlayed.innerText = alreadyDrawnNumbers.filter(nb=>!!nb).length - 1

    if(alreadyDrawnNumbers.filter(nb=>!!nb).length > 8){
        console.log('End Game')
    }
}

//Everytime it is clicked we add teh current number
// Do it with a slice

[...document
    .getElementsByClassName('button-to-rank')]
    .forEach(button => {
        button.addEventListener('click', () => {

            if(button.innerText === ""){
                button.innerText = nextNumber
                button.disabled = true
                button.className = "button button-to-rank button--filled"
                playedNumbers.splice(button.dataset.index, 1 , nextNumber)
                getNextRound()
            } 
        })
    })
