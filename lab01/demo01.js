/**
 * Khai báo biến trong Javascript -> ECMA Script (ES)
 */

console.log("Hello world!!!");

//Khai báo hằng số
const a = 100;
console.log ("const a =", a);

//Khai báo biến toàn cục và cục bộ trong code block
let b = 10;
var c =1;
console.log("let b =", b);
console.log("var c =", c);

//Kiểm tra sự khác nhau giữa 3 keyword const, var, let  
// a=99; //Error vì không thể thay đổi giá trị của hằng số a

b = 999;
c = 888;
console.log("let b =", b);
console.log("var c =", c);
// --> let, var cho thay đổi giá trị bình thường

flag = true;
if (flag == true)
{
    console.log ("a =", a);
    console.log ("b =", b);
    console.log ("c =", c);

    const d = 777;  //-> hằng số, cục bộ trong 1 code block 
    let e = 666;    //-> cục bộ trong 1 code block 
    var f = 555;    //-> biến toàn cục trong 1 file
    console.log ("d =", d);
    console.log ("e =", e);
    console.log ("f =", f);
}
// d, e báo lỗi --> f khai báo var là biến toàn cục khai báo trong code block ra ngoài vẫn xài được
//console.log ("d =", d);
//console.log ("e =", e);
console.log ("f =", f);

