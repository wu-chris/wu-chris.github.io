let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
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

function showSection(sectionId) {
  document.querySelectorAll('.main').forEach(section => {
      section.style.display = 'none';
  });
  document.getElementById("table").display = 'none';
  document.getElementById(sectionId).style.display = 'unset';
}
function myFunction() {
  var text = document.getElementById("synopsis");
  var button = document.getElementById("toggleButton");

  if (text.style.display === "none") {
    text.style.display = "block";
    button.textContent = "Hide";
  } else {
    text.style.display = "none";
    button.textContent = "ReadMe";
  }
}
function toggleStylesheet() {
  var stylesheet = document.getElementById('stylesheet');
  if (stylesheet.getAttribute('href') === 'css/technical.css') {
    stylesheet.setAttribute('href', 'css/new.css');
  } 
  else {
    stylesheet.setAttribute('href', 'css/technical.css');
  }
}