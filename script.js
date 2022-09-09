

function Gameboard(){
  let TicTacToeArray = [];
  for(let i = 1; i < 9; i++){
    console.log(`a${i}`);
    cell = document.getElementById(`a${i}`);
    cell.addEventListener("click", function(){this.innerHTML = "x"})
    TicTacToeArray.push(cell);
    console.log(TicTacToeArray);
  }
  return;
}

const playerFactory = () => {
  let turn = false;
  let winStatus = false;

  const takeTurn = () => {
    turn = !turn;
    return console.log(turn);
  }

  return {turn, winStatus, takeTurn};
  // return () => {
  //   console.log(turn);
  //   turn = !turn;
  // }
};

const player = playerFactory();
const Gameboard1 = Gameboard();

console.log(player);
player.takeTurn();
console.log(player);
player.takeTurn();
console.log(player);

player.takeTurn();
console.log(player);

