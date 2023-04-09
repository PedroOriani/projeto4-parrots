let n = prompt('Bem vindo ao Parrots Card Game.\nCom quantas cartas quer jogar o jogo?\nEscolha um número entre 4 e 14.');

while (n % 2 !== 0 || n < 4 || n > 14){
    console.log(n)
    n = prompt('Bem vindo ao Parrots Card Game.\nCom quantas cartas quer jogar o jogo?\nEscolha um número entre 4 e 14.');
}