let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn")
let newgameBtn = document.querySelector(".newGame-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector(".msg");
console.log(msg);



// console.log(boxes);
let turnX = true;

boxes.forEach((item) => {
    item.addEventListener("click", () => {
        if (turnX) {
            item.innerHTML = "X";
            item.style.color = "red";
        } else {
            item.innerHTML = "O";
            item.style.color = "green";
        }
        turnX = !turnX;
        item.disabled = true; // this disabled the box after clicking it one time
        resetBtn.addEventListener("click", () => {
            item.innerHTML = "";
        })
        checkWinner()
    })
})


const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

const resetGame = () => {
    turnX = true;
    enableButtons();
    msgContainer.classList.add("hide")
}


const disableButtons = () => {
    boxes.forEach((item) => {
        item.disabled = true;
    })
}

const enableButtons = () => {
    boxes.forEach((item) => {
        item.disabled = false;
        item.innerHTML = "";
    })
}

const checkWinner = () => {
    for (let i = 0; i < winPatterns.length; i++) {
        let pos1Val = boxes[winPatterns[i][0]].innerHTML;
        let pos2Val = boxes[winPatterns[i][1]].innerHTML;
        let pos3Val = boxes[winPatterns[i][2]].innerHTML;
        // console.log(winPatterns[i][0], winPatterns[i][1], winPatterns[i][2]);
        // console.log(pos1Val, pos2Val, pos3Val);
        if (pos1Val !== "" && pos2Val !== "" && pos3Val !== "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                // console.log("winner", pos1Val);
                msg.innerHTML = `Winner "${pos1Val}"`
                msgContainer.classList.remove("hide")
                disableButtons();
            }

        }
    }

}


resetBtn.addEventListener("click" , resetGame);
newgameBtn.addEventListener("click" , resetGame);

