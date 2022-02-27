function S(n){
    let s = 0;
    for (let i=0;i<=n;i++){
        s += 1/(2*i+1);
    }
    if (n < 2){
        console.log("nhap lai voi n >= 2");
    }else{
        console.log("ket qua la ", s);
    }
}
S(2);