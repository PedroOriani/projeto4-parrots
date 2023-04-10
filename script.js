let gifs = [];

let n = prompt('Bem vindo ao Parrots Card Game.\nCom quantas cartas quer jogar o jogo?\nEscolha um número entre 4 e 14.');

while (n % 2 !== 0 || n < 4 || n > 14){
    console.log(n)
    n = prompt('Bem vindo ao Parrots Card Game.\nCom quantas cartas quer jogar o jogo?\nEscolha um número entre 4 e 14.');
}

if (n == 4){
    gifs.push('0.gif','1.gif','2.gif','3.gif')
} else if (n == 6 ){
    gifs.push('0.gif','1.gif','2.gif','3.gif','4.gif','5.gif')
} else if (n == 8 ){
    gifs.push('0.gif','1.gif','2.gif','3.gif','4.gif','5.gif','6.gif','7.gif')
} else if (n == 10 ){
    gifs.push('0.gif','1.gif','2.gif','3.gif','4.gif','5.gif','6.gif','7.gif','8.gif','9.gif')
} else if (n == 12 ){
    gifs.push('0.gif','1.gif','2.gif','3.gif','4.gif','5.gif','6.gif','7.gif','8.gif','9.gif','10.gif','11.gif')
} else if (n == 14 ){
    gifs.push('0.gif','1.gif','2.gif','3.gif','4.gif','5.gif','6.gif','7.gif','8.gif','9.gif','10.gif','11.gif','12.gif','13.gif')
}

function randomize(){
   return Math.random() -0.5;
}

gifs.sort(randomize);

console.log(gifs)

gifsNum = [];

for(let k = 0; k < n;k++){
    gifs[k];
    gifsNum.push(gifs[k])
}

for(let j = 0; j < n; j++){
    gifsNum[j] = gifsNum[j].replace(".gif","");
}

console.log(gifsNum)

const arrayCards = [];

let array = document.querySelector('.container-cards');

for(let i = 0; i < n; i++){
    arrayCards.push(`<div onclick="flip(this)" data-test="card" class="card" id="${i+(14)}">
	<div class="front-face face">
		 <img data-test="face-down-image" class="img" src="./img/back.png" />
	</div>
	<div class="back-face face" id="${i}">
	</div>
    </div>`)

    array.innerHTML += arrayCards[i];

    document.getElementById(`${i}`).innerHTML = `<img data-img= ${i} data-test="face-up-image" class="gif" src="./img/${gifs[i]}" />`

}
let countflip = [];
let flippedCards = [];
let pair = 0;
let firstCard = null;
let secondCard = null;
let card;
let first;
let second;


let back = "";
let front = "";

let id;

function flip(carta) {
    
    id = carta.id;

    const confSeleção = carta.querySelector(".front-face .front");

    if(flippedCards.length > 0 && flippedCards.length % 2 == 0){

    }else if(confSeleção !== null){
        carta.setAttribute("onclick", "onclick=null");
    }else{

        front = carta.querySelector(".front-face");
        front.classList.toggle("front");
    
        back = carta.querySelector(".back-face");
        back.classList.toggle("back");
    
        flippedCards.push('1'); 
        countflip.push('1');   
    }
    
    if(firstCard == null){
        firstCard = id - 14;
        first = carta;

    } else if (secondCard == null){
        secondCard = id - 14;
        second = carta;
       setTimeout(verifySelection, 1000, firstCard, secondCard);
    }
}

function verifySelection(){
        if(gifsNum[firstCard] % 2 == 0 && gifsNum[secondCard] == gifsNum[firstCard] + 1){
        flippedCards = [];
            alert('Acertou');
        } else if (gifsNum[firstCard] % 2 == 1 && gifsNum[secondCard] == gifsNum[firstCard] - 1) {
            alert('Acertou');
            flippedCards = [];            
        }else if (gifsNum[firstCard] == 0 && gifsNum[secondCard] == 1) {
            alert('Acertou');
            flippedCards = [];                    
        }else if (gifsNum[firstCard] == 1 && gifsNum[secondCard] == 0) {
            alert('Acertou');
            flippedCards = [];                     
        }else {  
            alert('Errou'); 
            console.log(first);
            console.log(second);      
            turningBack()
        }
 }

 function turningBack(){

        front = first.querySelector(".front-face");
        front.classList.toggle("front");
    
        back = first.querySelector(".back-face");
        back.classList.toggle("back");

        front = second.querySelector(".front-face");
        front.classList.toggle("front");
    
        back = second.querySelector(".back-face");
        back.classList.toggle("back");

 }