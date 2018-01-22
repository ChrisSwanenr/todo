function Todo(name, item) {
  this.todoName = name;
  this.todoItem = item;
}

$(document).ready(function() {
  $("form#newTodo").submit(function(event) {
    event.preventDefault();
    $(".result").show();

    var inputtedName = $("input#todoName").val();
    var inputtedItem = $("input#todoItem").val();

    var newTodo = new Todo(inputtedName, inputtedItem);
    $("ul#list").append("<li><span class='todo'>" + newTodo.todoName + "</span></li>");

    $("input#todoName").val("");
    $("input#todoItem").val("");


    $(".todo").last().click(function() {
    $(this.parentElement).hide();

    })

    });
  });
