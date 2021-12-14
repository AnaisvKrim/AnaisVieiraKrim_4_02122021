function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
// span close
const closeBtn = document.querySelectorAll("#close");

console.log(closeBtn)

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
closeBtn.forEach((modal) => closeModal.addEventListener("click, closeModal"));


// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

function closeModal() {
   modalbg.style.display = "none";
  }
closeBtn.addEEventListener("click", closeModal());






