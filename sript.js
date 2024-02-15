const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'scissors' || userInput === 'paper' || userInput === 'bomb') {
    return userInput;
  } else {
    console.log('Error, please type: rock, paper or scissors.');
    }
  }
  
  
  const getComputerChoice = () => {
   const randomNumber = Math.floor (Math.random()*3);
   switch (randomNumber){
    case 0:
    return 'rock';
    case 1:
    return 'paper';
    case 2:
    return 'scissors';
   }
  };
  
  
  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
      return 'The game is a tie!';
    }
    if (userChoice ===  'rock') {
      if (computerChoice ===  'paper') {
        return "Sorry, computer won!";
      } else {
        return "Congratulations, you won!";
      }
    }
  
  
    if (userChoice ===  'paper') {
      if (computerChoice ===  'scissors') {
        return "Sorry, computer won!";
      } else {
        return "Congratulations, you won!";
      }
    }
  
  
    if (userChoice ===  'scissors') {
      if (computerChoice ===  'rock') {
        return "Sorry, computer won!";
      } else {
        return "Congratulations, you won!";
      }
    }
  
  }
  
  
  const playGame = () => {
    const userChoice = getUserChoice('paper');
    const computerChoice = getComputerChoice();
    console.log('You threw ' + userChoice);
    console.log('The computer threw ' + computerChoice);
  
  
    console.log(determineWinner(userChoice, computerChoice));
  };

  
  playGame()
  
function Rock() {
    document.getElementById('diffImage').src = 'images/herbert.webp'
    document.getElementById('change-paragraph').innerText = "Herbert Hoover, the 31st President of the United States, died on October 20, 1964, at the age of 90 in New York City. The funeral for Hoover was held on October 23, 1964, and he was buried in West Branch, Iowa, next to his Presidential Library and Museum."
    document.getElementById('changeDate').innerText = 'October 20th, 1964'
}
function Peper() {
    document.getElementById('diffImage').src = 'images/Him.webp'
    document.getElementById('change-paragraph').innerText = 'Kenneth Choi born October 20, 1971 is an Asian American actor.'
    document.getElementById('changeDate').innerText = 'October 20th, 1971'
}
function Scissors() {
    document.getElementById('diffImage').src = 'images/dogg.jpg'
    document.getElementById('change-paragraph').innerText = 'Snoop Dogg, born on October 20, 1971, is an American rapper, singer, songwriter, producer, media personality, and actor. He is known for his relaxed style of rapping and love for cannabis culture.'
    document.getElementById('changeDate').innerText = 'October 20th, 1971'
}