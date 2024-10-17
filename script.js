const userInput = document.querySelector('.user-input')
const form = document.querySelector('form')
const result = document.querySelector('.result')
const allGuesses = document.querySelector('.all-guesses')
const submitBtn = document.querySelector('.submit-btn')
const startGameBtn = document.querySelector('.start-game')
const totalAttemps = document.querySelector('.total-attemps')

function a(){
    const allguessArray=[]

let randonNum = Math.round(Math.random()*100)
 
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    const userInputValue = parseInt(userInput.value)
    if(userInputValue < randonNum){
        result.innerText=' Too Low!'
    }else if(userInputValue > randonNum){
         result.innerText=' Too High!'
    }else{
       result.innerText= 'You got it! Congrats!!!'
       totalAttemps.innerText= `Your Guess in ${allguessArray.length} attemps `
       startGameBtn.disabled= false
       submitBtn.disabled = true
    }

    allguessArray.push(userInputValue)
    allGuesses.innerText= 'Your Guesses:' + allguessArray
    form.reset()
})

startGameBtn.addEventListener('click', ()=>{
        result.innerText= ' '
        allGuesses.innerText= ' '
       totalAttemps.innerText= ' '
       startGameBtn.disabled= true
       submitBtn.disabled = false
       randonNum = Math.round(Math.random()*100)
})
}
a()

