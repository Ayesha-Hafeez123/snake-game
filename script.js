// const canvas = document.getElementById("gameCanvas");
// const ctx = canvas.getContext("2d");

// let snake = [{ x: 10, y: 10 }];
// let snakeLength = 1;
// let direction = { x: 0, y: 0 };
// let food = { x: Math.floor(Math.random() * 20), y: Math.floor(Math.random() * 20) };
// let level = 1;
// let score = 0;
// let speed = 100;
// let gameOver = false;
// let isPaused = false;
// let gameInterval;

// // Colors for different levels
// const levelColors = ["green", "blue", "purple"];
// let obstacle = null;

// function drawSnake() {
//     ctx.fillStyle = levelColors[level - 1];
//     snake.forEach(part => {
//         ctx.beginPath();
//         ctx.arc(part.x * 20 + 10, part.y * 20 + 10, 10, 0, 2 * Math.PI);  // Rounded body for snake
//         ctx.fill();
//     });
// }

// function drawFood() {
//     ctx.fillStyle = "red";
//     ctx.fillRect(food.x * 20, food.y * 20, 20, 20);
// }

// function drawScore() {
//     ctx.fillStyle = "white";
//     ctx.font = "18px Arial";
//     ctx.clearRect(0, 0, canvas.width, 30);
//     ctx.fillText("Score: " + score, 10, 20);
//     ctx.fillText("Level: " + level, canvas.width - 80, 20);
// }

// // Level up and gameplay features
// function checkLevelUp() {
//     if (score === 20) {
//         level++;
//         score = 0;
//         snakeLength = 1;
//         direction = { x: 0, y: 0 };
//         snake = [{ x: 10, y: 10 }];
//         if (level === 2) {
//             obstacle = { x: Math.floor(Math.random() * 20), y: Math.floor(Math.random() * 20) };
//             speed = 80;
//         } else if (level === 3) {
//             speed = 60;
//             food = { x: Math.floor(Math.random() * 20), y: Math.floor(Math.random() * 20) };
//         }
//         clearInterval(gameInterval);
//         gameInterval = setInterval(update, speed);
//     }
// }

// function drawObstacle() {
//     if (obstacle) {
//         ctx.fillStyle = "gray";
//         ctx.fillRect(obstacle.x * 20, obstacle.y * 20, 20, 20);
//     }
// }

// function moveSnake() {
//     const head = { x: snake[0].x + direction.x, y: snake[0].y + direction.y };
//     snake.unshift(head);

//     // Check if snake has eaten the food
//     if (head.x === food.x && head.y === food.y) {
//         score++;
//         food = { x: Math.floor(Math.random() * 20), y: Math.floor(Math.random() * 20) };
//     } else {
//         snake.pop();
//     }

//     checkCollision();
//     checkLevelUp();
// }

// function checkCollision() {
//     const head = snake[0];

//     if (head.x < 0 || head.x >= 20 || head.y < 0 || head.y >= 20) {
//         gameOver = true;
//     }
    
//     // Collision with itself
//     for (let i = 1; i < snake.length; i++) {
//         if (head.x === snake[i].x && head.y === snake[i].y) {
//             gameOver = true;
//         }
//     }

//     // Collision with obstacle in level 2
//     if (level === 2 && obstacle && head.x === obstacle.x && head.y === obstacle.y) {
//         gameOver = true;
//     }

//     if (gameOver) {
//         clearInterval(gameInterval);
//         alert("Game Over! Restart to try again.");
//     }
// }

// function update() {
//     if (gameOver || isPaused) return;
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     drawScore();
//     drawSnake();
//     drawFood();
//     if (level === 2) drawObstacle();
//     moveSnake();
// }

// // Restart the game function
// function restartGame() {
//     score = 0;
//     level = 1;
//     snakeLength = 1;
//     direction = { x: 0, y: 0 };
//     snake = [{ x: 10, y: 10 }];
//     food = { x: Math.floor(Math.random() * 20), y: Math.floor(Math.random() * 20) };
//     obstacle = null;
//     gameOver = false;
//     speed = 100;
//     clearInterval(gameInterval);
//     gameInterval = setInterval(update, speed);
// }

// // Pause/Resume the game
// function togglePause() {
//     if (isPaused) {
//         isPaused = false;
//         gameInterval = setInterval(update, speed);
//         pauseButton.innerText = "Pause";
//     } else {
//         isPaused = true;
//         clearInterval(gameInterval);
//         pauseButton.innerText = "Resume";
//     }
// }

// // Add Restart and Pause buttons
// const restartButton = document.createElement("button");
// restartButton.innerText = "Restart";
// document.body.appendChild(restartButton);
// restartButton.addEventListener("click", restartGame);

// const pauseButton = document.createElement("button");
// pauseButton.innerText = "Pause";
// document.body.appendChild(pauseButton);
// pauseButton.addEventListener("click", togglePause);

// // Initialize game
// document.addEventListener("keydown", (event) => {
//     switch (event.key) {
//         case "ArrowUp": if (direction.y === 0) direction = { x: 0, y: -1 }; break;
//         case "ArrowDown": if (direction.y === 0) direction = { x: 0, y: 1 }; break;
//         case "ArrowLeft": if (direction.x === 0) direction = { x: -1, y: 0 }; break;
//         case "ArrowRight": if (direction.x === 0) direction = { x: 1, y: 0 }; break;
//     }
// });

// // Start the game
// gameInterval = setInterval(update, speed);




















const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let snake = [{ x: 10, y: 10 }];
let snakeLength = 1;
let direction = { x: 0, y: 0 };
let food = { x: Math.floor(Math.random() * 20), y: Math.floor(Math.random() * 20) };
let level = 1;
let score = 0;
let speed = 150;
let gameOver = false;
let isPaused = false;
let gameInterval;

// Colors for different levels
const levelColors = ["green", "blue", "purple"];
let obstacle = null;

function drawSnake() {
    ctx.fillStyle = levelColors[level - 1];
    snake.forEach(part => {
        ctx.beginPath();
        ctx.arc(part.x * 20 + 10, part.y * 20 + 10, 10, 0, 2 * Math.PI);  // Rounded body for snake
        ctx.fill();
    });
}

function drawFood() {
    ctx.fillStyle = "red";
    ctx.fillRect(food.x * 20, food.y * 20, 20, 20);
}

function drawScore() {
    ctx.fillStyle = "white";
    ctx.font = "18px Arial";
    ctx.clearRect(0, 0, canvas.width, 30);
    ctx.fillText("Score: " + score, 10, 20);
    ctx.fillText("Level: " + level, canvas.width - 80, 20);
}

function update() {
    if (gameOver || isPaused) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawScore();
    drawSnake();
    drawFood();
    if (level === 2) drawObstacle();
    moveSnake();
}


// Add other existing functions like moveSnake, checkCollision, etc.
// Initialize game with the updated speed
gameInterval = setInterval(update, speed);

// New function to show level transition
function showLevelTransition() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "yellow";
    ctx.font = "30px Arial";
    ctx.fillText("Level " + level, canvas.width / 3, canvas.height / 2);
    setTimeout(() => {
        speed = speed - 20; // Adjust speed for next level
        clearInterval(gameInterval);
        gameInterval = setInterval(update, speed);
    }, 1000); // Display for 1 second
}

// New function to draw progress bar
function drawProgressBar() {
    const progressWidth = (score / 20) * canvas.width;
    ctx.fillStyle = "lightblue";
    ctx.fillRect(0, canvas.height - 10, progressWidth, 10); // Draw a progress bar at the bottom
}

// Game Over Animation
function gameOverAnimation() {
    let opacity = 1;
    const fadeInterval = setInterval(() => {
        ctx.fillStyle = `rgba(0, 0, 0, ${opacity})`;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        opacity -= 0.05;
        if (opacity <= 0) {
            clearInterval(fadeInterval);
            restartGame();
        }
    }, 50);
}

function gameOverFunction() {
    clearInterval(gameInterval);
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
    ctx.fillStyle = "red"; // Color for the Game Over message
    ctx.font = "50px Arial"; // Font size and style
    ctx.textAlign = "center"; // Center the text
    ctx.fillText("Game Over", canvas.width / 2, canvas.height / 2); // Display the Game Over message
    ctx.font = "20px Arial"; // Font size for restart message
    ctx.fillText("Press Restart to play again", canvas.width / 2, canvas.height / 2 + 30);
}


function checkLevelUp() {
    if (score === 20) {
        level++;
        score = 0;
        snakeLength = 1;
        direction = { x: 0, y: 0 };
        snake = [{ x: 10, y: 10 }];
        if (level === 2) {
            obstacle = { x: Math.floor(Math.random() * 20), y: Math.floor(Math.random() * 20) };
            showLevelTransition(); // Show level transition
        } else if (level === 3) {
            showLevelTransition(); // Show level transition
        }
        clearInterval(gameInterval);
        gameInterval = setInterval(update, speed);
    }
}

function drawObstacle() {
    if (obstacle) {
        ctx.fillStyle = "gray";
        ctx.fillRect(obstacle.x * 20, obstacle.y * 20, 20, 20);
    }
}

function moveSnake() {
    const head = { x: snake[0].x + direction.x, y: snake[0].y + direction.y };
    snake.unshift(head);

    // Check if snake has eaten the food
    if (head.x === food.x && head.y === food.y) {
        score++;
        food = { x: Math.floor(Math.random() * 20), y: Math.floor(Math.random() * 20) };
    } else {
        snake.pop();
    }

    checkCollision();
    checkLevelUp();
}

function checkCollision() {
    const head = snake[0];

    if (head.x < 0 || head.x >= 20 || head.y < 0 || head.y >= 20) {
        gameOver = true;
    }
    
    // Collision with itself
    for (let i = 1; i < snake.length; i++) {
        if (head.x === snake[i].x && head.y === snake[i].y) {
            gameOver = true;
        }
    }

    // Collision with obstacle in level 2
    if (level === 2 && obstacle && head.x === obstacle.x && head.y === obstacle.y) {
        gameOver = true;
    }

    if (gameOver) {
        gameOverFunction(); // Call the new game over function
    }
}

function update() {
    if (gameOver || isPaused) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawScore();
    drawSnake();
    drawFood();
    if (level === 2) drawObstacle();
    drawProgressBar(); // Draw the progress bar
    moveSnake();
}


// Restart the game function
function restartGame() {
    score = 0;
    level = 1;
    snakeLength = 1;
    direction = { x: 0, y: 0 };
    snake = [{ x: 10, y: 10 }];
    food = { x: Math.floor(Math.random() * 20), y: Math.floor(Math.random() * 20) };
    obstacle = null;
    gameOver = false;
    speed = 150; // Reset speed to the slower value
    clearInterval(gameInterval);
    gameInterval = setInterval(update, speed);
}

// Pause/Resume the game
function togglePause() {
    if (isPaused) {
        isPaused = false;
        gameInterval = setInterval(update, speed);
        pauseButton.innerText = "Pause";
    } else {
        isPaused = true;
        clearInterval(gameInterval);
        pauseButton.innerText = "Resume";
    }
}

const speedUpButton = document.createElement("button");
speedUpButton.innerText = "Speed Up";
document.body.appendChild(speedUpButton);
speedUpButton.addEventListener("click", () => {
    if (speed > 50) { // Set a minimum speed limit
        adjustSpeed(speed - 20); // Increase speed (decrease the interval)
    }
});

const speedDownButton = document.createElement("button");
speedDownButton.innerText = "Speed Down";
document.body.appendChild(speedDownButton);
speedDownButton.addEventListener("click", () => {
    adjustSpeed(speed + 20); // Decrease speed (increase the interval)
});

// Add Restart and Pause buttons
const restartButton = document.createElement("button");
restartButton.innerText = "Restart";
document.body.appendChild(restartButton);
restartButton.addEventListener("click", restartGame);

const pauseButton = document.createElement("button");
pauseButton.innerText = "Pause";
document.body.appendChild(pauseButton);
pauseButton.addEventListener("click", togglePause);

// Initialize game
document.addEventListener("keydown", (event) => {
    switch (event.key) {
        case "ArrowUp": if (direction.y === 0) direction = { x: 0, y: -1 }; break;
        case "ArrowDown": if (direction.y === 0) direction = { x: 0, y: 1 }; break;
        case "ArrowLeft": if (direction.x === 0) direction = { x: -1, y: 0 }; break;
        case "ArrowRight": if (direction.x === 0) direction = { x: 1, y: 0 }; break;
    }
});

// Start the game
gameInterval = setInterval(update, speed);