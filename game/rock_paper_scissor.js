function playRound(playerSelection, computerSelection) {

    if (playerSelection.toLowerCase() === computerSelection.toLowerCase()){
        return 69
    }
	if (playerSelection.toLowerCase() === "rock"){
        if (computerSelection.toLowerCase() == "paper"){
            return 0
        }
        else{
            return 1
        }
    }
    else if (playerSelection.toLowerCase() === "paper"){
        if (computerSelection.toLowerCase() == "scissor"){
            return 0
        }
        else{
            return 1
        }
    }
    else{
        if (computerSelection.toLowerCase() == "rock"){

            return 0
        }
        else{
            return 1
        }

    }
}


function game(){
    let computer_wins = 0
    let player_wins = 0
    let i = 0
    while(i < 5){

        let playerSelection = prompt("Type Rock,Paper Or Scissor")
        random_index = Math.round(Math.random() * (5))
        strings = ["rock","ROCK","PAPER","SCISSOR","scissor","paper"]
        computerSelection = strings[random_index]
        if (playRound(playerSelection, computerSelection)==1){
            player_wins+=1
            console.log(`You Win! ${playerSelection.toLowerCase()} beats ${computerSelection.toLowerCase()}`)
        }
        else if(playRound(playerSelection, computerSelection)==0){
            computer_wins+=1
            console.log(`You loose! ${computerSelection.toLowerCase()} beats ${playerSelection.toLowerCase()}`)
        }
        else{
            console.log("Draw!, play again")
        }

        i++
    }
    if (player_wins > computer_wins){
        console.log("Congratulations! You Won the game")
    }
    else{
        console.log("You Lost :(")
    }
        console.log(`Your score:- ${player_wins}`)
        console.log(`Computer Score :- ${computer_wins}`)
}
game()


