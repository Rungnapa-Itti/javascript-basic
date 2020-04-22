/*
console.log(name)
var name = "rungnapa" // global scope 
// var make to a lot of error because if you do line 2 , it thought you defined .
Ever thought if you define type var in down line but in js always var stay line up .
*/

/* func math
console.log(Math.PI)
*/

/* Not a number (NAN) if you change type other to type number but variable not math with new type 
, it to be NAN.

let hello = "Hi"
console.log(Number.parseInt(hello)) -> NAN
*/

/*
const obj = {
    name: "Rungnapa",
    nickname: "Milk"
}
console.log(obj.name)
console.log(obj["nickname"]) // if you use [] , have to use ""

obj.name = "RUNGNAPA"
console.log(obj.name) // const for object can change value 

console.log(typeof [1,2,3]) // array is object

let arr =[] // unlimit size
arr[0] = 1
arr[3] = 2
console.log(arr)
*/

/*pass by value
let number1 = 15
let number2 = number1 // copy value number1 to number2 , difirent position
number2 = 19

console.log(number1)
console.log(number2)
*/

/*pass by reference
let obj1 = {
    name: "Milk"
}
let obj2 = obj1 // point of obj1 with obj2 same position in memory, it make value same change 
//solve problem {...obj1} or line 58
obj2.name = "Rungnapa" 

console.log(obj1)
console.log(obj2)

obj3 = {
    name: obj1.name
}
obj3.name = "Hi"
console.log(obj1)
console.log(obj3)
*/


/*operator
console.log(2==2) -> Is variable same value.
console.log(2==='2') -> Is variable same type.
*/