const form = document.querySelector(".form_login");
const inputUsername = document.querySelector(".input_login-user");
const inputPassword = document.querySelector(".input_login-pass");
const button = document.querySelector(".button_login");
const usernameIcon = document.querySelector(".user_icon");
const passwordIcon = document.querySelector(".pass_icon"); 
const formInput = document.querySelector(".input_form");
const error = document.querySelector(".form__error");

const loginAdmin = {
    username: "nole@compasso.com.br",
    password: "admin"
}

button.addEventListener("click", (event) =>{
    event.preventDefault();

    if(!(inputUsername.value === loginAdmin.username) && !(inputPassword.value === loginAdmin.password)){
        inputUsername.setAttribute("style", "border: 1px solid #E9B425");
        inputPassword.setAttribute("style", "border: 1px solid #E9B425");
        error.setAttribute("style", "display: flex;");
        usernameIcon.classList.remove("user_icon-active");
        passwordIcon.classList.remove("pass_icon-active");
    } else if ((inputUsername.value === loginAdmin.username) && (inputPassword.value === loginAdmin.password)){
        inputUsername.setAttribute("style", "border: 1px solid #FFFFFF");
        inputPassword.setAttribute("style", "border: 1px solid #FFFFFF");
        error.setAttribute("style", "display: none;");
        document.location.pathname = "C:/Users/novom/Desktop/Compass-front-end-challenge-Keepalive/home.html";
    } else {
        inputUsername.setAttribute("style", "border: 1px solid #E9B425");
        inputPassword.setAttribute("style", "border: 1px solid #E9B425");
        error.setAttribute("style", "display: flex;");
        usernameIcon.classList.remove("user_icon-active");
        passwordIcon.classList.remove("pass_icon-active");
    }

    const item = {
        username: inputUsername.value,
        password: inputPassword.value
    }
    
    localStorage.setItem("name", JSON.stringify(item));
    console.log(localStorage.getItem("name"));
    inputUsername.value = "";
    inputPassword.value = "";
})

inputUsername.addEventListener("keyup", (event) =>{
    if(event.target.value.length > 0){
        usernameIcon.classList.add("user_icon-active");
    } else {
        usernameIcon.classList.remove("user_icon-active");
    }
})

inputPassword.addEventListener("keyup", (event) => {
    if(event.target.value.length > 0){
        passwordIcon.classList.add("pass_icon-active");
    } else {
        passwordIcon.classList.remove("pass_icon-active");
    }
})