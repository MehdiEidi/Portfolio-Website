
// Scroll Spy
(function() {
  let sections = document.querySelectorAll(".section");
  let sectionsOffset = {};
  
  sections.forEach(function(a) {
    sectionsOffset[a.id] = a.offsetTop - 150;
  });

  window.onscroll = function() {
    let scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

    let index;
    for(index in sectionsOffset) {
      if(sectionsOffset[index] <= scrollPosition) {
        document.querySelector(".active").setAttribute('class', ' ');
        
        document.querySelector('a[href*=' + index + ']').setAttribute('class', 'active');
      }
    }
  }
})();


// Smooth Scrolling
(function() {
  const navLinks = document.querySelectorAll('nav ul li a');

  for(let navLink in navLinks) {
    if(navLinks.hasOwnProperty(navLink)) {
      navLinks[navLink].addEventListener('click', event => {
        event.preventDefault( );
        document.querySelector(navLinks[navLink].hash).scrollIntoView({behavior: "smooth"});
      });
    }
  }
})();


// Hamburger Menu 
function hamburgerMenu() {
  let mainMenu = document.querySelector('#main-menu');

  if(mainMenu.style.display === "block") {
    mainMenu.style.display = "none";
  } else {
    mainMenu.style.display = "block";
  }
}


// Make navigation bar display: flex after a certain width
window.addEventListener('resize', makeNavFlex);
function makeNavFlex() {
  let windowWidth = window.innerWidth;
  let mainMenu = document.querySelector("#main-menu");

  if(windowWidth >= 992.1) {
    mainMenu.style.display = "flex";
  } else if(mainMenu.style.display !== "block") {
    mainMenu.style.display = "none";
  }
}