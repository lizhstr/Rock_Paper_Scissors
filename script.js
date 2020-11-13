const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
    return userInput;
  } else {
    console.log('Error');
  }
}

const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  }
}

const determineWinner = (userChoice, computerChoice) => {

  if(userChoice === computerChoice) {
    return 'Tie!';
  }

  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'Computer wins!';
    } else {
      return 'User wins!';
    }  
  }
  if (userChoice === 'paper') {
    if (compuerChoice === 'scissors') {
      return 'Computer wins!';
    } else {
      return 'User wins!';
    }
  }
  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'Computer wins!';
    } else{ 
      return 'User wins!';
    } 
  }
}

const playGame = () => {
  var userChoice = getUserChoice('scissors');
  var computerChoice = getComputerChoice();
  console.log(userChoice);
  console.log(computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
}

playGame();
