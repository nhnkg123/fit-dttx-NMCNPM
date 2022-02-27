function S(n){
    let s = 0;
    for (let i=1;i<=n;i++){
        s += 1/i;
    }
    if (n < 7){
        console.log("nhap lai voi n >= 7");
    }else{
        console.log("ket qua la ", s);
    }
}
S(7);