/**
 * Chuyển đổi kiểu dữ liệu cho biến
 */

let number = 100; 
console.log("number =", number);

number = "Hello"; 
console.log("number =", number);  //biến number không cố định sau khi gán lại bằng string 

//Chuyển đổi chuỗi (string) thành số nguyên (interger)
number = parseInt("123");
console.log("(int)numer: ", number);

//Chuyển đổi chuỗi (string) thành float
number = parseFloat("123.45");
console.log("(float)numer: ", number);

