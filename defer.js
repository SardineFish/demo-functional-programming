const n = x => () => x;
const add = (f1, f2) => () => f1() + f2();
const multi = (f1, f2) => () => f1() * f2();

const result =
    add(
        multi(n(1), n(2)),
        multi(n(3), n(4))
    );

console.log(result());

/*
function fullver()
{
    function n(x)
    {
        return function ()
        {
            return x;
        }
    }

    function add(f1, f2)
    {
        return function ()
        {
            return f1() + f2();
        }
    }

    function multi(f1, f2)
    {
        return function ()
        {
            return f1() * f2();
        }
    }

    const result =
        add(
            multi(n(1), n(2)),
            multi(n(3), n(4))
        );

    console.log(result());
}
fullver();
*/