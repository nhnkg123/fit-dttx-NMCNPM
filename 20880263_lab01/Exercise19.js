function giaithua (n){
    let T = 1;
    for (let i=1;i<=n;i++){
        T *= i;
    }
    return T;
}
function S(x, n){
    let S = 1;
    for (let i=1;i<=n;i++){
        S += (x*2*i)/giaithua(2*i);
    }
    return S;
}
console.log("ket qua la ", S(2, 2));