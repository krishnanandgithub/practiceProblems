let originalNumber = 54748;
let number = originalNumber;
let armstrongNumber = 0;
let numberOfDigits = 0
let powerOfDigits = 1;

while(number >= 1){
    numberOfDigits = numberOfDigits + 1 ;
    number = number - ( number % 10 ) ;
    number = number / 10 ;
}

number = originalNumber;

while(number >= 1){

    for(let i = 1 ; i <= numberOfDigits ; i++) {
       powerOfDigits = powerOfDigits * ( number % 10 ) ;
    }
    armstrongNumber = armstrongNumber + powerOfDigits;
    number = number - ( number % 10 ) ;
    number = number / 10 ;
    powerOfDigits = 1;
}

console.log(armstrongNumber === originalNumber);

