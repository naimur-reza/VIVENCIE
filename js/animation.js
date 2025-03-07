 


// Animation for the mobile menu
document.addEventListener("DOMContentLoaded", () => {


     gsap.registerPlugin(ScrollTrigger);

  const mobileMenuOpen = document.getElementById("mobile-menu-open");
  const mobileMenuClose = document.getElementById("mobile-menu-close");
  const mobileMenu = document.getElementById("mobile-menu");
  let isMenuOpen = false;

  function toggleMenu(open) {
    isMenuOpen = open;

    if (isMenuOpen) {
      gsap.to(mobileMenu, {
        duration: 0.3,
        opacity: 1,
        display: "block",
        y: 20,
        ease: "power3.out",
      });
      mobileMenuOpen.style.display = "none";
      mobileMenuClose.style.display = "block";
    } else {
      gsap.to(mobileMenu, {
        duration: 0.3,
        opacity: 0,
        y: 50,
        display: "none",
        ease: "power3.in",
      });
      mobileMenuOpen.style.display = "block";
      mobileMenuClose.style.display = "none";
    }
  }

  mobileMenuOpen.addEventListener("click", () => toggleMenu(true));
  mobileMenuClose.addEventListener("click", () => toggleMenu(false));

  // Initially hide the menu
  gsap.set(mobileMenu, { opacity: 0, y: -50, display: "none" });








//   navbar animation 

const logo = document.querySelector(".logo");
const navbar = document.querySelector(".navbar");


gsap.from(logo, {
    duration: 1,
    x: -100,
    opacity: 0,
    ease: "power2.out"
});

gsap.from(navbar.children, {
    duration: 1,
    opacity: 0,
    ease: "power2.out",
    stagger: 0.2
});


// common text animation
const textElements = document.querySelectorAll(".animate-item");

  // Loop through each element and apply GSAP animation individually
  textElements.forEach((element, index) => {
    gsap.from(element, {
      duration: 1,
      y: 30, // Move up by 50px
      opacity: 0, // Start with 0 opacity
      ease: "power2.out",
      delay:   0.2, // Add delay for staggered effect
      scrollTrigger: {
        trigger: element,
        start: "top 85%", // Animation triggers when element enters 85% of viewport
        end: "top 50%", // Ends animation at 50% of viewport
        toggleActions: "play none none none", // Play once, don’t repeat
        markers: false, // Set to true to debug
        
      },
      stagger: 0.2
    });
  });


  // footer animation 
  const footer = document.querySelector(".animate-footer");
  gsap.from(footer, {
    duration: 1,
    y: 50,  
    opacity: 0,  
    ease: "power2.out",
    scrollTrigger: {
      trigger: footer,
      start: "top 90%",  
      markers: false,  
    },
  });


});




 
 
 