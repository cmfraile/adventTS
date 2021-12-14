console.clear();

const arraygft = ["🏈🎸", "🎮🧸"];

const main = (gifs:string[]) => {
    //Los emojis 🎁 son 2 de ancho por 1 de "alto";
    let alto = gifs.length;
    let ancho = 0;
    gifs.forEach(x => {
        if(x.length > ancho){ancho = x.length};
    });
    let fabricar = "";
    for(let x = 1 ; x <= ancho + 2 ; x++){
        fabricar += "*"
    }; fabricar += "\n";
    gifs.forEach( x => {
        fabricar += "*" + x + "*" + "\n";
    });
    for(let x = 1 ; x <= ancho + 2 ; x++){
        fabricar += "*"
    }; fabricar += "\n";
    return fabricar;
}

console.log(main(arraygft));


