function Num2Choice(num)
{
    if(num === 0) return "rock";
    else if (num === 1 ) return "paper";
    else return "scissors";
}

function getcomputerChoice()
{
    let rand = (Math.random())*3;
    if(rand>=0 && rand <1)
        return 0;
    else if (rand>=1 && rand <2)
        return 1;
    else return 2;
}

// function getHumanChoice()
// {
//     while(1)
//     {
//         let human = (prompt("Please input your choice:(Rock, Paper or Scissors)")).toLowerCase();
//         if (human == 'rock')
//             return 0;
//         else if (human == 'paper')
//             return 1;
//         else if (human == 'scissors')
//             return 2;
//     }
// }

let humanScore = 0;
let computerScore = 0;
let human;

function playRound()
{
    console.log("Your choice: "+Num2Choice(human));
    let computer = getcomputerChoice();
    console.log("PC's choice: "+Num2Choice(computer));
    if ((human-computer)==1 || (human-computer)==-2)
    {
        console.log("You win!");
        humanScore ++;
    }
    else if (human == computer)
    {
        console.log("Tie!");
    }
    else
    {
        console.log("You lose!")
        computerScore++;
    }
    if(humanScore===5)
        console.log("\nYou won "+humanScore+" rounds. You won this match!");
    else if(computerScore===5)
        console.log("\nYou won "+humanScore+" rounds. You lost this match!");
}


const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", () =>{
        if (button.id === "rock")
            human = 0;
        else if (button.id === "paper")
            human = 1;
        else 
            human = 2;
    });
    button.addEventListener("click", playRound);
})

