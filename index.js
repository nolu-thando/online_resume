
    // Scroll Animation
    const sections = document.querySelectorAll('.section');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("show");
        });
      },
      { threshold: 0.2 }
    );

    sections.forEach((section) => observer.observe(section));

    // Dark/Light Mode Toggle
    const toggleBtn = document.getElementById("themeToggle");

  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
      toggleBtn.textContent = "☀️ Light Mode";
    } else {
      toggleBtn.textContent = "🌙 Dark Mode";
    }
  });
  //Card Flip
  const card = document.querySelector(".project-card");
const inner = document.querySelector(".card-inner");

card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;

    // If cursor is near the card, flip
    if (Math.abs(x) < rect.width / 2 + 80) {
        inner.style.transform = "rotateY(180deg)";
    }
});

card.addEventListener("mouseleave", () => {
    inner.style.transform = "rotateY(0deg)";
});
