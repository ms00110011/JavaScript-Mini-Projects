

//Game Values
let min = 1,
    max = 10,
    winningNum = getRandomNumber(min,max),
    guessesLeft = 3;
    
//UI Elements
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

//Assigning the value 
minNum.textContent = min
maxNum.textContent = max

//ADDING EVENT LISTENER TO THE PLAY AGAIN BUTTON USING MOUSEDOWN
game.addEventListener('mousedown',(e)=> {
    if(e.target.className === 'play-again') {
        window.location.reload();
    }
})

//Listen for Guess
guessBtn.addEventListener('click',()=> {
    let guess = parseInt(guessInput.value)
    

    if(isNaN(guess) || guess<min || guess>max) {
        setMessage(`Please Enter a Number between ${min} and ${max}`,"red")
    }


    if(guess === winningNum) {
        guessInput.disabled = true;
        guessInput.style.borderColor = "green"
        setMessage(`${winningNum} is correct. You Win!`,"green")

        guessBtn.value = "Play Again!"
        guessBtn.className += "play-again"

    }
    else {
        guessesLeft-=1
        if(guessesLeft===0) {

        guessInput.disabled = true;
        guessInput.style.borderColor = "red"
        setMessage(` Game over.You Lost :-(  Correct Number was ${winningNum}`,"red")
        guessBtn.value = "Play Again!"
        guessBtn.className += "play-again"
        }

        else {

            guessInput.style.borderColor = "orange"

            setMessage(`Wrong Guess. Try again, You have ${guessesLeft} guesses left.`,"orange")

            guessInput.value = ""
        }
    }

})



function setMessage(msg,color) {
    message.textContent = msg
    message.style.color = color
}




function getRandomNumber(min,max) {
    return(Math.floor(Math.random()*(max-min+1)+min)) 
}