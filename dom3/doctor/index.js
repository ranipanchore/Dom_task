
let form = document.querySelector("form");
let tbody = document.querySelector("tbody");
form.addEventListener("submit", formData)

let arrayData =JSON.parse(localStorage.getItem("arrayData")) || [];
tableData(arrayData)

function formData(){
    
    event.preventDefault()
    let doctorName = document.getElementById("employeeName").value;
    let doctorId = document.getElementById("doctorId").value;
    let spl = document.getElementById("spl").value;
    let exp = document.getElementById("exp").value;
    let email = document.getElementById("email").value;
    let mob = document.getElementById("mob").value;

    let formDataObj = {
        doctorName,
        doctorId,
        spl,
        exp,
        email,
        mob
    };
    
    arrayData.push(formDataObj);
    localStorage.setItem("arrayData",JSON.stringify(arrayData));
    tableData(arrayData)
    clearFormData()
}

function tableData(arr){
   tbody.innerHTML ="";
    for(let i=0; i<arr.length; i++){
        let  tr = document.createElement("tr");
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        let td3 = document.createElement("td");
        let td4 = document.createElement("td");
        let td5 = document.createElement("td");
        let td6 = document.createElement("td");
        let td7 = document.createElement("td");
        let td8 = document.createElement("td");
        
        td1.innerText = arr[i].doctorName;
        td2.innerText = arr[i].doctorId;
        td3.innerText = arr[i].spl;
        td4.innerText = arr[i].exp;
        td5.innerText = arr[i].email;
        td6.innerText = arr[i].mob;
        
// role condition
        if(arr[i].exp>=5){
            td7.innerText = "Senior";
        }
        else if(arr[i].exp<5 && arr[i].exp>=2)
        {
            td7.innerText = "Junior";
        }
        else{
            td7.innerText = "Trainee";
        }
        td8.innerText = "Delete";
        td8.addEventListener("click",function(event){
            console.log(event.target.parentNode.remove());
            event.target.parentNode.remove()
        })
        tbody.append(tr)
        tr.append(td1,td2,td3,td4,td5,td6,td7,td8);
    }
    
   console.log(arr);

}

function clearFormData(){
    document.getElementById("doctorName").value = "";
    document.getElementById("doctorId").value = "";
    document.getElementById("spl").value = "";
    document.getElementById("exp").value = "";
    document.getElementById("email").value = "";
    document.getElementById("mob").value = "";
}
