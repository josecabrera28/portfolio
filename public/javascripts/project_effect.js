/*File name:     effects.js 
Student name:    Jose Cabrera
Student ID:      301212338
Date:            07/06/2023
*/ 

document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        let elements = document.getElementsByClassName('movie-effect');
        for (let i = 0; i < elements.length; i++) {
            elements[i].classList.remove('hidden');
        }
    }, 500);
});
let carousel= document.getElementById("carousel");
carousel.style.display ='none';
setTimeout(()=>{
    carousel.style.display ='flex';
},6000);