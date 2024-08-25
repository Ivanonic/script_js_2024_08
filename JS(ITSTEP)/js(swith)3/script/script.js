
// операторы




// матиматичные операторы

// console.log('додавання 1 + 1 =>', 1 + 1);
// console.log('виднимання 2 - 1 =>', 2 - 1);
// console.log('множення 4 * 2 =>', 2 * 2);
// console.log('дилення 4 * 2 =>', 2 * 2);
// console.log('множення 4 / 2 =>', 4 / 2);
// console.log('остача вид дилення 5 % 2 =>', 5 % 2);
// console.log('степинь 3 ** 3 =>', 3 ** 3);


// матиматичные операторы з ризными тыпами даных

// /  // приводит  все до string
// console.log('4' - 2);
// console.log(2 + '4' + true);
// console.log(2 + true);


// console.log(2 * '10ghss');
// console.log(2 * '10');

// унарный оператор
// console.log(+ '245');
// console.log(+ '400');
// console.log(+ 'test');
// console.log(+ true);
// console.log(+ false);
// console.log(+ undefined);
// console.log(+ null);

// оператор присвоення

// const pi = 3 + 0.14
// console.log('pi --->',  pi);

// скорочення

// let a = 1
// a = a + 2
// console.log('a --->',  a);

// let b = 10
// console.log( b += 1);
// console.log( b -= 1);
// console.log( b *= 2);
// console.log( b /= 2);

// console.log( 'b --->',  b);

// инкремент и декримент

// инкремента ++1




// let с = 10
// c = c + 1
// c += 1
// console.log('c --->', c);

// let d = 100
// d ++
// console.log('d --->', d);

// let i = 111
// i--
// console.log('i --->', i);

// ! постфиксый и префиксныйинкремент и декремент

//  посфиксне 

//  let f = 999
//  console.log(f++);
//  console.log(f);

// //  префиксный

// let g = 999
// console.log(++g);
// console.log(g);

// ! операторы поривняння

// * >
// * <
// * <=
// * >=
// * == ривнисть по значеню
// * === суворы ривнисть (по типах)
// * != не  ривнисть по значенню
// * !== не суворы ривнисть (по типах)

// 1 == '1' => true
// 1 == '2' => false
// 1 === '1' => true
// 1 === '1' => false

// 1 != '1' => false
// 1 !== '1' => true

// /

// ! поривняння ризных данных

// console.log('2' > 1);
// console.log('1' == 1);

// console.log( true == 1);
// console.log( false == 1);

// console.log( 1 === true);
// console.log( 1 !== true);

// console.log(undefined == null);
// console.log(undefined === null);

// console.log(undefined == 1);
// console.log(null == 1);

// console.log('a' === 'a');
// console.log('A' < 'a');
// console.log('b' > 'a');
// console.log('abc' < 'abcd');

// console.log('aleksandr' === 'Aleksandr');
// console.log('aleksandr' === 'aleksandr');
// console.log('aleksandr' < 'Aleksandr');
// console.log('aleksandr' > 'Aleksandr');

// логичные операторы || &&
// ||- або
// console.log(1 === 1 || 1 !== 2);

// console.log(false || true);

// console.log(false || false);
// console.log(false || false || false || false);
// console.log(false || false || true || false);






// &&- I

// console.log(true && true);
// console.log(true && false);
// console.log(true && true && false && true && true);

// let a = 1
// 1 === a ? console.log('1 === a') : console.log('1 !== a');

// // 

// if (a === 1){
//     console.log('1 === a')
    
// }else {
//     console.log('1 !== a')
    
// }

// switch case

// const j = 1
// const j = 2
// const j = 85757458

// switch (j) {
//     case 1:
//         console.log(1);
//         break
//     case 2:
//         console.log(2);
//         break
//     default:
//         console.log(9999);
        
// }

////////////////////////////////////////////////////////////


// function month() {
//     const monthNumber = +document.querySelector('.monthNumber').value
//   console.log('✌️monthNumber --->', monthNumber);
   
//     if(monthNumber === 1 || monthNumber === 2 || monthNumber === 12 ){
//       console.log('Winter!!!');
//     }
//     else if(monthNumber === 3 || monthNumber === 4 || monthNumber === 5){
//       console.log('Spring!');
//     }
//     else if(monthNumber === 6 || monthNumber === 7 || monthNumber === 8){
//       console.log('Summer!');
//     }
//     else if(monthNumber === 9 || monthNumber === 10 || monthNumber === 11){
//       console.log('fall! autumn');
//     }
//     else{
//       console.log('Invalid input');
//     }
//   }


/////////////////////////////////////////////////////

// function month() {
//     const monthNumber = +document.querySelector('.monthNumber').value
//   switch (monthNumber) {
//     case '1':
//     case '2':
//     case '12':
//         console.log('winter!');
//         break
//     case '3':
//     case '4':
//     case '5':
//         console.log('Spring!');
//         break
//     case '6':
//     case '7':
//     case '8':
//         console.log('Summer!');
//         break
//     case '9':
//     case '10':
//     case '11':
//         console.log('Fall!');
//         break
//     default:
//         console.error('error!!!');
        
        
//   }

// }



///////////////////////////////////////////////////////

// const select = document.getElementById('bgc');
// const bg = document.guerySelector('body');

// select.addEventListener('change', function()


// )

// const select = document.getElementById('bgc')
// const bg = document.querySelector('body')
 
// select.addEventListener('change', function(){
//   const selectedValue = select.value
 
//   switch(selectedValue){
//     case 'green':
//       bg.style.backgroundColor = 'orang'
//       break
//     case 'yellow':
//       bg.style.backgroundColor = 'gree'
//       break
//     case 'blue':
//       bg.style.backgroundColor = 'blue'
//       break
//     default:
//       bg.style.backgroundColor = 'red'
//   }
// })

// function month() {
//     const monthNumber = document.querySelector('.monthNumber') .value

//   switch (monthNumber) {
//             case '1':
//                 console.log('Понеділок!');
//                 break
//             case '2':
//                 console.log('Вівторок!');
//                 break
//             case '3':
//                 console.log('Середа!');
//                 break
//             case '4':
//                 console.log('Четверг!');
//                 break
//             case '5':
//                 console.log('Пятница');
//              break
//             case '6':
//              console.log('Субота');
//              break
//             case '7':
//                 console.log('Воскресенье');
//                 break
//             default:
//                 console.error('error!!!');
        
        
//     }

// }
 
 
console.log('1');








