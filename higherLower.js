let max = Math.round ((window.prompt("What would you like the maximum number to be?")))

while(max <= 0 || typeof NaN){
    if (max > 0) break;
    console.clear(max)
    max = Math.round (window.prompt("Invalid entry, please enter a positive number"))
} 
    console.log(max);
    document.getElementById('output').innerHTML = max;
    oldmax=max
    console.log(max = Math.floor(Math.random() * max) + 1);
    
    let count = 0;
    let Arrayguess = [];


function do_guess(){
    let guess = Number(document.getElementById("guess").value);

    let message = document.getElementById("message");

    if(guess == max){
        count ++;
        if (Arrayguess.includes(guess) == false)Arrayguess.push(guess)
        message.innerHTML = "You got it! It took you " + Arrayguess.length + " tries! Your guesses were " + Arrayguess;
    }
    else if (guess > max && guess <= oldmax){
        message.innerHTML = "No, try a lower number";
        count++;
        if(Arrayguess.includes(guess) == false)Arrayguess.push(guess)
        else message.innerHTML = "Try again, this number has been guessed!"
    }
    else if (guess < max && guess > 0){
        message.innerHTML = "No, try a higher number.";
        count++;
        if (Arrayguess.includes(guess) == false)Arrayguess.push(guess)
        else message.innerHTML = "Try again, this number has been guessed!"
    }
    else if (guess <= 0 || guess > oldmax){
        message.innerHTML = "That number is not in range, try again ";
    }
    else{
        message.innerHTML ="That is not a number!";
    }
}
