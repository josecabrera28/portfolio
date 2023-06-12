/*File name:     effects.js 
Student name:    Jose Cabrera
Student ID:      301212338
Date:            07/06/2023
*/ 

let cards = document.querySelectorAll("img.card-img-top");
cards.forEach(element => {
    element.style.height='400px';      
});

let titles = document.querySelectorAll(".card-title");
titles.forEach(element => {
    element.style.color='#be2d2d';
});
