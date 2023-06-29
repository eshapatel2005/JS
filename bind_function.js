let a={
    firstName:"Esha",
    lastName:"Patel",
    city:"Surat",
    fullName:function(){
        return this.firstName + " " + this.lastName;
    }
}

let b={
    firstName:"John",
    lastName:"Doe"
}

let fullName=a.fullName.bind(b);

console.log(fullName());

var selectedRow = null

function onFormSubmit() {
    preventDefault();
       
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }


function readFormData() {
    var formData = {};
    formData["username"] = document.getElementById("username").value;
    formData["usertime"] = document.getElementById("usertime").value;
    formData["usercity"] = document.getElementById("usercity").value;
    formData["usernumber"] = document.getElementById("usernumber").value;
    formData["userperson"] = document.getElementById("userperson").value;
    formData["textArea"] = document.getElementById("textArea").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.username;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.usertime;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.usercity;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.usernumber;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.userperson;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.textArea;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("username").value = "";
    document.getElementById("usertime").value = "";
    document.getElementById("usercity").value = "";
    document.getElementById("usernumber").value = "";
    document.getElementById("userperson").value = "";
    document.getElementById("textArea").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("username").value = selectedRow.cells[0].innerHTML;
    document.getElementById("usertime").value = selectedRow.cells[1].innerHTML;
    document.getElementById("usercity").value = selectedRow.cells[2].innerHTML;
    document.getElementById("usernumber").value = selectedRow.cells[3].innerHTML;
    document.getElementById("userperson").value = selectedRow.cells[4].innerHTML;
    document.getElementById("textArea").value = selectedRow.cells[5].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.username;
    selectedRow.cells[1].innerHTML = formData.usertime;
    selectedRow.cells[2].innerHTML = formData.usercity;
    selectedRow.cells[3].innerHTML = formData.usernumber;
    selectedRow.cells[4].innerHTML = formData.userperson;
    selectedRow.cells[5].innerHTML = formData.textArea;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}