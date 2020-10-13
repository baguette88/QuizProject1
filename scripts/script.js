$(() => {
  let clickCount = 1
 
  let seconds
  let data
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
  let baseURL
  let categoryChoice = 1
  let points = 0
  let $points = points
  let categoryDisplay = document.getElementById('categoryDisplay')
  let $playerScore = $('<playerScore>')
      $($playerScore).addClass('score')
     
      $($playerScore).css('color', 'white')
      $($playerScore).css('font-size', '48px')
      playerScore= questionNumber
      $($playerScore).html(playerScore)
      $($playerScore).prependTo('body')

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

   categoryChoice=18 
   categoryChoice=21    //sports?
   categoryChoice=15   // VIDEO GAMES
       baseURL =` https://opentdb.com/api.php?amount=50&category=`+categoryChoice+`&type=multiple ` 
    


 $(".categoryComputers").click(function categoryComputers(){ //BUTTON "START GAME" 
  categoryChoice=15
})

  function endGame() {
    //if timer = 0
    //freeze the score
  }


$(".categoryVideoGames").click(function categoryVideoGames(){ //BUTTON "START GAME"
    categoryChoice=18
    //To DO modify URL of API to include categoryCHOICE
    loadAPI()
    })

 //// 5 LOAD API FUNCTION AROUND GETAPI 

//function categoryChosen(){
  const apiKey = ``  
  let currentQuestion=0
  
  const queryType = `t=`
 
  let obj
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
                
       const $topArea = $('<topArea>');
       
          $(".nextQuestion").click(function nextQuestion(){ //NEXT QUIZ QUESTION
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
                points++
               playerScore++
               
                cl("playerScore= "+ playerScore)
                  
                      const $bigCanvas = $('<bigCanvas>');
                      const $canvas = $('<canvas>');
                      const $lhead = $('<lhead>').attr('id',questionNumber);
                      const $ul = $('<ul>').attr('id',questionNumber);
                      const $li = $('<li>')
                      const $form = $('<form>')
                      $($form).appendTo($ul)
                   
                   
                  var x= Math.floor(Math.random() * 50);
                  console.log(x)
                 //// questionsCorrect.push(x) ONLY IF CORRECT, OTHER WISE JUST PUSH TO DO NOT REPEAT
                  doNotRepeat.push(x)
                 
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

                 
                      
                          $($ul).click(function select() 
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

                      function moreTime() {
                        cl("add time to clock")// seconds = seconds+5 
                      }            

                      function chooseAnswer() {cl("chooseAnswer")
                      isCorrect()
                      isWrong()                
               }
               

  function isCorrect() {cl(" checking isCorrect...")  //placed within NEXT question function due to Scoping issues
  if($(event.target).is('.correct'))  {
    cl("verified correct")
    $(event.target).css('color', "green")

    updateScore()
    moreTime()
    $('#timer').css('color', "gold")
    $($playerScore).css('color', "gold")

    setTimeout(function(){ nextQuestion(); }, 1000); // AUTO MVOE TO NEXT QUESTION
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
                }) // END OF ASYNC
                          
  $(".startGame").click(function startGame(){ //BUTTON "START GAME" 
      $($mega).show()
      $($titlescreen).hide()
      $('.btn4').hide()
      $('.categories').hide()
      $('.playerScreen').hide()
      $('.playerScreen').hide()
      $('.startGame').hide()
      // setTimeout(function(){ nextQuestion(); }, 1000);             AUTO START GAME                      // NEXT QUESTION NOT YET DEFINED

  
      $('#timer').appendTo('rank').css('color','white')
      let timeoutHandle;
      var ticks= 0

    //Adapted from https://stackoverflow.com/questions/52547625/1-minutes-30-second-countdown-timer-javascript
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
      console.log(seconds+ " seconds remain")
     
          if (ticks>90){                                                        // TURN ORANGE ON 30 SECONDS LEFT
           $('#timer').css('color','orange')
          }
                                                                        //// SWITCH STATEMENT HERE
          if (seconds<=15 && minutes == 0){                                     // TURN RED ON 15 SECONDS LEFT
            $('#timer').css('color','red')
           }

      counter.innerHTML =
      // currentMinutes.toString() + ":" + (seconds < 10 ? "0" : "") + 
      String(seconds);
      if (seconds > 0) {
        timeoutHandle = setTimeout(tick, 1000); //one second
      } else {
        console.log("timer cp?")
        openModal()
        if (seconds=-1 && minutes<1) {
          
          //THIS CODE IS NOTE TRIGGERING BUT EVERYTHING WORKS 
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
  }) // close StartGame Function
  ///////////////////////////////////////
  function updateScore() {
    //add 100 points to score
  playerScore = playerScore + 100
  if (playerScore >= highScore){
    highScore=playerScore
  }
  seconds = seconds + 5
  $($playerScore).html(playerScore)
  cl("Score: "+playerScore + ", High Score: "+ highScore)
}

$(".restart").click(function restart(){ //BUTTON "RESTART GAME" 
location.reload();
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
  const $openBtn = $('#openModal'); //variables declared
  const $modal = $('#modal');
  const $modaltextbox = $('#modal-textbox');
  const $restart = $('#restart');
  $modal.css('display', 'none');
  const openModal = () => {     //open Modal
    $modal.css('display', 'block');
    $modal.css('text-align', 'center');
    $($modaltextbox).html("Questions Correct: X"+ questionsCorrect + '<br>'+ "Final Score: "+ playerScore + '<br><br>'+ '<button class="restart" id="restart" href="#"><A HREF="javascript:history.go(0)">Main Menu</button>')
  }
  const closeModal = () => {     //close Modal
    $modal.css('display', 'none');
    location.reload();
  }
   //close on START PROGRAM - HOW TO PLAY!
  //Event Listeners for Modal
  $openBtn.on('click', openModal); // REVISE TO OPEN ON QUESTION ANSWER
  
   });
   