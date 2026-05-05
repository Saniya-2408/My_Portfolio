// 🌌 STAR BACKGROUND
const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars = Array(250).fill().map(() => ({
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height,
  size: Math.random() * 2,
  speed: Math.random() * 0.5
}));

function drawStars() {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.fillStyle = "white";

  stars.forEach(s => {
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.size, 0, Math.PI*2);
    ctx.fill();
  });
}

function animateStars() {
  stars.forEach(s => {
    s.y += s.speed;
    if (s.y > canvas.height) s.y = 0;
  });

  drawStars();
  requestAnimationFrame(animateStars);
}
animateStars();


// ✨ SCROLL REVEAL
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  reveals.forEach(el => {
    let top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
});


// 📊 SKILL BAR ANIMATION
const bars = document.querySelectorAll(".bar div");

window.addEventListener("scroll", () => {
  bars.forEach(bar => {
    let top = bar.getBoundingClientRect().top;
    if (top < window.innerHeight - 50) {
      bar.style.width = bar.getAttribute("data-width");
    }
  });
});


// ⌨️ TYPING EFFECT
const words = ["Frontend Developer", "Creative Thinker", "Future Full Stack"];
let i = 0, j = 0, current = "", deleting = false;

function type() {
  current = words[i];

  document.getElementById("typing").textContent =
    current.substring(0, j);

  if (!deleting) j++; else j--;

  if (j === current.length) deleting = true;
  if (j === 0) {
    deleting = false;
    i = (i + 1) % words.length;
  }

  setTimeout(type, deleting ? 60 : 100);
}
type();


// 🌗 THEME TOGGLE
document.getElementById("toggle").onclick = () => {
  document.body.classList.toggle("light");
};


// 🖱️ CURSOR GLOW TRAIL
document.addEventListener("mousemove", e => {
  const glow = document.createElement("div");

  glow.style.position = "fixed";
  glow.style.left = e.clientX + "px";
  glow.style.top = e.clientY + "px";
  glow.style.width = "8px";
  glow.style.height = "8px";
  glow.style.background = "#7c3aed";
  glow.style.borderRadius = "50%";
  glow.style.pointerEvents = "none";
  glow.style.boxShadow = "0 0 15px #7c3aed";
  glow.style.zIndex = "999";

  document.body.appendChild(glow);

  setTimeout(() => glow.remove(), 300);
});
