let number = 62345;
let reverseNumber = 0;

while( number >= 1 ){
  reverseNumber = 10 * reverseNumber + ( number % 10 ) ;
  number = number - (number % 10)
  number = number / 10 ;
}

console.log(reverseNumber);