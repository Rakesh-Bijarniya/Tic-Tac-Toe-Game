const boxes = document.querySelectorAll(".box");
const gameInfo = document.querySelector(".status");
const newGameBtn = document.querySelector(".btn");

let currentPlayer;
let gameRecords;

const winningPositions = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];  

initConditions();
function initConditions() {
    currentPlayer = "X";
    gameRecords = ["","","","","","","","",""];

    boxes.forEach( (box,i) => {
        box.innerHTML = "";
        box.style.pointerEvents = "all";
        box.classList = `box box${i+1}`;
    });

    newGameBtn.classList.remove("active");
    gameInfo.innerHTML = `Current Player - ${currentPlayer}`;


}

boxes.forEach( (box,i) => {
    box.addEventListener('click',() => {
        handleClick(i);
    })
});

function handleClick(i) {
    boxes[i].innerHTML = currentPlayer;
    gameRecords[i] = `${currentPlayer}`;
    boxes[i].style.pointerEvents = "none";

    swapTurn();
    checkGameOver();
}
function swapTurn(){
    if (currentPlayer === "X") {
        currentPlayer = "0";
        gameInfo.innerHTML = `Current Player - ${currentPlayer}`;
    }
    else
    {
        currentPlayer = "X";
        gameInfo.innerHTML = `Current Player - ${currentPlayer}`;
    }
}
function checkGameOver(){
    let ans = ""
    winningPositions.forEach(position => {
        if (gameRecords[position[0]] == "X" && gameRecords[position[1]] == "X" && gameRecords[position[2]] == "X") {
            ans = "X";

            boxes.forEach(box => {
                box.style.pointerEvents = "none"
            });

            boxes[position[0]].classList.add("win");
            boxes[position[1]].classList.add("win");
            boxes[position[2]].classList.add("win");
        }
        else if (gameRecords[position[0]] == "0" && gameRecords[position[1]] == "0" && gameRecords[position[2]] == "0") {
            ans = "0";

            boxes.forEach(box => {
                box.style.pointerEvents = "none"
            });

            boxes[position[0]].classList.add("win");
            boxes[position[1]].classList.add("win");
            boxes[position[2]].classList.add("win");
        }

    });
    if (ans != "") {
        gameInfo.innerHTML = `Winner is "${ans}" `;
        newGameBtn.classList.add("active");
    }
    else{
        let counting = 0;
        gameRecords.forEach((box) => {
            if (box != "") {
                counting++;
            }
        });
        if (counting == 9) {
            gameInfo.innerHTML = "Game Tie!";
            newGameBtn.classList.add("active");
        }
    }
 
}
newGameBtn.addEventListener('click',initConditions);


const bgButton = document.querySelector(".bgBtn");
const wapperBox = document.querySelector(".wrapper")
bgButton.addEventListener('click',() => {
    if(!wapperBox.classList.contains("anotherBg"))
    {
        wapperBox.classList.add("anotherBg");  
    }
    else
    {
        wapperBox.classList.remove("anotherBg");
    }
});


const resetBtn = document.querySelector('.resetAll')
resetBtn.addEventListener('click',() => {
    initConditions();
});
