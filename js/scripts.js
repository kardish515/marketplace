$(document).ready(function(){
  $("form#nameAddress").submit(function(event) {
    event.preventDefault();
    var name = $("#name").val();
    var street = $("#street").val();
    var city = $("#city").val();
    var state = $("#state").val();
    var zipcode = $("#zipcode").val();
    var combine = (city + ", " + state + " " + zipcode);
    $(".fullName").text(name);
    $("#street2").text(street);
    $("#combine").text(combine);
    $("#receipt").fadeIn();
    $("#nameAddress").hide();
  });
});
