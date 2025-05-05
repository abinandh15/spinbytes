/**
 * Solutions cards with hover effects
 */

document.addEventListener('DOMContentLoaded', function() {
    // Solution cards animation on scroll
    const solutionCards = document.querySelectorAll('.solution-card');
    
    if (solutionCards.length > 0) {
      // Function to check if an element is in viewport
      function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
          rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.85 &&
          rect.bottom >= 0
        );
      }
      
      // Function to reveal cards when scrolled into view
      function revealCards() {
        solutionCards.forEach(card => {
          if (isInViewport(card) && !card.classList.contains('is-visible')) {
            card.classList.add('is-visible');
          }
        });
      }
      
      // Run on page load
      revealCards();
      
      // Run on scroll
      window.addEventListener('scroll', revealCards);
      
      // Optional touch support for mobile devices
      if ('ontouchstart' in window || navigator.maxTouchPoints) {
        solutionCards.forEach(card => {
          card.addEventListener('touchstart', function() {
            this.classList.add('is-touch-active');
          });
          
          card.addEventListener('touchend', function() {
            setTimeout(() => {
              this.classList.remove('is-touch-active');
            }, 1000); // Keep hover state visible for 1 second after touch
          });
        });
        
        // Add touch-specific styles
        const style = document.createElement('style');
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
    }
  });