let form = document.querySelector("form");
    let signupArrayData = JSON.parse(localStorage.getItem("signup")) || [];

console.log(signupArrayData);
form.addEventListener("submit", signupData);

function signupData() {
    event.preventDefault();

    let signupObjData = {
        fname: form.fname.value,
        email:form.email.value,
         password : form.password.value
    }
    console.log(fname, email, password);
    signupArrayData.push(signupObjData);
    console.log(signupArrayData)

    localStorage.setItem("signup", JSON.stringify(signupArrayData));

    alert("registered successfully");
    window.location.href = "../pages/login.html";
}

function formClear(){
    fname.innerText = "";
    email.innerText = "";
    password.innerText = "";
}