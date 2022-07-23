// Egyes 
{
    let lineCount = 12;
    const asterisk = '*';
    const space = ' ';
    let i,j=0;
    for (i = 1, j = lineCount + 2; i <= lineCount; i++, j--) {
        if (i % 2 != 0) {
            console.log(space.repeat(j/2) + asterisk.repeat(i));
        }
    }
    console.log("i= " + i + " j= " + j);
}

// Kettes feladat
{

}
