let message = 'hello'
console.log(message)
message = 'hi'
console.log(message)

const m = 'world'
// const เปลี่ยนค่าไม่ได้ fix ค่ามาแล้ว
//m = 'World'

console.log(" "+message+m)

//if
console.log(2+3 === 5 ? 'Yes' : 'No')
console.log(message === m ? 'Yes' : 'No')
message = 'world'
console.log(message === m ? 'Yes' : 'No')


//Function
function test(){
    console.log('test')
}
//Arrow function
const add = (a,b) => {
    return a+b
}
console.log(add(2,3))

const average = (a,b) => a+b/2
console.log('Average for 2+3 ' +average(2,3))
//It can do .
const total  = function (a,b,c){
    return a+b+c
}
console.log(total(1,2,3))

// it doesn't have parameter
const a = () =>{
    console.log("()")
}
console.log(a())

//map 
const number = [11,22,33]
console.log(number)
//ตัวสุดท้าย
number.push(4)
console.log(number)
//ตัวสุดท้่าย
number.pop()
console.log(number)
console.log('\n')

//for loop
for (let i = 0; i < number.length; i++) {
    console.log('list'+ number[i])
}
console.log('\n')

//get index
for (const i in number) {
    console.log('get index '+ i)
}
console.log('\n')

// get value
for (const n of number) {
    console.log('get value '+n)
}
console.log('\n')

//ใส่ได้แค่ func
number.forEach(n => console.log(n))

console.log('--------------------')
number_ = [1, 2, 3, 4]
console.log(number_.map(n => n * 10))
console.log('number_ not change. -> '+number_)

n = [1, 3, 5, 7, 9]

//ไม่เอา 5 
console.log(n.filter(n => n != 5))

const txt1 = 'Hello' + 'A'
console.log(txt1)
const txt2 =  `Hello ${'A'}` 
console.log(txt2)



//object
const person = {
    firstname: 'Rungnapa',
    lastname : 'Ittiponsuwan',
    weight: 48,
    height: 156,
    BMI : function (w,h) {
        return w/Math.pow(h,2)
    }


}
console.log(person.firstname+' '+person.lastname)
console.log('BMI : '+person.BMI(person.weight,person.height))
