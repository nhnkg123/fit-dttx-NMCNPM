function S(n){
    let s=0;
    for (let i=1;i<=n;i++){
        s+=i;
    }
    if (n<=3 || n>=50)
    {
        console.log("nhap lai 3 < n va n < 50");
    }else{
        console.log("Ket qua S(n) = ", s);
    }    
}
S(2);

