function S(n){
    let s = 0;
    for (let i=1;i<=n;i++)
    {
        s += i*i;
    }
    if (n<5 || n>20){
        console.log ("nhap lai 5<=n va n<=20");
    }
    else{
        console.log("ket qua la ", s);
    }
}
S(6);