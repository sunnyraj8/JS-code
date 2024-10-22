let arr=["pen","notebook","Laptop","charger","keyboard","Mouse","Apple"];
function concat(arr){
    let con="";
    for(i=0;i<arr.length;i++){
        con=con+arr[i];
    }
    return con;
}
console.log(concat(arr));