let a ="blue";
function check_char (){
    for(let i =0;i<a.length;i++){
        for(let j =i+1;j<a.length;j++){
            if (a[i] == a[j]){
                return false;
            }
        }
    }
    return true;
}
console.log("ket qua la ", check_char());