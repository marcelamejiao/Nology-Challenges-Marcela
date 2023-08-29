2 == '2'; // true because it is comparing only the value 2 
2 === 2; // true same value and type number
2 === '2'; // false, because is compairing value 2 and type: string vs number
console.log('2' + 3 == 23); // true 23 convert to a string
console.log('2' + 3 === 5); //false 23 is not equal 5 
console.log(10 % 3); // modulus 1
console.log(10 % 3 === 1); //true
console.log((100 % 7) % 5); // 2, because  100/7 = 14 and reminder 2, then 2 % 5 = 2
console.log((100 % 7) % 5 !== 0); // true, because it is equal to 2.
console.log((100 % 7) % 9 == 2);// true, it is equal to 2
console.log(!(10 % 2)); //true, because 0 == false, then !false == true.
console.log(!!!!((10 % 7) % 3)); // false
console.log(10 % 3 === -1 % 2); //false, because 1 it is not equal to -1 
console.log((892783 != '89278' + 3) == 0); //892783 != 892783 false == 0 is equals to true, because 0 is false in JS. 
console.log(true && false); //false
console.log(false || true); // true
console.log(true || false); //true
console.log(true || false); //true
console.log(true || false + true); // true, because true || 0 + 1 
console.log(true * false && false + true); // true * false = 1 * 0 = 0 && 0 + 1 = 1, then 0 && 1 == false; ?? why does it says 0 in the console instead of false
console.log(10 && 123 && -1 && 3); // 3, because returns the value of the last operand if they are all truthy.
console.log(10 && 123 && 0 && 3); // 0 because the && operator returns the value of the first falsy.
console.log((10 && (123 || '') && parseInt('Roisin')) || 23 / 23 - 1); //10 && NaN || 0 // NaN || 0 == 0 , because it returns the last falsy when all are false;
console.log(3 && 'Calum' && ('' || 26)); // 3 && 'Calum' && 26 == 26  because returns the value of the last operand if they are all truthy.
console.log(3 && 'Remi' && (null || 86 * 0 || ('' + 1 && 'Cat' + 'Dog'))); // null || 0 ||'CatDog' == 'CatDog' // 3 && 'Remi' && 'CatDog' == 'CatDog'
