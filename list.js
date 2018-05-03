const list = (n) =>
{
    const f = (i, n, callback) =>
    {
        if (i > n)
            return;
        callback(i);
        f(i + 1, n, callback);
    };
    return { forEach: func => f(0, n, func) };
};

const numbers = list(Number.MAX_SAFE_INTEGER);

numbers.forEach((i) =>
{
    console.log(i);
});