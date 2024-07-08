// Project 1 using event listener and DOM manipulation

const button = document.getElementById('button')
const para = document.getElementById('hiddenp-div')
function reveal(){
    button.style.width = "200px";
    button.style.borderRadius = "50px";
    button.innerText = "Reveal Less..."
    para.style.display = 'flex';
}
button.addEventListener('click',reveal)