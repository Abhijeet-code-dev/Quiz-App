const quizData = [
    {
        question: 'Which of the following is not a programming language?',
        a: 'TypeScript',
        b: 'Python',
        c: 'Anaconda',
        d: 'Java',
        correct: 'c'
    },
    {
        question: 'Which of the following is the correct way to use the standard namespace in C++?',
        a: 'Using namespace std;',
        b: 'Using namespace standard;',
        c: 'Using standard namespace;',
        d: 'Standard namespace used;',
        correct: 'a'
    },
    {
        question: 'What is the only thing that computers understand?',
        a: 'Machine Code',
        b: 'Low Level Languages',
        c: 'High Level Languages',
        d: 'Algorithms',
        correct: 'a'
    },
    {
        question: 'Which of the following is not a high level programming language?',
        a: 'Assembly',
        b: 'C++',
        c: 'Java',
        d: 'Python',
        correct: 'a'
    },
    {
        question: 'Following is the invalid inclusion of a file to the current program. Identify it.',
        a: '#include <file>',
        b: '#include "file"',
        c: '#include <file',
        d: 'All of above in C',
        correct: 'c'
    },
    {
        question: 'In the standard library of C programming language, which of the following header file is designed for basic mathematical operations?',
        a: 'math.h',
        b: 'conio.h',
        c: 'stdio.h',
        d: 'dos.h',
        correct: 'a'
    },
    {
        question: 'SELECT *_______ CUSTOMER;',
        a: 'FROM',
        b: 'WHERE',
        c: 'SELECT',
        d: 'ORDER BY',
        correct: 'a'
    },
    {
        question: 'Which of these expressions is NOT a valid way to add 1 to a variable?',
        a: 'x++',
        b: 'x += 1',
        c: 'x = x + 1',
        d: 'x+',
        correct: 'd'
    },
    {
        question: 'To focus on the logic and make refinements to a program before translating it into a programming language, a programmer often creates an outline of the program’s algorithm. What is the term for this type of outline?',
        a: 'Sketch',
        b: 'Pseudocode',
        c: 'Algorithm',
        d: 'None',
        correct: 'b'
    },
    {
        question: 'Consider the loop control structure in programming. Which term describes a loop that continues repeating without a terminating (ending) condition?',
        a: 'Conditional Loop',
        b: 'Unlimited Loop',
        c: 'Sequence Loop',
        d: 'Infinite Loop',
        correct: 'd'
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



