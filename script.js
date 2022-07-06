   
let nCategory = document.querySelectorAll('.category');
for(items of nCategory){
    items.addEventListener('click',(e)=>{
        //console.log('clicked');
        let element = e.currentTarget;
        let elementId = e.currentTarget.id;
        
           element.style.backgroundColor = "rgba(137, 43, 226, 0.832)";
           element.style.height = "100px";
           element.style.width = "200px";
           element.style.textAlign = "center";
           element.style.paddingTop = "10vh";
           if(elementId === 'category1'){
            
            element.innerHTML = `<button id="compQuiz" class="quiz"><a href="quiz.html">Start Quiz</a></button>`;
            
           }
           if(elementId === 'category2'){
            element.innerHTML = `<button id="progQuiz" class="quiz"><a href="quiz1.html">Start Quiz</a></button>`;
            
           }
    })
}
