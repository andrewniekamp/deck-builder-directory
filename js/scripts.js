//business logic
function Card(cardName, cardType) {
  this.name = cardName;
  this.type = cardType;
}

Card.prototype.nameAndClass = function() {
  return this.class + ": " + this.name;
}

//user interface logic
$(function(){
  $("form#new-card").submit(function(event) {
    event.preventDefault();
    var cardNameInput = $("#new-card-name").val();
    var cardTypeInput = $("#new-card-type").val();

    var newCard = new Card(cardNameInput, cardTypeInput);

    $("#deck").append("<li><span class='card'>" + newCard.name + "</span></li>");

    $("#new-card-name").val("");
    $("#new-card-type").val("");

    $(".card").last().click(function() {
      $("#show-card").show();
      $("#show-card h2").text(newCard.name);
      $(".card-name").text(newCard.name);
      $(".card-type").text(newCard.type);
    })
  })
})
