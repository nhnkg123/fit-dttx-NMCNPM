let a =["cat", "flag", "green", "country", "w3resource"]
function find_max_lenght (){
    let max_lenght =0;
    for(let i=0;i<a.length;i++){
        if (a[i].length > max_lenght){
            max_lenght=a[i].length;
        }   
    }
    for(let i=0;i<a.length;i++){
        if(a[i].length == max_lenght){
            console.log(a[i]);
        }
    }
}
find_max_lenght();
