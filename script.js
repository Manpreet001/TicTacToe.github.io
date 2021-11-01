let audioturn = new Audio("media/ting.mp3");
let gameOver = new Audio("media/gameover.mp3");
let turn = 'X';
let isgameOver = 0;
// to change turn

const changeTurn = ()=> turn==='X'?'0':'X';

// to check win

const checkWin = ()=>{
    let boxText = document.getElementsByClassName("boxtext");
    let wins = [
        [0,1,2,-1,4.7, 0,33],  // last three store x,y, rotate, width
        [3,4,5,-1,14.8,0, 33],
        [6,7,8,-1,24.9,0, 33],
        [0,3,6, -12.6 , 15, 90, 35],
        [1,4,7, -2.6 , 15, 90,  35],
        [2,5,8, 7.6, 15, 90, 35],
        [0,4,8, -7.1 , 14.6,43.4, 44],
        [2,4,6, -5.9, 13.8,136, 44]
    ]

    wins.forEach(e=>{
        if(boxText[e[0]].textContent===boxText[e[1]].textContent && boxText[e[2]].textContent===boxText[e[0]].textContent && boxText[e[0]].textContent!==''){
            document.querySelector('.info').innerText = `${boxText[e[0]].innerText} won!!`;
            isgameOver = 1;
            let img = document.querySelector("img");
            img.style.width = "130px";

            let line = document.querySelector(".line");
            line.style.width = `${e[6]}vw`;
            line.style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;

            document.querySelector(".container").style.pointerEvents = "none";
            
        }
    })
}


// game logic

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element=>{
    let boxText = element.querySelector(".boxtext");
    element.addEventListener("click", ()=>{
        if(boxText.innerText===''){
            boxText.innerText  = turn;
            audioturn.play();
            turn = changeTurn();
            checkWin();
            if(!isgameOver)
            {document.getElementsByClassName("info")[0].innerText = `Turn for ${turn}`;}
        }
        
    })
});


// reset logic

let reset = document.getElementById("reset");
reset.addEventListener("click", ()=>{
    let boxText = document.querySelectorAll(".boxtext");
    Array.from(boxText).forEach(e=>{
        e.innerText = '';
    })
    turn = 'X';
    isgameOver = 0;
    document.getElementsByClassName("info")[0].innerText = `Turn for ${turn}`;
    let img = document.querySelector("img");
            img.style.width = "0";
            let line = document.querySelector(".line");
            line.style.width = "0";
    document.querySelector(".container").style.pointerEvents = "auto";
})