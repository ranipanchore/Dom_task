let likeButton = document.querySelector("button");
let countNumber = document.querySelector("span");

count = localStorage.getItem("like-count") || 0;
countNumber.innerText = count;

likeButton.addEventListener("click", function(){
    count++
    countNumber.innerText = count;

    localStorage.setItem("like-count",JSON.stringify(count));
})