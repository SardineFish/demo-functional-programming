/*const f = (x, y) =>
{
    if (x == y)
        return;    
    if (x % 2 == 0)
        console.log(x);
    f(x + 1, y);
};
f(1, 10);
*/
/*const number = (x) => 
{
    return () => x;
}; 

const add = (f1, f2) =>
{
    return () => f1() + f2();
}

const a = number(10);
const b = number(15);
const result = add(a, b);

console.log(result);
console.log(result());*/

function fp()
{
    /*const number = (x) => () => x;
    const add = (f1, f2) => () => f1() + f2();
    const minus = (f1, f2) => () => f1() - f2();
    const multi = (f1, f2) => () => f1() * f2();
    const sqrt = (f) => () => Math.sqrt(f());


    const result = add(sqrt(number(100)), multi(number(30), number(40)));
    console.log(result());
    console.log(add(number(10), number(15))());*/


    function add(str1, str2)
    {
        return str1 + str2;
    }

    function revert(str, start, end)
    {
        if (start == end)
            return str[start];    
        return revert(str, start + 1, end) + str[start];
    }

    console.log(revert("Hello World!", 0, 11));
}
function ip()
{
    /*const number = function (x)
    {
        return x;
    }

    const add = function (x, y)
    {
        return x + y;
    }*/

    function add(str1, str2)
    {
        return str1 + str2;
    }

    function revert(str, start, end)
    {
        var newStr = "";
        for (var i = end; i >= start; i--)
        {
            newStr = newStr + str[i];
        }    
        return newStr;
    }
    console.log(revert("Hello World!", 0, 11));
}
ip();
fp();
