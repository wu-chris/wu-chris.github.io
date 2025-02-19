let slideIndex = 0;


function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); 
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