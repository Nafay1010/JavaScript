let correctAnswers = ['B', 'B', 'B', 'B'];
let form = document.querySelector('.quiz-form');
let result = document.querySelector('.result');
let row = document.querySelector('dl.score_row')
let score_des = document.querySelector('.score');
form.addEventListener('submit', e=>{
    e.preventDefault();
    let score = 0;

    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

    userAnswers.forEach((answer, index) => {
        if(answer === correctAnswers[index])
        {
            score += 25;
        }
    });
// console.log(score);
scrollTo(0,150);
result.classList.remove('d-none');
row.classList.remove('d-none');
// score_des.textContent = `${score}/100`;

let output = 0;
const timer = setInterval(() => {
result.querySelector('span').textContent = `${output}%`;
score_des.textContent = `${output}/100`;
if(output == score)
{
    clearInterval(timer)
}
else
{
    console.log(output);
    output++;
}
}, 10);
});
