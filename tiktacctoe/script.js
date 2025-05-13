let boxes= document.querySelectorAll(".btn");
let player1=true;
let moves=0
let winConditions=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

let player1score=0
let player2score=0

boxes.forEach(box => {
    box.addEventListener("click", ()=>{
        if (player1===true){
        box.innerHTML = '<i>X</i>'
        player1=false;
        box.disabled=true;
        moves=moves+1;
        }
        else{
            box.innerHTML= '<i>O</i>'
            player1=true;
            box.disabled=true;
            moves=moves+1;
        }
    
        checkWinCondition();
});
    
});


let startNewGame = () => {
  boxes.forEach(box => {
    box.innerHTML=" "
    box.disabled=false
  })
  player1score=0;
  player2score=0;
  moves=0;
  closeAnnouncement();
  updateplayerscore();
}

let ContinueGame = () => {
    boxes.forEach(box => {
        box.innerHTML=" "
        box.disabled=false
      })
      moves=0;
      closeAnnouncement();
}

let ResetGame = () =>{
    boxes.forEach(box => {
        box.innerHTML=" "
        box.disabled=false
      })
}


let checkWinCondition = () =>{
    winConditions.forEach(condition =>{
        if(boxes[condition[0]].innerText !== "" && boxes[condition[1]].innerText !== "" && boxes[condition[2]].innerText !== ""){
            if (boxes[condition[0]].innerText=== boxes[condition[1]].innerText && boxes[condition[1]].innerText===boxes[condition[2]].innerText){
                console.log("winner is ",boxes[condition[0]].innerText);
                announceWinner(boxes[condition[0]].innerText);
            }
        }
        if (moves==9){
            announceWinner('Draw')
        }
    })
}


let announceWinner = (winner) =>{
    const modal = document.getElementById('winner');
    const winnerMessage = document.getElementById('winnerMessage');
    if (winner === 'Draw'){
        winnerMessage.textContent=`It's a Draw`;
    }
    else{
    winnerMessage.textContent = `The winner is ${winner}`;
    if(winner === 'X'){
        player1score=player1score+1;
    }
    else{
        player2score+=1;
    }
    }
    modal.style.display = 'block'; 

    updateplayerscore();
}


let updateplayerscore= () =>{

    document.getElementById("xscore").innerText=`Player X score : ${player1score}`;
    document.getElementById("oscore").innerText=`Player O score : ${player2score}`;
}


let closeAnnouncement= () =>{
    const modal=document.getElementById("winner");
    modal.style.display='none';
}

