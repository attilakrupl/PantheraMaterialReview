export { }

{
    const i1: number = 10;
    const i2: number = 4;

    let firstCondition: boolean = i1 > Math.pow(i2, 2);
    let secondCondition: boolean = i1 < Math.pow(i2, 3);

    console.log(firstCondition);
    console.log(secondCondition);

    console.log(firstCondition && secondCondition);
}
