function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += "responsive";
  } else {
    x.className = "topnav";
  }
}




function formNoEmpty() {
  for (let i = 0; i < 5; i++) {
    if (inputs[i].value === null) {
      erreur = "Veuillez renseigner tous les champs";
    }
  }
}

function destinationChecked() {
  for (let i = 0; i < 5; i++) {
    if(checkbox[i].checked){
      return ;
    }
  }
  erreur = "Veuillez renseigner tous les champs"
}

function conditionChecked() {
  if (checkbox[6].checked) {
    return true;
  } else {
    erreur = "Veuillez renseigner tous les champs";
  }
}





// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalCloseBtn = document.querySelector(".close");
const checkbox = document.getElementsByClassName("checkbox-input");
const inputs = document.getElementsByTagName("input");
const btnSubmit = document.getElementsByClassName("btn-submit")[0];
let erreur;

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form
modalCloseBtn.addEventListener("click", () => {
  modalbg.style.display = "none";
})

// form valid
btnSubmit.addEventListener("click", function(event) {
  formNoEmpty();
  destinationChecked();
  conditionChecked();
  
  if (erreur) {
    event.preventDefault();
    console.log(erreur);
    document.getElementById("erreur").innerHTML = erreur;
    erreur = null;
    return false;
  }
  else {
    
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


