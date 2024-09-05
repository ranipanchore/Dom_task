let signupData = JSON.parse(localStorage.getItem('signup'));
console.log(signupData);

let loginForm = document.querySelector("form");


loginForm.addEventListener("submit", function(){
    event.preventDefault();
    let email = loginForm.email.value;
    let password = loginForm.password.value;


    let loginObjData ={
        email,
        password
    }

 let loginDataMatch = false;

    for(let i=0; i<signupData.length; i++){
        if(email === signupData[i].email && password === signupData[i].password){
            loginDataMatch = true;
        }
    }

    if(loginDataMatch == true){
        alert("Login Successful");
    }
    else{
        alert("Invalid Credentials");
    }

    window.location.href = "../pages/dashboard.html"
})