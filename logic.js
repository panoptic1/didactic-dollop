console.log("Let's build a jQuery app!");

$(document).ready(function() {
    console.log("This shit is ready yo")
});

$('.wrapper').addClass('div-blue');

//IIFE to wrap entire code creates data privacy and indicates readiness
$(function() {
    console.log("She's ready!");
    //getting content
    var $listHTML = $('ul').html();
    $('ul').append($listHTML);
    //the .html() method grabs ALL of the content inside of the ul (The four list items)

    var $listText = $
});