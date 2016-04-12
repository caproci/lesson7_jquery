/*
    Program Name: Recipe Display Application
    Author: Michael Gunter
    Date:   April 12, 2016
    Filename: script.js
*/

//displays the next element after the current target (h3)
function display(event){
    
    $(event.currentTarget).next().fadeIn("slow");
    
}//end of display

//attach event listener to h3 elements to invoke display function when clicked

$("h3").click(display);