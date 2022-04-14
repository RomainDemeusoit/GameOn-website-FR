// Change la classe de la barre de navigation et ouvre le menu de navigation OU le ferme
function editNav() {
  let navBar = document.getElementById("myTopnav");
  if (navBar.className === "topnav") {
    navBar.className += "responsive";
  } else {
    navBar.className = "topnav";
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





// Verififier que le prénom est correcte, sinon message d'erreur
function firstChecked() {
  if (/^[a-z ,.'-]+$/i.test(inputs[0].value) && inputs[0].value.length >= 2) {
    formData[0].setAttribute('data-error-visible',"false");
  } else {
    formData[0].setAttribute('data-error','Veuillez entrer 2 caractères minimum et seulement des lettres pour le champ du prénom.');
    formData[0].setAttribute('data-error-visible',"true");
    erreur = "Veuillez renseigner tous les champs correctement";
  }
}

// Verififier que le nom est correcte, sinon message d'erreur
function lastChecked() {
  if (/^[a-z ,.'-]+$/i.test(inputs[1].value) && inputs[1].value.length >= 2) {
    formData[1].setAttribute('data-error-visible',"false");
  } else {
    formData[1].setAttribute('data-error','Veuillez entrer 2 caractères minimum et seulement des lettres pour le champ du nom.');
    formData[1].setAttribute('data-error-visible',"true");
    erreur = "Veuillez renseigner tous les champs correctement";
  }
}


// Verifier que l'adresse mail est correcte
function mailChecked() {
  if (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(inputs[2].value)) {
    formData[2].setAttribute('data-error-visible',"false");
  } else {
    formData[2].setAttribute('data-error','Veuillez entrer une adresse E-mail valide.');
    formData[2].setAttribute('data-error-visible',"true");
    erreur = "Veuillez renseigner tous les champs correctement";
  }
}


// Verifier que la date est valide
function dateChecked() {
  if (/^[0-9]{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])/.test(inputs[3].value)) {
    formData[3].setAttribute('data-error-visible',"false");
  } else {
    formData[3].setAttribute('data-error','Vous devez entrer une date de naissance valide.');
    formData[3].setAttribute('data-error-visible',"true");
    erreur = "Veuillez renseigner tous les champs correctement";
  }
}


// Verifier que le nombre de tournois est correcte
function tournamentsChecked() {
  if (inputs[4].value) {
    formData[4].setAttribute('data-error-visible',"false");
  } else {
    formData[4].setAttribute('data-error','Vous devez entrer le nombre de tournois que vous avez effectué.');
    formData[4].setAttribute('data-error-visible',"true");
    erreur = "Veuillez renseigner tous les champs correctement";
  }
}


// Verifier que une des destination est cochée
function destinationChecked() {
  for (let i = 0; i < 5; i++) {
    if(checkboxs[i].checked){
      formData[5].setAttribute('data-error-visible',"false");
      return ;
    }
  }
  erreur = "Veuillez renseigner tous les champs";
  formData[5].setAttribute('data-error','Vous devez choisir une option.');
  formData[5].setAttribute('data-error-visible',"true");
}


// Verifier que les conditions générales sont cochées
function termsChecked() {
  if (checkboxs[6].checked) {
    formData[6].setAttribute('data-error-visible',"false");
    return true;
  } else {
    erreur = "Veuillez renseigner tous les champs";
    formData[6].setAttribute('data-error','Vous devez acceptez les termes et conditions.');
    formData[6].setAttribute('data-error-visible',"true");
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

// Toutes les fonctions de vérifications sont effectuées quand on clique sur le bouton submit
// Si la variable erreur contient quelque chose (les informations ne sont pas correctes), alors les données ne sont pas envoyées et un message d'erreur s'affiche
// Si la variable erreur est vide (les informations sont correctes), alors le formulaire est caché et un message de confirmation apparait pendant 5 secondes avant que les données soient envoyées
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


