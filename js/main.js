/**
 * Main JavaScript file for the Casino Solutions website
 * Contains common functionality used across multiple pages
 */

document.addEventListener("DOMContentLoaded", function () {
  // ============================
  // UTILITY FUNCTIONS
  // ============================

  // Check if an element is in viewport
  function isInViewport(element, offset = 0.8) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top <=
        (window.innerHeight || document.documentElement.clientHeight) *
          offset && rect.bottom >= 0
    );
  }

  // Throttle function to limit the frequency of event handler execution
  function throttle(func, delay) {
    let lastCall = 0;
    return function (...args) {
      const now = new Date().getTime();
      if (now - lastCall < delay) {
        return;
      }
      lastCall = now;
      return func(...args);
    };
  }

  // Set current year in footer copyright
  const yearEl = document.getElementById("current-year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // ============================
  // HEADER FUNCTIONALITY
  // ============================

  // Elements
  const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");
  const mobileNav = document.querySelector(".mobile-nav");
  const menuOverlay = document.querySelector(".menu-overlay");
  const mobileNavLinks = document.querySelectorAll(
    ".mobile-nav__link, .mobile-nav__contact"
  );

  // Toggle mobile menu function
  function toggleMobileMenu() {
    mobileNav.classList.toggle("is-active");
    mobileMenuToggle.classList.toggle("is-active");
    menuOverlay.classList.toggle("is-active");
    document.body.classList.toggle("menu-open");
  }

  // Event listeners for mobile menu toggle
  if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener("click", function (e) {
      e.stopPropagation();
      toggleMobileMenu();
    });
  }

  // Close menu when clicking on overlay
  if (menuOverlay) {
    menuOverlay.addEventListener("click", function () {
      toggleMobileMenu();
    });
  }

  // Close menu when clicking on a mobile nav link
  if (mobileNavLinks.length > 0) {
    mobileNavLinks.forEach((link) => {
      link.addEventListener("click", function () {
        if (mobileNav && mobileNav.classList.contains("is-active")) {
          toggleMobileMenu();
        }
      });
    });
  }

  // Handle ESC key to close mobile menu
  document.addEventListener("keydown", function (e) {
    if (
      e.key === "Escape" &&
      mobileNav &&
      mobileNav.classList.contains("is-active")
    ) {
      toggleMobileMenu();
    }
  });

  // ============================
  // ELEMENTS TO ANIMATE
  // ============================

  // Header
  const header = document.querySelector(".header");

  // Navigation
  const allSections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(
    ".main-nav__link, .mobile-nav__link"
  );

  // Solutions section
  const solutionsSection = document.querySelector(".solutions-section");

  // Solution cards
  const solutionCards = document.querySelectorAll(".solution-card");

  // Hero image for parallax
  const heroImage = document.querySelector(".hero__image img");

  // Elements with reveal animation
  const revealElements = document.querySelectorAll(".reveal");

  // Initialize solution cards as visible by default (fix for the reveal issue)
  if (solutionCards.length > 0) {
    solutionCards.forEach((card, index) => {
      // Add is-visible class with a staggered delay
      setTimeout(() => {
        card.classList.add("is-visible");
      }, 200 * (index + 1));
    });
  }

  // Initially make the solutions section visible
  if (solutionsSection) {
    solutionsSection.classList.add("is-visible");
  }

  // Track scroll position
  let lastScrollTop = 0;
  let scrollTimer;

  // ============================
  // SCROLL HANDLER
  // ============================

  // Handle all scroll effects in one function to avoid conflicts
  function handleScrollEffects() {
    const currentScrollTop =
      window.pageYOffset || document.documentElement.scrollTop;

    // 1. Header visibility and sticky behavior
    if (header) {
      if (currentScrollTop > 100) {
        header.classList.add("header--scrolled");

        // Hide header when scrolling down, show when scrolling up
        if (currentScrollTop > lastScrollTop + 10) {
          // Scrolling down - hide header, but not when mobile menu is open
          if (!document.body.classList.contains("menu-open")) {
            header.style.transform = "translateY(-100%)";
          }
        } else if (currentScrollTop < lastScrollTop - 10) {
          // Scrolling up - show header
          header.style.transform = "translateY(0)";
        }
      } else {
        // At the top of the page
        header.classList.remove("header--scrolled");
        header.style.transform = "translateY(0)";
      }
    }

    // 2. Active nav link based on current section
    if (allSections.length > 0 && navLinks.length > 0) {
      let currentSection = "";

      allSections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (currentScrollTop >= sectionTop - 200) {
          currentSection = section.getAttribute("id");
        }
      });

      navLinks.forEach((link) => {
        link.classList.remove(
          "main-nav__link--active",
          "mobile-nav__link--active"
        );

        const href = link.getAttribute("href");
        if (href === `#${currentSection}` && currentSection !== "hero") {
          if (link.classList.contains("main-nav__link")) {
            link.classList.add("main-nav__link--active");
          } else if (link.classList.contains("mobile-nav__link")) {
            link.classList.add("mobile-nav__link--active");
          }
        }
      });
    }

    // 3. Hero image parallax effect
    if (heroImage && currentScrollTop < window.innerHeight) {
      heroImage.style.transform = `translateY(${currentScrollTop * 0.15}px)`;
    }

    // 4. Generic reveal animations
    if (revealElements.length > 0) {
      revealElements.forEach((element) => {
        if (isInViewport(element, 0.8)) {
          element.classList.add("is-visible");
        }
      });
    }

    // Update last scroll position
    lastScrollTop = currentScrollTop;

    // After scrolling stops, show the header again after a delay
    clearTimeout(scrollTimer);
    scrollTimer = setTimeout(function () {
      if (header) header.style.transform = "translateY(0)";
    }, 1000);
  }

  // Throttled scroll handler to improve performance
  const throttledScrollHandler = throttle(handleScrollEffects, 10);

  // Add scroll event listener
  window.addEventListener("scroll", throttledScrollHandler);

  // Run once on page load
  handleScrollEffects();

  // ============================
  // HERO SECTION FUNCTIONALITY
  // ============================

  // Scroll down button smooth scroll
  const scrollDownBtn = document.querySelector(".hero__scroll-down");

  if (scrollDownBtn) {
    scrollDownBtn.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        // Calculate header height for offset
        const headerHeight = header ? header.offsetHeight : 0;

        // Scroll to target section with header offset
        window.scrollTo({
          top: targetSection.offsetTop - headerHeight,
          behavior: "smooth"
        });
      }
    });
  }

  // ============================
  // SOLUTION CARDS FUNCTIONALITY
  // ============================

  // Optional touch support for mobile devices
  if (
    solutionCards.length > 0 &&
    ("ontouchstart" in window || navigator.maxTouchPoints)
  ) {
    solutionCards.forEach((card) => {
      card.addEventListener("touchstart", function () {
        this.classList.add("is-touch-active");
      });

      card.addEventListener("touchend", function () {
        setTimeout(() => {
          this.classList.remove("is-touch-active");
        }, 1000); // Keep hover state visible for 1 second after touch
      });
    });

    // Add touch-specific styles
    const style = document.createElement("style");
    style.textContent = `
      .solution-card.is-touch-active .solution-card__hover-content {
        transform: translateY(0);
      }
      .solution-card.is-touch-active .solution-card__default-content {
        opacity: 0;
        transform: translateY(-10px);
      }
    `;
    document.head.appendChild(style);
  }

  // ============================
  // FORM VALIDATION
  // ============================

  const forms = document.querySelectorAll("form.validate");

  if (forms.length > 0) {
    forms.forEach((form) => {
      form.addEventListener("submit", function (e) {
        let valid = true;
        const requiredFields = form.querySelectorAll("[required]");

        requiredFields.forEach((field) => {
          if (!field.value.trim()) {
            valid = false;
            field.classList.add("is-invalid");

            // Create or update error message
            let errorMessage = field.parentNode.querySelector(".error-message");

            if (!errorMessage) {
              errorMessage = document.createElement("div");
              errorMessage.className = "error-message";
              field.parentNode.appendChild(errorMessage);
            }

            errorMessage.textContent = "This field is required";
          } else {
            field.classList.remove("is-invalid");
            const errorMessage =
              field.parentNode.querySelector(".error-message");
            if (errorMessage) {
              errorMessage.remove();
            }
          }
        });

        if (!valid) {
          e.preventDefault();
        }
      });

      // Clear error styling on input
      form.querySelectorAll("input, textarea, select").forEach((field) => {
        field.addEventListener("input", function () {
          this.classList.remove("is-invalid");
          const errorMessage = this.parentNode.querySelector(".error-message");
          if (errorMessage) {
            errorMessage.remove();
          }
        });
      });
    });
  }
});
