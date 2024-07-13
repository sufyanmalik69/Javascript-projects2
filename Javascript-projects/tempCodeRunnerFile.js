// function ox1(evt){
//     if(count % 2 === 1){ // player x
//         let ele =  evt.currentTarget;
//         let ele_att = ele.getAttribute('id');
//         ele.childNodes[3].style.display = "block";
//         conp1_arr.push(ele_att)
//         if(conp1_arr.length >= 3){
//         let conp1_arr_rev = conp1_arr.reverse();
//         console.log(conp1_arr_rev)
//         let arr1 = conp1_arr_rev.splice(0,3);
//         let arr2 = arr1
//         arr2 = arr1.reverse();
//         let str1 = arr1.toString();
//         let str2 = arr2.toString();
//         for(let i of combos ){
//             if(i === str1 || i === str2){
//                 console.log("X win")
//                 p2_scored = true;
//                 score_count();
//                 new_game();

//             }
//         }}
//     }if(count % 2 === 0){ // player o
//         let ele =  evt.currentTarget;
//         ele.childNodes[1].style.display = "block";
//         let ele_att = ele.getAttribute('id');
//         conp2_arr.push(ele_att)
//         if(conp2_arr.length >= 3){
//             let conp2_arr_rev = conp2_arr.reverse();
//             console.log(conp2_arr_rev)
//             let arr1 = conp2_arr_rev.splice(0,3);
//             let arr2 = arr1
//             arr2 = arr1.reverse();
//             let str1 = arr1.toString();
//             let str2 = arr2.toString();
//             for(let i of combos ){
//                 if(i === str1 || i === str2){
//                     new_game();
//                     console.log("O win")
//                     p1_scored = true
//                     score_count();
//                 }
//             }}
//     }
// }
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
let conp1_arr = []//['con0', 'con8', 'con4']
// let conp2_arr = []
let conp2_arr = ['con2', 'con6', 'con4']
function combo_checker(){
    for(let j of combos){
        let arr_c2 = []

        for(let i of conp2_arr){
            for(let k of j){
                if(i === k ){
                    arr_c2.push(k)
                }if(arr_c2.length === 3){
                    console.log(arr_c2,conp2_arr)
                    p2_won = true
                    arr_c2 = []
                    conp2_arr = []
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
                    console.log(arr_c1,conp1_arr)
                    p1_won = true
                    arr_c1 = []
                    conp1_arr = []
                    break
                }
            }
        }
    }}

combo_checker();
conp1_arr = ['con0','con8']
combo_checker();
console.log(conp1_arr,conp2_arr)