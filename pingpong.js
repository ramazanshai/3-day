let ctx = ca.getContext("2d");
let p1 = p2 = 80;
let key = {};
let ball = {};

start();
setInterval(loop, 1000/60);
document.addEventListener('keydown', e => key[e.keyCode] = true);
document.addEventListener('keyup', e => key[e.keyCode] = false);
draw();

function start(){
    ball = {
        x: ca.width / 2,
        y: ca.height / 2,
        speedX: 3,
        speedY: 0
    };
}

function loop(){
    if(key[38]){
        p2 -= 5;
    }

    if(key[40]){
        p2 += 5;
    }

    if(key[87]){
        p1 -= 5;
    }

    if(key[83]){
        p1 += 5;
    }

    ball.x += ball.speedX;
    ball.y += ball.speedY;

    if(ball.x < 20 || ball.x > (ca.width - 30)) {
        if(ball.y > p1 && ball.y < p1 + 80 && ball.speedX < 0) {
            ball.speedX = -ball.speedX;
            ball.speedY = (ball.y - p1 - 40) * 0.1;
        }

        if(ball.y > p2 && ball.y < p2 + 80 && ball.speedX > 0) {
            ball.speedX = -ball.speedX;
            ball.speedY = (ball.y - p2 - 40) * 0.1;
        }
    }

    if(ball.y < 0 || ball.y > (ca.height - 10)) {
        ball.speedY = -ball.speedY;
    }

    if(ball.x < 0 || ball.x > (ca.width - 10)) {
        setTimeout(start, 2000);
    }
}

function draw(){
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, ca.width, ca.height);
    ctx.fillStyle = 'white';
    requestAnimationFrame(draw);
    ctx.fillRect(10, p1, 10, 80);
    ctx.fillRect(ca.width - 20, p2, 10, 80);
    ctx.fillRect(ball.x, ball.y, 10, 10);
}
