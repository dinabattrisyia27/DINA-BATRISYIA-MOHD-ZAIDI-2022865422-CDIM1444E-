// script.js

// JavaScript function for navigation
function navigate(destination) {
    window.location.href = destination;
}

function navigate(url) {
    window.location.href = url;
}

var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

// script.js

// Sample character data
const characters = [
    {
      name: "Aisyatullieza Binti Abdullah",
      birthday: "21 January 2004",
      birthplace: "Hospital Selayang, Selangor",
      hobby: "Read book/ebook/wattpad",
      favouriteFood: "Bakso",
      favouriteDrink: "Iced lemon tea"
    },
    {
      name: "Nornatashabilla Binti Abdullah",
      birthday: "10 December 2004",
      birthplace: "Hospital Selayang, Selangor",
      hobby: "Read book/ebook/wattpad",
      favouriteFood: "Bakso",
      favouriteDrink: "Iced lemon tea"
    }
  ];
  
  function updateCharacterInfo(characterIndex) {
    const character = characters[characterIndex];
    document.querySelectorAll('.name')[characterIndex].textContent = `Name: ${character.name}`;
    document.querySelectorAll('.birthday')[characterIndex].textContent = `Birthday: ${character.birthday}`;
    document.querySelectorAll('.birthplace')[characterIndex].textContent = `Birthplace: ${character.birthplace}`;
    document.querySelectorAll('.hobby')[characterIndex].textContent = `Hobby: ${character.hobby}`;
    document.querySelectorAll('.favourite-food')[characterIndex].textContent = `Favourite food: ${character.favouriteFood}`;
    document.querySelectorAll('.favourite-drink')[characterIndex].textContent = `Favourite drink: ${character.favouriteDrink}`;
  }
  
  window.onload = function() {
    for (let i = 0; i < characters.length; i++) {
      updateCharacterInfo(i);
    }
  };
 
  function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function scrollToBottom() {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
}

window.onscroll = function() {
    const scrollToTopButton = document.querySelector('.scroll-to-top');
    const scrollToBottomButton = document.querySelector('.scroll-to-bottom');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopButton.style.display = 'block';
        scrollToBottomButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
        scrollToBottomButton.style.display = 'none';
    }
};

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
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}


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
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function scrollToBottom() {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
}

window.onscroll = function () {
    const scrollToTopButton = document.querySelector('.scroll-to-top');
    const scrollToBottomButton = document.querySelector('.scroll-to-bottom');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopButton.style.display = 'block';
        scrollToBottomButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
        scrollToBottomButton.style.display = 'none';
    }
}

