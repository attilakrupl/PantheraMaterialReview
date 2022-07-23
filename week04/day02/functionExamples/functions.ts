export { }

// -- MISC --

// () - parentheses
// [] - brackets
// {} - curly braces 
// arguments keyword - it denotes the argument description of the function 

// ----------------------------------------------------------------

// -- Purpose --  

// reuseability, reduce code duplication
// the concept of Abstraction is to hide the implementation details and highlight an object's essential features to the users.

// ----------------------------------------------------------------

// -- Simple function -- 

// function - keyword for defining a function/method
// A parameter is a variable in a function definition. It is a placeholder and hence does not have a concrete value.
// An argument is a value passed during function invocation.

function multiply(a:number, b:number)
{
	return a*b;
}

//console.log(multiply(2,3));       

// ----------------------------------------------------------------

// -- Function as variable --

let doCodingJob = function (times: number){
    for(let i = 0; i < times; ++i)
    {
        let ending = (i == 0) ? "" : "s";
        console.log("I've done " + (i+1) + " coding job" + ending + ".");
    }
};

// doCodingJob(5);

// ----------------------------------------------------------------

// -- Function as parameter --

let doDirtyJob = function (times: number){
    for(let j = 0; j < times; ++j)
    {
        let ending = (j == 0) ? "" : "s";
        console.log("I've done " + (j+1) + " dirty job" + ending + ".");
    }
};

function handoutJob(times: number, worker: (times:number) => void)
{
    worker(times);
}

// handoutJob(5,doCodingJob);
// handoutJob(6,doDirtyJob);

// ----------------------------------------------------------------

// -- Anonymus function --
// no name between function keyword and parentheses
// can be assigned to a variable or added as function argument to another function

//setTimeout(function () { console.log("Hi Folks!"); }, 3000);

// ----------------------------------------------------------------

// -- Global Functions --

parseFloat(10);
parseFloat("10");
parseFloat("10.33");
parseFloat("34 45 66");
parseFloat("He was 40");

// ----------------------------------------------------------------

// -- Complicated stuff: pass-by-reference vs pass-by-value -- 

function multiplyList(numbers:number[])
{
    for(var i = 0; i < numbers.length; ++i)
    {
        numbers[i]*=2;
    }
}

// {
//     let myNumbers = [1,2,3,4,5];
//     console.log(myNumbers);
//     multiplyList(myNumbers);
//     console.log(myNumbers);
// }