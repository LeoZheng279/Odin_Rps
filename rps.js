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


let humanScore = 0;
let computerScore = 0;
let human;
// 事件要创建在外面，否则会在playRound中重复创建
// 自己创建的事件要自己分配给对应的元素
const result = document.querySelector(".result");
const HTMLhumanScore = document.querySelector("#human");
    HTMLhumanScore.addEventListener("end", () =>{
            alert("You won this match!");
            reset();
    })
const HTMLcomputerScore = document.querySelector("#computer");
HTMLcomputerScore.addEventListener("end", () => {
        alert("You lost this match!");
        reset();
    })

function checkEnd(element)
{
    if (humanScore >= 5 || computerScore >= 5){
        const event = new CustomEvent("end");
        element.dispatchEvent(event); // 向具体元素分配事件
    }
}

function reset()
{
    humanScore = 0;
    computerScore = 0;
    result.innerHTML = '';
    HTMLcomputerScore.textContent = 0;
    HTMLhumanScore.textContent = 0;
}

function playRound()
{
    let computer = getcomputerChoice();
    const round = document.createElement("p");
    round.textContent = `${Num2Choice(human)} vs ${Num2Choice(computer)}`;
    result.appendChild(round);
    
    if ((human-computer)==1 || (human-computer)==-2)
    {
        humanScore ++;
        HTMLhumanScore.textContent = humanScore;
        checkEnd(HTMLhumanScore);
    }
    else if (human == computer);
    else
    {
        computerScore++;
        HTMLcomputerScore.textContent = computerScore;
        checkEnd(HTMLcomputerScore);
    }
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

