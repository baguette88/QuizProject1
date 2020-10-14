$(() => {
  let clickCount = 1
  let totalCorrect = 0
  let bonus = 0
  let seconds, data, baseURL
  let cl = (value) => console.log(value); // cl("Jquery Active")
  // let bonus = 0 //extra time
  let level = 1
  let questionNumber = 0
  let playerScore = 0
  let $currentScore =0
  let highScore =0
  let rank = "Noob "
  let questionsCorrect = []
  let doNotRepeat = [51]
  let categoryChoice = 1
  let points = 0
  let $points = points
  let categoryDisplay = document.getElementById('categoryDisplay')
  let $playerScore = $('<playerScore>')
  let $highScore = $('<highScore>')
      $($playerScore).addClass('score')
     
      $($playerScore).css('color', 'white')
      $($playerScore).css('font-size', '48px')
      $($playerScore).html(playerScore)
      $($playerScore).prependTo('body')
      $($playerScore).hide()

    
  let $mega = document.getElementsByClassName('mega')
  
  $($mega).hide()
  //////
  // TITLE SCREEN LOGIC HERE
  /////// then activate mega.show()   // (below)
  // $($mega).show()

  const $titlescreen = $('<div>')
      $($titlescreen).addClass('h1')
      $('body').prepend($titlescreen)
      $($titlescreen).text("NoobCheck TRIVIA")
      $($titlescreen).css("font-size", "64px")
      $($titlescreen).css("color", "white")
      $($titlescreen).css("background-color", "green")
      $($titlescreen).css("text-align", "center")

let $categorydisplay = $('<categoryDisplay>')
$($categorydisplay).text(categoryDisplay)
$($categorydisplay).appendTo('.categories')
 

// cATEGORY SELECTION

  
   categoryChoice=15   // DEFAULT CATEGIRY AUTO-SELECTED. keep or remove?
       baseURL =` https://opentdb.com/api.php?amount=50&category=`+categoryChoice+`&type=multiple ` 
    

       const $topArea = $('<topArea>');
       
       $(".nextQuestion").click(function nextQuestion() { //NEXT QUIZ QUESTION
             // if (seconds > 0){
            clickCount++

             $('.playerScreen').hide()
             $('.canvas').css('border',"2px solid white")
             $('.canvas').hide() 
              $('.canvas').empty()   //slideDown(450)
             $('.canvas').css('border',"2px solid black")           //STYLING THE QUESTION CANVAS 
             $('.canvas').css('background-color',"lightgreen")       // CHANGE COLOR AT NEW LEVEL?
             $('.canvas').css('color',"black")
             
             // cl(questionNumber + "old") 
             questionNumber++
            
            playerScore++
            
             cl("playerScore= "+ playerScore)
               
                   const $bigCanvas = $('<bigCanvas>');
                   const $canvas = $('<canvas>');
                   const $lhead = $('<lhead>').attr('id',questionNumber);
                   const $ul = $('<ul>').attr('id',questionNumber);
                   const $li = $('<li>')
                   const $form = $('<form>')
                   $($form).appendTo($ul)
                
               
               var x= Math.floor(Math.random()*Math.random() * 49);  //LOOP redraws question number if player has already had the question
             for (i = 0; i < doNotRepeat.length; i++)
                  if (x = doNotRepeat[i]){
                    console.log("match" + x);
                   x= Math.floor(Math.random() * 49)
                   console.log("changed to" + x);
                  }
                  

                  //////////////////////////////// FISHER-YATES SHUFFLE
                  function shuffle(array) {
                   var i = array.length,
                       j = 0,
                       temp;
               
                   while (i--) {
               
                       j = Math.floor(Math.random() * (i+1));
               
                       // swap randomly chosen element with current element
                       temp = array[i];
                       array[i] = array[j];
                       array[j] = temp;
               
                   }
               
                   return array;
               }
               
               var ranNums = shuffle([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49]);

                   ////////////////////////////////////

              



                x=ranNums[i+1]
            


               console.log(x)
               console.log(doNotRepeat)
              //// questionsCorrect.push(x) ONLY IF CORRECT, OTHER WISE JUST PUSH TO DO NOT REPEAT

                   $('<li>').html(obj.results[x].correct_answer).addClass('correct').appendTo($ul)
                  
                   $('<li>').html(obj.results[x].incorrect_answers[0]).addClass('wrongAnswer').appendTo($ul);
                 
                   $('<li>').html(obj.results[x].incorrect_answers[1]).addClass('wrongAnswer').appendTo($ul);
               
                   $('<li>').html(obj.results[x].incorrect_answers[2]).addClass('wrongAnswer').appendTo($ul);
                  
                    doNotRepeat.push(x)


                   $.fn.shuffleChildren = function() {       //SHUFFLE LI CHILDREN https://css-tricks.com/snippets/jquery/shuffle-children/
                     $.each(this.get(), function(index, list) {
                         var $list = $(list);     //list saved as JQUERY object
                         var $find = $list.children();  //select children of list
                 
                         $find.sort(function() {
                             return 0.5 - Math.random();   //randomize sort
                         });
                 
                         $list.empty();                       //empty list
                         $find.appendTo($list);                //re-append
                     });
                 };
                 $($ul).shuffleChildren($li);                // shuffle just li in ul
                   


                       $($ul).click(function select()            // SPAM BLOCKER! 2 count required to select an answer, each new question ups the counter
                          {  
                         //  if (event.target.hasClass('correct'))

                         console.log("clickCount= "+clickCount)
                         if (clickCount >1) {
                         isCorrect()
                         isWrong()
                         clickCount--
                         } else {
                           "click count depleted"
                         }
                     
                          });

                   //  $('<span>').text(obj.results[x].category).addClass('answer').appendTo('body').css('color','white');
                   $('<category>').html(obj.results[x].category + ". Difficulty Level: " +obj.results[x].difficulty).css('font-size', '18px').appendTo($ul);

                   points++
                   $('<lhead>').html("Question #" + questionNumber + ". " + obj.results[x].question).attr('id',questionNumber).appendTo($lhead); //QUESTION
                   // $('<modal-open>').html($playerScore)
                   $('.canvas').fadeIn(500)                //FADE BACK IN
                   $('body').append($canvas);
                   $('.canvas').append($lhead);
                   $('.canvas').append($ul);

                   function moreTime(seconds) {
                     seconds=seconds+5// seconds = seconds+5 
                   }            

                   function chooseAnswer() {cl("chooseAnswer")
                   isCorrect()
                   isWrong()                
            }
            
function isCorrect() {cl(" checking isCorrect...")  //placed within NEXT question function due to Scoping issues
if($(event.target).is('.correct'))  {
 cl("verified correct")
 bonus= bonus+6
 $(event.target).css('color', "green")
 totalCorrect++
 updateScore()

 $('#timer').css('color', "gold")
 $($playerScore).css('color', "gold")
 questionsCorrect.push(x)
 setTimeout(function(){ nextQuestion(); }, 800); // AUTO MVOE TO NEXT QUESTION
  //Play "correct" sound
  console.log("correctQuestions" + questionsCorrect)
 }
}

function isWrong() {cl("checking is wrong...")
if($(event.target).is('.wrongAnswer')) {
 cl("verified wrong")
 cl($(this))
 $($ul).css('background-color', "lightred")
 $($bigCanvas).css('background-color', "lightred")
 $(event.target).css('color', "red")
 $(event.target).css('text-decoration', "line-through")
 $('.correct').css('color', "green")
 
 setTimeout(function(){ nextQuestion(); }, 800);
 //Play "wrong" sound
 }
}
                      });   //NEXT QUESTION END   


       $('.startGame').hide()  // HIDE START GAME UNTIL CATEGORY IS SELECTED!


function loadAPI(categoryChoice) {
  // call API 
  cl("load API.. CATEGORY: " + categoryChoice)
  baseURL =` https://opentdb.com/api.php?amount=50&category=`+categoryChoice+`&type=multiple ` 
  $('.startGame').show()
  generateCall()

  
}

$('#b1').click(function() {

  loadAPI(18); // CHOOSES CATEGORY
});

$('#b2').click(function() {

  loadAPI(15); // CHOOSES CATEGORY
});

$('#b3').click(function() {
 
  loadAPI(21); // CHOOSES CATEGORY
});
$('#b4').click(function() {
 
  loadAPI(16); // CHOOSES CATEGORY
});
$('#b5').click(function() {
 
  loadAPI(9); // CHOOSES CATEGORY
});
$('#b6').click(function() {
 
  loadAPI(12); // CHOOSES CATEGORY
});
$('#b7').click(function() {
 
  loadAPI(17); // CHOOSES CATEGORY
});
$('#b8').click(function() {
  categoryChoice=18
  loadAPI(14); // CHOOSES CATEGORY
});
$('#b9').click(function() {
  categoryChoice=18
  loadAPI(22); // CHOOSES CATEGORY
});
$('#b0').click(function() {
  categoryChoice=18
  loadAPI(11); // CHOOSES CATEGORY
});

///CODE FOR KEEPING TIME
let ticks

 //Adapted from https://stackoverflow.com/questions/52547625/1-minutes-30-second-countdown-timer-javascript

function startTime() {
 function countdown(minutes, seconds) {
  var seconds = 120;
  var mins = minutes

function tick() {
  var counter = document.getElementById("timer");
  ticks++
  $('#timer').css('color', "white")
  $($playerScore).css('color', "white")
  var currentMinutes = mins - 1 
  seconds--;
  seconds = seconds + bonus           //ADD BONUS TIME
  bonus = 0   //CLEAR BONUS POINTS
  
  // seconds = seconds+ bonus
  // console.log(seconds+ " seconds remain")
 
      if (ticks>90){                                  // TURN ORANGE ON 30 SECONDS LEFT
       $('#timer').css('color','orange')
      }
                                                   //// SWITCH STATEMENT HERE
      if (seconds<=15 && minutes == 0){                  // TURN RED ON 15 SECONDS LEFT
        $('#timer').css('color','red')
       }

  counter.innerHTML =
  // currentMinutes.toString() + ":" + (seconds < 10 ? "0" : "") + 
  String(seconds);
  if (seconds > 0) {
    timeoutHandle = setTimeout(tick, 1000); //one second
  } else if (seconds==0 && bonus!=0) {
     bonus--
     timeoutHandle = setTimeout(tick, 1000); 
  }  else {
   
    console.log("timer cp?")
    openModal()
    if (seconds=-1 && minutes<1) {
      
      //THIS CODE IS NOT TRIGGERING BUT EVERYTHING WORKS 
      console.log("timer ended?")

      //END GAME FUNCTION HERE
       // never reach “00″ issue solved:Contributed by Victor Streithorst (via Stack Overflow)
       openModal()
       setTimeout(function() {
        // countdown(mins - 1);
        cl("timeout function not needed anymore")
      }, 1000);
    }
  }
} //close Tick FUNCTION
tick();
}   //close Countdown Function
countdown(2); //three minutes  
}


let obj
function generateCall() {
  const apiKey = ``  

  let currentQuestion=0
  
  const queryType = `t=`
 
  
  let queryURL = baseURL + apiKey + '&' + queryType   

                                   // ADD FUNCTION SO THIS DOES NOT RUN IMMEDIATELY ON LOAD (UNTIL AFTER CATEGORY SELECTION)
                                    //function startGame()  **BRING UP HERE***
 
        jQuery.ajax({
            url:baseURL,   /////// Charles helped debug
            dataType: 'text',
            type: "GET",
                 
          success: function(data) {
                let dataObject = {}
                obj = JSON.parse(data);
                dataObject = data

                let category= data.category
                let myquestions = data
                console.log(obj.results[1])
          }})
        }    // END GENERATE CALL        

//        const $topArea = $('<topArea>');
       
//           $(".nextQuestion").click(function nextQuestion() { //NEXT QUIZ QUESTION
//                 // if (seconds > 0){
//                clickCount++

//                 $('.playerScreen').hide()
//                 $('.canvas').css('border',"2px solid white")
//                 $('.canvas').hide() 
//                  $('.canvas').empty()   //slideDown(450)
//                 $('.canvas').css('border',"2px solid black")           //STYLING THE QUESTION CANVAS 
//                 $('.canvas').css('background-color',"lightgreen")       // CHANGE COLOR AT NEW LEVEL?
//                 $('.canvas').css('color',"black")
                
//                 // cl(questionNumber + "old") 
//                 questionNumber++
               
//                playerScore++
               
//                 cl("playerScore= "+ playerScore)
                  
//                       const $bigCanvas = $('<bigCanvas>');
//                       const $canvas = $('<canvas>');
//                       const $lhead = $('<lhead>').attr('id',questionNumber);
//                       const $ul = $('<ul>').attr('id',questionNumber);
//                       const $li = $('<li>')
//                       const $form = $('<form>')
//                       $($form).appendTo($ul)
                   
                  
//                   var x= Math.floor(Math.random()*Math.random() * 49);  //LOOP redraws question number if player has already had the question
//                 for (i = 0; i < doNotRepeat.length; i++)
//                      if (x = doNotRepeat[i]){
//                        console.log("match" + x);
//                       x= Math.floor(Math.random() * 49)
//                       console.log("changed to" + x);
//                      }
                     

//                      //////////////////////////////// FISHER-YATES SHUFFLE
//                      function shuffle(array) {
//                       var i = array.length,
//                           j = 0,
//                           temp;
                  
//                       while (i--) {
                  
//                           j = Math.floor(Math.random() * (i+1));
                  
//                           // swap randomly chosen element with current element
//                           temp = array[i];
//                           array[i] = array[j];
//                           array[j] = temp;
                  
//                       }
                  
//                       return array;
//                   }
                  
//                   var ranNums = shuffle([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49]);
  
//                       ////////////////////////////////////

                 



//                    x=ranNums[i+1]
               


//                   console.log(x)
//                   console.log(doNotRepeat)
//                  //// questionsCorrect.push(x) ONLY IF CORRECT, OTHER WISE JUST PUSH TO DO NOT REPEAT

//                       $('<li>').html(obj.results[x].correct_answer).addClass('correct').appendTo($ul)
                     
//                       $('<li>').html(obj.results[x].incorrect_answers[0]).addClass('wrongAnswer').appendTo($ul);
                    
//                       $('<li>').html(obj.results[x].incorrect_answers[1]).addClass('wrongAnswer').appendTo($ul);
                  
//                       $('<li>').html(obj.results[x].incorrect_answers[2]).addClass('wrongAnswer').appendTo($ul);
                     
//                        doNotRepeat.push(x)


//                       $.fn.shuffleChildren = function() {       //SHUFFLE LI CHILDREN https://css-tricks.com/snippets/jquery/shuffle-children/
//                         $.each(this.get(), function(index, list) {
//                             var $list = $(list);     //list saved as JQUERY object
//                             var $find = $list.children();  //select children of list
                    
//                             $find.sort(function() {
//                                 return 0.5 - Math.random();   //randomize sort
//                             });
                    
//                             $list.empty();                       //empty list
//                             $find.appendTo($list);                //re-append
//                         });
//                     };
//                     $($ul).shuffleChildren($li);                // shuffle just li in ul
                      


//                           $($ul).click(function select()            // SPAM BLOCKER! 2 count required to select an answer, each new question ups the counter
//                              {  
//                             //  if (event.target.hasClass('correct'))

//                             console.log("clickCount= "+clickCount)
//                             if (clickCount >1) {
//                             isCorrect()
//                             isWrong()
//                             clickCount--
//                             } else {
//                               "click count depleted"
//                             }
                        
//                              });

//                       //  $('<span>').text(obj.results[x].category).addClass('answer').appendTo('body').css('color','white');
//                       $('<category>').html(obj.results[x].category + ". Difficulty Level: " +obj.results[x].difficulty).css('font-size', '18px').appendTo($ul);

//                       points++
//                       $('<lhead>').html("Question #" + questionNumber + ". " + obj.results[x].question).attr('id',questionNumber).appendTo($lhead); //QUESTION
//                       // $('<modal-open>').html($playerScore)
//                       $('.canvas').fadeIn(500)                //FADE BACK IN
//                       $('body').append($canvas);
//                       $('.canvas').append($lhead);
//                       $('.canvas').append($ul);

//                       function moreTime(seconds) {
//                         seconds=seconds+5// seconds = seconds+5 
//                       }            

//                       function chooseAnswer() {cl("chooseAnswer")
//                       isCorrect()
//                       isWrong()                
//                }
               
//   function isCorrect() {cl(" checking isCorrect...")  //placed within NEXT question function due to Scoping issues
//   if($(event.target).is('.correct'))  {
//     cl("verified correct")
//     bonus= bonus+6
//     $(event.target).css('color', "green")
//     totalCorrect++
//     updateScore()
  
//     $('#timer').css('color', "gold")
//     $($playerScore).css('color', "gold")
//     questionsCorrect.push(x)
//     setTimeout(function(){ nextQuestion(); }, 800); // AUTO MVOE TO NEXT QUESTION
//      //Play "correct" sound
//      console.log("correctQuestions" + questionsCorrect)
//     }
//    }

// function isWrong() {cl("checking is wrong...")
//   if($(event.target).is('.wrongAnswer')) {
//     cl("verified wrong")
//     cl($(this))
//     $($ul).css('background-color', "lightred")
//     $($bigCanvas).css('background-color', "lightred")
//     $(event.target).css('color', "red")
//     $(event.target).css('text-decoration', "line-through")
//     $('.correct').css('color', "green")
    
//     setTimeout(function(){ nextQuestion(); }, 800);
//     //Play "wrong" sound
//     }
//   }
//                          });   //NEXT QUESTION END   
          
                          
  $(".startGame").click(function startGame(){ //BUTTON "START GAME" 

      $($mega).show()
      $($titlescreen).hide()
      $('.btn4').hide()
      $('.categories').hide()
      $('.startGame').hide()
      // setTimeout(function(){ nextQuestion(); }, 1000);             AUTO START GAME                      // NEXT QUESTION NOT YET DEFINED
      startTime()
      $('#timer').appendTo('rank').css('color','white')
      let timeoutHandle;
      var ticks= 0
      $($playerScore).show()
  }) // close StartGame Function

  function updateScore() {
    //add 100 points to score
  playerScore = playerScore + 100
  
  if (playerScore >= highScore){
    highScore=playerScore
  }

  // seconds = seconds + 5
  $($playerScore).html(playerScore)
  $($highScore).html(highScore)
  cl("Score: "+playerScore + ", High Score: "+ highScore)
}

$(".restart").click(function restart(){ //BUTTON "RESTART GAME" 
location.reload();
})

   const addH2 = () => {
      
          let $h2 =$('<h2>').text("Score= ") //TEXT ON SCREEN
          $h3 =$('<h3>').text("HighScore= ") //TEXT ON SCREEN
          $('.topArea').prepend($h2)
          $('.topArea').prepend($h3)
          
           $rank =$('<rank>').text("Rank= " + rank) //TEXT ON SCREEN
          $('.topArea').prepend($rank)
          $($rank).css('display', 'inline')
          $($rank).css('float', 'right')
          $($rank).css('font-size', '36px')
          $('h2').append($playerScore)
          $('h3').append($highScore)
          
        }
    // addH2()

    // Citation - Modal declaration adapted from technique learned in Modal lab
  const $openBtn = $('#openModal'); //variables declared
  const $modal = $('#modal');
  const $modaltextbox = $('#modal-textbox');
  const $restart = $('#restart');
  $modal.css('display', 'none');
  const openModal = () => {     //open Modal
    $modal.css('display', 'block');
    $modal.css('text-align', 'center');
    $($modaltextbox).html("Questions Correct: "+ totalCorrect + '<br>'+ "Final Score: "+ playerScore + '<br>'+"High Score: "+highScore + '<br>'+ '<button class="restart" id="restart" href="#"><A HREF="javascript:history.go(0)">Main Menu</button>')
  }
  const closeModal = () => {     //close Modal
    $modal.css('display', 'none');
    location.reload();
  }
   //close on START PROGRAM - HOW TO PLAY!
  //Event Listeners for Modal
  $openBtn.on('click', openModal); // REVISE TO OPEN ON QUESTION ANSWER
  
   ;
   
}

)