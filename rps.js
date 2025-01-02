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
    do 
    {let human = Number(prompt("Please input your choice:\n 0:Rock, 1:Paper, 2:Scissors"));}
    while (isNaN(human) || human>2 ||human<0);
    switch(human)
    {
        case 0: return 0;
        case 1: return 1;
        case 2: return 2;
    }
}

