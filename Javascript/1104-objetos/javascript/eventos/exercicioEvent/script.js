const circle = document.querySelector(".circle");

function SeguirMouse(event) {
  circle.style.left = event.x + "px";
  circle.style.top = event.y + "px";
}

window.addEventListener("mousemove", SeguirMouse);
