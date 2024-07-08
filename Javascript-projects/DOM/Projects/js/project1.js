// Project 1 using event listener and DOM manipulation

const button = document.getElementById('button')
const para = document.getElementById('hiddenp-div')
//const button2 = document.getElementById('button2')
function reveal(){
    if(para.style.display === 'none' || para.style.display === ''){
    button.innerText = "Reveal Less..."
    para.style.display = 'flex';
    button.setAttribute('id',"button2")}
    else{
        button.innerText = "Reveal More..."
        para.style.display = 'none';  
        button.setAttribute('id',"button")
    }
}

button.addEventListener('click',reveal)



