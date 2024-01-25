function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value.trim() !== "") {
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(taskInput.value));
        
        var deleteButton = document.createElement("button");
        deleteButton.appendChild(document.createTextNode("Delete"));
        deleteButton.onclick = function() {
            taskList.removeChild(li);
        };

        li.appendChild(deleteButton);
        taskList.appendChild(li);
        
        taskInput.value = "";
    }
}
