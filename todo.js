var item = document.getElementById("item");
var color = document.getElementById("colors");
var enter = document.getElementById("enter");
var Tasks = document.getElementById("Tasks");
var clear = document.getElementById("clear");



enter.addEventListener("click", function() {

    var colorInput = color.value;
    var input = item.value;

//   Tasks.innerHTML += '<br>' + '<div>' + item.value + '</div>';
    Tasks.innerHTML += "<div style='color: " + colorInput + " '>" + input + "</div>";

clear.addEventListener("click" , function(){

Tasks.innerHTML= "";

});

});

Tasks.addEventListener("click", function(evt) {
    var targetTasks = evt.target;
    targetTasks.parentNode.removeChild(targetTasks);
});

