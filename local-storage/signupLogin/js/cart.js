let id = JSON.parse(localStorage.getItem("id"))
console.log(id);

let productData = JSON.parse(localStorage.getItem("data"))
console.log(productData);

let  = document.getElementById("objectIdDisplay");
objectIdDisplay.style.display = "flex";
objectIdDisplay.style.alignItems = "center";
objectIdDisplay.style.justifyContent = "center";




for(let i=0; i<productData.length; i++){
    
    if(id!=null && id == productData[i].idCategory)
    {
        let div = document.createElement("div");
         div.style.width = "60%";

        let img = document.createElement("img");
        img.src =  productData[i].img;

        let name = document.createElement("h1");
        name.innerText = productData[i].name;

        
        let recipe = document.createElement("p");
        recipe.innerText = productData[i].recipe;

        let price = document.createElement("h3");
        price.innerText =  "price :"+ productData[i].price;


        let ingredients = document.createElement("p");
        ingredients.innerText = productData[i].ingredients;

         let description = document.createElement("p");
        ingredients.innerText = productData[i].description;

        div.append(img, name, price,ingredients, recipe,description );
        objectIdDisplay.append(div);
        
    }
    
}
