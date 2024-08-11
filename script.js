const pacman = document.getElementById('pacman');
const pacmanContainer = document.getElementById('pacman-container');

let posX = 0;
let direction = 1; // 1 means moving right, -1 means moving left
let isOpenMouth = true;

function movePacman() {
    const containerWidth = pacmanContainer.clientWidth;
    const pacmanWidth = pacman.clientWidth;

    // Update position
    posX += direction * 2;

    // Check if Pac-Man hits the wall
    if (posX >= containerWidth - pacmanWidth) {
        direction = -1;
        pacman.style.transform = 'translateY(-50%) scaleX(-1)'; // Flip Pac-Man to face left
    } else if (posX <= 0) {
        direction = 1;
        pacman.style.transform = 'translateY(-50%) scaleX(1)'; // Flip Pac-Man to face right
    }

    // Move Pac-Man
    pacman.style.left = posX + 'px';

    // Toggle between open mouth and closed mouth images
    if (isOpenMouth) {
        pacman.src = 'pacmanMouthclosed.png';

        
    } else {
        pacman.src = 'pacmanMouthOpen.png';
    }
    isOpenMouth = !isOpenMouth;

    // Repeat the animation
    requestAnimationFrame(movePacman);
}

// Start the animation
movePacman();
