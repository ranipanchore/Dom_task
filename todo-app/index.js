let form = document.querySelector('form');

let tableDisplayNone = document.querySelector('table');
tableDisplayNone.style.display = 'none';


let tbody = document.querySelector('tbody');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    tableDisplayNone.style.display = 'block';
    form.style.display = 'none';

    let taskName = form.task.value;
    let priority = form.priority.value;

    let row = document.createElement('tr');
    let td1 = document.createElement('td');
    td1.innerText = taskName;
    let td2 = document.createElement('td');
    td2.innerText = priority;
    console.log(priority);
    if(priority == "High")
    {
     td2.style.color = "green"   
    }else{
        td2.style.color = "red"; 
    }
    let td3 = document.createElement('td');
    td3.innerText = "Delete Task"
    td3.addEventListener("click", function(){
        row.innerHTML = " "
    })

    tbody.append(row);
    row.append(td1, td2, td3);


})

