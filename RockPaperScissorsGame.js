const getUserChoice = userInput => {
userInput = userInput.toLowerCase();  
 if (userInput === 'rock'|| userInput === 'paper'|| userInput === 'scissors') {
return userInput;                                    }  
else {
  console.log('Error'); 
}
}
const getComputerChoice = () => {
let number = Math.floor(Math.random() * 3)
  switch (number){
    case 0:
      return 'rock';
      break;
    case 1:   
      return 'paper'; 
      break;
    case 2:
      return 'scissors'; 
      break;
   }  
}
const determineWinner = (userChoice, computerChoice) => {
if (userChoice === computerChoice) {
 return 'Game was a tie';
  }  
  else if (userChoice === 'rock' && computerChoice === 'paper' ) {
  return 'Computer won'; }
else if (userChoice === 'paper' && computerChoice === 'scissors') {
  return 'Computer won'; }
else if (userChoice === 'paper' && computerChoice === 'rock') {
  return 'User won'; }
else {
  return 'User won'; } }

const playGame = () => {
  let userChoice = getUserChoice('paper');
  let computerChoice = getComputerChoice();
  console.log(userChoice);
  console.log(computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
}
playGame();