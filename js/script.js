/* informando que terá uma constante mario que recebe e adiciona a classe .mario
que já existe no html*/
const mario = document.querySelector('.mario');

/* pegando o elemento html e passando para o JS identificar */
const pipe = document.querySelector('.pipe');

/* pegando o elemento cloud */
const cloud = document.querySelector('.clouds');

/* pegando o elemento da div container botão "jogar novamente" */
const botao = document.querySelector('.container');

/*pegando o elemento da div game_over para informar quando deverá
aparecer o GAME OVER na tela */
const game_over = document.querySelector('.gameOver');


/*informando que existirá uma constante de nome jump que recebe o que contém 
dentro da constante mario criada acima, e adicionará a classe jump criada
na página index.html, e o classlist é para listar as classes e conseguir 
selecionar a jump que está dentro dos parenteses.*/
const jump = () => {
    
    mario.classList.add('jump');

    /* cria um removedor da classe jump para que limpe a contante e assim
    ela possa ser adicionada novamente. Caso contrário ao apertar uma tecla
    uma vez, ele irá adicionar e não será possível adicionar novamente
    e nas proximas vezes o mário não vai pular pois já foi adicionado a classe
    por isso é preciso remove-lo para adicionar novamente pois isso é o q o faz
    pular */

    /* informado set time out para setar um timeout seguido de uma função 
    e por fim o tempo, a função está resumida com arrow function e o tempo
    deve ser igual ou maior do que a duração da animação.
    Como a animação tem 500ms, é preciso colocar 500 ou mais. */
    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500)
}

/* criando um loop de verificação */

const loop = setInterval(() => {
    //criado constantes para verificar posição do mário e do tubo
    const pipePosition = pipe.offsetLeft;
    const marioPosition =  +window.getComputedStyle(mario).bottom.replace('px', '');
    const cloudPosition = +window.getComputedStyle(cloud).left.replace('px', '');

    /*condição de verificação se a posição do tubo é menor que 105 e maior q 0
    e também posição do mário é menor que 80 (para altura do pulo)*/
    if (pipePosition <= 105 && pipePosition > 0 && marioPosition < 80) {

        //Caso sim, então para-se a animação de todos.

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './images/mario-gameOver.png';
        mario.style.width = '180px';
        mario.style.marginLeft = '-11px';
        
        cloud.style.animation ='none'; 
        cloud.style.left = `${cloudPosition}px`; 

        game_over.style.display = 'block';

        botao.style.display = 'block';

        clearInterval(loop);
        
        const msgm = setInterval(() => {
            if (loop.clearInterval = true )
                var jogador = new Jogador(prompt("Digite seu Nome para guardar sua pontuação", ["Insira seu Nick aqui"]))
                clearInterval(msgm);
                console.log(Jogador.name)
        }, 50);
        

    }
 //caso não, o jogo continua normalmente.
}, 10); // essa verificação ocorre de 10 em 10 milisegundos.

/* informa que adicionará um "escutador de eventos" ou addEventListener
para que faça um evento ou ouvir algo, e esse vento será o keydown ou seja
quando uma key for pressionada no caso alguma tecla, e a tecla específicada
foi a de jump */
document.addEventListener('keydown', jump);

class Jogador{
    constructor(name, pontuacao) {
        this.name = this._captalize(name);
        this.pontuacao = pontuacao;
    }

    get name(){
        return this._name
    }

    get pontuacao(){
        return this._pontuacao
    }

    set name(string) {
        this._name = this._captalize(string)
    }

    set pontuacao(number) {
        this._pontuacao = number
    }

    _captalize(string) {
        return `${string.charAt(0).toUpperCase()}${string.slice(1)}`
    }
}

