$(document).on('click', '#locationbutton', function(){
  $("#owner-title").text("Jhans Haus!");
  $("#owner-text").text(" The location of the building is found in 25 Sigma St Dona Vicenta Bajada Davao City and has around 28 Rooms with seperate prices for seperate sizes of the room");
  $("#owner-pic").attr("src","Image/House.jpg");
  $( "#gmaps" ).show();
});

$(document).on('click', '#ownerbutton', function(){
  $("#owner-title").text(" Meimei Y. Tan");
  $("#owner-text").text(" Meimei Y. Tan is the owner of this room for rent apartment located at Sigma St Dona Vicenta Bajada Davao City She has taken care of this business for almost 20 years and has continued to expand her business revenue through a small time sari-sari store to the tricycle and taxi busines");
  $("#owner-pic").attr("src","Image/Owner.jpg");
  $("#gmaps").hide();
});

$(document).on('click', '#room1button', function(){
  $("#room1").hide();
  $("#room1").replaceWith( "<h4>8000 Pesos , 3 Rooms </h4>" );
});

$(document).on('click', '#room2button', function(){
  $("#room2").hide();
  $("#room2").replaceWith( "<h4>6000 Pesos, 2 Rooms </h4>" );
});

$(document).on('click', '#room3button', function(){
  $("#room3").hide();
  $("#room3").replaceWith( "<h4>3500 Pesos , Studio Type </h4>" );
});

$(document).on('click', '#room4button', function(){
  $("#room4").hide();
  $("#room4").replaceWith( "<h4>4000 Pesos , Studio Type </h4>" );
});

$(document).on('click', '#room5button', function(){
  $("#room6").hide();
  $("#room5").replaceWith( "<h4>2500 Pesos , Studio Type </h4>" );
});

$(document).on('click', '#room6button', function(){
  $("#room6").hide();
  $("#room6").replaceWith( "<h4>3500 Pesos , Studio Type </h4>" );
});



$(function() {
  $("#draggable").draggable();
  $("#draggable1").draggable();
  $("#draggable2").draggable();
  $("#draggable3").draggable();
  $("#draggable4").draggable();
  $("#draggable5").draggable();
  $("#draggable6").draggable();

} );

function myFunction() {
  var elmnt = document.getElementById("myDIV");
  var x = elmnt.scrollLeft;
  var y = elmnt.scrollTop;
  document.getElementById ("demo").innerHTML = "Horizontally: " + x + "px<br>Vertically: " + y + "px";
}