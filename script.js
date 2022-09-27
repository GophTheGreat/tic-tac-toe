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
    TicTacToeArray.push(cell);
    console.log(i);
    if(i == '2'){
      console.log('lessgo');
      cell.classList.add('startBox');
      let top = cell.appendChild(document.createElement('div'));
      let bottom = cell.appendChild(document.createElement('div'));
      top.classList.add('startText');
      bottom.classList.add('startText');
      top.innerHTML = "^"
      bottom.innerHTML = "Click to start!"
    }
    console.log(TicTacToeArray);
  }

  //generate button
  startButton = document.getElementById(`startButton`);
  startButton.addEventListener("click", reset);

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

  function reset(){
    main.init();
    console.log(`Resetting`)
    for(let i = 1; i <= 9; i++){
      console.log(`a${i}`);
      cell = document.getElementById(`a${i}`);
      if(i == '2'){
        console.log('lessgo');
        cell.classList.remove('startBox');
      }
      cell.innerHTML = '';
      cell.classList.remove('player1');
      cell.classList.remove('player2');
    }
    let victoryDiv = document.getElementById('victoryContainer');
    while (victoryDiv.firstChild){
      victoryDiv.removeChild(victoryDiv.lastChild);
    }
  }

  return{
    TicTacToeArray,
    possibleWins,
    reset
  };
})();

const main = (() => {

  let player1;
  let player2;
  let currentPlayer;

  let victoryDiv = document.getElementById('victoryContainer');

  let bindArray = [];
  
  function init(){
    //declare players
    player1 = playerFactory('player1', document.getElementById(`p1`).value);
    player2 = playerFactory('player2', document.getElementById(`p2`).value);

    //initialize beginning state
    currentPlayer = player1;

    //add listeners to all cells
    gameboard.TicTacToeArray.forEach((element, i) => {
      bindArray.push(placeMark.bind(element));
      element.addEventListener("click", bindArray[i]);
      console.log(element);
    })
  }




  console.log(currentPlayer); 
  if(checkWinner()){
    console.log("Victory!");
  }

  function takeTurn(){
    checkWinner();
    console.log(`Taking turn. current Player: ${currentPlayer.name}`);
    if (currentPlayer === player1){
      currentPlayer = player2;
    }
    else{
      currentPlayer = player1;
    }
    console.log(`New current player: ${currentPlayer.name}`);
    console.log(`expected next mark: ${currentPlayer.mark}`);
    return;
  }

  function placeMark(){
    console.log(`placing mark`)
    console.log(this);
    //no marks in occupied cells
    if(this.innerHTML != ''){
      console.log(`can't place in occupied cell!`);
      return;
    }
    //put a mark in the cell depending on which player's turn it is
    console.log(`Placing mark of ${currentPlayer.name}`);
    console.log(currentPlayer.mark);
    this.innerHTML = currentPlayer.mark;
    if(currentPlayer === player1){
      this.classList.add('player1');
    }
    else{
      this.classList.add('player2');
    }

    takeTurn();
    console.log(`Mark placed. Current player is now ${currentPlayer.name}`);
    return;
  }

  function checkWinner(){
    //for each of the win conditions
    //check if all the cells that make up the win condition share a mark
    for(let i = 0; i < gameboard.possibleWins.length; i++){
      console.log(`checking combo ${i} cells ${gameboard.TicTacToeArray[gameboard.possibleWins[i][0]].innerHTML}, ${gameboard.TicTacToeArray[gameboard.possibleWins[i][1]].innerHTML}, and ${gameboard.TicTacToeArray[gameboard.possibleWins[i][2]].innerHTML}`);
      if(gameboard.TicTacToeArray[gameboard.possibleWins[i][0]].innerHTML != `` &&
        gameboard.TicTacToeArray[gameboard.possibleWins[i][0]].innerHTML === gameboard.TicTacToeArray[gameboard.possibleWins[i][1]].innerHTML &&
        gameboard.TicTacToeArray[gameboard.possibleWins[i][1]].innerHTML === gameboard.TicTacToeArray[gameboard.possibleWins[i][2]].innerHTML){
        console.log(`VICTORY OMG`);
        const victoryAnnouncement = document.createElement("div");
        victoryAnnouncement.classList += 'victory';
        victoryDiv.appendChild(victoryAnnouncement);
        console.log(victoryDiv);
        console.log(typeof(victoryDiv));
        console.log(gameboard.TicTacToeArray[gameboard.possibleWins[i][0]].innerHTML)
        if(gameboard.TicTacToeArray[gameboard.possibleWins[i][0]].innerHTML === player1.mark){
          victoryAnnouncement.innerHTML = `Player ${player1.mark} wins!`;
          victoryAnnouncement.classList.add('player1');
        }
        else{
          victoryAnnouncement.innerHTML = `Player ${player2.mark} wins!`;
          victoryAnnouncement.classList.add('player2');
        }
        lockout();
        return;
      }
    }
    //check for tie
    let tie = true;
    gameboard.TicTacToeArray.forEach(function(element) {
      if (element.innerHTML == '')
        tie = false;
    });
    if(tie){
      const victoryAnnouncement = document.createElement("div");
      victoryAnnouncement.classList += 'victory';
      victoryAnnouncement.innerHTML = `It's a tie!`;
      victoryAnnouncement.style.fontSize = '50px';
      victoryDiv.appendChild(victoryAnnouncement);
      lockout();
    }
    return;
  }

  function lockout(){
    console.log('Locking out!')
    //remove listeners to lock interaction for when a player wins
    gameboard.TicTacToeArray.forEach((element, i) => {
      element.removeEventListener("click", bindArray[i]);
      console.log(`${element} locked!`)
    })
  }

  return{
    init,
    currentPlayer,
    takeTurn,
    placeMark,
    checkWinner,
  }
})();