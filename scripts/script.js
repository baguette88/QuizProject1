$(() => {


  let data
  let cl = (value) => console.log(value); cl("Jquery Active")
 

  let questionNumber = 0
  let score =0
  let $currentScore =0
  let highScore =0
  let questionsAnswered = []
  let questionsCorrect = []
  let doNotRepeat = [51]
  let baseURL
  let categoryChoice = 1
  let points = 0
let $points = points
  

  
  
      const $div = $('<div>')
      $($div).addClass('title')
      $('<bigCanvas>').append($div)
      $($div).text(score)
  
      let $score = $('<div>')
      $($score).addClass('score')
      $('body').append($score)
      $($score).appendTo('.topArea')

      $($score).text("NUMBER CORRECT = " +score)
     // $($div).style.color("blue")
  
  let $mega = document.getElementsByClassName('mega')
  $($mega).hide()
  //////
  // TITLE SCREEN HERE
  /////// then activate mega.show()   // (below)
  // $($mega).show()
  const $titlescreen = $('<div>')
      $($titlescreen).addClass('h1')
      $('body').prepend($titlescreen)
      $($titlescreen).text("TITLE SCREEN TEXT")
      $($titlescreen).css("font-size", "72px")
      $($titlescreen).css("color", "white")
      $($titlescreen).css("background-color", "green")
  
  
  //API LINK
  //URL = https://opentdb.com/api.php?amount=50&category=18&type=multiple&encode=url3986
  
   if (categoryChoice = 1) {
       baseURL =` https://opentdb.com/api.php?amount=50&category=18&type=multiple ` }
       else if (categoryChoice = 2) {
       baseURL =` https://opentdb.com/api.php?amount=50&category=15&type=multiple ` }

       console.log(baseURL)
  const apiKey = ``  
  let currentQuestion=0
  
  const queryType = `t=`
  let questionQuery = "category"
  let obj
  /////// Charles helped debug
  let queryURL = baseURL + apiKey + '&' + queryType
  //pass in an object (url, datatype, type of request, SUCCESS HANDLER FUNCTION)
        jQuery.ajax({
            url:baseURL,
            dataType: 'text',
            type: "GET",
                
            
          success: function(data) {
                let dataObject = {}
                obj = JSON.parse(data);
                dataObject = data
                let category= data.category
                let currentScore = data.response_code
                let myquestions = data
                console.log(obj.results[1])
                    // console.log(data)
                  //FOR LOOP?
                  // let question=myQuestions[i].question
                  // let correctAnswer=myQuestions[i].correct_answer
                  // let incorrectAnswer=myQuestions[i].incorrect_answers
            
                  // let selector = Math.ceil(Math.random)*10
                  // $('.APIcontainer').html(`
                  // <h2> ${obj.results[1].question} </h2>
                  // <h3> ${obj.results[1].correct_answer} </h3>
                  // <h3>  ${obj.results[1].incorrect_answers[0]} <h3>
                  //  <h3>  ${obj.results[1].incorrect_answers[1]} <h3>
                  // <h3> ${obj.results[1].incorrect_answers[2]} <h3>
                  //  `)

const $topArea = $('<topArea>');


                    $(".nextQuestion").click(function nextQuestion(){ //NEXT QUIZ QUESTION
                      const output = []
                      if (categoryChoice = 1) {
                        baseURL =` https://opentdb.com/api.php?amount=50&category=18&type=multiple ` }   
                        else if (categoryChoice = 2) {
                        baseURL =` https://opentdb.com/api.php?amount=50&category=15&type=multiple ` }     // THIS IS NOT TRIGGERING. MOVE SCOPE
                        console.log(categoryChoice + "computer choice")



                      $('.playerScreen').hide()
                  
                      $('.canvas').css('border',"2px solid white")
                      $('.canvas').hide() 
                      $('.canvas').slideDown(450).empty()
                      $('.canvas').css('border',"2px solid black")           //STYLING THE QUESTION CANVAS 
                      $('.canvas').css('background-color',"lightgreen")       // CHANGE COLOR AT NEW LEVEL?
                      $('.canvas').css('color',"black")
                      console.log(questionNumber + "old") 
                      questionNumber++
            
                        score++
                       $score = score
                       console.log("score is "+ score)
                      console.log(questionNumber + "is incremented")
                     
                      points = $points
                      const $bigCanvas = $('<bigCanvas>');
                    
                      const $canvas = $('<canvas>');
                      const $lhead = $('<lhead>').attr('id',questionNumber);
                      const $ul = $('<ul>').attr('id',questionNumber);
                   
                    //  if (questionNumber>questionsAnswered.length-1) { // RESET QUESTION ARRAY IF FINISHED
                    //      questionNumber=1
                    //  }
                  let x= Math.floor(Math.random() * 50);
                  console.log(x)
                  doNotRepeat.push(x)

                  function doNotRepeatCheck()
                    {console.log("for loop?") ///*** */
                    }
              

                  console.log(doNotRepeat)
                      $('<li>').text(obj.results[x].correct_answer).appendTo($ul);   //link to list id#
                      $('<li>').text(obj.results[x].incorrect_answers[0]).addClass('answer').appendTo($ul); //append to each
                      $('<li>').text(obj.results[x].incorrect_answers[1]).addClass('answer').appendTo($ul);
                      $('<li>').text(obj.results[x].incorrect_answers[2]).addClass('answer').appendTo($ul);
                      //  $('<span>').text(obj.results[x].category).addClass('answer').appendTo('body').css('color','white');
                      $('<p>').text(obj.results[x].category + ". Difficulty Level: " +obj.results[x].difficulty).css('font-size', '18px').appendTo($ul);
                      
                   
                      $('<lhead>').text("Question #" + questionNumber + ". " + obj.results[x].question).attr('id',questionsAnswered).appendTo($lhead);
                      $('<modal-open>').text("SCORE = " + score + ". " + obj.results[x].incorrect).attr('id',questionsAnswered)
                      $('.canvas').fadeIn(500)                //FADE BACK IN
                      $('body').append($canvas);
                      $('.canvas').append($lhead);
                      $('.canvas').append($ul);



                   
                         });
                     
                  }
            
                })
      
  $(".startGame").click(function startGame(){ //BUTTON "START GAME" 
      $($mega).show()
      $($titlescreen).hide()
      $('.btn4').hide()
      $('.categories').hide()
      $('.playerScreen').hide()
      
  })
  
  $(".categoryComputers").click(function categoryComputers(){ //BUTTON "START GAME" 
  categoryChoice=1
  $($mega).show()
  $($titlescreen).hide()
  $('.btn4').hide()
  $('.categories').hide()
  $('.playerScreen').hide();
   $('.categories').fadeIn()
  })

  $(".categoryVideoGames").click(function categoryVideoGames(){ //BUTTON "START GAME"
  categoryChoice=2
  $($mega).show()
  $($titlescreen).hide()
  $('.btn4').hide()
  $('.categories').hide()
  $('.playerScreen').hide();
  $('.categories').fadeIn()
  })
  
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
let rank = "Noob"
   const addH2 = () => {
      let $mega = document.getElementsByClassName('mega')
          let $h2 =$('<h2>').text("Score= " +score+ " Points= " +points) //TEXT ON SCREEN
          $('.topArea').prepend($h2)
          let $rank =$('<rank>').text("Rank= " + rank) //TEXT ON SCREEN
          $('.topArea').prepend($rank)
          $($rank).css('display', 'inline')
          $($rank).css('float', 'right')
          $($rank).css('font-size', '36px')
        }
    addH2()

  
  ///////////////////////
    //TOGGLE CLASS technique learned in toggle card lab
    //const $circlePress = $('.circlePress').on('click', (event)=>{
    //   $(event.currentTarget).toggleClass('answered')
    //   checkIfCorrect()
    //)
    // })
    ////////////////////
  
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
   