$(document).ready(function() {
   $('div').hover(function() {
    $(this).fadeTo("slow", 1, function(){
 
     });
    $('form').fadeTo("slow", 1, function(){

    });
   });
   $('div').mouseleave(function() {
    $(this).fadeTo("slow", 0.7, function(){

    });
    $('form').fadeTo("slow", 0.7, function(){

    });
   });
   $('div').hover(function() {
    $('img').slideToggle(8500, function() {

    });
   });
});