let a =[0, 20, 30, 20, 50, 10, 40, 50, 100]
function tim_phan_tu_duy_nhat (){
    let b =[]
    for (let i =0;i<a.length;i++){
        b[i]=0;
    }
    for (let i =0;i<a.length;i++){
        for (let j=i+1;j<a.length;j++){
            if (a[i]==a[j] && b[i]!=1){
                b[i]=1;
                b[j]=1;
            }
        }
    }
    for (let i =0;i<a.length;i++){
        if (b[i]==0){
            console.log(a[i]);
        }
    }

}
tim_phan_tu_duy_nhat()

