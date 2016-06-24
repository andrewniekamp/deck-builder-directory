//business logic
function Card(cardName, cardType, cardTerrain, cardWeakness) {
  this.name = cardName;
  this.type = cardType;
  this.terrain = cardTerrain;
  this.weakness = cardWeakness;
}

Card.prototype.nameAndClass = function() {
  return this.type + ": " + this.name;
}

//user interface logic
$(function(){
  $("form#new-card").submit(function(event) {
    event.preventDefault();
    var cardNameInput = $("#new-card-name").val();
    var cardTypeInput = $("#new-card-type").val();
    var cardTerrainInput = $("#new-card-terrain").val();
    var cardWeaknessInput = $("#new-card-weakness").val();

    var newCard = new Card(cardNameInput, cardTypeInput, cardTerrainInput, cardWeaknessInput);

    $("#deck").append("<li><span class='card'>" + newCard.nameAndClass() + "</span></li>");

    $("#new-card-name").val("");
    $("#new-card-type").val("");
    $("#new-card-terrain").val("");
    $("#new-card-weakness").val("");

    $(".card").last().click(function() {
      $("#show-card").show();
      $("#show-card h2").text(newCard.name);
      $(".card-name").text(newCard.name);
      $(".card-type").text(newCard.type);
      $(".card-terrain").text(newCard.terrain);
      $(".card-weakness").text(newCard.weakness);
    })
  })
})
