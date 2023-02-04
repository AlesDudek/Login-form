
const section = document.querySelector("section");
const fullEmail = document.querySelector(".fullEmail");
const submit = document.querySelector("#submit")
//Váš e-mail je neplatný, zkuste to znovu

let pattern = /^([a-z\d\.]+)@([a-z\d\-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/

const text = document.querySelector("#text")

section.addEventListener("submit", function(event){
  event.preventDefault()
  if(fullEmail.value === ""){
  }

})

fullEmail.addEventListener("input", function(){
  let emailValue = fullEmail.value
  if(emailValue.match(pattern)){
    text.textContent = ""
    submit.style.background = "#49BCE0"
    
  }else{
    text.textContent = "Váš e-mail je neplatný, zkuste to znovu"
    submit.style.background = "#C6CBCD"
  }
  
  if(emailValue === ""){
    text.textContent = ""
    section.classList.add("valid")
    section.classList.remove("invalid")
  }
})
// document.getElementsByTagName("submit").style.background="#33A9CE"