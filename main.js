var addButton = document.getElementById("button");
addButton.addEventListener("click", todolist);

//Function to add anyting you want
function todolist() {
    //Create the li element to add the checkbox,paragraph and button
    let listItem = document.createElement("li");
    //To get the entered value in li element
    let enterText = document.getElementById("enterText").value;
    listItem.className = "li";
    document.getElementById('enterText').value = "";

    if (enterText === "") { //use if else condition to show the alert message
        alert("Please enter the to-do");
    } else {
        document.getElementById("exp").appendChild(listItem);
    }

    let checkBox = document.createElement("input");
    checkBox.setAttribute("type", "checkbox"); //To add the checkbox in li element
    checkBox.className = "checkBox"; //Add the class name to the checkbox
    listItem.appendChild(checkBox);
    checkBox.addEventListener("click", checkIt);
    let item = document.createTextNode(enterText);
    listItem.appendChild(item);

    function checkIt(e) { //Create funcion to when i clicked the checkbox then it sonds like BeepSound
        if (checkBox.checked == true) {
            // this.className = "checkIt"; //To checkoff the checkbox
            // this.removeEventListener('click',checkIt);
            document.getElementById('play').play();
        } else {
            document.getElementById('play').play();
        }
    }

    //To create Delete button where i can delete the add to-do item
    let deleteButton = document.createElement("button");
    deleteButton.appendChild(document.createTextNode("Delete"));
    //deleteButton.innerHTML = "Delete";
    deleteButton.className = "delete";
    listItem.appendChild(deleteButton);
    //Use an eventlistener to check the user able to delete the item
    //deleteButton.addEventListener("click", deleteItem);

    //To get the value and deleteItem from the li
    //     var remove = document.getElementsByClassName("remove");
    //     var j;
    //     for (j = 0; j < eraseItem.length; j++) {
    //     eraseItem[j].onclick = function() {
    //     var div = this.parentElement;
    //     div.style.display = "none";
    //   }
    // }
}

//this.listItem.appendChild(listItem);

// function dElement(){
//   var deleteButton = document.createElement('deleteButton');
