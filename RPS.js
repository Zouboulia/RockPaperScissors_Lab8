//create function startGame which is triggered by onClick method assigned to button "play"
function startGame() {
    //declaring variable computer and assigning to it a math.random method which will randomly pick a number between 0 and 1. multiply by 3 and add 1 so it picks numbers between 1 and 3. Then parseInt so it doesn't return a float (with decimals)
    computer = parseInt((Math.random() *3) +1); 

    console.log(computer); //logging the result so I can test that my function works by checking the logs
  
    userChoice = prompt("Enter your choice, Rock=1, Paper=2, Scissors=3"); //prompt user for input and store in variable "userChoice"


    //if user enters something that is not a number:
    if(isNaN(userChoice)){
        result ="Please enter a number"
    }
    //if user enters a number smaller than 1 or bigger than 3:
    else if (userChoice < 1 || userChoice > 3){
        result = "Invalid input. Please enter a number between 1 and 3: 1 = rock, 2 = paper and 3=scissors"
    }
    //if statements based on rules of the game (1 = rock, 2 = paper and 3=scissors):
    else if(userChoice == computer){
        result = "draw!";
    }
    else if(userChoice==1){
        if(computer ==2){
            result="You lost!"; 
        }
        else if(computer ==3){
            result ="You Won!";
        }
    }
    else if(userChoice == 2){
        if(computer == 1){
            result = "you won";
        }
        else if(computer == 3){
            result = "you lost";
        }
    }
    else if(userChoice == 3){
        if(computer == 1){
            result = "you lost";
        }
        else if(computer == 2){
            result = "you won";
        }
    }
 
    //printing the result on the page in the h2 placeholder
    document.getElementById('result').innerHTML=result;
  }