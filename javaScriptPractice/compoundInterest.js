let amount = 0;
let principal = 3000;
let rate = 10;
let time = 2;
let multiplierOfPrincipal = 1;

for(let i = 1; i <= time; i++){
multiplierOfPrincipal = multiplierOfPrincipal * (1 + (rate / 100)) ;
}

amount = principal * multiplierOfPrincipal ;

console.log(amount);