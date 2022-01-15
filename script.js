var task = $("textarea.description").text()
function loadTasks() {
    var storedTask = localStorage.getItem("task");
    var taskText = JSON.parse(storedTask);
    $("textarea.description").text(taskText);
    if (task === null) {
        task = "";
        return false;
    }
}
loadTasks();
var currentDate = moment().format('LL');
$( "p#currentDay").html(currentDate);
$("button.saveBtn").click(saveTask);
function saveTask() {
    localStorage.setItem("task", JSON.stringify(task));
};