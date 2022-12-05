let circle = document.querySelector(".color-option");

   circle.addEventListener("click", (e)=>{
     let target = e.target;
     if(target.classList.contains("circle")) {
       circle.querySelector(".active").classList.remove("active");
       target.classList.add("active");
       document.querySelector(".main-images .active").classList.remove("active");
       document.querySelector(`.main-images .${target.id}`).classList.add("active");
    }
});

let circle2 = document.querySelector(".color-option2");

   circle2.addEventListener("click", (e)=>{
     let target = e.target;
     if (target.classList.contains("circle2")) {
       circle2.querySelector(".active2").classList.remove("active2");
       target.classList.add("active2");
       document.querySelector(".main-images2 .active2").classList.remove("active2");
       document.querySelector(`.main-images2 .${target.id}`).classList.add("active2");
    }
});


// ---------------------------------------------------------------------------------------------------------------------------


const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger = document.querySelector(".hamburger");
const closeIcon = document.querySelector("#close");
const menuIcon = document.querySelector("#open");
const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const button4 = document.querySelector("#button4");
const button5 = document.querySelector("#button5");

function toggleMenu() {
  if (menu.classList.contains("showMenu") || button1.classList.contains("closeMenu") || button2.classList.contains("closeMenu") || button3.classList.contains("closeMenu") || button4.classList.contains("closeMenu") || button5.classList.contains("closeMenu")) {
    menu.classList.remove("showMenu");
    button1.classList.remove("closeMenu");
    button2.classList.remove("closeMenu");
    button3.classList.remove("closeMenu");
    button4.classList.remove("closeMenu");
    button5.classList.remove("closeMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    button1.classList.add("closeMenu");
    button2.classList.add("closeMenu");
    button3.classList.add("closeMenu");
    button4.classList.remove("closeMenu");
    button5.classList.remove("closeMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);
button1.addEventListener("click", toggleMenu);
button2.addEventListener("click", toggleMenu);
button3.addEventListener("click", toggleMenu);
button4.addEventListener("click", toggleMenu);
button5.addEventListener("click", toggleMenu);