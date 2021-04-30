import React, { useEffect } from 'react';

const slides = document.querySelectorAll('.slides');
let slideIndex = 0;
showSlide();

function showSlide(n){
    if(slideIndex > slides.length - 1){
        slideIndex = 0;
    }
    if(slideIndex < 0){
        slideIndex = slides.length - 1;
    }
    for (let i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    slides[slideIndex].style.display = "block";
}
slides.forEach((item, index) => {
    item.addEventListener('click', () => {
        showSlide(slideIndex = index);
    })
});

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

prev.addEventListener('click', () => {
    slides.scrollLeft -= slides[0].offsetWidth;
    showSlide(slideIndex -= 1);
    if(slideIndex === slides.length - 1){
        slides.scrollLeft = slides.scrollWidth;
    }
});

next.addEventListener('click', () => {
    slides.scrollLeft += slides[0].offsetWidth;
    showSlide(slideIndex += 1);
    if(slideIndex === 0){
        slides.scrollLeft = 0;
    }
});