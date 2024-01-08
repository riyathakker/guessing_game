var max = prompt("Enter Maximum number:");
console.log(max);
let random = Math.floor(Math.random() * max)+1;
console.log(random);
var user = prompt("Guess the random number");

while(true){
    if(user== "quit"){
        console.log("Quit");
        break;
    }
    if(user==random){
        console.log("You guessed correctly!!");
        break;
    }
    else if(user > random ){
        user = prompt("Your guess is greater than random number");
    }
    else {
        user = prompt("Your guess is lesser than random number");
    }
  
}
