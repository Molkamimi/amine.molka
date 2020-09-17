let input = document.getElementById ('myinput')
let addBtn = document.querySelector('.addBtn')
let list=document.querySelector('#myUl')
function addToDo(){
let text=document.createTextNode(input.value);
addToDo()
let li=document.createElement('li');
li.appendChild(text);
if (input.value){
    list.appendChild(li);
} else{alert('Please enter an input')}
input.value='';


let removeBtn = document.createElement('button')
let=document.createElement('button')
li.appendChild(removeBtn);
removeBtn.innerText='x';
removeBtn.addEventListener('click','function'){
    removeBtn.parentElement.remove();
}
removeBtn.setAttribute('class','removeBtn');
removeBtn.classList.toggle('removeBtn');
li.addEventListener('mouseover','function()'){
    li.style.backgroundColor='rgb(173,173,173)';
}}
li.addEventListener('mouseout')