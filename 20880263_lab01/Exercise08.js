function S(n){
    let s = 0;
    for (let i=0;i<=n;i++){
        s += (2*i+1)/(2*i+2);
    }
    if (n <= 5){
        console.log("nhap lai voi n > 5");
    }else{
        console.log("ket qua la ", s);
    }
}
S(6);