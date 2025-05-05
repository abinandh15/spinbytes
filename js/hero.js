/**
 * Hero section specific JavaScript
 */

document.addEventListener('DOMContentLoaded', function() {
    // Scroll down button smooth scroll functionality
    const scrollDownBtn = document.querySelector('.hero__scroll-down');
  
    if (scrollDownBtn) {
      scrollDownBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
          // Calculate the header height to offset the scroll
          const headerHeight = document.querySelector('.header').offsetHeight;
          
          // Scroll to target section with header offset
          window.scrollTo({
            top: targetSection.offsetTop - headerHeight,
            behavior: 'smooth'
          });
        }
      });
    }
    
    // Optional: Add parallax effect to hero image
    const heroImage = document.querySelector('.hero__image img');
  
    if (heroImage) {
      window.addEventListener('scroll', function() {
        const scrollY = window.scrollY;
        
        // Apply a slight parallax effect (move the image up slower than the scroll)
        if (scrollY < window.innerHeight) {
          heroImage.style.transform = `translateY(${scrollY * 0.15}px)`;
        }
      });
    }
    
    // Optional: Add typing effect to highlighted text
    const highlightedText = document.querySelector('.hero__title-highlight');
    
    if (highlightedText) {
      // Words to rotate through
      const words = ["Profitable", "Innovative", "Powerful", "Successful"];
      let currentIndex = 0;
      
      // Function to update the highlighted text
      function updateHighlightedText() {
        // Fade out
        highlightedText.style.opacity = 0;
        
        setTimeout(() => {
          // Update text
          currentIndex = (currentIndex + 1) % words.length;
          highlightedText.textContent = words[currentIndex];
          
          // Fade in
          highlightedText.style.opacity = 1;
        }, 500); // Half of animation duration
      }
      
      // Add transition for smooth fade effect
      highlightedText.style.transition = "opacity 0.5s ease";
      
      // Start the animation loop
      setInterval(updateHighlightedText, 3000); // Change word every 3 seconds
    }

    
  });