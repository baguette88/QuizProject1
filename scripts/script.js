let cl = (value) => console.log(value);

$(document).ready(function(){
   
    cl("Jquery Active")
    
    const $div = $('<div>')    //create div
    $($div).addClass('title')  //ad class 'title'
    $('body').append($div) // append div to body
    $($div).text("This is the first div title")   //Change Div Text
   // $($div).style.color("blue")


// $(".generate").click(function btn1(){ //Toggle between scene divs
//     $(".scene").hide()
//     $(".gameOverScene").fadeIn(700).show();
//     $(".gameScene2").hide()
//     $(".phase2").hide()
//     $(".phase5").hide()
//     cl("Scene Change")
//        });

   
})