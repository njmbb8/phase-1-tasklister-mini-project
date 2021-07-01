document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("submit", function(e){
    e.preventDefault();
    listItem = document.createElement('li');
    formTextInput = document.getElementById('new-task-description');
    listItem.textContent = formTextInput.value;
    document.getElementById("tasks").appendChild(listItem);
  })
});
