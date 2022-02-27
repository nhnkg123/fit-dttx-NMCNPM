let a=[1, 2, 4, 5, 6];
let b=[];
function find (x){
    for(let i=0; i<a.length;i++){
        if (a[i] == x){
            console.log("Tim thay ", x, "o vi tri ", i);
            return true;
        }           
    }
    console.log("khong tim thay ", x);
    return false;
}
function add (x){
    if (find(x)==false){
        for(let i=0;i<a.length;i++)
        {
            if(a[i]<x){
                b.push(a[i]);
            }
        }
        b.push(x);
        for(let i=0;i<a.length;i++)
        {
            if(a[i]>x){
                b.push(a[i]);
            }
        }
        return b;
    }else{
        console.log(x, "da tim thay trong mang");
    }
}
console.log(add(21));