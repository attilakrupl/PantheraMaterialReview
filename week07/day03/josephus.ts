'use strict';

function getWinningSeat(numberOfPlayers:number):number
{
    let players:number[]=[];
    for(let playerNumber = 1; playerNumber<=numberOfPlayers;++playerNumber)
    {
        players.push(playerNumber);
    }

    let playerToDieIndex = 1;
    while(players.length!=1)
    {
        players.splice(playerToDieIndex,1);
        playerToDieIndex = (playerToDieIndex + 1) % players.length;
    }

    return players[0];
}

function testJosephus(numberOfPlayers:number, expectedOutput:number):void
{
    const result = getWinningSeat(numberOfPlayers);
    if(result===expectedOutput)
    {
        console.log(`RIGHT! The winning seat is ${result}`);
    }
    else
    {
        console.log(`Ohhh Boy, you're so wrong!!! The winning seat is not ${result}, but ${expectedOutput}`);
    }
}

testJosephus(1,1);
testJosephus(2,1);
testJosephus(3,3);
testJosephus(7,7);
testJosephus(12,9);
testJosephus(41,19);
