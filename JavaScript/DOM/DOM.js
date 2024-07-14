// DOM (Document Object Model)

// DOM Manipulation.


// GetElementById()

// const title = document.getElementById("heading1"); // selects elements by id

// console.log(title) // prints elements in the console  


// // GetElementByClassName()

// const items = document.getElementsByClassName('head') // selects elements by class
// console.log(items) // prints elements in the console in an array like(not array) HTML collection.

// // GetElementByTagName()

// const  tags = document.getElementsByTagName('button')  // selects an element by tag name e.g div,body,html etc.
// console.log(tags)   // prints elements in the console in an array like(not array) HTML collection.


// // QuerySelector()

// const container = document.querySelector('h1') // its selects the first element in the code which matches
// console.log(container)                          // the given tag name,class name or id.

// // QuerySelectorAll()

// const truck = document.querySelectorAll('p') // selects all the elements in the code which matches the given
// console.log(truck)                          // tage name,class name or id.


// const title = document.getElementById('heading1')

// titlestyle.color = "blue";
//     const items = document.getElementsByClassName('head');
//     console.log(items)
// let i;
// for(i = 0;i <= items.length;i++){

//     items['heading%d',i].style.backgroundColor = 'aquamarine';
// }


// Creating Elements.

// const list = document.getElementById('list1')
// const li = document.createElement('li')

// // adding elements.

// list.append(li);

// // Modifying the text.

// li.innerHTML = "OPTION1"

// Modifying attributes nad classes.

// li.setAttribute('id',"opt1")
// const opt1 = document.getElementById("opt1")
// console.log(opt1)

// li.removeAttribute('id')
// const opt1 = document.getElementById("opt1")
// console.log(opt1)

// Practce Q1.Changing Text Content
// Select a paragraph element and change its text content.
// Select a heading element and update its text to something else.

// const para = document.getElementsByClassName('para')
// console.log(para[0])
// para[0].innerHTML = 'Hello i am batman';

// const heading1 = document.getElementById('heading1');
// console.log(heading1)
// heading1.innerText = "Hello Universe"


// practice Q2.Changing Styles
// Select a div and change its background color.
// Change the font size of a specific paragraph.
// Toggle a class on a button when it is clicked. pending

// const p_div = document.getElementsByClassName('p-div')
// p_div[0].style.backgroundColor = "red";

// const para = document.getElementsByClassName('para-2');
// para[0].style.fontSize = "40px"

// Practice Q3.Creating and Appending Elements
// Create a new list item and append it to an existing unordered list.
// Create a new paragraph and insert it before an existing paragraph.

// for(let i = 2;i <= 4;i++){
// const ul = document.getElementById('list1');
// const opt2 = document.createElement('li');

// ul.append(opt2)
// opt2.innerHTML = `OPTION${i}`
// }
// const p_div = document.getElementsByClassName('p-div');
// const para_1 = document.createElement('p');
// para_1.insertBefore(p_div,p_div.children[0])
// para_1.innerHTML = "dsbsjkdfnjksdhfjk jhkldfs hkfhsk lhd klshfjks";


// Practice Q4.Removing Elements
// Select an element and remove it from the DOM.
// Remove all child elements of a specific container. pending

// const para = document.getElementById('para-2')
// para.remove();


// Traverse the DOM.

// parent node traversals

// const parent_el = document.getElementById('list1')
// console.log(parent_el.parentNode)
// console.log(parent_el.parentElement)

// child node traversals

// const child_el = document.getElementById('list1')
// console.log(child_el.childNodes)
// console.log(child_el.firstChild)
// console.log(child_el.lastChild)

// for(let i = 1;i <= child_el.childNodes.length-1;i++){
// if(i % 2 === 1){
// child_el.childNodes[i].style.color = "red";
// }}

// Sibling nodes traversal

// const li1 = document.getElementById('li1');
// console.log(li1.nextSibling)
// console.log(li1.previousSibling) // it selects whatever is previous text,element etc
// console.log(li1.nextElementSibling)
// console.log(li1.previousElementSibling) // it selects an element only
