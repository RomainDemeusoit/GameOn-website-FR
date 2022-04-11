function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += "responsive";
  } else {
    x.className = "topnav";
  }
}



// Vérifier que les 5 premiers champs ne sont pas vides
function formNoEmpty() {
  for (let i = 0; i < 5; i++) {
    if (inputs[i].value === null) {
      erreur = "Veuillez renseigner tous les champs";
    }
  }
}


// Verifier que une des destination est cochée
function destinationChecked() {
  for (let i = 0; i < 5; i++) {
    if(checkboxs[i].checked){
      document.getElementById('tournamentOptionsError').style.display = "none";
      return ;
    }
  }
  erreur = "Veuillez renseigner tous les champs";
  document.getElementById('tournamentOptionsError').style.display = "block";
}


// Verifier que les conditions générales sont cochées
function termsChecked() {
  if (checkboxs[6].checked) {
    document.getElementById('termsError').style.display = "none";
    return true;
  } else {
    erreur = "Veuillez renseigner tous les champs";
    document.getElementById('termsError').style.display = "block";
  }
}






// Verififier que le prénom est correcte, sinon message d'erreur
function firstChecked() {
  if (/^[a-z ,.'-]+$/i.test(inputs[0].value) && inputs[0].value.length >= 2) {
    document.getElementById('firstError').style.display = "none";
    inputs[0].style.border = "0";
  } else {
    document.getElementById('firstError').style.display = "block";
    inputs[0].style.border = "solid 2px red";
    erreur = "Veuillez renseigner tous les champs correctement";
  }
}

function lastChecked() {
  if (/^[a-z ,.'-]+$/i.test(inputs[1].value) && inputs[1].value.length >= 2) {
    document.getElementById('lastError').style.display = "none";
    inputs[1].style.border = "0";
  } else {
    document.getElementById('lastError').style.display = "block";
    inputs[1].style.border = "solid 2px red";
    erreur = "Veuillez renseigner tous les champs correctement";
  }
}

function mailChecked() {
  if (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(inputs[2].value)) {
    document.getElementById('mailError').style.display = "none";
    inputs[2].style.border = "0";
  } else {
    document.getElementById('mailError').style.display = "block";
    inputs[2].style.border = "solid 2px red";
    erreur = "Veuillez renseigner tous les champs correctement";
  }
}

function dateChecked() {
  if (/^[0-9]{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])/.test(inputs[3].value)) {
    document.getElementById('birthError').style.display = "none";
    inputs[3].style.border = "0";
  } else {
    document.getElementById('birthError').style.display = "block";
    inputs[3].style.border = "solid 2px red";
    erreur = "Veuillez renseigner tous les champs correctement";
  }
}

function tournamentsChecked() {
  if (inputs[4].value) {
    document.getElementById('tournamentNumberError').style.display = "none";
    inputs[4].style.border = "0";
  } else {
    document.getElementById('tournamentNumberError').style.display = "block";
    inputs[4].style.border = "solid 2px red";
    erreur = "Veuillez renseigner tous les champs correctement";
  }
}









// DOM Elements


const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalCloseBtn = document.querySelector(".close");
const checkboxs = document.getElementsByClassName("checkbox-input");
const inputs = document.getElementsByTagName("input");
const btnSubmit = document.getElementsByClassName("btn-submit")[0];
let erreur;

// Tous les boutons "modal-btn" ouvrent la modal au click
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// La fonction qui ouvre la modale
function launchModal() {
  modalbg.style.display = "block";
}

// La modal se ferme si on clique sur la croix
modalCloseBtn.addEventListener("click", () => {
  modalbg.style.display = "none";
})

// Toutes les fonctions de vérifications sont effectuées si on clique sur le bouton submit
btnSubmit.addEventListener("click", function(event) {
  formNoEmpty();
  destinationChecked();
  termsChecked();

  firstChecked();
  lastChecked();
  mailChecked();
  dateChecked();
  tournamentsChecked();
  
  if (erreur) {
    event.preventDefault();
    console.log(erreur);
    document.getElementById("erreur").innerHTML = erreur;
    erreur = null;
    return false;
  }
  else {
    event.preventDefault();
    document.getElementsByClassName('modal-body')[0].style.display = 'none' ;
    document.getElementsByClassName('modal-congrats')[0].style.display = 'flex' ;
    modalCloseBtn.style.display = 'none';
    setTimeout(function(){ document.getElementById("inscription").submit() }, 5000);
  }
});
  
    
    

    

  // let first = document.getElementById("first");
  // let last = document.getElementById("last");
  // let email = document.getElementById("email");
  // let birthdate = document.getElementById("birthdate");
  // let quantity = document.getElementById("quantity");

  // if (!first.value) {
  //   erreur = "Veuillez renseigner un prénom";
  // }


  // alert("Formulaire envoyé");


