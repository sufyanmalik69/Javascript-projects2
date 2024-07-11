const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2')
const form1 = document.querySelector('#form1')
const form2 = document.querySelector('#form2')
const form3 = document.querySelector('#form3')
const popup = document.querySelector("#popup")
const overlay = document.querySelector('#overlay')
const btn4 = document.querySelector('#btn4')
let arr = [];
form1.addEventListener('submit',function(evt) {
      evt.preventDefault();

      let inp_name = document.querySelector('#input1').value
      
      form1.style.display = 'none';
      form2.style.display = 'flex';
      arr.push(inp_name)
})

form2.addEventListener('submit', function(evt){
      evt.preventDefault();
      let inp_email = document.querySelector('#input2').value
      let inp_gender = document.querySelector('input[name="gender"]:checked').value;
      let inp_con = document.querySelector('#checkbox').value
      console.log(inp_email,inp_gender,inp_con);

      form2.style.display = "none";
      form3.style.display = "flex";
      arr.push(inp_email)
      arr.push(inp_gender)
      arr.push(inp_con)
})
form3.addEventListener('submit',function(evt){
      evt.preventDefault();
      let inp_comment = document.querySelector('#input3').value;
      console.log(inp_comment);
      form3.style.display = "none";
      popup.style.display = "flex"
      overlay.style.display = "flex"
      arr.push(inp_comment)
      const name = document.querySelector('#name')
      const email = document.querySelector('#email')
      const gender = document.querySelector('#gender')
      const confo = document.querySelector('#confo')
      const comment = document.querySelector('#comment')

      name.innerText = `Name:${arr[0]}`
      email.innerText = `Email:${arr[1]}`
      gender.innerText = `Gender:${arr[2]}`
      confo.innerText = `Human?:${arr[3]}`
      comment.innerText = `Comment:${arr[4]}`
})

btn4.addEventListener('click',function(){
   overlay.style.display = "none"
   popup.style.display = "none"
   form1.style.display = "flex"
   arr = []
})






