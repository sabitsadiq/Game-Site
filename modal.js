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
const closeBtn = document.querySelector(".close");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
// close modal form
closeBtn.addEventListener("click", () => {
  modalbg.style.display = "none";
});
function openSubmit() {
  closeForm = document.querySelector("form");
  submitForm = document.querySelector(".submit-modal");
  var firstInput = document.getElementById("first").value;
  var lastInput = document.getElementById("last").value;
  var emailInput = document.getElementById("email").value;
  var quantityInput = document.getElementById("quantity").value;
  if (
    firstInput.length &&
    lastInput.length &&
    emailInput.length &&
    quantityInput.length > 0
  ) {
    console.log("true");
    closeForm.style.display = "none";
    submitForm.style.display = "block";
  } else {
    console.log("false");
  }
}
// form validation
var form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateFirst();
  validateLast();
  validateEmail();
  validateQuantity();
});

// new work
var firstError = document.getElementById("first-error");
var lastError = document.getElementById("last-error");
var emailError = document.getElementById("email-error");
var quantityError = document.getElementById("quantity-error");
function validateFirst() {
  var firstInput = document.getElementById("first").value;
  if (firstInput.length == 0) {
    firstError.innerHTML = "Write first name";
    return false;
  }
  firstError.innerHTML = '<i class="fa-regular fa-circle-check"></i>';
  return true;
}
function validateLast() {
  var lastInput = document.getElementById("last").value;
  if (lastInput.length == 0) {
    lastError.innerHTML = "Write last name";
    return false;
  }
  lastError.innerHTML = '<i class="fa-regular fa-circle-check"></i>';
  return true;
}
function validateEmail() {
  var emailInput = document.getElementById("email").value;
  if (emailInput.length == 0) {
    emailError.innerHTML = "Write email address";
    return false;
  }
  if (!emailInput.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
    emailError.innerHTML = "Invalid email";
    return false;
  }
  emailError.innerHTML = '<i class="fa-regular fa-circle-check"></i>';
  return true;
}
function validateQuantity() {
  var quantityInput = document.getElementById("quantity").value;
  if (quantityInput.length == 0) {
    quantityError.innerHTML = "required";
    return false;
  }
  quantityError.innerHTML = '<i class="fa-regular fa-circle-check"></i>';
  return true;
}
const modalbg2 = document.querySelector(".bground");
const submitCloseBtn = document.querySelector(".submit-modal");
function closeSubmitModal() {
  console.log("click me");

  // submitCloseBtn.style.display = "none";
  modalbg2.style.display = "none";
}
