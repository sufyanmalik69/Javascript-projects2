// DOM manipulation

// Eventlisteners 


// element.addeventListener("click",function);

// const button2 = document.getElementById('button2');

// function alertbutton(){
//     alert("I love js");
// }

// button2.addEventListener('click',alertbutton)

// const button1 = document.getElementById('button1')
// const bg = document.getElementsByTagName('body')
// function bg_change(){
//     console.log(bg)
//     bg[0].style.backgroundColor = 'red';
// }

// button1.addEventListener('click',bg_change)


// mouseover

// element.addEventListener(''mouseover',function);

// const buttons = document.getElementsByClassName('buttons')
// const title = document.getElementById('title')
// function title_change(){
//     let i = prompt("Enter a title name:")
//     title.innerHTML = i;
// }
// buttons[1].addEventListener('mouseover',title_change)


// removing event listeners
// const btn1 = document.querySelector('#button1');
// const title = document.querySelector('#title');

// btn1func = () => {
//     title.innerHTML = "HELLO BROTHER"
// }
// btn1.addEventListener('click',btn1func)
// btn1.removeEventListener('click',btn1func)


// Practice Q1.Create a toglle button that changes the screen to dark-mod when
// clicked & light-mode when clicked again.

const btn1 = document.querySelector('#button1');
const body = document.querySelector('body');
let count = 1
console.log(body)
bg_change = () =>{
    if(count % 2 === 1 ){
        body.style.backgorund = "black";
    }
    else{
        body.style.background = "black";
        body.style.background = 'linear-gradient(237deg, #000000 0%, rgba(58, 53, 176, 0.65) 100%);'
    }
    count++
}

btn1.addEventListener('onclick',bg_change);