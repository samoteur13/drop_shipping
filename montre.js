
//let Menu = document.querySelector('#Menu')
//let menudropdown = document.getElementById('menudropdown')
//let test = document.querySelector('#test').style.display = "";



/* function MenuWatch slide */

let pinkWatch = document.querySelector('#pinkWatch')
let greyWatch = document.querySelector('#greyWatch')
let blueWAtch = document.querySelector('#blueWatch')
let blueWAtchImg = document.querySelector('#vente1')
let greyWAtchImg = document.querySelector('#vente2')
let pinkWAtchImg = document.querySelector('#vente3')


blueWAtch.addEventListener('click', function (event) {
    greyWAtchImg.style.position = "inherit", greyWAtchImg.style.zIndex = "0";
    pinkWAtchImg.style.position = "inherit", pinkWAtchImg.style.zIndex = "0";
    blueWAtchImg.style.position = "absolute", blueWAtchImg.style.zIndex = "1";
});


pinkWatch.addEventListener('click', function (event) {
    blueWAtchImg.style.position = "inherit", blueWAtchImg.style.zIndex = "0";
    greyWAtchImg.style.position = "inherit", greyWAtchImg.style.zIndex = "0";
    pinkWAtchImg.style.position = "absolute", pinkWAtchImg.style.zIndex = "1";
});

greyWAtchImg.addEventListener('click', function (event) {
    blueWAtchImg.style.position = "inherit", blueWAtchImg.style.zIndex = "0";
    pinkWAtchImg.style.position = "inherit", pinkWAtchImg.style.zIndex = "0";
    greyWAtchImg.style.position = "absolute", greyWAtchImg.style.zIndex = "1";
});


/* Menue dropdown */

let Menu = document.querySelector('#Menu')
let menuDropdown = document.querySelector('#menuDropdown')
let boolean = false

Menu.addEventListener('click', function (event) {

    if (boolean === false) {
        boolean = true
     
        menuDropdown.classList.add('slide_menu')
      
    } else {
        menuDropdown.classList.remove('slide_menu')
        boolean = false
    }
});




/* dropdown form */

let contacterNous = document.querySelector('#contacterNous')
let dropdownForm = document.querySelector('#dropdownForm')

contacterNous.addEventListener('click', function () {


    if (boolean === false) {
        boolean = true
        dropdownForm.style.display = "flex";
    } else {
        boolean = false
        dropdownForm.style.display = "none"
    }


});


