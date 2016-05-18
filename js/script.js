$(function() {

  // your js goes in betwen these two things

  // starting cut equal to zero
  var total = 0;
  var clicks = 0;

  // select all of the items
  $(".btn").click(function(){
    var value = $(this).attr("data-value");

    // this is changing the amount to a number so it can be added up
    var amountNumber = parseInt(value);
    total = total + amountNumber;

    //selects the thing we clicked on and adds the class already cut
    var question = $(this).attr("data-question");

    $('.' + question ).addClass("disabled");

    $('.' + question ).unbind('click');

    $(this).addClass("selected");

    clicks= clicks + 1;

    if (clicks == 5) {

      if (total >= 8) {
      $(".more-a").toggle()

      }
      else {
      $(".more-b").toggle()
      }
    }

  }); // end of what happens when item is clicked on


}); // don't delete this