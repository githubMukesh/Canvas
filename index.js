// Import stylesheets
import './style.css';

function draw() {
  const canvas = document.getElementById("tutorial");
  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "rgb(200, 0, 0)";
    console.log(ctx);
    ctx.fillRect(10, 10, 50, 50);

    ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
     ctx.fillRect(30, 30, 50, 50);
  }
}

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<canvas id="tutorial" width="150" height="150">
current stock price: $3.15 + 0.15
</canvas>`;

const canvas = document.getElementById("tutorial");

if (canvas.getContext) {
  draw();
  // drawing code here
} else {
  // canvas-unsupported code here
}