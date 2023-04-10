let gifs = [];

let n = prompt('Bem vindo ao Parrots Card Game.\nCom quantas cartas quer jogar o jogo?\nEscolha um número entre 4 e 14.');

while (n % 2 !== 0 || n < 4 || n > 14){
    console.log(n)
    n = prompt('Bem vindo ao Parrots Card Game.\nCom quantas cartas quer jogar o jogo?\nEscolha um número entre 4 e 14.');
}

console.log(n)

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

console.log(gifs)

function randomize(){
   return Math.random() -0.5;
}

gifs.sort(randomize);

console.log(gifs)

const arrayCards = [];

let array1 = document.querySelector('.container-cards');

for(let i = 0; i < n; i++){
    arrayCards.push(`<div data-test="card" class="card">
	<div class="front-face face">
		 <img class="img" src="./img/back.png" />
	</div>
	<div class="back-face face" id="${i}">
	</div>
</div>`)

    array1.innerHTML += arrayCards[i];

    document.getElementById(`${i}`).innerHTML = `<img class="img" src="./img/${gifs[i]}" />`

}

i = 0;




