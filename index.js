let formData = document.querySelector(".form");
let submitButton = document.querySelector(".button");
let errorMessages = document.querySelectorAll(".error-message");
let emptyFieldMessages = document.querySelectorAll(".empty-field");
let showPasswordBtn = document.querySelector(".btn");

let firstName,lastName,email,password;
let firstNameTarget,lastNameTarget,emailTarget,passwordTarget;
let firstNameFlag,lastNameFlag,emailFlag,passwordFlag;

let field;

let nameRegex = /^[a-z]+$/i;
let emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
let passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

for(let errorMessage of errorMessages){
    errorMessage.classList.add("d-none");
}

for(let message of emptyFieldMessages){
    message.classList.add("d-none");
}

formData.addEventListener("keyup",(event)=>{
    event.preventDefault();
    field = event.target.dataset.key;
    
    switch(field){
        case "firstName" :
            firstName = event.target.value;
            firstNameTarget = event.target;
            break;
        case "lastName" :
            lastName = event.target.value;
            lastNameTarget = event.target;
            break;
        case "email" :
            email = event.target.value;
            emailTarget = event.target;
            break;
        case "password":
            password = event.target.value;
            passwordTarget = event.target;
            break;
        default :
            firstName = lastName = email = password = "";
            break;
    }

});

submitButton.addEventListener("click",(event)=>{
    event.preventDefault();
    console.log(firstName,lastName,email,password);

     if(firstName){
        emptyFieldMessages[0].classList.add("d-none");
        if(!nameRegex.test(firstName)){
            firstNameTarget.classList.add("error");
            errorMessages[0].classList.remove("d-none");
            firstNameFlag = false;
        }else{
            firstNameTarget.classList.remove("error");
            errorMessages[0].classList.add("d-none");
            firstNameFlag  = true;
        }

     }else{
        emptyFieldMessages[0].classList.remove("d-none");
     }


     if(lastName){
        emptyFieldMessages[1].classList.add("d-none");
        if(!nameRegex.test(lastName)){
            lastNameTarget.classList.add("error");
            errorMessages[1].classList.remove("d-none");
            lastNameFlag = false;
        }else{
            lastNameTarget.classList.remove("error");
            errorMessages[1].classList.add("d-none");
            lastNameFlag = true;
        }
     }else{
        emptyFieldMessages[1].classList.remove("d-none");
     }


     if(email){
        emptyFieldMessages[2].classList.add("d-none");
        if(!emailRegex.test(email)){
            emailTarget.classList.add("error");
            errorMessages[2].classList.remove("d-none");
            emailFlag = false;
        }else{
            emailTarget.classList.remove("error");
            errorMessages[2].classList.add("d-none");
            emailFlag = true;
        }
     }else{
        emptyFieldMessages[2].classList.remove("d-none");
     }


     if(password){
        emptyFieldMessages[3].classList.add("d-none");
        if(!passwordRegex.test(password)){
            passwordTarget.classList.add("error");
            errorMessages[3].classList.remove("d-none");
            passwordFlag = false;
        }else{
            passwordTarget.classList.remove("error");
            errorMessages[3].classList.add("d-none");
            passwordFlag = true;
        }
     }else{
        emptyFieldMessages[3].classList.remove("d-none");
     }

     if(firstNameFlag && lastNameFlag && emailFlag && passwordFlag){
        firstNameTarget.value = lastNameTarget.value = emailTarget.value = passwordTarget.value = "";
        window.location.href = "success.html";
     }

});

showPasswordBtn.addEventListener("click",(event)=>{
    event.preventDefault();
   if(passwordTarget.getAttribute("type")==="text"){
      passwordTarget.setAttribute("type","password");
   }else{
      passwordTarget.setAttribute("type","text");
   }
});

