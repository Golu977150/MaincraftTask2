document.getElementById("contactForm")?.addEventListener("submit", function(e){
e.preventDefault();

let name = document.getElementById("name").value.trim();
let email = document.getElementById("email").value.trim();
let message = document.getElementById("message").value.trim();
let formMessage = document.getElementById("formMessage");

if(name === "" || email === "" || message === ""){
formMessage.style.color = "red";
formMessage.textContent = "All fields are required.";
return;
}

let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
if(!email.match(emailPattern)){
formMessage.style.color = "red";
formMessage.textContent = "Enter a valid email address.";
return;
}

formMessage.style.color = "#38bdf8";
formMessage.textContent = "Message sent successfully!";
});