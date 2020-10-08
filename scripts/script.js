let cl = (value) => console.log(value);

$(document).ready(function(){
   
    cl("Jquery Active")
    
    const $div = $('<div>')    //create div
    $($div).addClass('title')  //ad class 'title'
    $('body').append($div) // append div to body
    $($div).text("This is the first div title")   //Change Div Text
   // $($div).style.color("blue")

   let toggleScreen = 0
   let points = 0
   let questionNumber = 0
   let questionBank = ["Question Alpha","Question Bravo","Question Charlie","Question Delta",]
   //create an ARRAY questionS object with question, 3 class="wrong" answers, 1 class="wrong" right
          //An OBJECT for each question?
   
          //ADD $questionText
   
          const $points = $('<div>')
          $($points).addClass('points')
          $('body').prepend($points)
          $($points).text("X correct, " +points)

 $(".btn1").click(function btn1(){ //TITLE SCREEN
    console.log("new")
    questionNumber++
    console.log(questionNumber)
    points= points+1 // FIX UPDATE EACH QUESTIONS
    $points.text(points)
               // points = $points
    const $bigCanvas = $('<bigCanvas>');
    const $questionCanvas = $('<canvas>');
    const $lhead = $('<lhead>').attr('id',questionNumber);
    const $ul = $('<ul>').attr('id',questionNumber);
    $($lhead.eq(questionNumber-1)).empty()
 }
// $(".generate").click(function btn1(){ //Toggle between scene divs
//     $(".scene").hide()
//     $(".gameOverScene").fadeIn(700).show();
//     $(".gameScene2").hide()
//     $(".phase2").hide()
//     $(".phase5").hide()
//     cl("Scene Change")
//        });

   
})

