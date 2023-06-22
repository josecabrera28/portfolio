/*File name:     effects.js 
Student name:    Jose Cabrera
Student ID:      301212338
Date:            07/06/2023
*/ 

let nav = document.querySelectorAll("ul>li>a");
nav.forEach(element => {
    element.onmouseover = ()=>{
        element.style.color="#dc3545";
    }
    element.onmouseout = ()=>{
      element.style.color="";
    }            
});

let img_lan = document.querySelectorAll("img.img-lan");
console.log(img_lan);
img_lan.forEach(element => {
    element.style.width="70%";
});

let img_jose = document.getElementById("img-jose");
img_jose.style.width="100%";