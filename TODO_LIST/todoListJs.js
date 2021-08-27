var inputID = document.getElementById('input_Id');
var inputName = document.getElementById('name');

var inCompletetableRow =document.getElementById('inCompletetableRow');
var completetableRow =document.getElementById('completetableRow');

//ref of buttons
var addItemToInCompleteList = document.getElementById('addItemToList');



addItemToInCompleteList.onclick = ()=>{
    var id  = inputID.value;
    var name  = inputName.value;
    addItem(id,name, inCompletetableRow);
}

const addItem = (id,name,target)=>{
    var row = `
    <tr>
      <td>${id}</td>
      <td>${name}</td>
      <td><input class="form-check-input" type="checkbox" value="" id=${id} onclick="addToComplete(this)"></td>
    </tr>
    `;
    target.innerHTML+=row;
}

const addItemToCompleteList = (id, name)=>{
    var row = `
    <tr>
    <td>${id}</td>
    <td>${name}</td>
    <td>Completed</td>
    <td><button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" onclick="crossButton(this)"></button></td>
</tr>
    `;
    completetableRow.innerHTML+=row;
}

function crossButton(getRef){
     var closeElement =getRef.closest('tr'); 
     localStorage.removeItem(closeElement.children[0].innerHTML);
     closeElement.remove();
}

function addToComplete(checkBoxRef) {
    var closestToReffered = checkBoxRef.closest('tr').children;
    var id  = closestToReffered[0].innerHTML;
    var name = closestToReffered[1].innerHTML;
    
    addItemToCompleteList(id,name);
    localStorage.setItem(id,name);
    checkBoxRef.closest('tr').remove();
}

var keys = Object.keys(localStorage);
for(let i=0;i<keys.length;i++){
    addItemToCompleteList(keys[i],localStorage.getItem(keys[i]));
} 
