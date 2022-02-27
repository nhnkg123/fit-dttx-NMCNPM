function T(x, n){
    let t = 0;
    for (let i=1;i<=n;i++){
        t += Math.pow(x, 2*i);
    }
    return t;
}
console.log ("ket qua la ", T(2,3));