const play = document.getElementById("play");
const start = document.getElementById("start");
const board = document.getElementById("board");
const place = document.getElementsByClassName("place");
const piece = document.getElementsByClassName("piece");
const choose1 = document.getElementById("choose1");
const choose2 = document.getElementById("choose2");
const setting = document.getElementById("setting");
const pieces = document.getElementById("pieces");
const themeselect = document.getElementById("themeselect");
const theme = document.getElementById("theme");
const hidden = document.getElementById("hidden");
const gameover = document.getElementById("gameover");
const player1 = document.getElementById("player1");
const player2 = document.getElementById("player2");
const whowin = document.getElementById("whowin");
const player1_p = document.getElementById("player1_p");
const player1_p2 = document.getElementById("player1_p2");
const player2_p= document.getElementById("player2_p");
const player2_p2= document.getElementById("player2_p2");


let choosing = false, turn = 1, round = 0, playing = false, choose, piece_choose, place_choose;
let inside = [], clone, first, second;

for(let i = 0; i < 16; i++){
    inside[i] = {
        colour : NaN,
        shape : NaN,
        size : NaN,
        opacity : NaN,
    }
}

function play_f(){
    start.style.display = "none";
    play.style.display = "none";
    setting.style.display = "none";
    player1.style.display = "block";
}
function setting_f(){
    play.style.display = "none";
    setting.style.display = "none";
    theme.style.display = "block";
}
function theme_f(){
    theme.style.display = "none";
    themeselect.style.display = "block";
}
function submit1(){
    player1.style.display = "none";
    player2.style.display = "block";
    first = document.getElementById("first").value;
}
function submit2(){
    player2.style.display = "none";
    board.style.display = "block";
    pieces.style.display = "block";
    choosing = true;
    second = document.getElementById("second").value;
    player1_p.innerHTML = first;
    player2_p.innerHTML = second;
    player1_p2.innerHTML = "choose a piece";
}


