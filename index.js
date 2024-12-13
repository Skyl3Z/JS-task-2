const secretNumber = 7 ;

let userGuess = -1 ;

if (userGuess === secretNumber){
    console.log('Correct! You guessed the number!')
}

else if (userGuess < secretNumber && userGuess > 0){
    console.log('Too low! Try again')
}

else if (userGuess < 0){
    console.log('Please guess a number between 1 and 10')
}

else{
    console.log('Too high! Try again')
}