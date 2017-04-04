//Business Logic
function Ticket(title,time,age){
  this.title= title;
  this.time= time;
  this.age = age;
}

Ticket.prototype.price = function () {
  var price = 15;
  if(this.title === "Zoolander"){
    return price -= 5;
  } else {
    return price;
  }
};







// User Interface Logic
$(document).ready(function(){
  $("#movie-form").submit(function(event){
    event.preventDefault();

    var inputtedTitle = $("#movie-title").val();
    var inputtedTime = $("#show-time").val();
    var inputtedAge = $("#user-age").val();

    var newTicket = new Ticket(inputtedTitle,inputtedTime,inputtedAge);
    console.log(newTicket.price());
  });
});
