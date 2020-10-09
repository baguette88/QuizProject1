  
  $(() => {
  
let toggleScreen = 0
let points = -1
let questionNumber = 0
let questionBank = ["Question Alpha","Question Bravo","Question Charlie","Question Delta",]

    let cl = (value) => console.log(value);
    cl("Jquery Active")
    
    //event.currentTarget TARGET SPECIFIC ELEMENT!!!
    // $( "p" ).click(function( event ) {
    //   alert( event.currentTarget === this ); // true
    // });

        const addH2 = () => {
          let $h2 =$('<h2>').text("Coding Trivia!")
          $('body').prepend($h2)
        }
    addH2()

    const $div = $('<div>')
    $($div).addClass('title')
    $('body').prepend($div)
    $($div).text("Welcome to Coding Trivia")

    const $points = $('<div>')
    $($points).addClass('points')
    $('body').prepend($points)
    $($points).text("X correct, " +points)
   // $($div).style.color("blue")



$(".btn1").click(function btn1(){ //GENERATE QUIZ QUESTION
 console.log("new")
$('.canvas').empty()
 console.log(questionNumber) 
 questionNumber++
  console.log(questionNumber)
    points= points+1 // FIX UPDATE EACH QUESTIONS
    $points.text(points)
    // points = $points
    const $bigCanvas = $('<bigCanvas>');
    const $canvas = $('<canvas>');
    const $lhead = $('<lhead>').attr('id',questionNumber);
    const $ul = $('<ul>').attr('id',questionNumber);
    $($lhead.eq(questionNumber-1)).empty() 

    $('<li>').text(questions[questionNumber].answer1).appendTo($ul);   //link to list id#
    $('<li>').text(questions[questionNumber].answer2).addClass('answer').appendTo($ul); //append to each
    $('<li>').text(questions[questionNumber].answer3).addClass('answer').appendTo($ul);
    $('<li>').text(questions[questionNumber].answer4).addClass('answer').appendTo($ul);
 
    
    $('<lhead>').text("Question #" + questionNumber + ". " + questions[questionNumber].questiontext + "?.").attr('id',questions[questionNumber].questiontext).appendTo($lhead);
   
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
    
    //// Adapted from GA lesson on making a table from data w jQuery
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
        console.log($btn);
        // $btn.on('click', addText);
        // $btn.on('click', changeClass);
        $btn.on('click', addQuestionToTable);
    
///////////////////////
  //TOGGLE CLASS technique learned in toggle card lab
  //const $card = $('.card').on('click', (event)=>{
  //   $(event.currentTarget).toggleClass('card-back')
  //   playHand()
  // })

  // Citation - Modal declaration adapted from Modal lab
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
  //  $( ".triangle" ).click(function() {
  //   alert( "Handler for .click() called." );
  //   $(event.currentTarget).css('border-radius', '50%')
  //   $(event.currentTarget).css('color', '100%')
  //   $(event.currentTarget).addClass('circle')
  // });

});
