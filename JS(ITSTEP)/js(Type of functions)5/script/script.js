// функции оголошення (Funk )

//  перед и после вызова активации
// console.log(add(1, 1));

//  a, b  це параметры функции
// function add(a, b){
//     return a + b
// }

// це аргументы функции
// console.log(add(1, 1));


// const test = 1
// let test1 = 2
// console.log('test --->',  test);
// console.log('test --->',  test1);


//  arguments

// function logArguments(){
//     console.log(arguments);
//     console.log(arguments[0]);
//     console.log(arguments[8]);
//     console.log(arguments[10]);
//     console.log(arguments,length); //килькисть элементив
    
    
// }

// logArguments(1,2,3,4,5,6,7,8,true, null, undefined)


//////////////////////////////////////////////////////////////////////////////////////

// // * return

// function logReturn(a){
//     console.log('Start');


//     if (a === 10){
//         return
//     }





//     console.log('Finish');
//     return a
    
    
// }


// console.log(logReturn(10));
// console.log(logReturn(9));

// let test
// console.log(test);

/////////////////////////////////////////////////////////////////////////////////////

// !2.функции вирази (fanction  ecspression)

// function name (){}

// sayHello()  //працювати не буде

// const sayHello = function(){
//     console.log('Hello');
    
// }


// sayHello() // працювать буде 

// стрилкова функции

// const nameFn = ( ) => {}

// sayBye('Aleksandr')



// const sayBye = (personName ) => {
//     console.log('Bay ' + personName);
    
// }

// sayBye('Aleksandr')
// ////////////////////////////////////////
// const test = () => {
//     // console.log(arguments);
    
//     return 1 + 2
// }
// const test1 = a => 1 + 2 + a

// console.log('test1 --->', test1(1));

// самавикликаний тип функции

// (function (name){
//     console.log('Hello ${name}!!!');
// }('Aleksandr'))

// const iife = function(name) {
//     console.log('Hello $(name)!!!')
    
// }('Aleksandr')

// рекурсия рекурсивные функции (recursive function)

// function logNum(num, end){
//     console.log(num);
//     if (num === 100){
//         return
//     }
//     logNum(++num, end)
    
// }
// logNum(1)
// logNum(1, 100)


// 5! = 5 * 4 * 3 * 2 * 1 = 120

// function factorial(a){
//     if (n === 0){
//         return 1
//     }else {
//         return n * factorial(n - 1)
//     }
// }

// const number = 5
// const result = factorial(number)
// console.log('${number}! = ${result}');


// let conuter = 1
// function Recursion(number){
//     console.log(conuter);
//     if (conuter < number) {
//         console.log('inside');
//         conuter++
        
//     }
    
// }

//  function generateNestedList(depth, items){
//     if (depth === 0){
//         return **
//     }


//     const openTag = '<ul>'
//     const closeTag = '</ul>'
//     let listItems = ''

//     for (let i = 0; i < items; i++) {
//         listitems += '<li>$[generateNestedList(depth - 1, items)]</li>'
//     }
//     return'${openTag}'$

//  }


// function factorial(f){
//     if(f(0) = 1)
//         return f(0) 
// }
 


// factorial(return f = 3,2)

// function factorial(f, n){
//     if(n === 0){
//         return 1;
//    }else {
//    return f * factorial(f, n - 1)
//    }
// }
// console.log(factorial (2,3));






// function fib(n) { 
//     if(n === 0)
//         return 0;
//     if(n === 1)
//         return 1;
//     return fib(n - 1) + fib(n - 2);
//  } 


// alert(fib(3)); // 2
// alert(fib(7)); // 13


// alert(fib(77)); // 5527939700884757




