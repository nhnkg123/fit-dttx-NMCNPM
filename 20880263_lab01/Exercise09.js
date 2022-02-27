function S(n){
    let s = 1;
    for (let i=1;i<=n;i++){
        s *= i;
    }
    if (n <= 6){
        console.log("nhap lai voi n > 6");
    }else{
        console.log("ket qua la ", s);
    }
}
S(7);