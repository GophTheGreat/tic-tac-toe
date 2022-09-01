

function Gameboard(){
  let TicTacToeArray = [];
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

console.log(player);
player.takeTurn();
console.log(player);
player.takeTurn();
console.log(player);

player.takeTurn();
console.log(player);

