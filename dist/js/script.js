// Initialize Swiper
const swiper = new Swiper(".swiper", {
  // Optional parameters
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  effect: "fade",
  fadeEffect: {
    crossFade: false,
  },
});

// Initialize Swiper after components are loaded
document.addEventListener('DOMContentLoaded', function() {
  // Wait a brief moment for components to load
  setTimeout(() => {
    // Initialize Swiper
    const swiper = new Swiper(".swiper", {
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      effect: "fade",
      fadeEffect: {
        crossFade: false,
      },
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
          behavior: "smooth",
        });
      });
    });

    // Highlight active navigation item based on scroll position
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-links a");

    window.addEventListener("scroll", () => {
      let current = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop - 300) {
          current = section.getAttribute("id");
        }
      });

      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(current)) {
          link.classList.add("active");
        }
      });
    });

    // Initialize challenge drawers
    setupChallengeDrawers();
  }, 100); // Small delay to ensure components are loaded
});

// Function to setup challenge drawers that can be called after dynamic loading
function setupChallengeDrawers() {
  document.querySelectorAll('.challenge-title').forEach(button => {
    // Remove any existing event listeners to prevent duplicates
    button.removeEventListener('click', handleChallengeClick);
    // Add new event listener
    button.addEventListener('click', handleChallengeClick);
  });
}

// Separate function for the click handler
function handleChallengeClick() {
  const challengeItem = this.parentElement;
  const content = this.nextElementSibling;
  
  this.classList.toggle('active');
  content.classList.toggle('open');
  
  // Close other open challenges
  document.querySelectorAll('.challenge-item').forEach(item => {
    if (item !== challengeItem) {
      item.querySelector('.challenge-title').classList.remove('active');
      item.querySelector('.challenge-content').classList.remove('open');
    }
  });
}
