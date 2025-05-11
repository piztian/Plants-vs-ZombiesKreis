// Función para agregar plantas
function addPlant(row, col) {
    const cell = document.querySelector(`[data-row='${row}'][data-col='${col}']`);
    if (!cell.classList.contains('plant') && sunPoints >= 50) {
        cell.classList.add('plant');
        cell.innerHTML = '<img src="assets/images/peashooter.png" alt="Plant" width="60">';
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
    zombie.innerHTML = '<img src="assets/images/zombie.png" alt="Zombie" width="60">';
    zombie.dataset.row = row;
    zombie.dataset.health = 3;
    zombie.style.top = `${row * (cellSize + gap) + 10}px`;
    zombie.style.left = `${cols * (cellSize + gap)}px`;
    gameGrid.appendChild(zombie);
    moveZombie(zombie);
}
