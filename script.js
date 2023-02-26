
const section = document.querySelector("section");
const fullEmail = document.querySelector(".fullEmail");
const submit = document.querySelector("#submit");
const passwordInput = document.querySelector("#password");
const eyeIcon = document.querySelector("#togglePwd");
const eyeClosed = document.querySelector("#eyeClosed")

const fullName = document.querySelector(".fullName")
const form = document.querySelector(".form")
let pattern = /^([a-z\d\.]+)@([a-z\d\-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/

const textemail = document.querySelector("#textEmail")
const textName = document.querySelector("#textName")



form.addEventListener("submit", function(event){
  event.preventDefault()
  if(fullName.value === ""){
    textName.style.display = "block"
  }
  if(fullEmail.value === ""){
    textemail.style.display = "block"
  }
})
fullName.addEventListener("input", function(){
  if(fullName.value !== ""){
    textName.style.display = "none"
    fullName.style.borderWidth = "1px"
    fullName.style.borderStyle = "solid"
    fullName.style.borderRadius = "5px"
    fullName.style.borderColor = "grey"
  }
})

fullEmail.addEventListener("input", function(){
  let emailValue = fullEmail.value
  if(emailValue.match(pattern)){
    textemail.textContent = ""
    submit.style.background = "#49BCE0"
  }else{
    textemail.textContent = "Váš e-mail je neplatný, zkuste to znovu"
    submit.style.background = "#C6CBCD"
  }
  
  if(emailValue === ""){
    text.textContent = ""
    section.classList.add("valid")
    section.classList.remove("invalid")
  }
})
/*** toggle***/

function togglePwdVisibility() {

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    eyeIcon.src = "./img/eyeclosed.svg";
    //eyeIcon.style.top = "0px"
    eyeIcon.alt = "Hide Password";
  } else {
    passwordInput.type = "password";
    eyeIcon.src = "./img/eye.png";
    eyeIcon.alt = "Show Password";
  }
}



