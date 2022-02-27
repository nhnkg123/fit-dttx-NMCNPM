function S(n){
    let S = 1;
    for(let i=1;i<=n;i++){
        S *= i;
    }
    return S;
}
console.log ("ket qua la ", S(4));