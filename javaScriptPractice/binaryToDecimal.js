let originalBinary = 1110111;
let tempBinary = originalBinary;
let number = 0;
let numberOfDigits = 0;
let powerOfTwo = 1;

while(tempBinary >= 1){
    numberOfDigits = numberOfDigits + 1;
    tempBinary = tempBinary - ( tempBinary % 10 );
    tempBinary = tempBinary / 10 ;
}

tempBinary = originalBinary ;

for(let i = 0; i < numberOfDigits; i++){

    for(let j = 1; j <= i; j++){
        powerOfTwo = powerOfTwo * 2 ;
    }
    
    number = number + (tempBinary % 10) * powerOfTwo ;
    tempBinary = tempBinary - (tempBinary % 10) ;
    tempBinary = tempBinary / 10 ;
    powerOfTwo = 1 ;
}

console.log(number) ;




