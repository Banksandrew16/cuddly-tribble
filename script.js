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
var presentHour = moment().format('h A');
var timeHour = presentHour.text
var hour = $("p.time-block").text();
if (task = "") {
    $("textarea.description").removeClass( "future", "past", "present");
} else if (presentHour > timeHour) {
    $("textarea.description").toggleClass( "past");
} else if (presentHour < timeHour) {
    $("textarea.description").toggleClass( "future");
} else if (presentHour == timeHour) {
    $("textarea.description").toggleClass( "present");
};