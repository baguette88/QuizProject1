$(() => {


  let data
      let cl = (value) => console.log(value); cl("Jquery Active")
  //variables to scope for entire script
  let toggleScreen = 0
  let points = -1
  let questionNumber = 0
  
  
      const $div = $('<div>')
      $($div).addClass('title')
      $('<bigCanvas>').append($div)
      $($div).text("Welcome to Coding Trivia")
  
      const $points = $('<div>')
      $($points).addClass('points')
      $('body').append($points)
      $($points).text("X correct, " +points)
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
  
  const baseURL =` https://opentdb.com/api.php?amount=50&category=18&type=multiple `
  const apiKey = ``  
  let currentQuestion=0
  
  const queryType = `t=`
  let questionQuery = "category"

  /////// Charles helped debug
  let queryURL = baseURL + apiKey + '&' + queryType
  //pass in an object (url, datatype, type of request, SUCCESS HANDLER FUNCTION)
       
  let obj= {};
  jQuery.ajax({
            url:baseURL,
            dataType: 'text',
            type: "GET",
                
            
            success: function(data) {
                  let dataObject = {}
                  var obj = JSON.parse(data);
                  // dataBlock = data
                  let category= data.category
                  let currentScore = data.response_code
                  let myquestions = data
                  console.log(obj.results[1])
                    // console.log(data)
                  //FOR LOOP?
                  // let question=myQuestions[i].question
                  // let correctAnswer=myQuestions[i].correct_answer
                  // let incorrectAnswer=myQuestions[i].incorrect_answers
            }});



                    let selector = (Math.ceil(Math.random)*10)
                    $('.APIcontainer').html(`
                    <h2> ${obj.results[selector].category} </h2>
                    <h3> ${obj.results[selector].question} </h3>
                   <h4> ${obj.results[selector].question} <h4>
                   <h5> ${obj.results[selector].correct_answer} <h5>
                   <h5> ${obj.results[selector].incorrect_answers[1]} <h5>
              
                    `)
                  

          //CREATE RANDOM NUMBER VARIABLE
         
          //store data as variable
                
                
                
          console.log(dataBlock); //UNDEFINED!?!?!
  
  
        
  
  
        // }).then((data) => {           /////// Charles helped debug this'
        //    console.log("then")
           
    
    
      //   }, (error) => {
      //     console.error(error)
      //   })
      // }
   
          
        
         
  
      
  $(".startGame").click(function startGame(){ //BUTTON "START GAME" 
      $($mega).show()
      $($titlescreen).hide()
      $('.btn4').hide()
      $('.categories').hide()
      $('.playerScreen').hide()
  })
  
  $(".category").click(function startGame(){ //BUTTON "START GAME" 
  $($mega).show()
  $($titlescreen).hide()
  $('.btn4').hide()
  $('.categories').hide()
  $('.playerScreen').hide();
   nextQuestion()   
   $('.categories').fadeIn()
  })
  
  $(".statSheet").click(function statSheet(){ //BUTTON "START GAME" 
      $($mega).hide()
      $($titlescreen).hide()
      $('.btn4').hide()
      $('.categories').hide()
      $('.playerScreen').show()
  })
  
  $(".nextQuestion").click(function nextQuestion(){ //NEXT QUIZ QUESTION
      const output = []
      $('.playerScreen').hide()
  
      $('.canvas').css('border',"2px solid white")
      $('.canvas').hide() 
      $('.canvas').slideDown(450).empty()
      $('.canvas').css('border',"2px solid black")           //STYLING THE QUESTION CANVAS 
      $('.canvas').css('background-color',"lightgreen")       // CHANGE COLOR AT NEW LEVEL?
      $('.canvas').css('color',"black")
      console.log(questionNumber + "old") 
      questionNumber++
      console.log(questionNumber + "is incremented")
      points= points+1 // FIX UPDATE EACH QUESTIONS
      $points.text(points)
      // points = $points
      const $bigCanvas = $('<bigCanvas>');
      const $canvas = $('<canvas>');
      const $lhead = $('<lhead>').attr('id',questionNumber);
      const $ul = $('<ul>').attr('id',questionNumber);
     if (questionNumber>questions.length-1) { // RESET QUESTION ARRAY IF FINISHED
         questionNumber=1
     }
  
      $('<li>').text(questions[questionNumber].answer1).appendTo($ul);   //link to list id#
      $('<li>').text(questions[questionNumber].answer2).addClass('answer').appendTo($ul); //append to each
      $('<li>').text(questions[questionNumber].answer3).addClass('answer').appendTo($ul);
      $('<li>').text(questions[questionNumber].answer4).addClass('answer').appendTo($ul);
   
      $('<lhead>').text("Question #" + questionNumber + ". " + questions[questionNumber].questiontext + "?.").attr('id',questions[questionNumber].questiontext).appendTo($lhead);
      $('.canvas').fadeIn(500)                //FADE BACK IN
      //  GIVE each lhead an `ID` tag of the corresponding question #
      // $lhead.attr("id", questions[i]);
      //$('<lhead>').attr('id',questions[questionNumber]); // NEW
      $('body').append($canvas);
      $('.canvas').append($lhead);
      $('.canvas').append($ul);
        if (toggleScreen = 0) {
            toggleScreen++
          }
        else  {
            toggleScreen--
            }
            console.log(toggleScreen + 'toggle')
         });
  
  
  $(".reopenQuiz").click(function reopenQuiz(){ //GENERATE QUIZ QUESTION
          // $('.canvas').css('border',"2px solid white")
          let $mega = document.getElementsByClassName('mega')
          $($mega).show()
          $('.btn2').show()
          $('.btn3').hide()
          $($titlescreen).hide()
          $('.categories').hide()
  
          // $('.canvas').css('background-color',"grey")
      
         })
  
   const addH2 = () => {
      let $mega = document.getElementsByClassName('mega')
          let $h2 =$('<h2>').text("Coding Trivia!") //TEXT ON SCREEN
          $($mega).append($h2)
        }
    addH2()
    
    ///QUIZ ARRAY OF OBJECTS
         const questions = [ // {question:   , answer:    , correctCheck: false}
          //ADD TOPICS, CORRECTNESS, QUESTION
          { questiontext: "1Which one..?", answer1: "Olive" , answer2: "Bacon", answer3: "Olive", answer4: "Bacon" },
          { questiontext: "Inside which HTML element do we put the Javascript?", answer1: "<div>" , answer2: "<script>", answer3: "<js>", answer4: "<iframe>" },
          { questiontext: "3What is??", answer1: "Bacon" , answer2: "Bacon", answer3: "Olive", answer4: "Bacon" },
          { questiontext: "4Whhen is??", answer1: "Bacon" , answer2: "Bacon", answer3: "Olive", answer4: "Bacon" },
          { questiontext: "5Why is", answer1: "Bacon" , answer2: "Bacon", answer3: "Olive", answer4: "Bacon" },
          { questiontext: "6Why is", answer1: "Olive" , answer2: "Bacon", answer3: "Bacon", answer4: "Bacon" },
          { questiontext: "7Why is", answer1: "ggg" , answer2: "Olive", answer3: "Bacon", answer4: "Olive" },
          { questiontext: "8Why is", answer1: "hhh" , answer2: "Bacon", answer3: "Bacon", answer4: "Bacon" },
          { questiontext: "9Why is", answer1: "Olive" , answer2: "Bacon", answer3: "Bacon", answer4: "Bacon" },
          { questiontext: "10. Methods are..", answer1: "Arrays stored as function" , answer2: "Actions that can be performed by objects", answer3: "Actions performed by the user", answer4: "Asynchronous Functions" },
      ];
      
      //// Adapted from GA lesson technique for making a table from data w jQuery
      const buildTable = () => {
        console.log("buildTable")
          const $infoTable = $('<table>').addClass('info-table');
          $infoTable.html(
              `<thead>
                <tr>
                  <th>QuestionText</th>
                  <th>answer</th>
                </tr>
              </thead>`
          );
          for (const question of questions) {
              // console.log(question);
      
              const $infoRow = $('<tr>');
              const $questiontextCell = $('<td>').addClass('questiontext').text(question.questiontext);
              const $answerCell = $('<td>').addClass('answer').text(question.answer);
              $infoRow.append($questiontextCell, $answerCell);
              $infoTable.append($infoRow);
          }
          $('.container').append($infoTable);
      }
      
      const addData = (questiontext, answer) => {
          questions.push({ questiontext: questiontext, answer: answer });
          $('.container').empty();
          buildTable();
      }
      
      const addText = () => {
          $('body').append("clicked!");
      }
      
      const changeClass = () => {
          $('body').toggleClass('black');
      }
  
      const addQuestionToTable = () => {
          addData('QuestionTextHERE'), ('QuestionAnswer');
      }
      
          buildTable(); // CREATE TABLE AT START
      /////////////////////////////////////////
          const $btn = $('#btn');
          
          // $btn.on('click', addText);
          // $btn.on('click', changeClass);
          $btn.on('click', addQuestionToTable);  
  ///////////////////////
    //TOGGLE CLASS technique learned in toggle card lab
    //const $card = $('.card').on('click', (event)=>{
    //   $(event.currentTarget).toggleClass('card-back')
    //   playHand()
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
  closeModal() //close on START PROGRAM
  //Event Listeners for Modal
  $openBtn.on('click', openModal); // REVISE TO OPEN ON QUESTION ANSWER
  $closeBtn.on('click', closeModal);
  
     // TARGET A SPECIFIC ITEM OF CLASS  (GRAB JUST ONE ANSWER/TRIANGLE)
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