const inputValue = document.getElementById("addList");
const listItems = document.getElementById("list-item");

function addTask(){

    if(inputValue.value === ''){
        alert("Please add task");
    }else{
        let li = document.createElement("li");
        li.innerHTML = inputValue.value;
        listItems.appendChild(li);
        //add cros or delete icon using this code \u00d7
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);

    }
    inputValue.value = "";

    //the saveTask have to be called here so that each time a task is added, it will be saved.
    saveTask();
}

//code to delete or check the task items

listItems.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveTask(); //it has to be called here also for it to save changes 

     }else if(e.target.tagName === "SPAN"){
        var result = confirm("Are you sure you want to delete this task?");
        if(result){
            e.target.parentElement.remove();
            saveTask(); //it has to be called here also for it to save changes
        } 
    }
}, false);

//to save the data in a local storage in our browser so that when the browser is refreshed it wont be deleted

function saveTask(){
    localStorage.setItem("data", listItems.innerHTML);
}

//Now to display all the list added we have to do this get item from local storage

function displayTask(){
    listItems.innerHTML = localStorage.getItem("data");
}
displayTask();