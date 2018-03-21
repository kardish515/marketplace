$(document).ready(function(){
  $("form#nameAddress").submit(function(event) {
    event.preventDefault();
    var name = $("#name").val();
    var street = $("#street").val();
    var city = $("#city").val();
    var state = $("#state").val();
    var zipcode = $("#zipcode").val();
    window.location.href = "file:///Users/Guest/desktop/marketplace/receipt.html";
  });
});
