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

/* for in
const obj = {
    fname : "rungnapa",
    lname : "Ittiponsuwan"
}
// for in get key
for (const key in obj) {
    console.log(key)
    //access value
    console.log(obj[key])
}
//access by key have to use String
console.log(obj["fname"])
*/

/*array
let arr = [1,2,3,"hello"]
for (const index in arr) {
    console.log(arr[index])

}


let array = []
array[0] = 2
array[5] = 3
//index of arrays are 6 but you have values are 2 , so forin print 2 value
for (const index in array) {
    console.log("lenght of array :"+array.length+ " value of index : "+array[index])
}

*/

/* function
function name(param){
    console.log(param)
}

name("Rungnapa")
*/

/*Template String -> you have to use `` not ""
const name = "milk"
console.log(`My name is ${name}`)

// You can do it.
console.log(`Hi , My name is Milk
    I'm 21.
I studying at KU.
        What about you ?`)
*/

/*forof different forin a ittle is forin print values only but forof print all 
//and forin print index but forof print values.
let arr = []
arr[0] = 0
arr[5] = 5

for (const value of arr) {
    if (value == undefined){
        console.log("not have value of this index")
    }else{
        console.log(value)
    }

}
*/

/* Arrow Function
const name = (param) => {
    console.log(param)
}
name("Hello")
*/

/* default patameters
const name = (param = "Hi") => {
    console.log(param)
}
name()
*/

/* Rest operator is function can get a lot of parametre , just use ... follow by your name parameter
const name = (...params) => {
    console.log(typeof params)
    console.log(params)
    for (const value of params) {
        console.log(value)
    }
}
name(1,2,3,4)

const name = (...params) => {
    for(let i = 0 ; i < params.length ; i ++){
        console.log(params[i])
    }
}
name(1,2,3,4,5)
*/

/*Spread operator is concat array
const arr1 = [1,2,3]
const arr2 = [5,6]
const arr3 = [...arr1,4,...arr2]
console.log(arr3)
*/

/*Array Destructuring  -> if you do it , fname look like variable and you can call normal
// line 182 ,arr push value to index of [fname,nickname]
const arr = ["Rungnapa","Milk"]
const[fname,nickname] = arr

console.log(`Hi ${fname} `)
console.log(`Are you ${nickname}`)

const array = ["Rungnapa"]
//name of index not need same key of obj 
const[name,nname] = array 

console.log(`Hi ${name} `)
console.log(`Are you ${nname}`) // undefined

const array1 = ["Rungnapa","Milk"]
const[firstname] = array

console.log(`Hi ${firstname} `)

const array2 = ["Rungnapa","Milk"]
const[,Nick] = array2

console.log(`Hi ${nickname} `)
*/

/*object Destructuring
const obj = {
    name: "rungnapa",
    nickname : "ittiponsuwan"
}
//name of index have to same key of obj 
const {name , nickname} = obj
console.log(`${name}`)
console.log(`${nickname}`)
*/

/*import
import {a} from './a.js' // {} use for value not to be  export default
import name from './a.js' // use for value  to be export default
console.log(a) // error -> solve by create package.json
name("Hello")


import {a} from './a.js'
import b from './a.js' // get value default to b 

console.log(a)
console.log(b)
*/