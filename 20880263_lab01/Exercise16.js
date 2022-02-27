function S_2 (n){
    let s = 0;
    for (let i=1;i<=n;i++){
        s += i;
    }
    return s;
}
function S(x, n){
    let S = 0;
    for (let i=1;i<=n;i++){
        S += (x*i)/S_2(i);
    }
    return S;
}
console.log("ket qua la ", S(2, 3));