const prompt = requier('prompt-sync')({signit: true});




let arr = Number(['Apple', 'Banana', 'Apricot', 'Cherry', 'Avocado'])
let arrNum = 0;
for(i = 0; i < arr.length; i++ ){
    arrNum += arr[i];  
}
console.log(arrNum);