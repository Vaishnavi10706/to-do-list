function addTask() {
    const Task = document.getElementById('Task').value
    const day = document.getElementById("Date").value
    const Priority = document.getElementById("Prioritylevel").value
    if (Task === "" || day === "") {
        alert ("please enter both Task and day");
        return;
    }
    const table = document.getElementById("taskTable").getElementsByTagName("tbody")[0];
    const newRow = table.insertRow();

    const TaskCell = newRow.insertCell(0);
    const dayCell = newRow.insertCell(1);
    const PriorityCell = newRow.insertCell(2);
    const actionCell = newRow.insertCell(3);

    TaskCell.textContent = Task;
    dayCell.textContent = day;
    PriorityCell.textContent = Priority;
    if(Priority === "Low"){PriorityCell.className = "Priority-Low"};
    if(Priority === "Medium"){PriorityCell.className = "Priority-Medium"};
    if(Priority === "High"){PriorityCell.className = "Priority-High"};

    const deletebtn = document.createElement("button");
    deletebtn.textContent = "Delete";
    deletebtn.className = "delete";
    deletebtn.onclick = function () {
        table.deleteRow(newRow.rowIndex - 1);
    };
    
    actionCell.appendChild(deletebtn);
    document.getElementById("Task").value = ""
    document.getElementById("Date").value = ""
    document.getElementById("Prioritylevel").value = ""
}

let body = document.querySelector("body");
let newmode = document.querySelector("#ChangeMode");
let currmode = "light";
newmode.addEventListener("click", () => {
    if (currmode === "light") {
        currmode = "dark";
        body.classList.add("dark");
        body.classList.remove("light");
    } else {
        currmode = "light";
        body.classList.add("light");
        body.classList.remove("dark");
    }
})