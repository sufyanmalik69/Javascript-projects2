const con1 = document.querySelector('#con0');
const con2 = document.querySelector('#con1');
const con3 = document.querySelector('#con2');
const con4 = document.querySelector('#con3');
const con5 = document.querySelector('#con4');
const con6 = document.querySelector('#con5');
const con7 = document.querySelector('#con6');
const con8 = document.querySelector('#con7');
const con9 = document.querySelector('#con8');
const mini_cons = document.querySelectorAll('.mini-con');
const p1_sc = document.querySelector('#p2-sc');
const p2_sc = document.querySelector('#p1-sc');
const scorep2_div = document.querySelector('#score_p2');
const scorep1_div = document.querySelector('#score_p1');
const p_name = document.querySelector('#p-name');
const overlay = document.querySelector('.overlay');
const popup = document.querySelector('#popup');
const new_gamee = document.querySelector('#new_game');


let count = 3;
let turns = 1;
function turn(){

    if(count % 2 === 0 && turns <= 9){
        turns++
    p1_sc.childNodes[0].style.backgroundColor = "lightgreen";
    p2_sc.childNodes[0].style.background = "none";

}if(count % 2 === 1 && turns <= 9 ) {
    turns++;
    p2_sc.childNodes[0].style.backgroundColor = "lightgreen";
    p1_sc.childNodes[0].style.background = "none";

}if(turns > 9){
    p2_sc.childNodes[0].style.background = "none";
    p1_sc.childNodes[0].style.background = "none";
    p2_sc.childNodes[0].innerHTML = "GAME OVER";
    p1_sc.childNodes[0].innerHTML = "GAME OVER";
    location.reload();
}    count++;
}   
p1_sc.childNodes[0].style.backgroundColor = "lightgreen";


let p1_scored = false;
let p2_scored = false;
 let x = 1;
 let y = 1;
function score_count(){
    if(p2_scored === true){// for player o
        scorep1_div.childNodes[x].style.display = "flex";
        x += 2;
        p2_scored = false;
    }  if(p1_scored === true){ // for player x
        scorep2_div.childNodes[y].style.display = "flex";
        y += 2;
        p1_scored = false;
    }
    if(x === 7){
        p_name.innerHTML = "PLAYER 1[O]"
        overlay.style.display = "block";
        popup.style.display = 'flex';
    }    if(y === 7){
        p_name.innerHTML = "PLAYER 2[X]"
        overlay.style.display = "block";
        popup.style.display = 'flex';
    }
}
function new_game(){
    turns = 1;
    for(let i=0;i <= 8;i++){
        mini_cons[i].childNodes[1].style.display = "none";
        mini_cons[i].childNodes[3].style.display = "none";
    }count = 3;
    p1_sc.childNodes[0].style.backgroundColor = "lightgreen";
    p2_sc.childNodes[0].style.background = "none";
}
let conp1_arr = []
let conp2_arr = []

let combos = [
    ['con0', 'con1', 'con2'], ['con0', 'con2', 'con1'], ['con1', 'con0', 'con2'], ['con1', 'con2', 'con0'], ['con2', 'con0', 'con1'], ['con2', 'con1', 'con0'],
    ['con3', 'con4', 'con5'], ['con3', 'con5', 'con4'], ['con4', 'con3', 'con5'], ['con4', 'con5', 'con3'], ['con5', 'con3', 'con4'], ['con5', 'con4', 'con3'],
    ['con6', 'con7', 'con8'], ['con6', 'con8', 'con7'], ['con7', 'con6', 'con8'], ['con7', 'con8', 'con6'], ['con8', 'con6', 'con7'], ['con8', 'con7', 'con6'],
    ['con0', 'con3', 'con6'], ['con0', 'con6', 'con3'], ['con3', 'con0', 'con6'], ['con3', 'con6', 'con0'], ['con6', 'con0', 'con3'], ['con6', 'con3', 'con0'],
    ['con1', 'con4', 'con7'], ['con1', 'con7', 'con4'], ['con4', 'con1', 'con7'], ['con4', 'con7', 'con1'], ['con7', 'con1', 'con4'], ['con7', 'con4', 'con1'],
    ['con2', 'con5', 'con8'], ['con2', 'con8', 'con5'], ['con5', 'con2', 'con8'], ['con5', 'con8', 'con2'], ['con8', 'con2', 'con5'], ['con8', 'con5', 'con2'],
    ['con0', 'con4', 'con8'], ['con0', 'con8', 'con4'], ['con4', 'con0', 'con8'], ['con4', 'con8', 'con0'], ['con8', 'con0', 'con4'], ['con8', 'con4', 'con0'],
    ['con2', 'con4', 'con6'], ['con2', 'con6', 'con4'], ['con4', 'con2', 'con6'], ['con4', 'con6', 'con2'], ['con6', 'con2', 'con4'], ['con6', 'con4', 'con2']
]
let p1_won = false
let p2_won = false


function combo_checker(){
    for(let j of combos){
        let arr_c2 = []

        for(let i of conp2_arr){
            for(let k of j){
                if(i === k ){
                    arr_c2.push(k)
                }if(arr_c2.length === 3){
                    p2_won = true
                    arr_c2 = []
                    conp2_arr = []
                    conp1_arr= []
                    break
                }
            }
        }
    }
    for(let j of combos){
        let arr_c1 = []
        for(let i of conp1_arr){
            for(let k of j){
                if(i === k ){
                    arr_c1.push(k)
                }if(arr_c1.length === 3){
                    p1_won = true
                    arr_c1 = []
                    conp1_arr = []
                    conp2_arr = []
                    break
                }
            }
        }
    }
    if(p2_won === true || p1_won === true){
        if(p2_won === true){
            p2_scored = true
        }if(p1_won === true){
            p1_scored = true
        }
        p2_won = false
        p1_won = false
        score_count();
        new_game();
    }
}
function ox1(evt){
    if(count % 2 === 1){ // player x
        let ele =  evt.currentTarget;
        let ele_att = ele.getAttribute('id');
        ele.childNodes[3].style.display = "block";
        conp1_arr.push(ele_att)
        combo_checker();

        }
    if(count % 2 === 0){ // player o
        let ele =  evt.currentTarget;
        ele.childNodes[1].style.display = "block";
        let ele_att = ele.getAttribute('id');
        conp2_arr.push(ele_att)
        combo_checker();      
    }
}
function restart(){
    location.reload();
}

con1.addEventListener('click',turn);
con2.addEventListener('click',turn);
con3.addEventListener('click',turn);
con4.addEventListener('click',turn);
con5.addEventListener('click',turn);
con6.addEventListener('click',turn);
con7.addEventListener('click',turn);
con8.addEventListener('click',turn);
con9.addEventListener('click',turn);


con1.addEventListener('click',ox1);
con2.addEventListener('click',ox1);
con3.addEventListener('click',ox1);
con4.addEventListener('click',ox1);
con5.addEventListener('click',ox1);
con6.addEventListener('click',ox1);
con7.addEventListener('click',ox1);
con8.addEventListener('click',ox1);
con9.addEventListener('click',ox1);

new_gamee.addEventListener('click',restart)