function matrix (m, n){
    if (m==0 || n==0){
        console.log("ma tran khong ton tai");
    }else{
        let matrix_arr = new Array(m);
        for (let i=0; i<m; i++){
            matrix_arr[i] = new Array (n);
            for (let j=0; j<n;j++){
                matrix_arr[i][j] = Math.floor(Math.random()*11);
            }
        }
        return matrix_arr;
    }   
}
console.log(matrix(3,3));
console.log ("-------------------------------------------")
console.log("Find max");
function max (matrix){
    let max = matrix[0][0];
    for (let i=0; i<matrix.length; i++){
        for (let j=0; j<matrix[i].length;j++){
            if (matrix[i][j] > max){
                max = matrix[i][j];
            }
        }
    }
    return max;
}
let matrix_new = matrix(3, 3)
console.log(matrix_new);
console.log(max(matrix_new));
console.log ("-------------------------------------------")
console.log("Find min");
function min (matrix){
    let min = matrix[0][0];
    for (let i=0; i<matrix.length; i++){
        for (let j=0; j<matrix[i].length;j++){
            if (matrix[i][j] < min){
                min = matrix[i][j];
            }
        }
    }
    return min;
}
let matrix_new2 = matrix(3, 3)
console.log(matrix_new2);
console.log(min(matrix_new2));
console.log ("-------------------------------------------")
console.log("Find k position");
function find(matrix, k){
    let m = -1;
    let n = -1;
    for (let i=0; i<matrix.length; i++){
        for (let j=0; j<matrix[i].length;j++){
            if (matrix[i][j] == k){
                m = i;
                n = j;
            }
        }
    }
    if(n!=-1 && n!=-1){
        console.log("vi tri cua k o dong ",m,"cot ",n);
        return m,n;
    }else{
        console.log("khong tim thay k");
        return m,n;
    }

}
let matrix_new3 = matrix(3, 3)
console.log(matrix_new3);
find(matrix_new3, 7);


