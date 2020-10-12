$(() => {
  let data
  let cl = (value) => console.log(value); 
  // cl("Jquery Active")
  let bonus = 0 //extra time
  let level = 1
  let questionNumber = 0
  let playerScore = 0
  let $currentScore =0
  let highScore =0
  let rank = "Plebe "
  let questionsCorrect = []
  let doNotRepeat = [51]

  let baseURL
  let categoryChoice = 1
  let points = 0
  let $points = points
  let categoryDisplay = document.getElementById('categoryDisplay')
      let $playerScore = $('<playerScore>')
      $($playerScore).addClass('score')
     
      $($playerScore).css('color', 'white')
      $($playerScore).css('font-size', '24px')
      playerScore= questionNumber
      $($playerScore).html(playerScore)
     // $($div).style.color("blue")
  
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
  //API LINK
  //URL = https://opentdb.com/api.php?amount=50&category=18&type=multiple&encode=url3986

  //18 is SPORTS!!!!
   categoryChoice=18    // COMPUTER SCIENCE   HOW DO I TOGGLE BETWEEN?
   categoryChoice=15   // VIDEO GAMES
       baseURL =` https://opentdb.com/api.php?amount=50&category=21&type=multiple ` 
    

//// 1   COOSE CAT
 $(".categoryComputers").click(function categoryComputers(){ //BUTTON "START GAME" 
  categoryChoice=15

})
//// 2 CHOOSE ANSWER
  function chooseAnswer() {cl("chooseAnswer")
       isCorrect()
       isWrong()
  
}

// let $totalScore =$('<h2>').text(totalScore) //TEXT ON SCREEN
// $('.topArea').prepend($totalScore)

function updateScore() {
     //add 100 points to score
   playerScore = playerScore + 100
   $($playerScore).html(playerScore = playerScore + 100);
     

}




//// 4 
  function endGame() {
    //if timer = 0
    //freeze the score
  }

 //// 4 
$(".categoryVideoGames").click(function categoryVideoGames(){ //BUTTON "START GAME"
    categoryChoice=18
    //To DO modify URL of API to include categoryCHOICE
    loadAPI()
    })

 //// 5 LOAD API FUNCTION AROUND GETAPI 


  const apiKey = ``  
  let currentQuestion=0
  
  const queryType = `t=`
 
  let obj
  /////// Charles helped debug
  let queryURL = baseURL + apiKey + '&' + queryType



  // ADD FUNCTION SO THIS DOES NOT RUN IMMEDIATELY ON LOAD (UNTIL AFTER CATEGORY SELECTION)
     //function startGame()  **BRING UP HERE***
  
        jQuery.ajax({
            url:baseURL,
            dataType: 'text',
            type: "GET",
                
            
          success: function(data) {
                let dataObject = {}
                obj = JSON.parse(data);
                
                dataObject = data
                let category= data.category
              
                let myquestions = data
                console.log(obj.results[1])
                    // console.log(data)
                  //FOR LOOP?
                  // let question=myQuestions[i].question
                  // let correctAnswer=myQuestions[i].correct_answer
                  // let incorrectAnswer=myQuestions[i].incorrect_answers
            
                  // let selector = Math.ceil(Math.random)*10
                

       const $topArea = $('<topArea>');
       

          $(".nextQuestion").click(function nextQuestion(){ //NEXT QUIZ QUESTION
            
            
                $('.playerScreen').hide()
                $('.canvas').css('border',"2px solid white")
                $('.canvas').hide() 
                 $('.canvas').empty()   //slideDown(450)
                $('.canvas').css('border',"2px solid black")           //STYLING THE QUESTION CANVAS 
                $('.canvas').css('background-color',"lightgreen")       // CHANGE COLOR AT NEW LEVEL?
                $('.canvas').css('color',"black")
                
                // cl(questionNumber + "old") 
                questionNumber++
                points++
               playerScore++
               
                cl("Question # stored as playerScore= "+ playerScore)
                     
                      points = $points
                      const $bigCanvas = $('<bigCanvas>');
                      const $canvas = $('<canvas>');
                      const $lhead = $('<lhead>').attr('id',questionNumber);
                      const $ul = $('<ul>').attr('id',questionNumber);
                      const $li = $('<li>')
                      const $form = $('<form>')
                      $($form).appendTo($ul)
                   
                    //  if (questionNumber>questionsAnswered.length-1) { // RESET QUESTION ARRAY IF FINISHED
                    //      questionNumber=1
                    //  }
                  let x= Math.floor(Math.random() * 50);
                  console.log(x)
                  // if (doNotRepeat.contains(x)) {                 PREVENT REPEAT QUESTIONS HERE!!!
                  //   x= Math.floor(Math.random() * 50);
                  // }
                  doNotRepeat.push(x)
                 //// questionsCorrect.push(x) ONLY IF CORRECT, OTHER WISE JUST PUSH TO DO NOT REPEAT

               
                 $("input[name='playerChoice']").click(function(){
                  console.log("Answer selected")
              });

                  console.log(doNotRepeat)

                      // $('<input type="radio" name="playerChoice" value="correct">').addClass('correct').appendTo($ul);   //link to list id#
                      $('<li>').html(obj.results[x].correct_answer).addClass('correct').appendTo($ul)
                      // $('<input type="radio" name="playerChoice" value="incorrect">').addClass('wrongAnswer').appendTo($ul); //append to each
                      $('<li>').html(obj.results[x].incorrect_answers[0]).addClass('wrongAnswer').appendTo($ul);
                      // $('<input type="radio" name="playerChoice" value="incorrect">').addClass('wrongAnswer').appendTo($ul);
                      $('<li>').html(obj.results[x].incorrect_answers[1]).addClass('wrongAnswer').appendTo($ul);
                      // $(' <input type="radio" name="playerChoice" value="incorrect">').addClass('wrongAnswer').appendTo($ul);
                      $('<li>').html(obj.results[x].incorrect_answers[2]).addClass('wrongAnswer').appendTo($ul);

                      $("input[name='playerChoice']").click(function selection(){
                        console.log("radio button pressed")
                            })
                      
                          $($ul).click(function select() 
                             { 
                            //  if (event.target.hasClass('correct'))
                            isCorrect()
                            isWrong()
                          
                          //   isCorrect? Addpoints : WrongAnswer
                             });


                      //  $('<span>').text(obj.results[x].category).addClass('answer').appendTo('body').css('color','white');
                      $('<category>').html(obj.results[x].category + ". Difficulty Level: " +obj.results[x].difficulty).css('font-size', '18px').appendTo($ul);
          
                      points++
                   
                      $('<lhead>').html("Question #" + questionNumber + ". " + obj.results[x].question).attr('id',questionNumber).appendTo($lhead); //QUESTION
                      $('<modal-open>').html("SCORE = " + questionNumber + ". " + obj.results[x].incorrect).attr('id',questionNumber)
                      $('.canvas').fadeIn(500)                //FADE BACK IN
                      $('body').append($canvas);
                      $('.canvas').append($lhead);
                      $('.canvas').append($ul);



                      function moreTime() {
                        cl("add time to clock")// seconds = seconds+5 
                      }            

  function isCorrect() {cl(" checking isCorrect...")  //placed within NEXT question function due to Scoping issues

  if($(event.target).is('.correct'))  {
    cl("verified correct")
    $(event.target).css('color', "green")
    bonus= bonus+(6)
    updateScore()
    moreTime()
    $('#timer').css('color', "gold")
    $($playerScore).css('color', "gold")
    setTimeout(function(){ nextQuestion(); }, 1000);
     //Play "correct" sound
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
    
  
    setTimeout(function(){ nextQuestion(); }, 1000);
    //Play "wrong" sound
    
  }
  }

                         });      
                  }

                })
  
                          
  $(".startGame").click(function startGame(){ //BUTTON "START GAME" 
      $($mega).show()
      $($titlescreen).hide()
      $('.btn4').hide()
      $('.categories').hide()
      $('.playerScreen').hide()
      $('.playerScreen').hide()
      $('.startGame').hide()

  
      $('#timer').appendTo('rank').css('color','white')
      let timeoutHandle;
      var ticks= 0
    //Adapted from https://stackoverflow.com/questions/52547625/1-minutes-30-second-countdown-timer-javascript
    function countdown(minutes, seconds) {
      var seconds = 121;
      var mins = minutes
      
     
    function tick() {
      var counter = document.getElementById("timer");
      ticks++
      $('#timer').css('color', "white")
      $($playerScore).css('color', "white")
      var currentMinutes = mins - 1 
      seconds--;
     
       if (ticks>150){     // TURN RED ON 30 SECONDS LEFT
        $('#timer').css('color','red')
      }
      counter.innerHTML =
        "Time Left: " + String(seconds+bonus);
      if (seconds > 0) {
        timeoutHandle = setTimeout(tick, 1000); //one second
      } else {

        if (mins > 1) {
          console.log("timer ended?")
          //END GAME FUNCTION HERE
          // countdown(mins-1);   never reach “00″ issue solved:Contributed by Victor Streithorst (via Stack Overflow)
          setTimeout(function() {
            countdown(mins - 1);
          }, 1000);
        }
      }
    }
    tick();
  }

  countdown(3); //three minutes  
  })
  ///////////////////////////////////////

  
  $(".statSheet").click(function statSheet(){ //BUTTON "START GAME" 
    $($mega).hide()
    $($titlescreen).hide()
    $('.btn4').hide()
    $('.categories').hide()
    $('.playerScreen').show()
  })
  
  $(".reopenQuiz").click(function reopenQuiz(){ //GENERATE QUIZ QUESTION
          // $('.canvas').css('border',"2px solid white")
      let $mega = document.getElementsByClassName('mega')
    $($mega).show()
    $('.btn2').show()
    $('.btn3').hide()
    $($titlescreen).hide()
    $('.categories').hide()
        })



   const addH2 = () => {
      let $mega = document.getElementsByClassName('mega')
          let $h2 =$('<h2>').text("Score= ") //TEXT ON SCREEN
          $('.topArea').prepend($h2)
          
          let $rank =$('<rank>').text("Rank= " + rank) //TEXT ON SCREEN
          $('.topArea').prepend($rank)
          $($rank).css('display', 'inline')
          $($rank).css('float', 'right')
          $($rank).css('font-size', '36px')
          $('h2').append($playerScore)
        }
    addH2()

  


    // Citation - Modal declaration adapted from technique learned in Modal lab
  //MODAL DECLARATIONS AND EVENT HANDLERS
  const $openBtn = $('#openModal'); //variables declared
  const $modal = $('#modal');
  const $closeBtn = $('#close');
  //Event Handlers
  const openModal = () => {     //open Modal
    $modal.css('display', 'block');

  }
  const closeModal = () => {     //close Modal
    $modal.css('display', 'none');
  }
  closeModal() //close on START PROGRAM - HOW TO PLAY!
  //Event Listeners for Modal
  $openBtn.on('click', openModal); // REVISE TO OPEN ON QUESTION ANSWER
  $closeBtn.on('click', closeModal);
  

      $( ".closeQuiz" ).click(function() {
        $($mega).hide()
        $('.btn3').show()
        $('.btn2').hide()
        $($titlescreen).show()
        $('.categories').show()
          // $($bigCanvas.hide())
       console.log("hide game canvas")
  
     });




   });
   