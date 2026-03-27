document.querySelector(".scroll-btn").addEventListener("click", function(e) {
  e.preventDefault();

  document.querySelector("#apropos").scrollIntoView({
    behavior: "smooth"
  });
});
/* ===========================================
   ✅ FOODZA STORY ANIMATION ON SCROLL
=========================================== */

const storySection = document.querySelector(".foodza-story");
const storyMap = document.querySelector(".story-map");
const bubbles = document.querySelectorAll(".story-bubble");

function revealStory() {
  const sectionTop = storySection.getBoundingClientRect().top;
  const screenHeight = window.innerHeight;

  if (sectionTop < screenHeight * 0.75) {

    // Show map
    storyMap.classList.add("show");

    // Show bubbles one by one
    bubbles.forEach((bubble, index) => {
      setTimeout(() => {
        bubble.classList.add("show");
      }, index * 400);
    });

    // Stop after first animation
    window.removeEventListener("scroll", revealStory);
  }
}

window.addEventListener("scroll", revealStory);

  const reveals = document.querySelectorAll(".reveal");

  function revealOnScroll() {
    reveals.forEach((el) => {
      const windowHeight = window.innerHeight;
      const elementTop = el.getBoundingClientRect().top;
      const visiblePoint = 120;

      if (elementTop < windowHeight - visiblePoint) {
        el.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();

  (() => {
  const section = document.querySelector('.foodza-stack-section');
  const card1 = section.querySelector('.foodza-card-restaurant');
  const card2 = section.querySelector('.foodza-card-driver');

  window.addEventListener('scroll', () => {
    const rect = section.getBoundingClientRect();
    const progress = Math.min(Math.max(-rect.top / window.innerHeight, 0), 1);

    // CARD 1 sort vers le haut
    card1.style.transform = `
      translateY(${-progress * 220}px)
      scale(${1 - progress * 0.08})
    `;
    card1.style.opacity = 1 - progress * 0.8;

    // CARD 2 prend la place AU-DESSUS
    card2.style.transform = `
      translateY(${(1 - progress) * 220}px)
      scale(${0.92 + progress * 0.08})
    `;
    card2.style.opacity = progress;
    card2.style.zIndex = progress > 0.4 ? 4 : 2;
  });
})();

  const animatedSections = document.querySelectorAll('.animate-on-scroll');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, { threshold: 0.4 });

  animatedSections.forEach(section => {
    observer.observe(section);
  });
