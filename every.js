let arr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14];
let jkl=arr.filter(function (el){
    return el%2==0;
})
console.log(jkl);
let abc=jkl.every(function (el){
    return el%2==0;
})
console.log(abc);