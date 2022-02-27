function S(n){
    let s = 0;
    for (let i=1;i<=n;i++){
        s += i/(i+1);
    }
    if (n < 1){
        console.log("nhap lai voi n >= 1");
    }else{
        console.log("ket qua la ", s);
    }
}
S(2);