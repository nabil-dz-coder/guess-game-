let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:



// Write your code below:
function generateTarget(){
  return  Math.floor(Math.random()*10)
}
function compareGuesses(humanGuess,computerGuess,target){
  const humanDiff=Math.abs(humanGuess-target)
  const computerDiff=Math.abs(computerGuess=target)

  if (humanDiff === computerDiff){
    return true
  }
  if (humanDiff< computerDiff){
    return true
  }
  else {
    return false
  }
}
function updateScore(winner){
  
    if (winner==='human'){
      humanScore=humanScore++
    }
    else if(winner==='computer'){
      computerScore=computerScore++
    }
}
function advanceRound(){
  currentRoundNumber=currentRoundNumber++
}
