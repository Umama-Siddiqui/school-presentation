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
    item.addEventListener("click", () => {
      if (window.innerWidth <= 768) {
        const dropdown = item.querySelector(".dropdown-menu");
        if (dropdown) {
          dropdown.style.display =
            dropdown.style.display === "block" ? "none" : "block";
        }
      }
    });
  });
  // Sticky Header on Scroll
  window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    if (window.scrollY > 50) {
      header.style.padding = "15px 0";
      header.style.background = "rgba(255, 255, 255, 0.98)";
    } else {
      header.style.padding = "5px";
    }
  });



  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  // Dropdown Toggle for Mobile (Optional)
  document.querySelectorAll(".nav-item").forEach((item) => {
    item.addEventListener("click", function (e) {
      if (window.innerWidth < 992) {
        const dropdown = this.querySelector(".dropdown-menu");
        if (dropdown) {
          dropdown.style.display =
            dropdown.style.display === "block" ? "none" : "block";
        }
      }
    });
  });
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

  const toggle = document.getElementById('prc-plan-toggle');
  const oneTimeSection = document.getElementById('prc-onetime-content');
  const saasSection = document.getElementById('prc-saas-content');

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
});
