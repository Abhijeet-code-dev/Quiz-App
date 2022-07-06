const quizData = [
    {
        question : ' Which is not a type of secondary memory?',
        a : 'Solid State Drive',
        b : 'Hard Disk',
        c: 'RAM',
        d : 'USB Pen Drive',
        correct : 'c'
    },
    {
        question : 'A system program designed to aid the programmer in finding and correcting errors or bugs is known as -',
        a : 'Evaluator',
        b : 'Debugger',
        c: 'Quarantiner',
        d : 'Corrector',
        correct : 'b'
    },
    {
        question : 'Microsoft Excel is a -',
        a : 'MS office package',
        b : 'Electronic Spreadsheet',
        c: 'Graphic package',
        d : 'Financial planning package',
        correct : 'b'
    },
    {
        question : ' Which memory is both static and non-volatile ?',
        a : 'RAM',
        b : 'ROM',
        c: 'BIOS',
        d : 'Cache',
        correct : 'b'
    },
    {
        question : 'Which among the following terms is used for unauthorized copying of a software to be used for personal gain instead of personal backup?',
        a : 'program thievery',
        b : 'data snatching',
        c: 'software piracy',
        d : 'program looting',
        correct : 'c'
    },
    {
        question : 'What is that computer program called which translates one program instruction at a time into machine language?',
        a : 'Compiler',
        b : 'CPU',
        c: 'ROM',
        d : 'Interpreter',
        correct : 'd'
    },
    {
        question : 'Which of the following is the communication protocol that sets the standard used by every computer that accesses web based information?',
        a : 'XML',
        b : 'DML',
        c: 'HTTP',
        d : 'HTML',
        correct : 'c'
    },
    {
        question : 'What is a firewall in computer network?',
        a : ' physical boundary of network',
        b : 'An operating system of computer network',
        c: 'A system designed to prevent unauthorized access',
        d : 'A web browsing software',
        correct : 'c'
    },
    {
        question : 'What is HTTP 404?',
        a : 'An error message indicating server not found',
        b : 'An error message indicating moved permanently',
        c: 'An error message indicating forbidden',
        d : 'An error message indicating server found',
        correct : 'a'
    },
    {
        question : 'One nibble is equal to -',
        a : '4 Bits',
        b : '4 Bytes',
        c: '8 Bytes',
        d : '8 Kilo Bytes',
        correct : 'a'
    }
]

let quizContainer = document.getElementById('quiz-container');
let question = document.getElementById('ques');
let atext = document.getElementById('a_text');
let btext = document.getElementById('b_text');
let ctext = document.getElementById('c_text');
let dtext = document.getElementById('d_text');
let submitEl = document.getElementById('submit');
let answers = document.querySelectorAll('.answer');
let currentQuiz = 0;
let score = 0; 

function getSelected(){

let ans = undefined;
answers.forEach((answer)=>{
    if(answer.checked){
        ans = answer.id;
    }
})
return ans;
}
function deselect(){
    answers.forEach((answer)=>{
    answer.checked = false;
    })
}




function loadQuiz(){
    
    let quiz = quizData[currentQuiz];
    question.innerText = quiz.question;
    atext.innerText = quiz.a;
    btext.innerText = quiz.b;
    ctext.innerText = quiz.c;
    dtext.innerText = quiz.d;
}
loadQuiz();

submitEl.addEventListener('click',()=>{
   
    const ans = getSelected();
    if(ans){
        if(ans === quizData[currentQuiz].correct){
            score++;
            
            
        }
        currentQuiz++;
        if(currentQuiz<quizData.length){
            loadQuiz();
            
            deselect();
       
        
    }
else{
    quizContainer.innerHTML = `<h2>Thank You for Participating in Quiz</h2>
                                <h3>You've scored ${score} out of ${quizData.length}</h3>`;
                                
}
} 
    
})



