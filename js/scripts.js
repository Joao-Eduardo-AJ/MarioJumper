const mario = document.querySelector('.mario');
const mariodead = document.querySelector('.mario');
const tubo = document.querySelector('.pipe');
const grass = document.querySelector('#grass');
const block = document.querySelector('#block');
const cloud = document.querySelector('#cloud');
const dirt = document.querySelector('#dirt');
const bush = document.querySelector('#bush')
const castle = document.querySelector('#castle')
var cont = document.querySelector('#count')


var soma = Number(cont.textContent)

const jump = () => {
    mario.classList.add('jump');
    soma += 1
    cont.textContent = soma

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 600);
}

const loop = setInterval(() => {

    const cloudPosition = cloud.offsetLeft;
    const pipePosition = tubo.offsetLeft;
    const blockPosition = block.offsetLeft;
    const mariodeadPosition = mario.offsetLeft;
    const grassPosition = mario.offsetRight;
    const dirtPosition = dirt.offsetRight;
    const bushPosition = bush.offsetLeft;
    const castlePosition = castle.offsetLeft;

    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    if (marioPosition < 262 && pipePosition <= 118 && pipePosition >= 65) {

        cloud.style.animation = 'none';
        cloud.style.left = `${cloudPosition}px`;
        block.style.animation = 'none';
        block.style.left = `${blockPosition}px`;
        grass.style.animation = 'none';
        grass.style.left = `${grassPosition}px`;
        tubo.style.animation = 'none';
        tubo.style.left = `${pipePosition}px`;
        dirt.style.animation = 'none';
        dirt.style.left = `${dirtPosition}px`;
        bush.style.animation = 'none';
        bush.style.left = `${bushPosition}px`;
        castle.style.animation = 'none';
        castle.style.left = `${castlePosition}px`;

        mario.style.left = `${mariodeadPosition + 17}px`;

        mario.src = './images/game-over.png';
        mario.classList.add('dead');

        clearInterval(loop);

        setTimeout(() => {
            document.location.reload(true)
        }, 860)

    }
}, 10);

document.addEventListener('keydown', jump);