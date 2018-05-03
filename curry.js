const f = x => y =>
{
    if (x % y == 0)
        return y;
    return f(y)(x % y);
}
console.log(f(60)(48));