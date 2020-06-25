var tilesize = 100;

setup = () => {
    createBoard(800,800)
}

draw = () => {
    background(tilesize);
}

showGrid = () => {
    for(var i=0; i < 8; i++){
        for(var j=0; j<8; j++){
            if((i+j)%2==0){
                fil(0)
            }else{
                fill(1)
            }
            rect(i*tilesize, j*tilesize, tilesize)
        }
    }
}