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

// Función para disparar semillas
function shootBullet(row, col) {
    setInterval(() => {
        const bullet = document.createElement('span');
        bullet.classList.add('bullet');
        bullet.innerHTML = '<img src="assets/images/pea.png" alt="Bullet" width="20">';
        bullet.style.top = `${row * (cellSize + gap) + cellSize / 2 - 10}px`;
        bullet.style.left = `${col * (cellSize + gap) + 80}px`;
        gameGrid.appendChild(bullet);
        moveBullet(bullet);
    }, 1000);
}

// Función para mover balas y detectar colisiones
function moveBullet(bullet) {
    const interval = setInterval(() => {
        bullet.style.left = `${parseInt(bullet.style.left) + 20}px`;
        if (parseInt(bullet.style.left) > (cols * (cellSize + gap))) bullet.remove();

        // Verificar colisión con zombis
        document.querySelectorAll('.zombie').forEach(zombie => {
            const bulletLeft = parseInt(bullet.style.left);
            const bulletTop = parseInt(bullet.style.top);
            const zombieLeft = parseInt(zombie.style.left);
            const zombieTop = parseInt(zombie.style.top);

            if (Math.abs(bulletTop - zombieTop) < cellSize / 2 && Math.abs(bulletLeft - zombieLeft) < cellSize / 2) {
                zombie.dataset.health -= 1;
                bullet.remove();
                if (zombie.dataset.health <= 0) {
                    zombie.remove();
                    dropSun(zombieTop, zombieLeft);
                }
            }
        });
    }, 100);
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

// Mover los zombis hacia la izquierda
function moveZombie(zombie) {
    const interval = setInterval(() => {
        zombie.style.left = `${parseInt(zombie.style.left) - 10}px`;
        if (parseInt(zombie.style.left) < 0) {
            zombie.remove();
            clearInterval(interval);
        }
    }, 200);
}

// Crear un zombi cada 3 segundos
setInterval(spawnZombie, 3000);

// Función para generar soles aleatorios
function dropSun(top, left) {
    const sun = document.createElement('div');
    sun.classList.add('sun');
    sun.innerHTML = '<img src="assets/images/sun.png" alt="Sun" width="40">';
    sun.style.top = `${top}px`;
    sun.style.left = `${left}px`;
    sun.addEventListener('click', () => {
        sunPoints += 25;
        scoreDisplay.textContent = sunPoints;
        sun.remove();
    });
    gameGrid.appendChild(sun);
}
