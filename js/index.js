const form = document.querySelector(".form_login");
const inputUsername = document.querySelector(".input_login-user");
const inputPassword = document.querySelector(".input_login-pass");
const button = document.querySelector(".button_login");
const usernameIcon = document.querySelector(".user_icon");
const passwordIcon = document.querySelector(".pass_icon"); 
const formInput = document.querySelector(".input_form");
const error = document.querySelector("");

const loginAdmin = {
    username: "nole@compasso.com.br",
    password: "admin"
}

button.addEventListener("submit", (event) =>{
    event.preventDefault();
    console.log("função");

    if(!(inputUsername.value === loginAdmin.username) && !(inputPassword.value === loginAdmin.password)){
        console.log("p error");
        document.location.pathname = "./error.html";
    } else if ((inputUsername.value == loginAdmin.username) && (inputPassword.value == loginAdmin.password)){
        console.log("p home")
        inputUsername.setAttribute("style", "border: 1px solid #FFFFFF");
        inputPassword.setAttribute("style", "border: 1px solid #FFFFFF");
        error.setAttribute("style", "display: none;");
        document.location.pathname = "./home.html";
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
        usernameIcon.classList.add(".user_icon-error");
    } else {
        usernameIcon.classList.remove(".user_icon");
    }
})

inputPassword.addEventListener("keyup", (event) => {
    if(event.target.value.length > 0){
        passwordIcon.classList.add("pass_icon-error");
    } else {
        passwordIcon.classList.remove("pass_icon");
    }
})