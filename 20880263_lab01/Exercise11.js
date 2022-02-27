function giaithua (n){
    let T = 1;
    for (let i=1;i<=n;i++){
        T *= i;
    }
    return T;
}
function S(n){
    let S = 0;
    for (let i=1;i<=n;i++){
        S += giaithua(i);
    }
    return S;
}
console.log("ket qua la ", S(4));