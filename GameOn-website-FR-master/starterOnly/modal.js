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
const closeModal = document.querySelector('.close');
const labelsFormulaire = document.getElementsByTagName('label');
const labelPrenom = labelsFormulaire [0];
const labelNom = labelsFormulaire [1];
const labelEmail = labelsFormulaire [2];
const labelDateNaissance = labelsFormulaire [3];
const labelNombreTournois = labelsFormulaire [4];
const btnSubmit = document.querySelector(".btn-submit");
const form = document.querySelector('form');
const btnsRadio = document.querySelectorAll("input[name='location']");
const btnConditionsUtilisation = document.getElementById("checkbox1");


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// ajout attribut form
labelPrenom.setAttribute("for","first");
labelNom.setAttribute("for","last");
labelEmail.setAttribute("for","email");
labelDateNaissance.setAttribute("for","birthdate");
labelNombreTournois.setAttribute("for","quantity");

// close modal
closeModal.addEventListener('click', function() {
  modalbg.style.display = "none";
})

// Validation du formulaire

/******************VALIDATION PRENOM****************/
form.first.addEventListener('change', function(){
  validFirstName(this);
});

const validFirstName = function(inputFirst){
  let regExpName = new RegExp ('^[a-zA-Z]{2,}','g');
  
  let testFirst = regExpName.test(inputFirst.value);

  if (testFirst){
    return true;
  }else {
    return false;
  }
};

/******************VALIDATION NOM****************/
form.last.addEventListener('change', function(){
  validLastName(this);
});

const validLastName = function(inputLast){
  let regExpName = new RegExp ('^[a-zA-Z]{2,}','g');
  
  let testLast = regExpName.test(inputLast.value);

  if (testLast){
    return true;
  }else {
    return false;
  }

};


/******************VALIDATION EMAIL****************/
form.email.addEventListener('change', function(){
  validEmail(this);
});

const validEmail = function (inputEmail){
  let emailRegExp = new RegExp ('^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$','g');

  let testEmail = emailRegExp.test(inputEmail.value);

  if (testEmail){
    return true;
  }else {
    return false;
  }
}

/******************VALIDATION VALEUR NUMERIQUE****************/
form.quantity.addEventListener('change', function(){
  validQuantity(this);
});

const validQuantity = function (inputQuantity){
  let numberRegExp = new RegExp ('^[1-99]{1,2}$','g');

  let testQuantity = numberRegExp.test(inputQuantity.value);

  if (testQuantity){
    return true;
  }else {
    return false;
  }
}

/****************VALIDATION BOUTON RADIO****************/

for (var i = 0; i < btnsRadio.length; i++) {
  btnsRadio[i].addEventListener("change", displayCheck);
}

function displayCheck() {
  if (btnsRadio[0].checked) {
    console.log("New York");
    return true;
  }
  
  else if(btnsRadio[1].checked){
    console.log("SF");
    return true;
  }
  
  else if(btnsRadio[2].checked){
    console.log("seattle");
    return true;
  }
  
  else if(btnsRadio[3].checked){
    console.log("Chicago");
    return true;
  }
  
  else if(btnsRadio[4].checked){
    console.log("Boston");
    return true;
  }

  else if(btnsRadio[5].checked){
    console.log("Portland");
    return true;
  }
  else {
    return false;
  }
}

/****************VALIDATION CONDITIONS GENERALES****************/

form.checkbox1.addEventListener('change', function() {
  validConditions(this);
});

const validConditions = function(){
  if (btnConditionsUtilisation.checked) {
    return true;
  } else {
    return false;
  }
}

/****************ENVOIE DU FORMULAIRE****************/
form.addEventListener('submit', function(e){
  e.preventDefault();
  if(validFirstName(form.first) && validLastName(form.last) && validEmail(form.email) && validQuantity(form.quantity) && displayCheck(form.location) && validConditions(form.checkbox1)){
    form.submit();
    alert("envoyé!");
  }
  else{
    console.log("envoie impossible");
  }
});


