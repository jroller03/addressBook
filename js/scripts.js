//business logic
Address.prototype.fullAddress = function() {
  return this.street + ", " + this.city + ", " + this.state + "," + this.type;
}
function Contact(first, last) {
  this.firstName = first;
  this.lastName = last;
  this.addresses = [];
}
function Address(street, city, state, type) {
  this.street = street;
  this.city = city;
  this.state = state;
  this.type = type;
}
function resetFields() {
    $("input#new-first-name").val("");
    $("input#new-last-name").val("");
    $("input.new-street").val("");
    $("input.new-city").val("");
    $("input.new-state").val("");

}

// user interface logic
$(document).ready(function() {
  $("#add-address").click(function() {
    $("#new-addresses").append('<div class="new-address">' +
     '<div class="form-group">' +
       '<label for="new-street">Street</label>' +
       '<input type="text" class="form-control new-street">' +
     '</div>' +
     '<div class="form-group">' +
       '<label for="new-city">City</label>' +
       '<input type="text" class="form-control new-city">' +
     '</div>' +
     '<div class="form-group">' +
       '<label for="new-state">State</label>' +
       '<input type="text" class="form-control new-state">' +
     '</div>' +
     '<div class="form-group"' +
      '<p>Type of Address:</p>' +
        '<input type="checkbox" name="type-address" value="home">Home<br>' +
        '<input type="checkbox" name="type-address" value="work">Work<br>' +
        '<input type="checkbox" name="type-address" value="other">Other<br>' +
      '</div>' +
   '</div>');
  });
  $("form#new-contact").submit(function(event) {
    event.preventDefault();

    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();

    var newContact = new Contact(inputtedFirstName, inputtedLastName);

    $(".new-address").each(function() {
      var inputtedStreet = $(this).find("input.new-street").val();
      var inputtedCity = $(this).find("input.new-city").val();
      var inputtedState = $(this).find("input.new-state").val();
      var inputtedType = $(this).find("input.new-type").val();
      $("input:checkbox[name=type-address]:checked").each(function(){
        inputtedType = $(this).val();
      });
      var newAddress = new Address(inputtedStreet, inputtedCity, inputtedState, inputtedType);
      newContact.addresses.push(newAddress);

    });


    $("ul#contacts").append("<li><span class='contact'>" + newContact.firstName + "</span></li>");

  

    $(".contact").last().click(function() {
    $("#show-contact").show();
    $("#show-contact h2").text(newContact.firstName);
    $(".first-name").text(newContact.firstName);
    $(".last-name").text(newContact.lastName);
    $("ul#addresses").text("");
     newContact.addresses.forEach(function(address) {
     $("ul#addresses").append("<li>" + address.fullAddress() + "</li>");
     });
    });
    $("input#new-first-name").val("");
    $("input#new-last-name").val("");
    $("input.new-street").val("");
    $("input.new-city").val("");
    $("input.new-state").val("");
    $("input.new-type").val("");

  });

});
