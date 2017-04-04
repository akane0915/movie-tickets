//Business Logic
function Ticket(title,time,age){
  this.title= title;
  this.time= time;
  this.age = age;
}

Ticket.prototype.release = function () {
  var price = 15.00;
  if(this.title === "Zoolander"){
    return price -= 5.00;
  } else {
    return price;
  }
}

Ticket.prototype.userAge = function (price) {
  var price = price;
  if (this.age >= 60){
    return price -= 2.50;
  } else {
    return price;
  }
}

Ticket.prototype.showTime = function(price) {
  var price = price;
  if (this.time === "3pm"){
    return price -= 2.50;
  } else {
    return price;
  }
}

// User Interface Logic
$(document).ready(function(){
  $("#movie-form").submit(function(event){
    event.preventDefault();

    var inputtedTitle = $("#movie-title").val();
    var inputtedTime = $("#show-time").val();
    var inputtedAge = $("#user-age").val();

    var newTicket = new Ticket(inputtedTitle,inputtedTime,inputtedAge);

    $(".output").text("Your ticket price is: $" + newTicket.showTime(newTicket.userAge(newTicket.release())));
  });
});
