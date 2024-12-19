let number = 41;
let isPrime = 1;

if( number < 2 ){
  isPrime = 0;
} else {
    for(let i = 2; i <= number / 2; i++ ) {
        if(number % i == 0) {
            isPrime = 0;
            break;
        }
    }
}
console.log(isPrime == 1);