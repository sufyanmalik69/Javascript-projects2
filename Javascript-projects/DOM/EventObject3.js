// Event Object

// it returns an object with lots of info after an event occurs.

const btn1 = document.querySelector('#btn1');
const div1 = document.querySelector('#div1')
let count  = 0;
let arr = ['blue','red','yellow','lightgreen','lightblue']
btn1.onclick = (evt) =>{
    console.log(evt) // prints info such as event type, event cordinates etc.
    console.log(evt.type) // prints type of the event e.g click,mouseover
    console.log(evt.target) // prints the elementwhich was targetted.
    console.log(evt.clientX,evt.clientY) // prints the co-ordinates of the event.
    div1.style.backgroundColor = arr[count]
    count++
    if(count >arr.length-1){
        count = 0
    }
}
