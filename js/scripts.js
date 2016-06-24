//business logic
function Card(cardName, cardClass) {
  this.name = cardName;
  this.class = cardClass;
}

//user interface logic
$(function(){
  $("form#new-card").submit(function(event) {
    event.preventDefault();
    var cardNameInput = $("#new-card-name").val();
    var cardClassInput = $("#new-card-class").val();

    var newCard = new Card(cardNameInput, cardClassInput);

    $("#deck").append("<li><span class='card'>" + newCard.name + "</span></li>");

    $("#new-card-name").val("");
    $("#new-card-class").val("");

    $(".card").last().click(function() {
      $("#show-card").show();
      $("#show-card h2").text(newCard.name);
      $(".card-name").text(newCard.name);
      $(".card-class").text(newCard.class);
    })
  })
})
