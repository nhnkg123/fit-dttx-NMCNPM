/**
 * Arow function
 */

// Ham truyen thong
function SayHello()
{
    console.log("Hello world");
}
SayHello();
// Cai tien ham truyen thong -> Gan ham cho mot doi tuong(con tro ham)
const SayHi = function(){
    console.log("Hi everybody");
}

SayHi();

//Dinh nghia ham mui ten (Arrow function)
const Saywelcome = () => {
    console.log("welcome to Intruduce Software Engineering");
}

Saywelcome();

console.log("--------------------------");

const Sum = (a, b) => a+b;
console.log(Sum(4,5));

const double = a => a*2;  // bỏ ngoặc nếu chỉ có 1 para a
console.log(double(4));