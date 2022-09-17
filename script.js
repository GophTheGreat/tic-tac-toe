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
  return;
})();

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
  //put a mark in the cell depending on which player's turn it is
  console.log(`Placing mark of ${main.currentPlayer.name}`);
  console.log(main.currentPlayer.mark);
  //console.log('placeMark');
  //console.log(this);
  this.innerHTML = main.currentPlayer.mark;
  main.takeTurn();
  console.log(`Mark placed. Current player is now ${main.currentPlayer.name}`);
}

function checkWinner(){

}
