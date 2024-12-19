let number = 2;
let factorCount = 0;

for(let i = 1; i <= number / 2; i++ ) {
    if(number % i == 0) {
        factorCount++;
    }
}

console.log(factorCount == 1);