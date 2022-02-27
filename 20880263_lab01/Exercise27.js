let a =[1, 1, 2, 2, 3, 3, 3, 2, 4]
function delete_repeat_element (){
    a.sort(function(a, b){return a - b});
    for(let i=0;i<a.length;i++){
        for(let j=i+1;j<a.length;j++){
            if (a[i]==a[j]){
                a.splice(j,1);
                j=i;
            }
        }
        
    }
    return a;
}
console.log(delete_repeat_element());