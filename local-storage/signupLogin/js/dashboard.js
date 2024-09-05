
let LoginUserName = localStorage.getItem('loginUser');
console.log(LoginUserName);


let navbar = document.getElementById("username");

if(LoginUserName != null){

navbar.innerText=""

let username = document.createElement("h3");
    username.innerText = LoginUserName;

let logoutButton = document.createElement("a");
logoutButton.innerText="Logout";
logoutButton.addEventListener("click",function(){
    logoutButton.href = "../pages/login.html";
    localStorage.removeItem("loginUser");
})

nav.append(username, logoutButton);
}

let externalData = JSON.parse(localStorage.getItem('data'));
console.log(externalData);

let dashboardData = document.querySelector("#dashboardData");
    dashboardData.style.textAlign = 'center';
    dashboardData.style.display = 'grid';
    dashboardData.style.gridTemplateColumns = "repeat(auto-fill, minmax(400px, 1fr))";
if(LoginUserName != null && externalData!= null){
   

    for(let i=0; i<externalData.length; i++){
        
        let div = document.createElement("div");
        div.style.textAlign = "center";

        let image = document.createElement("img");
        image.src = externalData[i].img;
        image.style.width = "60%"
        image.style.height = "50%"

        let name = document.createElement("h3");
        name.innerText = externalData[i].name;

        let recipe = document.createElement("p");
        recipe.innerText = externalData[i].recipe;

        let price = document.createElement("h3");
        price.innerText =  "price :"+ externalData[i].price;


        let ingredients = document.createElement("p");
        ingredients.innerText = externalData[i].ingredients;
      
        div.append(image,name,recipe,ingredients,price);
        dashboardData.append(div);
        
        
        
    }
}
else{
    dashboardData.innerHTML +=' <h1>No Data Available , please login</h1>'
}

