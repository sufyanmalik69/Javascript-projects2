// fetch API

// The fetch API provides an interface for fetching(sending/receiving) resources.
// It uses Request and response objects.
// The fetch() is used to fetch resource (data).

// let promise = fetch(url,[options])



// Understanding Terms

// AJAX is Asynchronous JS & XML.

// JSON is JavaScript Object Notation.

// json() method : returns a second promise that resolves with the result of
// praising the response body text as JSON. (Input is JSON, output is JS object).



// const url = "https://cat-fact.herokuapp.com/facts";
// const factsp = document.querySelector('#facts')
// const fact_change = document.querySelector('#fact_change')
// let count = 0

// async function getFacts(){
//     let promise = await fetch(url)
//     console.log(promise)
//     console.log(promise.status)
//     let data = await promise.json()
//     factsp.innerHTML = data[count].text
//     console.log(count)
// }

// function getFacts(){
//     return response = fetch(url)
//     .then()
//     {
//         let data = promise.json()
//         console.log(data)
// }
// }

// fact_change.addEventListener('click',() => {
//     getFacts()
//     count += 1
//     if(count > 4){
//         count = 0
//     }
// } )


// HTTP(Hypertext transfer protocol) requests

// GET
// it is a request for fetching data.

// POST 
// it is a request for adding data in APIs.

// DELETE
// it is a request for deletion of data.

// *fetch uses get request by default.


