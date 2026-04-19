const greetingEl = document.getElementById("greeting-text");
const hour = new Date().getHours();

let greeting = "Good Evening,";

if (hour < 12) {
  greeting = "Good Morning,";
} else if (hour < 18) {
  greeting = "Good Afternoon,";
}

if (greetingEl) {
  greetingEl.textContent = greeting;
}

const flipCard = document.getElementById("profileFlip");
if (flipCard) {
  setInterval(() => {
    flipCard.classList.toggle("is-flipped");
  }, 5000);
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.14 }
);

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
