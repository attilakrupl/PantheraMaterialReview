'use strict';

// What is Armstrong number?
// An Armstrong number is an n-digit number which is equal to the sum of the nth powers of its digits.

// Let's demonstrate this for a 4-digit number: 1634 is a 4-digit number, raise each digit to the fourth power and add: 1^4 + 6^4 + 3^4 + 4^4 = 1634, so it is an Armstrong number.
// For a 3-digit number: 153 is a 3-digit number, raise each digit to the third power and add: 1^3 + 5^3 + 3^3 = 153, so it is an Armstrong number.
// Exercise
// Write a function isArmstrongNumber (Java, JavaScript, TypeScript, c++) / IsArmstrongNumber (C#) / is_armstrong_number (python) to check if a given number is an Armstrong number. Your program should ask for a number and print a message saying whether or not the entered number is an Armstrong number.

// Input / Output
// Please enter a number to check:
// > 9926315
// 9926315 is an Armstrong number
// Please enter a number to check:
// > 131072
// 131072 is not an Armstrong number

// "Please enter a number to check:
// > number

function isArmstrongNumber(input:number):boolean
{
    const numberAsString: string = input.toString();
    const numberStringLength = numberAsString.length;

    let sum:number = 0;
    for(let charIndex = 0; charIndex < numberStringLength; ++charIndex)
    {
        const character:string = numberAsString[charIndex];
        const power:number = Math.pow(parseInt(character), numberStringLength);
        sum+=power;
    }

    return sum===input;
}

function testArmstrong(myNum:number):void
{
    if (isArmstrongNumber(myNum)){
        console.log(`${myNum} is an Armstrong number`);
    }
    else {
        console.log(`${myNum} is not an Armstrong number`);
    }    
}

testArmstrong(9926315);
testArmstrong(131072);
testArmstrong(1634);
testArmstrong(153);
