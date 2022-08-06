let addFrom = document.querySelector('.add');
let list = document.querySelector('.todos');
let search = document.querySelector('.search input');
const generateTemplate = todo=>{

    const html = 
    `
        <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${todo}</span>
        <i class="far fa-trash-alt delete"></i>
        </li>
    `;
    list.innerHTML += html;
};


addFrom.addEventListener('submit', e=>{

    e.preventDefault();

    let todo = addFrom.add.value.trim();
    
    if(todo.length)
    {
    generateTemplate(todo);
    addFrom.reset();
    }

});

list.addEventListener('click', e=>{
    // console.log(e.target.parentElement);
    if(e.target.classList.contains('delete'))
    {
        e.target.parentElement.remove();
    }
});

const filtertodo = (term) => {
    // console.log(Array.from(list.children));
    Array.from(list.children)
    .filter((todo) => !todo.textContent.includes(term))
    .forEach((todo) => todo.classList.add('filtered'));
    Array.from(list.children)
    .filter((todo) => todo.textContent.includes(term))
    .forEach((todo) => todo.classList.remove('filtered'));
};


search.addEventListener('keyup', () => {
    const term = search.value.trim();
    filtertodo(term);
});