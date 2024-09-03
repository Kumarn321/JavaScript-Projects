//loops
for(let i=1;i<=5;i++){
    console.log('hello')
}
for(let i=1;i<=5;i++){
    console.log(i)
}

//print 10 to 1
for(i=10;i>=1;i--){
    console.log(i) 
}

//break-stops the loop

// while(true){
//     let num= Number(prompt('enter the number'))
//     if(!isNaN(num))
//     break;
// }

//continue -skips the current iteration

for(i=0;i<=10;i++){
    if(i%3==0)
    continue
    console.log(i)
}

//for....of

let arr=['apple','orange','grapes','mango']
for(i=0;i<arr.length;i++)
console.log(arr[i].toUpperCase())

for(let fruit of arr)
console.log(fruit)

//for...in

item={
    name:'phone',
    quantity:1,
    price:25000
}

for(let key in item){
    console.log(item[key])
}