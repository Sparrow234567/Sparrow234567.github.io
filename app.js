// Mouse cursor
var cursor = document.getElementById("cursor");
var dotContainer = document.getElementById("dot-container");
var dotElements = [];
var previousX = 0;
var previousY = 0;

// Moving the Bee
function updateCursorPosition(event) {
  cursor.style.left = event.clientX + "px";
  cursor.style.top = event.clientY + "px";
  var angle = Math.atan2(event.clientY - previousY, event.clientX - previousX) * 180 / Math.PI;
  cursor.style.transform = "rotate(" + angle + "deg)";
  createDot(event);
  previousX = event.clientX;
  previousY = event.clientY;
}

// Dots following the Bee
function createDot(event) {
  var dot = document.createElement("div");
  dot.classList.add("dot");
  dot.style.left = event.clientX + "px";
  dot.style.top = event.clientY + "px";
  dotContainer.appendChild(dot);
  dotElements.push(dot);

  if (dotElements.length > 3) {
    dotElements[0].style.opacity = 0;
    dotElements.shift();
  }
}

// On Repeat
function repeat() {
  setTimeout(repeat, 5000);
}

document.addEventListener("mousemove", updateCursorPosition);
repeat();


