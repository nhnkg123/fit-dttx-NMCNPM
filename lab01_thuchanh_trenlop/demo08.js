/**
 * Định nghĩa hàm (function) trong ES
 */
//Định nghĩa hàm cộng --> Truyền tham trị (pass by value)/truyền giá trị
function Cong (a, b)
{
    let c = a+b;
    return c;
}

let a = 1;
let b = 2;
let c = Cong(a, b);
console.log(c);

let d = Cong('8', 9);
console.log(d);

//Định nghĩa hàm tằn gấp đôi --> Truyền tham chiếu(pass by reference) -->Object
function Nhandoi(x)
{
    x = x*2;
}


