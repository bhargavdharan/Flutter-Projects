// Add any additional JavaScript functionality you require here
// This is just a placeholder file for basic functionality

// Example: Smooth scrolling to anchor links
document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll("nav a");
  
    for (const link of links) {
      link.addEventListener("click", smoothScroll);
    }
  
    function smoothScroll(event) {
      event.preventDefault();
      const targetId = this.getAttribute("href");
      const targetPosition = document.querySelector(targetId).offsetTop;
  
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth"
      });
    }
  });
  