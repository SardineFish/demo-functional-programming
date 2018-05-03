function loop(n)
{
    for (let i = 0; i < n; i++)
    {
        console.log(i);
    }
}
loop(10);
function recursion(i, n)
{
    if (i == n)
        return;
    console.log(i);
    return recursion(i + 1, n);
}
recursion(0, 10);