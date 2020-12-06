const CorrectAnswers=['B','B','B','B'];
const r = document.querySelector('.result');

let squor = 0 ; 

const form = document.querySelector('.quize-form');
form.addEventListener('submit',(e)=>{
    e.preventDefault();

    const checkAnswers=[form.q1.value, form.q2.value, form.q3.value, form.q4.value];

    checkAnswers.forEach((answer,index)=>{
        if(answer === CorrectAnswers[index]){
            squor+=25;
        }
        scrollTo(0,0);
        r.querySelector('span').textContent=squor+"%";
        r.classList.remove('d-none');
        
       // console.log(squor);
    })
})

