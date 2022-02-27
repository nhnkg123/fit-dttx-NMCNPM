function S(n){
    let s = 0;
    for (let i=1;i<=n;i++){
        s += 1/(2*i);
    }
    if (n <= 9){
        console.log("nhap lai voi n > 9");
    }else{
        console.log("ket qua la ", s);
    }
}
S(10);