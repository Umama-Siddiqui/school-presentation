document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  if (hamburger) {
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      hamburger.innerHTML = navLinks.classList.contains("active")
        ? '<i class="fas fa-times"></i>'
        : '<i class="fas fa-bars"></i>';
    });
  }

  // Mobile Dropdown Toggle
  const navItems = document.querySelectorAll(".nav-item");

  navItems.forEach((item) => {
    // Check if item has a dropdown
    const dropdown = item.querySelector(".dropdown-menu");
    if (dropdown) {
      const link = item.querySelector("a");

      link.addEventListener("click", (e) => {
        if (window.innerWidth <= 992) {
          e.preventDefault(); // Prevent navigation on mobile for dropdown parents
          dropdown.classList.toggle("active");

          // Close other dropdowns
          navItems.forEach((otherItem) => {
            if (otherItem !== item) {
              const otherDropdown = otherItem.querySelector(".dropdown-menu");
              if (otherDropdown) {
                otherDropdown.classList.remove("active");
              }
            }
          });
        }
      });
    }
  });

  // Sticky Header on Scroll (Optional class toggle)
  window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // Scroll Animation Logic
  window.addEventListener('scroll', () => {
    const cards = document.querySelectorAll('.ep-card, .ep-feature-card');
    cards.forEach(card => {
      const cardTop = card.getBoundingClientRect().top;
      if (cardTop < window.innerHeight - 100) {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      }
    });
  });

  // Initial state for JS animation
  document.querySelectorAll('.ep-card, .ep-feature-card').forEach(c => {
    c.style.opacity = '0';
    c.style.transform = 'translateY(30px)';
    c.style.transition = 'all 0.6s ease-out';
  });

  // Pricing Plan Toggle
  const toggle = document.getElementById('prc-plan-toggle');
  const oneTimeSection = document.getElementById('prc-onetime-content');
  const saasSection = document.getElementById('prc-saas-content');

  if (toggle && oneTimeSection && saasSection) {
    toggle.addEventListener('change', function () {
      if (this.checked) {
        // SaaS selected
        oneTimeSection.classList.remove('active');
        saasSection.classList.add('active');
      } else {
        // One Time selected
        saasSection.classList.remove('active');
        oneTimeSection.classList.add('active');
      }
    });
  }
});
