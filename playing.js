let n = 16;
for(let j = 0; j < n; j++){
    piece[j].addEventListener("click",
        function(e){
            for(let i = 0; i < n; i++){
                if(e.target == piece[i]){
                    choose =  i;
                    piece_choose = piece[choose];
                }
            }
            if(choosing){
                clone = piece_choose.cloneNode(true);
                piece_choose.style.display = 'none';
                if(turn == 1){
                    choose1.appendChild(clone);
                    choose1.style.display = "block";
                    turn = 2;
                    player2_p2.innerHTML = "play";
                    player1_p2.innerHTML = "";
                }
                else{
                    choose2.appendChild(clone);
                    choose2.style.display = "block";
                    turn = 1;
                    player1_p2.innerHTML = "play";
                    player2_p2.innerHTML = "";
                }
                choosing = false;
                playing = true;
                n++;
            }
        }
    );
}

for(let j = 0; j < 16; j++){
    place[j].addEventListener("click",
        function(e){
            let x, y = choose-round;
            for(let i = 0; i < 16; i++){
                if(e.target == place[i]){
                    place_choose = place[i];
                    x = i;
                }
            }
            if(playing && inside[x].colour != NaN){  
                place_choose.appendChild(clone);
                clone.style.position = "absolute";
                clone.style.top = "50%";
                clone.style.left = "50%";
                clone.style.transform = "translate(-50%, -50%)";
                playing = false;
                if(y<8){
                    inside[x].colour = "lite";
                }
                else{
                    inside[x].colour = "dark";
                }
                if(y % 4 == 0 || y % 4 == 1){
                    inside[x].size = "big";
                }else{
                    inside[x].size = "small";
                }
                if(y % 2 == 0){
                    inside[x].opacity = 100;
                }else{
                    inside[x].opacity = 50;
                }
                if(y<4 || (y>7 && y<12)){
                    inside[x].shape = "circle";
                }else{
                    inside[x].shape = "sqaure";
                }
                if(turn == 1){
                    player1_p2.innerHTML = "choose a piece";
                }else{
                    player2_p2.innerHTML = "choose a piece";
                }
                choosing = true;
                round++;
                checkfinish();  
            }
        }
    );
}

