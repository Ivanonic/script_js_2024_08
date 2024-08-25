// ! if alse

// if(умова){наслідок}

// (умова)
// > true / folse
// < true / folse
// <= true / folse
// >= true / folse

// if(1 > 2){console.log('ok')}
// if(1 < 2){console.log('ok')}
// const a = +prompt('enter 1 number')
// const b = +prompt('enter 2 number')


// if(a >= b){
//     alert( '$(a) > $(b)')
// }
// else if(a < b){
//     alert('a(${a}) < b(${b})')
// } else if ( a === b){
//     alert('a(${a}) = b(${b})')
// } else{
//     alert('a(${a}) = b(${b})')
// }

// проста рівність 1== '1' true
// сувора рівність 1 === '1' fulse

// const x = 5
// const v = '5'

// 1) number === string => false
// 2) 5 === 5

// console.log(x, typeof x);
// console.log(v, typeof v);

// if(x == v){
//     console.log('true');
// }else{
//     console.log('false';)
// }

// ! && = i    and (true && true && true) => true
// ! || = або  or  (true || false || false) => true

// const m = +prompt('enter "m"')
// const n = +prompt('enter "n"')
// const k = +prompt('enter "k"')

// if(m > n){
//     if(m > k){
//         console.log('m > n m > k');
//     }
// }
// else if(n > m){
//     if(n > k){
//         console.log('')
//     }
// }

// if(m > n && m > k){
//     console.log(" m > n and m > k");
// }
// if(m > n || m > k){
//     console.log(" m > n and m > k");
// } 
// else if(n > m && n > k){
//     console.log(" n > m and n > k");
// }else if (k > m && k >n){
//     console.log(" k > m and k > n");
// }
// else{
//     console.log(" m = n = k");
// }

// const password = prompt('Enter password')
// const confirmPassword = prompt('Enter confirm password')

// if(password.length <= 4 || confirmPassword <= 4){
//     console.log("Less then 4");
// }
// else if (password.length >= 16 || confirmPassword.length >= 16){
//     console.log('More then 16')
// }
// else if(password === confirmPassword){
//     console.log('Welcome!!!');
// }
// else{
//     console.log('Diferent password');
// }

// if(password.length)

// function month(){
//     const monthNumber = +document.querySelector('.monthNamber').value 
//     if(monthNumber === 1 || monthNumber === 2 || monthNumber === 12){
//         console.log('Winter!!!');
//     }
//     else if(monthNumber === 3 || monthNumber === 4 || monthNumber === 5){
//         console.log('Spring');
//     }
//     else if(monthNumber === 6 || monthNumber === 7 || monthNumber === 8){
//         console.log('Summer!');
//     }
//     else if(monthNumber === 9 || monthNumber === 10 || monthNumber === 11){
//         console.log('fall! autumn');
//     }
//     else{
//         console.log('invalid input');
//     }
    
// }

// тернальний оператор ( умова ? iftrue  :iffalse)

// const age = +prompt('how old are you');

// if(age >=18){
//     console.log('можно голосувати');
// }else{
//     console.log('Неможно голосувати')
// }




const world = +prompt('enter "world"')
const war = +prompt('enter "war"')
const globe = +prompt('enter "globe"')

if(world > war && world > globe){
        console.log(" world > war and world > globe");
    }
    if(world > war || world > globe){
        console.log(" world > war and world > globe");
    } 
    else if(war > world && war > globe){
        console.log(" war > world and war > globe");
    }else if (globe > world && globe > war){
        console.log(" globe > world and globe > war");
    }
    else{
        console.log(" world = war = globe");
    }


    //! if else

// if(умова){наслідок}

// (умова)
//! > true | false
//! <  true | false
//! <=  true | false
//! >=  true | false

// if(1 < 2){console.log('ok')}

// const a = +prompt('enter a namber')
// const b = +prompt('enter b namber')

// if(a > b){
//   alert(`a(${a}) > b(${b})`)
// } 
// else if(a < b){
//   alert(`a(${a}) < b(${b})`)
// } 
// else{
//   alert(`a(${a}) = b(${b})`)
// }



//! == - просто рівнісьть  1 == '1' true
//! === - сувора рівнісьть 1 === '1' false

const x = 5
const v = '5'

// 1) number === string => false
// 2) 5 === 5

// console.log(x, typeof x);
// console.log(v, typeof v);

// if(x === v){
//   console.log('True');
// }else{
//   console.log('False');
// }

///////////////////////////////////////////////////////////
//! && = і       and  (true && true && true) => true
//! || = або     or  (true || false || flase)  => true


// const m = +prompt('enter "m"')
// const n = +prompt('enter "n"')
// const k = +prompt('enter "k"')

// if(m > n && m > k){
//   console.log(" m > n and m > k");
// }
// else if(n > m && n > k){
//   console.log(" n > m and n > k");
// }else if (k > m && k > n){
//   console.log(" k > m and k > n");
// }
// else{
//   console.log(" m = n = k");
// }

/////////////////////////////////////////////////////////

// const password = prompt('Enter password')
// const confirmPassword = prompt('Enter confirm password')

// if(password.length <= 4 || confirmPassword <= 4){
//   console.log('Less then 4');
// }
// else if(password.length >= 16 || confirmPassword.length >= 16){
//   console.log('More then 16')
// }
// else if(password === confirmPassword){
//   console.log('Welcome!!!');
// }
// else{
//   console.log('Diferent passwords');
// }

// if(password.length <= 4 || confirmPassword <= 4 || password.length >= 16 || confirmPassword.length >= 16 || password === confirmPassword){
//   console.log();
// }

////////////////////////////////////////////////////////////////////

function month() {
  const monthNumber = +document.querySelector('.monthNumber').value
console.log('✌️monthNumber --->', monthNumber);

  if(monthNumber === 1 || monthNumber === 2 || monthNumber === 12 ){
    console.log('Winter!!!');
  }
  else if(monthNumber === 3 || monthNumber === 4 || monthNumber === 5){
    console.log('Spring!');
  }
  else if(monthNumber === 6 || monthNumber === 7 || monthNumber === 8){
    console.log('Summer!');
  }
  else if(monthNumber === 9 || monthNumber === 10 || monthNumber === 11){
    console.log('fall! autumn');
  }
  else{
    console.log('Invalid input');
  }
}


//! тернальний оператор ( умова ? ifTrue : ifFalse)

const age = +prompt('how old are you')

// if(age >= 18){
//   console.log('можна голосувати');
// }else{
//   console.log('НЕможна голосувати');
// }

//////////////////////////////////////////////////////

age >= 18 ? console.log('можна голосувати') : console.log('НЕможна голосувати') 
