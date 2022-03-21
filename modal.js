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
const main = document.querySelector('main');
console.log(btnSubmit);

const inputPrenom = document.getElementById("first");
const inputNom = document.getElementById("last");
const inputMail = document.getElementById("email");
const inputBirthdate = document.getElementById("birthdate")
const inputQuantity = document.getElementById("quantity");

const inputsRadios = formData[5]
inputsRadios.setAttribute('id','boutonsRadio')
const inputLocation = document.getElementById("boutonsRadio");

const labelConditions = formData[6];
labelConditions.setAttribute('id', 'checkboxConditions');
const inputConditions = document.getElementById("checkboxConditions");
// ************ AJOUT ELEMENTS HTML ****************
const baliseSmall1 = document.createElement("small");
inputPrenom.insertAdjacentElement('afterend', baliseSmall1);
const baliseSmall2 = document.createElement("small");
inputNom.insertAdjacentElement('afterend', baliseSmall2);
const baliseSmall3 = document.createElement("small");
inputMail.insertAdjacentElement('afterend', baliseSmall3);
const baliseSmall4 = document.createElement("small");
inputQuantity.insertAdjacentElement('afterend', baliseSmall4);
const baliseSmall5 = document.createElement("small");
inputLocation.insertAdjacentElement('afterend', baliseSmall5);
const baliseSmall6 = document.createElement("small");
inputBirthdate.insertAdjacentElement('afterend', baliseSmall6);
const baliseSmall7 = document.createElement("small");
inputConditions.insertAdjacentElement('afterend', baliseSmall7);

// ajout d'une div et message de validation
const backgroundValidation = document.createElement("div");
backgroundValidation.setAttribute('id', 'background-validation');
main.insertAdjacentElement('afterend', backgroundValidation);
const divValidation = document.createElement("div");
backgroundValidation.insertAdjacentElement('afterbegin', divValidation);
divValidation.setAttribute('id','validation');
const messageValidation = document.createElement("p");
const pValidation = divValidation.insertBefore(messageValidation, null);
const boutonDivValidation = document.createElement("button");
messageValidation.insertAdjacentElement('afterend', boutonDivValidation);
boutonDivValidation.setAttribute("type","button");
const closeDivValidation = document.createElement('span');
closeDivValidation.setAttribute('id','close-msgValidation');
const closeValidation = divValidation.insertBefore(closeDivValidation, messageValidation)
btnSubmit.setAttribute("id","btnSubmit");

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
form.first.addEventListener('change', function(){
  validFirstName(this);
});

const validFirstName = function(inputFirst){
  let regExpName = new RegExp ('^[a-zA-Z]{2,}','g');
  
  let testFirst = regExpName.test(inputFirst.value);

  if (testFirst && !inputFirst.value == " "){
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
form.last.addEventListener('change', function(){
  validLastName(this);
});

const validLastName = function(inputLast){
  let regExpName = new RegExp ('^[a-zA-Z]{2,}','g');
  
  let testLast = regExpName.test(inputLast.value);

  if (testLast && !inputLast.value == " "){
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
form.email.addEventListener('change', function(){
  validEmail(this);
});

const validEmail = function (inputEmail){
  const emailRegExp = /^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$/

  let testEmail = emailRegExp.test(inputEmail.value);

  if (testEmail && !inputEmail.value == " "){
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
form.birthdate.addEventListener('change', function(){
  validBirthDate(this);
});

const validBirthDate = function(inputdate){
  const dateRegex = /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/;


  let testBirthDate = dateRegex.test(inputdate.value);

  if(testBirthDate){
    baliseSmall6.innerHTML = "";
    inputBirthdate.classList.remove('input-error');
    return true;
  }else{
    baliseSmall6.innerHTML = "Veuillez saisir une date de naissance valide";
    inputBirthdate.classList.add('input-error');
    return false;
  }
}
/******************VALIDATION VALEUR NUMERIQUE****************/
form.quantity.addEventListener('change', function(){
  validQuantity(this);
});

const validQuantity = function (inputNombre){
  let numberRegExp = new RegExp ('^[0-99]{1,2}$','g');

  let testQuantity = numberRegExp.test(inputNombre.value);

  if (testQuantity){
    baliseSmall4.innerHTML = " "
    inputQuantity.classList.remove('input-error');
    return true;
  }else {
    baliseSmall4.innerHTML = "Veuillez saisir une valeur entre 0 et 99";
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
    baliseSmall5.innerHTML = "";
    return true;
  }
  
  else if(btnsRadio[1].checked){
    baliseSmall5.innerHTML = "";
    return true;
  }
  
  else if(btnsRadio[2].checked){
    baliseSmall5.innerHTML = "";
    return true;
  }
  
  else if(btnsRadio[3].checked){
    baliseSmall5.innerHTML = "";
    return true;
  }
  
  else if(btnsRadio[4].checked){
    baliseSmall5.innerHTML = "";
    return true;
  }

  else if(btnsRadio[5].checked){
    baliseSmall5.innerHTML = "";
    return true;
  }
  else {
    baliseSmall5.innerHTML = "Veuillez choisir une option";
    return false;
  }
}

/****************VALIDATION CONDITIONS GENERALES****************/

form.checkbox1.addEventListener('change', function() {
  validConditions(this);
});

const validConditions = function(){
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
  if(validFirstName(form.first)&& validLastName(form.last) && validEmail(form.email) && validBirthDate(form.birthdate) && validQuantity(form.quantity) && displayCheck(form.location) && validConditions(form.checkbox1)){
    form.submit();
    msgValidation();
  
  }
  else{
    invalid();
  }
})

const msgValidation = function(){
  backgroundValidation.style.display = "block";
}

const invalid = function(){
if(!validFirstName(form.first)){
  baliseSmall1.innerHTML= "Ce champs doit contenir au minimum 2 caractères";
  inputPrenom.classList.add('input-error');
}else{
  inputPrenom.classList.remove('input-error');
}
if(!validLastName(form.last)){
  baliseSmall2.innerHTML= "Ce champs doit contenir au minimum 2 caractères";
  inputNom.classList.add('input-error');
}
if(!validEmail(form.email)){
    baliseSmall3.innerHTML= "Ce champs doit contenir une adresse email valide";
    inputMail.classList.add('input-error');
  }
if(!validBirthDate(form.birthdate)){
  baliseSmall6.innerHTML= "Ce champs doit respecter le format jj/mm/aaaa";
}
if(!validQuantity(form.quantity)){
  baliseSmall4.innerHTML= "Une valeur entre 0 et 99 doit être saisie";
  inputQuantity.classList.add('input-error');
}
if(!displayCheck(form.location)){
  baliseSmall5.innerHTML= "Une option doit être choisie";
}
if(!validConditions(form.checkbox1)){
  baliseSmall7.innerHTML= "Veuillez vérifier et accepter les conditions d'utilisation";
}
}

// message validation

boutonDivValidation.addEventListener('click', function() {
  backgroundValidation.style.display = "none";
});

closeDivValidation.addEventListener('click', function(){
  backgroundValidation.style.display = "none";
});

messageValidation.innerHTML= "Merci pour votre inscription !";
messageValidation.classList.add('message-validation');

boutonDivValidation.innerHTML= "Fermer";
boutonDivValidation.classList.add('bouton-validation');

closeDivValidation.classList.add('close-validation');

