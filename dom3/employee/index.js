
let form = document.querySelector("form");
let arrData = []
let tbody = document.querySelector("tbody");
form.addEventListener("submit",getData)

function getData(){
    event.preventDefault();
    let employeeName = form.employeeName.value;
    let employeeID = form.employeeID.value;
    let department = form.department.value;
    console.log(department);

    let exp = form.exp.value;
    let mob = form.mob.value;
    let email = form.mob.value;
console.log(employeeName, employeeID, department,exp,mob, email, )
    let employeeData = {
        employeeName,
        employeeID, 
        department,
        exp,
        mob,
        email
    }

    arrData.push(employeeData);
    console.log(arrData);
    form.reset();
    dataDisplay();
}


function dataDisplay(){

    for(let i=0; i<arrData.length; i++){
        console.log(arrData[i]);
        let row = document.createElement("tr");

        let td1 = document.createElement("td");
        td1.innerText = arrData[i].employeeName;
    
        let td2 = document.createElement("td");
        td2.innerText = arrData[i].employeeID;
    
        let td3 = document.createElement("td");
        td3.innerText = arrData[i].department;
    
        let td4 = document.createElement("td");
        td4.innerText = arrData[i].exp;
    
        let td5 = document.createElement("td");
        td5.innerText = arrData[i].mob;
    
        let td6 = document.createElement("td");
        td6.innerText = arrData[i].email;

        let td7 = document.createElement("td");
        // role condition
        if(arrData[i].exp>=5){
            td7.innerText = "Senior";
        }
        else if(arrData[i].exp<5 && arrData[i].exp>=2)
        {
            td7.innerText = "Junior";
        }
        else{
            td7.innerText = "Fresher";
        }
        

        let td8 = document.createElement("td");
        td8.innerText = "Delete";
        td8.style.color = "white";
        td8.style.backgroundColor = "blue";
        td8.addEventListener("click", function(){
            event.target.parentNode.remove();
        })

    row.append(td1,td2,td3,td4,td5,td6,td7,td8);
    tbody.append(row);
    }

}