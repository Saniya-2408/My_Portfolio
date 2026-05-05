// Typing Effect
const text = ["Frontend Developer", "React Learner", "Problem Solver"];
let i = 0;
let j = 0;
let currentText = "";
let isDeleting = false;

function type() {
  currentText = text[i];
  
  if (!isDeleting) {
    document.getElementById("typing").textContent =
      currentText.substring(0, j++);
    
    if (j > currentText.length) {
      isDeleting = true;
      setTimeout(type, 1000);
      return;
    }
  } else {
    document.getElementById("typing").textContent =
      currentText.substring(0, j--);
    
    if (j < 0) {
      isDeleting = false;
      i = (i + 1) % text.length;
    }
  }

  setTimeout(type, isDeleting ? 50 : 100);
}

type();


// Smooth Scroll
document.querySelectorAll("a").forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    if (this.getAttribute("href").startsWith("#")) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href"))
        .scrollIntoView({ behavior: "smooth" });
    }
  });
});
