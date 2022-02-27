let a =[-2, 1, -3, 4, -1, 2, 1, -5, 4]
let b=[]
let sum =0;
let max_sum = 0;
for (let i=0;i<a.length;i++){
    sum += a[i];
    if (sum < 0)
    {
        sum = 0;
    }
    else{
        
        if (sum > max_sum){
            max_sum = sum;
        }
    }
}
console.log ("Tong lon nhat la ",max_sum);

let x = 0;
let y = 0;
for (let i=0;i<a.length;i++){
    let s=a[i];
    for (let j=i+1;j<a.length;j++){
        s+=a[j];
        if (s == max_sum ){
            x=i;
            y=j;
            break;
        }
        if(a[i]==max_sum){
            x=i;
            y=i;
            break;
        }

    }
}
for (let i=x;i<=y;i++){
    b.push(a[i]);
}
console.log("Mang co tong lon nhat la: ");
console.log(b);


