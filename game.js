const numbersToPlace = [60, 49, 1, 68, 23, 22, 84, 65, 77]

let playedNumbers = []
let turn = 0
let nextNumber

initGame()

async function sleep(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms))
}

function updateUi(){
    document.getElementById("number-to-place").innerText = nextNumber
    document.getElementById("turns-played").innerText = turn
}

function checkAllOptions(randomNumber) {
	let availableOptions = 0

	let closestOver = 101
	let closestUnder = 0

	for (let i = 0; i < playedNumbers.length; i++) {
		if (playedNumbers[i]) {
			if (playedNumbers[i] < randomNumber) {
				closestUnder = playedNumbers[i]
			} else {
				closestOver = playedNumbers[i]
				break
			}
		}
	}

	const closestUnderIndex = playedNumbers.findIndex((a) => a === closestUnder)
	const closestOverIndex = playedNumbers.findIndex((a) => a === closestOver)

	for (let i = 0; i < playedNumbers.length; i++) {
		const button = document.getElementById(`button-${i}`)
		if (button.innerText === "") {
			//Nothing has been placed
			if (closestUnderIndex === -1 && closestOverIndex === -1) {
				availableOptions = availableOptions + 1
				button.disabled = false
				button.classList = "button button-to-rank button--available"
				continue
			}

			//All numbers placed are more than the next Number
			if (closestUnderIndex === -1) {
				if (i < closestOverIndex) {
					availableOptions = availableOptions + 1
					button.disabled = false
					button.classList = "button button-to-rank button--available"
				} else {
					button.disabled = true
					button.classList =
						"button button-to-rank button--unavailable"
				}
				continue
			}

			//All numbers placed are less than the next Number
			if (closestOverIndex === -1) {
				if (i > closestUnderIndex) {
					availableOptions = availableOptions + 1
					button.disabled = false
					button.classList = "button button-to-rank button--available"
				} else {
					button.disabled = true
					button.classList =
						"button button-to-rank button--unavailable"
				}
				continue
			}

			// Next number is between numbers placed
			if (i > closestUnderIndex && i < closestOverIndex) {
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


async function getNextRound() {
	turn = turn + 1
	nextNumber = numbersToPlace[turn]
    updateUi()
	const canStillPlay = checkAllOptions(nextNumber)
    
	if (!canStillPlay) {
		document.body.style.backgroundColor = "#9A3B3B"
        await sleep(5000)
        initGame()
	}
}

function initButtons() {
	const buttonList = document.getElementById("buttonList")
	buttonList.innerHTML = ""
	document.body.style.backgroundColor = "#FFEEF4"

	for (let counter = 0; counter < 9; counter = counter + 1) {
		let button = document.createElement("button")
		button.className = "button button-to-rank button--available"
		button.id = `button-${counter}`
		button.dataset.index = counter
		button.innerText = ""
		button.addEventListener("click", async () => {
			if (button.innerText === "") {
				button.innerText = nextNumber
				button.disabled = true
				button.className = "button button-to-rank button--filled"
				playedNumbers.splice(button.dataset.index, 1, nextNumber)
				await getNextRound()
			}
		})
		buttonList.appendChild(button)
	}
}

function initTurns() {
	turn = 0
    nextNumber = numbersToPlace[turn]
    updateUi()

	for (let counter = 0; counter < 9; counter = counter + 1) {
		playedNumbers[counter] = undefined
	}
}

function initGame() {
	initButtons()
	initTurns()
}

