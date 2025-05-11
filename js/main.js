// Variables globales
const rows = 5;
const cols = 9;
const gameGrid = document.getElementById('game');
const scoreDisplay = document.getElementById('score');
const cellSize = 80;
const gap = 5;
let sunPoints = 50;

// Crear la grilla del juego
for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.dataset.row = row;
        cell.dataset.col = col;
        cell.addEventListener('click', () => addPlant(row, col));
        gameGrid.appendChild(cell);
    }
}

// Función para agregar plantas
function addPlant(row, col) {
    const cell = document.querySelector(`[data-row='${row}'][data-col='${col}']`);
    if (!cell.classList.contains('plant') && sunPoints >= 50) {
        cell.classList.add('plant');
        cell.innerHTML = '<img src="assets/images/peashooter.png" alt="Peashooter" width="70">';
        sunPoints -= 50;
        scoreDisplay.textContent = sunPoints;
        shootBullet(row, col);
    }
}

// Generar zombis aleatorios
function spawnZombie() {
    const row = Math.floor(Math.random() * rows);
    const zombie = document.createElement('div');
    zombie.classList.add('zombie');
    zombie.innerHTML = '<img src="assets/images/zombie.png" alt="Zombie" width="70">';
    zombie.dataset.row = row;
    zombie.dataset.health = 3;
    zombie.style.top = `${row * (cellSize + gap) + 10}px`;
    zombie.style.left = `${cols * (cellSize + gap)}px`;
    gameGrid.appendChild(zombie);
    moveZombie(zombie);
}

// Crear un zombi cada 3 segundos
setInterval(spawnZombie, 3000);
