var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $caption = $("<p></p>");


$overlay.append($image);
$overlay.append($caption); //adds image and caption to overlay
$("body").append($overlay); //adds overlay

$("#images a").click(function(event){
  event.preventDefault(); 
  var imageLocation = $(this).attr("href");
 $image.attr("src", imageLocation);
  $overlay.show();
  var captionText = $(this).children("img").attr("alt");
  $caption.text(captionText);
}); //captures the click on the image and prevents default behavior.  updates overlay with the image clicked on and shows the overlay. Gets the alt attribute to set the caption.

$overlay.click(function(){
  $overlay.hide();
}); //hides the overlay when clicked on.
//code adapted from treehouse


