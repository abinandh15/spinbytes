/**
 * Main JavaScript file for the Casino Solutions website
 * Contains common functionality used across multiple pages
 */

document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer copyright
    const yearEl = document.getElementById('current-year');
    if (yearEl) {
      yearEl.textContent = new Date().getFullYear();
    }
  
    // Mobile menu toggle functionality
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    
    if (mobileMenuToggle && mainNav) {
      mobileMenuToggle.addEventListener('click', function() {
        mainNav.classList.toggle('is-active');
        mobileMenuToggle.classList.toggle('is-active');
        document.body.classList.toggle('menu-open');
      });
    }
  
    // Handle dropdown menus for desktop navigation
    const dropdownItems = document.querySelectorAll('.main-nav__item--has-dropdown');
    
    if (dropdownItems.length > 0) {
      dropdownItems.forEach(item => {
        // For mobile/touch devices
        item.addEventListener('click', function(e) {
          if (window.innerWidth < 1024) {
            // Only prevent default if clicking the item itself, not a child link
            if (e.target === item || e.target === item.querySelector('.main-nav__link')) {
              e.preventDefault();
              item.classList.toggle('is-active');
            }
          }
        });
        
        // For desktop devices
        item.addEventListener('mouseenter', function() {
          if (window.innerWidth >= 1024) {
            this.classList.add('is-active');
          }
        });
        
        item.addEventListener('mouseleave', function() {
          if (window.innerWidth >= 1024) {
            this.classList.remove('is-active');
          }
        });
      });
    }
  
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        
        // Skip if it's just "#" or if it's a tab panel
        if (targetId === '#' || this.hasAttribute('role')) return;
        
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          e.preventDefault();
          
          window.scrollTo({
            top: targetElement.offsetTop - 100, // Offset for fixed header
            behavior: 'smooth'
          });
          
          // Update URL without scrolling
          history.pushState(null, null, targetId);
        }
      });
    });
  
    // Scroll reveal animation
    const revealElements = document.querySelectorAll('.reveal');
    
    if (revealElements.length > 0) {
      // Simple reveal function - can be replaced with a library like ScrollReveal for more complex animations
      const revealOnScroll = function() {
        for (let i = 0; i < revealElements.length; i++) {
          const elementTop = revealElements[i].getBoundingClientRect().top;
          const elementVisible = 150; // How many pixels from the viewport edge to start the animation
          
          if (elementTop < window.innerHeight - elementVisible) {
            revealElements[i].classList.add('is-visible');
          }
        }
      };
      
      // Run once on load
      revealOnScroll();
      
      // Run on scroll
      window.addEventListener('scroll', revealOnScroll);
    }
  
    // Sticky header functionality
    const header = document.querySelector('.header');
    
    if (header) {
      const makeHeaderSticky = function() {
        if (window.scrollY > 10) {
          header.classList.add('is-sticky');
        } else {
          header.classList.remove('is-sticky');
        }
      };
      
      // Run once on load
      makeHeaderSticky();
      
      // Run on scroll
      window.addEventListener('scroll', makeHeaderSticky);
    }
  
    // Form validation
    const forms = document.querySelectorAll('form.validate');
    
    if (forms.length > 0) {
      forms.forEach(form => {
        form.addEventListener('submit', function(e) {
          let valid = true;
          const requiredFields = form.querySelectorAll('[required]');
          
          requiredFields.forEach(field => {
            if (!field.value.trim()) {
              valid = false;
              field.classList.add('is-invalid');
              
              // Create or update error message
              let errorMessage = field.parentNode.querySelector('.error-message');
              
              if (!errorMessage) {
                errorMessage = document.createElement('div');
                errorMessage.className = 'error-message';
                field.parentNode.appendChild(errorMessage);
              }
              
              errorMessage.textContent = 'This field is required';
            } else {
              field.classList.remove('is-invalid');
              const errorMessage = field.parentNode.querySelector('.error-message');
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
        form.querySelectorAll('input, textarea, select').forEach(field => {
          field.addEventListener('input', function() {
            this.classList.remove('is-invalid');
            const errorMessage = this.parentNode.querySelector('.error-message');
            if (errorMessage) {
              errorMessage.remove();
            }
          });
        });
      });
    }
  
    // Tabs functionality
    const tabGroups = document.querySelectorAll('.tabs');
    
    if (tabGroups.length > 0) {
      tabGroups.forEach(tabGroup => {
        const tabButtons = tabGroup.querySelectorAll('[role="tab"]');
        const tabPanels = tabGroup.querySelectorAll('[role="tabpanel"]');
        
        tabButtons.forEach(button => {
          button.addEventListener('click', function() {
            // Deactivate all tabs
            tabButtons.forEach(btn => {
              btn.setAttribute('aria-selected', 'false');
              btn.classList.remove('is-active');
            });
            
            // Hide all tab panels
            tabPanels.forEach(panel => {
              panel.hidden = true;
            });
            
            // Activate the clicked tab
            this.setAttribute('aria-selected', 'true');
            this.classList.add('is-active');
            
            // Show the associated panel
            const panelId = this.getAttribute('aria-controls');
            const panel = document.getElementById(panelId);
            
            if (panel) {
              panel.hidden = false;
            }
          });
        });
      });
    }
  });


/**
 * Header-specific JavaScript functionality
 * Handles mobile menu toggle and scroll behavior
 */

document.addEventListener('DOMContentLoaded', function() {
    // Elements
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileNav = document.querySelector('.mobile-nav');
    const menuOverlay = document.querySelector('.menu-overlay');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav__link, .mobile-nav__contact');
    
    // Toggle mobile menu function
    function toggleMobileMenu() {
      mobileNav.classList.toggle('is-active');
      mobileMenuToggle.classList.toggle('is-active');
      menuOverlay.classList.toggle('is-active');
      document.body.classList.toggle('menu-open');
    }
    
    // Event listeners for mobile menu toggle
    if (mobileMenuToggle) {
      mobileMenuToggle.addEventListener('click', function(e) {
        e.stopPropagation();
        toggleMobileMenu();
      });
    }
    
    // Close menu when clicking on overlay
    if (menuOverlay) {
      menuOverlay.addEventListener('click', function() {
        toggleMobileMenu();
      });
    }
    
    // Close menu when clicking on a mobile nav link
    if (mobileNavLinks.length > 0) {
      mobileNavLinks.forEach(link => {
        link.addEventListener('click', function() {
          if (mobileNav.classList.contains('is-active')) {
            toggleMobileMenu();
          }
        });
      });
    }
    
    // Handle ESC key to close mobile menu
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && mobileNav.classList.contains('is-active')) {
        toggleMobileMenu();
      }
    });
  
    // Set active nav links based on current section
    function setActiveNavLinks() {
      // Get all sections
      const sections = document.querySelectorAll('section[id]');
      const navLinks = document.querySelectorAll('.main-nav__link, .mobile-nav__link');
      
      // Find which section is currently in view
      let currentSection = '';
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        if (window.scrollY >= (sectionTop - 200)) {
          currentSection = section.getAttribute('id');
        }
      });
      
      // Set active class for relevant links
      navLinks.forEach(link => {
        link.classList.remove('main-nav__link--active', 'mobile-nav__link--active');
        
        const href = link.getAttribute('href');
        if (href === `#${currentSection}`) {
          if (link.classList.contains('main-nav__link')) {
            link.classList.add('main-nav__link--active');
          } else if (link.classList.contains('mobile-nav__link')) {
            link.classList.add('mobile-nav__link--active');
          }
        }
      });
    }
    
    // Call on load and scroll
    window.addEventListener('scroll', setActiveNavLinks);
    setActiveNavLinks();
  
    // Make header sticky on scroll with animation
    const header = document.querySelector('.header');
    let lastScrollTop = 0;
    let scrollTimer;
  
    window.addEventListener('scroll', function() {
      const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
      if (currentScrollTop > 100) {
        header.classList.add('header--scrolled');
        
        // Hide header when scrolling down, show when scrolling up
        if (currentScrollTop > lastScrollTop + 10) {
          // Scrolling down - hide header, but not when mobile menu is open
          if (!document.body.classList.contains('menu-open')) {
            header.style.transform = 'translateY(-100%)';
          }
        } else if (currentScrollTop < lastScrollTop - 10) {
          // Scrolling up - show header
          header.style.transform = 'translateY(0)';
        }
      } else {
        // At the top of the page
        header.classList.remove('header--scrolled');
        header.style.transform = 'translateY(0)';
      }
      
      lastScrollTop = currentScrollTop;
      
      // Clear previous timeout and set a new one
      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(function() {
        // After scrolling has stopped, show the header again
        header.style.transform = 'translateY(0)';
      }, 1000);
    });
  });