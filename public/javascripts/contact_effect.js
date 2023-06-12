/*File name:     effects.js 
Student name:    Jose Cabrera
Student ID:      301212338
Date:            07/06/2023
*/ 

let inputs = document.querySelectorAll(".form-control");
console.log(inputs);

inputs.forEach(element => {
    element.addEventListener("focus", () => {
        element.style.boxShadow = "0 0 0 0.2rem rgba(172, 9, 9, 0.774)";
    });
    element.addEventListener("blur", () => {
        element.style.boxShadow = "";
    });
});