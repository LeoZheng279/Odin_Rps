function getcomputerChoice()
{
    let rand = (Math.random())*3;
    if(rand>=0 && rand <1)
        return 0;
    else if (rand>=1 && rand <2)
        return 1;
    else return 2;
}

function getHumanChoice()
{
    while(1)
    {
        let human = (prompt("Please input your choice:(Rock, Paper or Scissors)")).toLowerCase();
        if (human == 'rock')
            return 0;
        else if (human == 'paper')
            return 1;
        else if (human == 'scissors')
            return 2;
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound()
{
    let human = getHumanChoice();
    console.log("Your choice: "+human);
    let computer = getcomputerChoice();
    console.log("PC's choice: "+computer);
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
}

for (let i = 0; i<5; i++)
{
    playRound();
}

if(humanScore>computerScore)
    console.log("\nYou won "+humanScore+" rounds. You won this match!");
else if(humanScore>computerScore)
    console.log("\nYou won "+humanScore+" rounds. You lost this match!");
else console.log("\nTie!");