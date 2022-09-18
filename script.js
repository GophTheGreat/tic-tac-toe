const playerFactory = (name, mark) => {
  return {name, mark};
};


const gameboard = (() => {
  //generate board
  let TicTacToeArray = [];
  console.log(`dasd`);
  for(let i = 1; i <= 9; i++){
    console.log(`a${i}`);
    cell = document.getElementById(`a${i}`);
    cell.addEventListener("click", this.placeMark.bind(cell));
    TicTacToeArray.push(cell);
    console.log(TicTacToeArray);
  }

  const possibleWins = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
  ];

  function checkVictory() {

  }
  return{
    TicTacToeArray,
    possibleWins
  };
})();

console.log(gameboard.possibleWins);

const main = (() => {
  //declare players
  const player1 = playerFactory('player1', 'X');
  const player2 = playerFactory('player2', 'O');

  let currentPlayer = player1;

  console.log(currentPlayer); 
  if(checkWinner()){
    console.log("Victory!");
  }

  function takeTurn(){
    console.log(`Taking turn. current Player: ${currentPlayer.name}`);
    if (this.currentPlayer === player1){
      this.currentPlayer = player2;
    }
    else{
      this.currentPlayer = player1;
    }
    console.log(`New current player: ${currentPlayer.name}`);
    console.log(`expected next mark: ${currentPlayer.mark}`);
    return;
  }

  return{
    currentPlayer,
    takeTurn
  };
})();


function placeMark (){
  if(this.innerHTML != ''){
    console.log(`can't place in occupied cell!`);
    return;
  }
  //put a mark in the cell depending on which player's turn it is
  console.log(`Placing mark of ${main.currentPlayer.name}`);
  console.log(main.currentPlayer.mark);
  //console.log('placeMark');
  //console.log(this);
  this.innerHTML = main.currentPlayer.mark;
  main.takeTurn();
  console.log(`Mark placed. Current player is now ${main.currentPlayer.name}`);
  checkWinner();
}

function checkWinner(){


  //for each of the win conditions
  //check if all the possible cells match

  for(let i = 0; i < gameboard.possibleWins.length; i++){
    console.log(`checking combo ${i} cells ${gameboard.TicTacToeArray[gameboard.possibleWins[i][0]].innerHTML}, ${gameboard.TicTacToeArray[gameboard.possibleWins[i][1]].innerHTML}, and ${gameboard.TicTacToeArray[gameboard.possibleWins[i][2]].innerHTML}`);
    if(gameboard.TicTacToeArray[gameboard.possibleWins[i][0]].innerHTML != `` &&
        gameboard.TicTacToeArray[gameboard.possibleWins[i][0]].innerHTML === gameboard.TicTacToeArray[gameboard.possibleWins[i][1]].innerHTML &&
        gameboard.TicTacToeArray[gameboard.possibleWins[i][1]].innerHTML === gameboard.TicTacToeArray[gameboard.possibleWins[i][2]].innerHTML ){
        console.log(`VICTORY OMG`);
        alert(`VICTORY FOR ${gameboard.TicTacToeArray[gameboard.possibleWins[i][0]].innerHTML} player!`)
    }
  }
  return;
}
