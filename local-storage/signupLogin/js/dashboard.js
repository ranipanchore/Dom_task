
let LoginUserName = localStorage.getItem('loginUser');
console.log(LoginUserName);


let navbar = document.getElementById("username");

let inputSearch = document.createElement("input");

inputData = document.getElementById("search");
inputData.style.display = "none";



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

let Cart = document.createElement("a");
Cart.innerText="Cart";


// inputSearch.setAttribute("id","search");
// inputSearch.setAttribute("placeholder","search product here by name");
// inputSearch.style.padding="10px 5px"
// inputSearch.style.width="400px"
// inputData.display="block"

inputData.style.padding="10px 5px"
inputData.style.width="400px"
inputData.style.display = "block";
console.log(inputData.value);
inputData.addEventListener("change", searchFn);




nav.append(inputData,username,Cart, logoutButton );
}



let externalData = JSON.parse(localStorage.getItem('data'));
console.log(externalData);

let sortfilter = document.getElementById("sortfilter");
sortfilter.style.display = "none";
sortfilter.addEventListener("change", filterSorting);

let dashboardData = document.querySelector("#dashboardData");
    dashboardData.style.textAlign = 'center';
    dashboardData.style.display = 'grid';
    dashboardData.style.gridTemplateColumns = "repeat(auto-fill, minmax(400px, 1fr))";
   
    display(externalData);




function filterSorting(){
    // console.log(externalData);
    let sortedArray;
   if( sortfilter.value == "LTH"){
    sortedArray = externalData.sort(function(a,b){
        return a.price-b.price
    });
    // console.log(sortedArray);
    display(sortedArray)
   }
   else if (sortfilter.value == "HTL"){
    let sortedArray = externalData.sort(function(a,b){
        return b.price-a.price
    })
    // console.log(sortedArray);
    display(sortedArray)
   }
   else {
    display(externalData)
}
   
}

function searchFn(){
    console.log(inputData.value)
    let searchData = externalData.filter(function(el){
        
        return  el.name.includes(inputData.value);;
    })
    // console.log(searchData)
    display(searchData)
}

function display(aruArray){
    dashboardData.innerHTML = null
    if(LoginUserName != null && aruArray!= null){

        sortfilter.style.display = "block";

        for(let i=0; i<aruArray.length; i++){
            console.log( aruArray[i]);
            let div = document.createElement("div");
            div.style.textAlign = "center";
    
            let image = document.createElement("img");
            image.src = aruArray[i].img;
            image.style.width = "60%"
            image.style.height = "50%"
    
            let name = document.createElement("h3");
            name.innerText = aruArray[i].name;
    
            let recipe = document.createElement("p");
            recipe.innerText = aruArray[i].recipe;
    
            let price = document.createElement("h3");
            price.innerText =  "price :"+ aruArray[i].price;
    
    
            let ingredients = document.createElement("p");
            ingredients.innerText = aruArray[i].ingredients;
          
            let addToCart = document.createElement("a");
            addToCart.innerHTML = "Add to Cart";
            // addToCart.href = "../pages/cart.html"

            addToCart.addEventListener("click",function(){
                console.log(aruArray[i].idCategory)
                localStorage.setItem("id",JSON.stringify(aruArray[i].idCategory));
                console.log(localStorage.setItem("id",JSON.stringify(aruArray[i].idCategory)))
                window.location.href = "../pages/cart.html"
            })
            div.append(image,name,price,addToCart);
            dashboardData.append(div);
            
            
        }
    }
    else{
        dashboardData.innerHTML +=' <h1>No Data Available , please login</h1>'
    }
}

//  let arr = [7,8,1,2,369,11,44,555,789,98,5,4,3];

//  let a = arr.sort() //single digit work
//  let b = arr.sort(function(a,b){
//     return a-b //increasing order
//     // return b-a  decrease order
//  })
//  console.log(b);

