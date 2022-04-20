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
// ---- label elements
const labelsFormulaire = document.getElementsByTagName('label');
const labelPrenom = labelsFormulaire [0];
const labelNom = labelsFormulaire [1];
const labelEmail = labelsFormulaire [2];
const labelDateNaissance = labelsFormulaire [3];
const labelNombreTournois = labelsFormulaire [4];
// ---- input elements
const form = document.querySelector('form'); 
const main = document.querySelector('main');
const inputPrenom = document.getElementById("first");
const inputNom = document.getElementById("last");
const inputMail = document.getElementById("email");
const inputBirthdate = document.getElementById("birthdate")
const inputQuantity = document.getElementById("quantity");
const btnsRadio = document.querySelectorAll("input[name='location']");
const btnConditionsUtilisation = document.getElementById("checkbox1");
// ---- balise small (erreurs input)
const baliseSmall1 = document.getElementById("alertPrenom");
const baliseSmall2 = document.getElementById("alertNom");
const baliseSmall3 = document.getElementById("alertMail");
const baliseSmall4 = document.getElementById("alertDate");
const baliseSmall5 = document.getElementById("alertNombre");
const baliseSmall6 = document.getElementById("alertBtnRadio");
const baliseSmall7 = document.getElementById("alertBtnCondition");
// ---- div et message de validation
const backgroundValidation = document.getElementById("background-validation");

// ajout attribut form
labelPrenom.setAttribute("for","first");
labelNom.setAttribute("for","last");
labelEmail.setAttribute("for","email");
labelDateNaissance.setAttribute("for","birthdate");
labelNombreTournois.setAttribute("for","quantity");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal
closeModal.addEventListener('click', function() {
  modalbg.style.display = "none";
})

// message validation
backgroundValidation.style.display= 'none';

/******************VALIDATION PRENOM****************/

function validateFirst(inputFirst){
  let regExpName = /^[a-zA-Z]{2,}$/;
  
  let testFirst = regExpName.test(inputFirst);

  if (testFirst && !inputFirst == " "){
    baliseSmall1.innerHTML = " "
    inputPrenom.classList.remove('input-error');
    return true;
  }else {
    baliseSmall1.innerHTML = 'Le prénom doit contenir au minimum 2 lettres';
    inputPrenom.classList.add('input-error');
    return false;
  }
};
 

/******************VALIDATION NOM****************/
function validateLast(inputLast){
  let regExpName = /^[a-zA-Z]{2,}$/;
  
  let testLast = regExpName.test(inputLast);

  if (testLast && !inputLast == " "){
    baliseSmall2.innerHTML = " ";
    inputNom.classList.remove('input-error');
    return true;
  }else {
    baliseSmall2.innerHTML = "Le nom doit contenir au minimum 2 lettres";
    inputNom.classList.add('input-error');
    return false;
  }

};


/******************VALIDATION EMAIL****************/
function validateEmail(inputEmail){
  let emailRegExp = /^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$/

  let testEmail = emailRegExp.test(inputEmail);

  if (testEmail && !inputEmail == " "){
    baliseSmall3.innerHTML = " ";
    inputMail.classList.remove('input-error');
    return true;
  }else {
    baliseSmall3.innerHTML = "Adresse e-mail non valide: un @ et un nom de domaine sont recquis";
    inputMail.classList.add('input-error');
    return false;
  }
}

/******************VALIDATION DATE DE NAISSANCE****************/
function validateBirthdate(inputdate){
  const dateRegex = /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/;


  let testBirthDate = dateRegex.test(inputdate);

  if(testBirthDate){
    baliseSmall4.innerHTML = "";
    inputBirthdate.classList.remove('input-error');
    return true;
  }else{
    baliseSmall4.innerHTML = "Veuillez saisir une date de naissance valide";
    inputBirthdate.classList.add('input-error');
    return false;
  }
}
/******************VALIDATION VALEUR NUMERIQUE****************/
function validateQuantity (inputNombre){
  let numberRegExp = /^[0-99]{1,2}$/;

  let testQuantity = numberRegExp.test(inputNombre);

  if (testQuantity){
    baliseSmall5.innerHTML = " "
    inputQuantity.classList.remove('input-error');
    return true;
  }else {
    baliseSmall5.innerHTML = "Veuillez saisir une valeur entre 0 et 99";
    inputQuantity.classList.add('input-error');
    return false;
  }
}

/****************VALIDATION BOUTON RADIO****************/

for (var i = 0; i < btnsRadio.length; i++) {
  btnsRadio[i].addEventListener("change", displayCheck);
}

function displayCheck() {
  if (btnsRadio[0].checked) {
    baliseSmall6.innerHTML = "";
    return true;
  }
  
  else if(btnsRadio[1].checked){
    baliseSmall6.innerHTML = "";
    return true;
  }
  
  else if(btnsRadio[2].checked){
    baliseSmall6.innerHTML = "";
    return true;
  }
  
  else if(btnsRadio[3].checked){
    baliseSmall6.innerHTML = "";
    return true;
  }
  
  else if(btnsRadio[4].checked){
    baliseSmall6.innerHTML = "";
    return true;
  }

  else if(btnsRadio[5].checked){
    baliseSmall6.innerHTML = "";
    return true;
  }
  else {
    baliseSmall6.innerHTML = "Veuillez choisir une option";
    return false;
  }
}

/****************VALIDATION CONDITIONS GENERALES****************/
btnConditionsUtilisation.addEventListener('click', function() {
  validateConditions(this);
});

const validateConditions = function(){
  if (btnConditionsUtilisation.checked) {
    baliseSmall7.innerHTML = " "
    return true;
  } else {
    baliseSmall7.innerHTML = "Veuillez vérifier et accepter les conditions d'utilisation"
    return false;
  }
}

/****************ENVOIE DU FORMULAIRE****************/

form.addEventListener('submit', function(e){
  e.preventDefault();
  if(validateFirst(inputPrenom.value)&& validateLast(inputNom.value) && validateEmail(inputMail.value) && validateBirthdate(inputBirthdate.value) && validateQuantity(inputQuantity.value) && displayCheck(form.location) && validateConditions(btnConditionsUtilisation.value)){
    msgValidation();
    form.reset();
    modalbg.style.display = "none";  
  }
  else{
    invalid();
  }
})

const msgValidation = function(){
  backgroundValidation.style.display = "block";
}

const invalid = function(){
if(!validateFirst(inputPrenom.value)){
  baliseSmall1.innerHTML= "Ce champs doit contenir au minimum 2 caractères";
  inputPrenom.classList.add('input-error');
}else{
  inputPrenom.classList.remove('input-error');
}
if(!validateLast(inputNom.value)){
  baliseSmall2.innerHTML= "Ce champs doit contenir au minimum 2 caractères";
  inputNom.classList.add('input-error');
}
if(!validateEmail(inputMail.value)){
    baliseSmall3.innerHTML= "Ce champs doit contenir une adresse email valide";
    inputMail.classList.add('input-error');
  }
if(!validateBirthdate(inputBirthdate.value)){
  baliseSmall4.innerHTML= "Ce champs doit respecter le format jj/mm/aaaa";
}
if(!validateQuantity(inputQuantity.value)){
  baliseSmall5.innerHTML= "Une valeur entre 0 et 99 doit être saisie";
  inputQuantity.classList.add('input-error');
}
if(!displayCheck(form.location)){
  baliseSmall6.innerHTML= "Une option doit être choisie";
}
if(!validateConditions(btnConditionsUtilisation)){
  baliseSmall7.innerHTML= "Veuillez vérifier et accepter les conditions d'utilisation";
}
}

// fermeture message validation

function btnFermerValidation() {
  backgroundValidation.style.display = "none";
};

function closeValidation(){
  backgroundValidation.style.display = "none";
};