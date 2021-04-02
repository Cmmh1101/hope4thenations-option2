// ================ Scroll Reveal

ScrollReveal().reveal('#hero');
ScrollReveal().reveal('#projects', { delay: 500 });
ScrollReveal().reveal('.project-item', { delay: 500 });
ScrollReveal().reveal('#aboutme', { delay: 500 });
ScrollReveal().reveal('#skillset', { delay: 500 });
ScrollReveal().reveal('#contact', { delay: 500 });


//  scroll down hide navbar - scroll up show navbar 

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("nav").style.top = "0";
        console.log('scrolling up')
    } else {
        document.getElementById("nav").style.top = "-100px";
        console.log('scrolling down')
    }
    prevScrollpos = currentScrollPos;
    
}

// ================ Responsive Menu
const menuBtn = document.getElementsByClassName('menu-btn')

const mobileMenu = document.getElementsByClassName('nav-menu')

const closeMenu = document.getElementsByClassName('close')



const clickedBtn = function() {
    mobileMenu[0].classList.toggle('active')
}

menuBtn[0].addEventListener('click', clickedBtn)

const clickedX = function() {
  mobileMenu[0].classList.remove('active')
}

closeMenu[0].addEventListener('click', clickedX)

// End of Responsive Menu

// Hero slideshow
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

// programs carousel

$(document).ready(function() {
    $('#autoWidth').lightSlider({
        autoWidth:true,
        loop:true,
        onSliderLoad: function() {
            $('#autoWidth').removeClass('cS-hidden');
        } 
    });  
  });

  // tabs

  function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  