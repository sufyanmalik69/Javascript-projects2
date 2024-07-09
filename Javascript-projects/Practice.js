let arr = ["apple",'mango',"banana",'pineapple','grape']

let sum = arr.filter(n => n[1] === 'a')
.map(n => n + 'x2')
.reduce((a,b) => a +b)

console.log(sum)



