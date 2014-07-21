$(document).ready(function(){

  $("form").submit(function(event){
    var Purchase = {
    description1: $("#description").val(),
    amount: $("#amount").val()
  }
    $("#purchases").show();
    $("#table").append("<tr><td>"+ Purchase.description1 +"</td><td>" + Purchase.amount + "</td></tr>")
    event.preventDefault();
  })
})