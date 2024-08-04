function checkfinish(){
    if((check_colour(inside[0],inside[1],inside[2],inside[3]) || 
    check_colour(inside[4],inside[5],inside[6],inside[7]) ||
    check_colour(inside[8],inside[9],inside[10],inside[11]) ||
    check_colour(inside[12],inside[13],inside[14],inside[15]) ||
    check_colour(inside[0],inside[4],inside[8],inside[12]) ||
    check_colour(inside[1],inside[5],inside[9],inside[13]) ||
    check_colour(inside[2],inside[6],inside[10],inside[14]) ||
    check_colour(inside[3],inside[7],inside[11],inside[15]) ||
    check_colour(inside[0],inside[5],inside[10],inside[15]) ||
    check_colour(inside[3],inside[6],inside[9],inside[12]) ) ||

    (check_shape(inside[0],inside[1],inside[2],inside[3]) || 
    check_shape(inside[4],inside[5],inside[6],inside[7]) ||
    check_shape(inside[8],inside[9],inside[10],inside[11]) ||
    check_shape(inside[12],inside[13],inside[14],inside[15]) ||
    check_shape(inside[0],inside[4],inside[8],inside[12]) ||
    check_shape(inside[1],inside[5],inside[9],inside[13]) ||
    check_shape(inside[2],inside[6],inside[10],inside[14]) ||
    check_shape(inside[3],inside[7],inside[11],inside[15]) ||
    check_shape(inside[0],inside[5],inside[10],inside[15]) ||
    check_shape(inside[3],inside[6],inside[9],inside[12]) ) ||

    (check_size(inside[0],inside[1],inside[2],inside[3]) || 
    check_size(inside[4],inside[5],inside[6],inside[7]) ||
    check_size(inside[8],inside[9],inside[10],inside[11]) ||
    check_size(inside[12],inside[13],inside[14],inside[15]) ||
    check_size(inside[0],inside[4],inside[8],inside[12]) ||
    check_size(inside[1],inside[5],inside[9],inside[13]) ||
    check_size(inside[2],inside[6],inside[10],inside[14]) ||
    check_size(inside[3],inside[7],inside[11],inside[15]) ||
    check_size(inside[0],inside[5],inside[10],inside[15]) ||
    check_size(inside[3],inside[6],inside[9],inside[12]) ) ||

    (check_opacity(inside[0],inside[1],inside[2],inside[3]) || 
    check_opacity(inside[4],inside[5],inside[6],inside[7]) ||
    check_opacity(inside[8],inside[9],inside[10],inside[11]) ||
    check_opacity(inside[12],inside[13],inside[14],inside[15]) ||
    check_opacity(inside[0],inside[4],inside[8],inside[12]) ||
    check_opacity(inside[1],inside[5],inside[9],inside[13]) ||
    check_opacity(inside[2],inside[6],inside[10],inside[14]) ||
    check_opacity(inside[3],inside[7],inside[11],inside[15]) ||
    check_opacity(inside[0],inside[5],inside[10],inside[15]) ||
    check_opacity(inside[3],inside[6],inside[9],inside[12]) ) ){
        board.style.display = "none";
        pieces.style.display = "none";
        gameover.style.display = "block";
        player1_p.innerHTML = "";
        player1_p2.innerHTML = "";
        player2_p.innerHTML = "";
        player2_p2.innerHTML = "";
        if(turn == 1){
            whowin.innerHTML = first + " win";
        }else{
            whowin.innerHTML = second + " win";
        }
    }else if(round == 16) {
            whowin.innerHTML = "Nobody win";
            board.style.display = "none";
            pieces.style.display = "none";
            gameover.style.display = "block";
            player1_p.innerHTML = "";
            player1_p2.innerHTML = "";
            player2_p.innerHTML = "";
            player2_p2.innerHTML = "";
    }
}

function check_colour(a,b,c,d){
    if(a.colour == b.colour && a.colour == c.colour && a.colour == d.colour && a.colour!= NaN){
        return true;
    }
    else{
        return false;
    }
}
function check_shape(a,b,c,d){
    if(a.shape == b.shape && a.shape == c.shape && a.shape == d.shape && a.shape!= NaN){
        return true;
    }
    else{
        return false;
    }
}
function check_size(a,b,c,d){
    if(a.size == b.size && a.size == c.size && a.size == d.size && a.size!= NaN){
        return true;
    }
    else{
        return false;
    }
}
function check_opacity(a,b,c,d){
    if(a.opacity == b.opacity && a.opacity == c.opacity && a.opacity == d.opacity && a.opacity!= NaN){
        return true;
    }
    else{
        return false;
    }
}
